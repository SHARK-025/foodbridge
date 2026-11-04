import React, { useState } from 'react';
import { HeartHandshake, Users, Building2, Sparkles, Utensils, Leaf, Droplets } from 'lucide-react';

export default function FinalCTA({ onOpenDonate }) {
  const [portionCount, setPortionCount] = useState(25);

  const calculateImpact = (portions) => {
    return {
      peopleNourished: portions,
      co2Diverted: (portions * 0.58).toFixed(1),
      waterSaved: Math.round(portions * 32.8),
    };
  };

  const impact = calculateImpact(portionCount);

  return (
    <section className="py-24 bg-[#F7F3E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Editorial Grandeur */}
        <div className="relative rounded-3xl bg-[#173D2B] text-[#F7F3E9] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-[#173D2B] text-center">
          
          {/* Subtle warm background radial glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E7A64B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#21543b]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative badge */}
          <div className="inline-flex items-center space-x-2 bg-[#21543b] text-[#E7A64B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#E7A64B]/30 shadow-xs relative z-10">
            <Sparkles className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Join The Movement</span>
          </div>

          {/* Required Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.12] max-w-4xl mx-auto relative z-10 text-[#F7F3E9]">
            Your extra food can become <br className="hidden sm:inline" />
            someone's <span className="italic font-normal text-[#E7A64B]">next meal.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#DDE9D8]/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Whether you operate a commercial kitchen, organize community events, manage a non-profit pantry, or simply have two hours to volunteer, your presence matters.
          </p>

          {/* Interactive Impact Estimator Widget */}
          <div className="relative z-10 max-w-xl mx-auto mb-10 bg-[#21543b]/75 border border-[#DDE9D8]/20 rounded-2xl p-5 text-left shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E7A64B] font-bold">
                Quick Surplus Impact Estimator:
              </span>
              <div className="flex space-x-1.5" role="group" aria-label="Portion size selector">
                {[15, 25, 50, 100].map((portions) => (
                  <button
                    key={portions}
                    type="button"
                    onClick={() => setPortionCount(portions)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] ${
                      portionCount === portions
                        ? 'bg-[#E7A64B] text-[#173D2B] shadow-xs'
                        : 'bg-[#173D2B] text-[#DDE9D8] hover:bg-[#2a684a]'
                    }`}
                  >
                    {portions} Trays
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#DDE9D8]/15 text-center">
              <div className="bg-[#173D2B]/80 p-2.5 rounded-xl border border-[#DDE9D8]/10">
                <Utensils className="w-4 h-4 text-[#E7A64B] mx-auto mb-1" />
                <div className="font-serif font-bold text-lg text-[#F7F3E9] font-mono tabular-nums">
                  {impact.peopleNourished}
                </div>
                <div className="text-[10px] text-[#DDE9D8]/70">Neighbors Fed</div>
              </div>

              <div className="bg-[#173D2B]/80 p-2.5 rounded-xl border border-[#DDE9D8]/10">
                <Leaf className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="font-serif font-bold text-lg text-[#F7F3E9] font-mono tabular-nums">
                  {impact.co2Diverted} kg
                </div>
                <div className="text-[10px] text-[#DDE9D8]/70">CO₂e Diverted</div>
              </div>

              <div className="bg-[#173D2B]/80 p-2.5 rounded-xl border border-[#DDE9D8]/10">
                <Droplets className="w-4 h-4 text-cyan-300 mx-auto mb-1" />
                <div className="font-serif font-bold text-lg text-[#F7F3E9] font-mono tabular-nums">
                  {impact.waterSaved} gal
                </div>
                <div className="text-[10px] text-[#DDE9D8]/70">Water Conserved</div>
              </div>
            </div>
          </div>

          {/* Three Required Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 max-w-2xl mx-auto">
            {/* Button 1: Become a Donor */}
            <button
              onClick={() => onOpenDonate('donor')}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] text-base font-bold px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3E9]"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>Become a Donor</span>
            </button>

            {/* Button 2: Join as a Volunteer */}
            <button
              onClick={() => onOpenDonate('volunteer')}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#21543b] hover:bg-[#2a684a] active:scale-[0.98] text-[#F7F3E9] text-base font-semibold px-6 py-4 rounded-full border border-[#DDE9D8]/20 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
            >
              <Users className="w-4 h-4 text-[#E7A64B]" />
              <span>Join as a Volunteer</span>
            </button>

            {/* Button 3: Partner With Us */}
            <button
              onClick={() => onOpenDonate('partner')}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#21543b]/60 active:scale-[0.98] text-[#F7F3E9] text-base font-semibold px-6 py-4 rounded-full border border-[#DDE9D8]/30 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
            >
              <Building2 className="w-4 h-4 text-[#E7A64B]" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Subtle bottom note */}
          <div className="mt-10 text-xs text-[#DDE9D8]/70 relative z-10">
            No registration fees • Dedicated volunteer support • Immediate neighborhood impact
          </div>

        </div>

      </div>
    </section>
  );
}
