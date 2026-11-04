import React, { useEffect } from 'react';
import { X, ShieldCheck, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { SAFETY_GUIDELINES } from '../data/mockData';

export default function SafetyModal({ isOpen, onClose }) {
  // Body scroll lock
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

  // Handle ESC key
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="safety-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#173D2B]/80 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#F7F3E9] rounded-3xl shadow-2xl border border-[#173D2B]/15 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="bg-[#173D2B] text-[#F7F3E9] p-6 sm:p-7 relative flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#21543b] text-[#E7A64B] flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E7A64B]">
                Protocol & Standards
              </span>
              <h3 id="safety-modal-title" className="font-serif text-xl sm:text-2xl font-bold">
                Food Safety & Handling Guidelines
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full bg-[#21543b] hover:bg-[#E7A64B] hover:text-[#173D2B] text-[#F7F3E9] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Key Rule Box: The 2-Hour Rule */}
          <div className="bg-[#DDE9D8]/60 border border-[#173D2B]/15 rounded-2xl p-5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#173D2B] mb-1">
                The Critical 2-Hour Thermal Rule
              </h4>
              <p className="text-xs sm:text-sm text-[#252A25]/85 leading-relaxed">
                Perishable hot food must either remain held above 60°C (140°F) or be rapidly transferred into cold storage under 4°C (40°F). Our rapid dispatch pairs donations within short radii to ensure zero compromise in temperature integrity.
              </p>
            </div>
          </div>

          {/* Acceptable Items */}
          <div>
            <div className="flex items-center space-x-2 text-sm font-bold text-[#173D2B] uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Acceptable Food Categories</span>
            </div>
            <ul className="space-y-2">
              {SAFETY_GUIDELINES[0].items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#252A25]/85">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Acceptable Items */}
          <div className="pt-4 border-t border-[#173D2B]/10">
            <div className="flex items-center space-x-2 text-sm font-bold text-red-800 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4 text-red-700" />
              <span>Items We Cannot Accept for Rescue</span>
            </div>
            <ul className="space-y-2">
              {SAFETY_GUIDELINES[1].items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#252A25]/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#173D2B]/10 flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="px-6 py-2.5 bg-[#173D2B] hover:bg-[#21543b] text-[#F7F3E9] text-xs font-semibold rounded-full transition-colors cursor-pointer"
            >
              Understood
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
