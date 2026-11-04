import React, { useState, useEffect } from 'react';
import { X, HeartHandshake, Users, Building2, CheckCircle2, ShieldCheck, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';

export default function DonationModal({ isOpen, onClose, initialTab = 'donor' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mockRequestId, setMockRequestId] = useState('FB-4892');

  // Form State for Food Donation
  const [donorForm, setDonorForm] = useState({
    donorName: '',
    donorType: 'Restaurant',
    foodType: 'Prepared Hot Meals',
    quantity: '',
    safeWindow: 'Within 2-3 hours',
    location: '',
    contactPerson: '',
    contactPhone: '',
    contactEmail: '',
    dietaryNotes: '',
    agreeSafety: true,
  });

  // Form State for Volunteer
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    phone: '',
    vehicleType: 'Bicycle / Cargo Bike',
    neighborhood: '',
    availability: 'Evenings (6 PM - 9 PM)',
  });

  // Form State for NGO
  const [ngoForm, setNgoForm] = useState({
    orgName: '',
    registrationNumber: '',
    directorName: '',
    phone: '',
    serviceCapacity: '50-100 meals/day',
    intakeAddress: '',
  });

  const [errors, setErrors] = useState({});

  // Body Scroll Lock when Modal is Active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateDonorForm = () => {
    const newErrors = {};
    if (!donorForm.donorName.trim()) {
      newErrors.donorName = 'Donor or organization name is required.';
    }
    if (!donorForm.quantity.trim()) {
      newErrors.quantity = 'Please specify approximate quantity or portion count.';
    }
    if (!donorForm.location.trim()) {
      newErrors.location = 'Pickup address / neighborhood is required.';
    }
    if (!donorForm.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required.';
    }
    if (!donorForm.contactPhone.trim() && !donorForm.contactEmail.trim()) {
      newErrors.contact = 'Please provide at least a phone number or email address.';
    }
    if (!donorForm.agreeSafety) {
      newErrors.agreeSafety = 'Please confirm compliance with safe food handling standards.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVolunteerForm = () => {
    const newErrors = {};
    if (!volunteerForm.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!volunteerForm.phone.trim()) newErrors.phone = 'Contact phone number is required.';
    if (!volunteerForm.neighborhood.trim()) newErrors.neighborhood = 'Neighborhood area is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateNgoForm = () => {
    const newErrors = {};
    if (!ngoForm.orgName.trim()) newErrors.orgName = 'Organization / pantry name is required.';
    if (!ngoForm.intakeAddress.trim()) newErrors.intakeAddress = 'Delivery/Intake address is required.';
    if (!ngoForm.phone.trim()) newErrors.phone = 'Contact phone number is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = false;
    if (activeTab === 'donor') isValid = validateDonorForm();
    if (activeTab === 'volunteer') isValid = validateVolunteerForm();
    if (activeTab === 'partner') isValid = validateNgoForm();

    if (!isValid) return;

    setIsSubmitting(true);
    const newId = `FB-${Math.floor(1000 + Math.random() * 9000)}`;
    setMockRequestId(newId);

    // Simulate brief processing animation (1 second)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dark frosted backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#173D2B]/80 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl bg-[#F7F3E9] rounded-3xl shadow-2xl border border-[#173D2B]/15 overflow-hidden z-10 my-8">
        
        {/* Modal Header */}
        <div className="bg-[#173D2B] text-[#F7F3E9] p-6 sm:p-7 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#21543b] text-[#E7A64B] flex items-center justify-center shadow-inner">
                {activeTab === 'donor' && <HeartHandshake className="w-5 h-5" />}
                {activeTab === 'volunteer' && <Users className="w-5 h-5" />}
                {activeTab === 'partner' && <Building2 className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E7A64B]">
                  FoodBridge Interactive Engagement
                </span>
                <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold">
                  {activeTab === 'donor' && 'Donate Surplus Food'}
                  {activeTab === 'volunteer' && 'Join as Volunteer Courier'}
                  {activeTab === 'partner' && 'NGO Kitchen Partnership'}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-9 h-9 rounded-full bg-[#21543b] hover:bg-[#E7A64B] hover:text-[#173D2B] text-[#F7F3E9] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Bar Selector */}
          <div className="flex space-x-2 mt-6 pt-4 border-t border-[#DDE9D8]/15" role="tablist">
            {[
              { id: 'donor', label: 'Offer Surplus', icon: HeartHandshake },
              { id: 'volunteer', label: 'Volunteer Courier', icon: Users },
              { id: 'partner', label: 'NGO Kitchen', icon: Building2 },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsSubmitted(false);
                    setErrors({});
                  }}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E7A64B] text-[#173D2B] shadow-sm'
                      : 'bg-[#21543b]/80 text-[#DDE9D8] hover:bg-[#21543b]'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Body: Submitted Demo Confirmation View OR Form */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Clear Demo Confirmation Screen */
            <div className="py-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#DDE9D8] text-[#173D2B] mx-auto flex items-center justify-center mb-4 shadow-sm border border-[#173D2B]/20">
                <CheckCircle2 className="w-9 h-9 text-[#173D2B]" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E7A64B] text-[#173D2B] mb-2">
                Simulated Demonstration Notice
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#173D2B] mb-3">
                Demo Submission Received!
              </h4>

              <p className="text-sm text-[#252A25]/80 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you for testing the FoodBridge interface. In a production environment, this request triggers instant geo-proximity matching with vetted recipient kitchens.
              </p>

              {/* Summary of What Was Entered */}
              <div className="bg-[#DDE9D8]/50 rounded-2xl p-5 text-left mb-6 border border-[#173D2B]/15 text-xs sm:text-sm space-y-2">
                <div className="font-bold text-[#173D2B] border-b border-[#173D2B]/10 pb-2 mb-2 flex items-center justify-between">
                  <span>Logged Request Summary:</span>
                  <span className="font-mono text-xs uppercase bg-[#173D2B] text-[#E7A64B] px-2 py-0.5 rounded">
                    Mock ID: {mockRequestId}
                  </span>
                </div>

                {activeTab === 'donor' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Donor Entity:</span>
                      <strong className="text-[#173D2B]">{donorForm.donorName} ({donorForm.donorType})</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Food Category:</span>
                      <strong className="text-[#173D2B]">{donorForm.foodType}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Quantity / Portions:</span>
                      <strong className="text-[#173D2B]">{donorForm.quantity}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Pickup Address:</span>
                      <strong className="text-[#173D2B]">{donorForm.location}</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#252A25]/70">Contact:</span>
                      <strong className="text-[#173D2B]">{donorForm.contactPerson} ({donorForm.contactPhone || donorForm.contactEmail})</strong>
                    </div>
                  </>
                )}

                {activeTab === 'volunteer' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Volunteer Name:</span>
                      <strong className="text-[#173D2B]">{volunteerForm.fullName}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Transport Mode:</span>
                      <strong className="text-[#173D2B]">{volunteerForm.vehicleType}</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#252A25]/70">Area / Neighborhood:</span>
                      <strong className="text-[#173D2B]">{volunteerForm.neighborhood}</strong>
                    </div>
                  </>
                )}

                {activeTab === 'partner' && (
                  <>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">NGO Name:</span>
                      <strong className="text-[#173D2B]">{ngoForm.orgName}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#173D2B]/5">
                      <span className="text-[#252A25]/70">Intake Capacity:</span>
                      <strong className="text-[#173D2B]">{ngoForm.serviceCapacity}</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#252A25]/70">Intake Location:</span>
                      <strong className="text-[#173D2B]">{ngoForm.intakeAddress}</strong>
                    </div>
                  </>
                )}
              </div>

              {/* Explicit Rule Disclaimer: No backend pretend */}
              <div className="bg-[#E7A64B]/15 border border-[#E7A64B]/40 rounded-xl p-3.5 text-xs text-[#173D2B] mb-6">
                <strong>Showcase Disclosure:</strong> As per competition rules, this is a purely client-side simulation. No database records were written, no email dispatches occurred, and no commercial courier has been dispatched.
              </div>

              {/* Confirmation Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#DDE9D8] text-[#173D2B] border border-[#173D2B]/30 px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Test Another Entry</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#173D2B] hover:bg-[#21543b] text-[#F7F3E9] px-7 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Active Form Inputs */
            <form onSubmit={handleSubmit} noValidate>
              
              {/* TAB 1: DONOR FOOD SURPLUS FORM */}
              {activeTab === 'donor' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Donor Name */}
                    <div>
                      <label htmlFor="donorName" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Donor / Business Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="donorName"
                        type="text"
                        value={donorForm.donorName}
                        onChange={(e) => setDonorForm({ ...donorForm, donorName: e.target.value })}
                        placeholder="e.g. Grand Heritage Bistro, River Hotel"
                        className={`w-full text-sm bg-white border rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 transition-colors ${
                          errors.donorName ? 'border-red-500' : 'border-[#173D2B]/20 focus:border-[#E7A64B]'
                        }`}
                      />
                      {errors.donorName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.donorName}</span>
                        </p>
                      )}
                    </div>

                    {/* Donor Type */}
                    <div>
                      <label htmlFor="donorType" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Donor Category
                      </label>
                      <select
                        id="donorType"
                        value={donorForm.donorType}
                        onChange={(e) => setDonorForm({ ...donorForm, donorType: e.target.value })}
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] focus:border-[#E7A64B]"
                      >
                        <option value="Restaurant">Restaurant / Bistro</option>
                        <option value="Hotel">Hotel / Catering Banquet</option>
                        <option value="Bakery">Artisan Bakery / Cafe</option>
                        <option value="Event">Event / Wedding Organizer</option>
                        <option value="Grocery">Grocery / Produce Market</option>
                        <option value="Household">Household / Community Garden</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Food Type */}
                    <div>
                      <label htmlFor="foodType" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Food Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="foodType"
                        value={donorForm.foodType}
                        onChange={(e) => setDonorForm({ ...donorForm, foodType: e.target.value })}
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] focus:border-[#E7A64B]"
                      >
                        <option value="Prepared Hot Meals">Prepared Hot Meals (Catering trays, soup)</option>
                        <option value="Bakery & Breads">Artisan Breads, Pastries & Bagels</option>
                        <option value="Fresh Produce">Fresh Fruits & Raw Vegetables</option>
                        <option value="Chilled & Dairy">Chilled Goods & Dairy</option>
                        <option value="Packaged Staples">Packaged Dry Goods & Canned Food</option>
                      </select>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Approximate Quantity <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="quantity"
                        type="text"
                        value={donorForm.quantity}
                        onChange={(e) => setDonorForm({ ...donorForm, quantity: e.target.value })}
                        placeholder="e.g. 30 dinner portions, 4 large trays"
                        className={`w-full text-sm bg-white border rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 ${
                          errors.quantity ? 'border-red-500' : 'border-[#173D2B]/20 focus:border-[#E7A64B]'
                        }`}
                      />
                      {errors.quantity && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.quantity}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location & Safe Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Pickup Location / Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={donorForm.location}
                        onChange={(e) => setDonorForm({ ...donorForm, location: e.target.value })}
                        placeholder="e.g. 420 Market St, Downtown Kitchen Door"
                        className={`w-full text-sm bg-white border rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 ${
                          errors.location ? 'border-red-500' : 'border-[#173D2B]/20 focus:border-[#E7A64B]'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.location}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="safeWindow" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Safe Pickup Window
                      </label>
                      <select
                        id="safeWindow"
                        value={donorForm.safeWindow}
                        onChange={(e) => setDonorForm({ ...donorForm, safeWindow: e.target.value })}
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] focus:border-[#E7A64B]"
                      >
                        <option value="Immediate (Next 60 mins)">Immediate (Next 60 mins)</option>
                        <option value="Within 2-3 hours">Within 2-3 hours (Kept hot/cold)</option>
                        <option value="Evening Closing (8 PM - 10 PM)">Evening Closing (8 PM - 10 PM)</option>
                        <option value="Tomorrow Morning">Tomorrow Morning (Properly refrigerated)</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="contactPerson" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Contact Person <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        value={donorForm.contactPerson}
                        onChange={(e) => setDonorForm({ ...donorForm, contactPerson: e.target.value })}
                        placeholder="Head Chef / Manager"
                        className={`w-full text-sm bg-white border rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 ${
                          errors.contactPerson ? 'border-red-500' : 'border-[#173D2B]/20 focus:border-[#E7A64B]'
                        }`}
                      />
                      {errors.contactPerson && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.contactPerson}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Phone Number
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        value={donorForm.contactPhone}
                        onChange={(e) => setDonorForm({ ...donorForm, contactPhone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 focus:border-[#E7A64B]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Email Address
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        value={donorForm.contactEmail}
                        onChange={(e) => setDonorForm({ ...donorForm, contactEmail: e.target.value })}
                        placeholder="kitchen@example.com"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] placeholder-[#252A25]/40 focus:border-[#E7A64B]"
                      />
                    </div>
                  </div>
                  {errors.contact && (
                    <p className="text-[11px] text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.contact}</span>
                    </p>
                  )}

                  {/* Dietary & Packaging Notes */}
                  <div>
                    <label htmlFor="dietaryNotes" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                      Packaging & Dietary Details (Optional)
                    </label>
                    <textarea
                      id="dietaryNotes"
                      rows={2}
                      value={donorForm.dietaryNotes}
                      onChange={(e) => setDonorForm({ ...donorForm, dietaryNotes: e.target.value })}
                      placeholder="e.g. Vegetarian, packed in clean aluminum catering trays with lids, kept in warmer."
                      className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2 text-[#252A25] placeholder-[#252A25]/40 focus:border-[#E7A64B]"
                    />
                  </div>

                  {/* Safety compliance checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-[#252A25]/85">
                      <input
                        type="checkbox"
                        checked={donorForm.agreeSafety}
                        onChange={(e) => setDonorForm({ ...donorForm, agreeSafety: e.target.checked })}
                        className="mt-0.5 rounded text-[#173D2B] focus:ring-[#E7A64B]"
                      />
                      <span>
                        I confirm that food has been stored in sanitary containers within safe temperatures and has not been served on self-serve customer plates.
                      </span>
                    </label>
                    {errors.agreeSafety && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.agreeSafety}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: VOLUNTEER COURIER REGISTRATION */}
              {activeTab === 'volunteer' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="volFullName" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="volFullName"
                        type="text"
                        value={volunteerForm.fullName}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                        placeholder="David Chen"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] focus:border-[#E7A64B]"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="volPhone" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="volPhone"
                        type="tel"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25] focus:border-[#E7A64B]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="volVehicle" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Primary Transportation Mode
                      </label>
                      <select
                        id="volVehicle"
                        value={volunteerForm.vehicleType}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, vehicleType: e.target.value })}
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      >
                        <option value="Bicycle / Cargo Bike">Bicycle / Cargo Bike</option>
                        <option value="Car / Station Wagon">Personal Car / Hatchback</option>
                        <option value="Electric Scooter / Moped">Electric Scooter / Moped</option>
                        <option value="Walking / On Foot">Walking (Neighborhood radius)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="volNeighborhood" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Preferred Neighborhood <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="volNeighborhood"
                        type="text"
                        value={volunteerForm.neighborhood}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, neighborhood: e.target.value })}
                        placeholder="e.g. West End, Downtown, Arts District"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                      {errors.neighborhood && <p className="text-[11px] text-red-600 mt-1">{errors.neighborhood}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volAvailability" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                      Typical Availability
                    </label>
                    <select
                      id="volAvailability"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                    >
                      <option value="Evenings (6 PM - 9 PM)">Evenings (6 PM - 9 PM)</option>
                      <option value="Lunch Windows (1 PM - 3 PM)">Lunch Windows (1 PM - 3 PM)</option>
                      <option value="Weekend Mornings">Weekend Mornings</option>
                      <option value="On-Call Flexible">On-Call Flexible (App Alerts)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* TAB 3: NGO PARTNER REGISTRATION */}
              {activeTab === 'partner' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ngoOrgName" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        NGO / Pantry Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ngoOrgName"
                        type="text"
                        value={ngoForm.orgName}
                        onChange={(e) => setNgoForm({ ...ngoForm, orgName: e.target.value })}
                        placeholder="Hope Harbor Community Kitchen"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                      {errors.orgName && <p className="text-[11px] text-red-600 mt-1">{errors.orgName}</p>}
                    </div>
                    <div>
                      <label htmlFor="ngoRegNumber" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Non-Profit Reg. Number (Optional)
                      </label>
                      <input
                        id="ngoRegNumber"
                        type="text"
                        value={ngoForm.registrationNumber}
                        onChange={(e) => setNgoForm({ ...ngoForm, registrationNumber: e.target.value })}
                        placeholder="e.g. 501(c)(3) or Charity Reg."
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ngoAddress" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Intake Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ngoAddress"
                        type="text"
                        value={ngoForm.intakeAddress}
                        onChange={(e) => setNgoForm({ ...ngoForm, intakeAddress: e.target.value })}
                        placeholder="Center Address for Food Delivery"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                      {errors.intakeAddress && <p className="text-[11px] text-red-600 mt-1">{errors.intakeAddress}</p>}
                    </div>
                    <div>
                      <label htmlFor="ngoCapacity" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Meal Intake Capacity
                      </label>
                      <select
                        id="ngoCapacity"
                        value={ngoForm.serviceCapacity}
                        onChange={(e) => setNgoForm({ ...ngoForm, serviceCapacity: e.target.value })}
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      >
                        <option value="25-50 meals/day">25-50 meals / day</option>
                        <option value="50-100 meals/day">50-100 meals / day</option>
                        <option value="100-300 meals/day">100-300 meals / day (Equipped commercial fridges)</option>
                        <option value="300+ large scale">300+ large scale regional pantry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ngoDirector" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Coordinator / Contact Person
                      </label>
                      <input
                        id="ngoDirector"
                        type="text"
                        value={ngoForm.directorName}
                        onChange={(e) => setNgoForm({ ...ngoForm, directorName: e.target.value })}
                        placeholder="Sister Amara / Priya Nair"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                    </div>
                    <div>
                      <label htmlFor="ngoPhone" className="block text-xs font-bold uppercase tracking-wider text-[#173D2B] mb-1">
                        Contact Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="ngoPhone"
                        type="tel"
                        value={ngoForm.phone}
                        onChange={(e) => setNgoForm({ ...ngoForm, phone: e.target.value })}
                        placeholder="(555) 789-0123"
                        className="w-full text-sm bg-white border border-[#173D2B]/20 rounded-xl px-3.5 py-2.5 text-[#252A25]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit CTA & Clear Demo Tag */}
              <div className="mt-8 pt-5 border-t border-[#173D2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#252A25]/60 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#173D2B]" />
                  <span>Competition Simulation Mode • Zero real backend calls</span>
                </span>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-[#173D2B] hover:bg-[#DDE9D8] rounded-full transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-[#173D2B] hover:bg-[#21543b] text-[#F7F3E9] text-xs font-bold px-7 py-3 rounded-full shadow-md transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#E7A64B]" />
                        <span>Simulating Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E7A64B]" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
