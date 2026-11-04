import React from 'react';
import { Sparkles, ShieldCheck, Zap, Truck, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { KEY_FEATURES } from '../data/mockData';

export default function KeyFeatures({ onOpenDonate }) {
  return (
    <section id="features" className="py-24 bg-[#F7F3E9] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-5 leading-tight">
            Built for Dignity, Speed & Care
          </h2>
          <p className="text-base sm:text-lg text-[#252A25]/80 leading-relaxed font-normal">
            Every feature in FoodBridge is purposefully designed to minimize operational friction for donors while honoring the dignity of every recipient community.
          </p>
        </div>

        {/* Asymmetrical Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          
          {/* Bento Item 1: Wide Featured Card (Smart Food Matching - 7 cols) */}
          <div className="md:col-span-7 bg-[#173D2B] text-[#F7F3E9] rounded-3xl p-8 sm:p-10 shadow-xl border border-[#173D2B] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E7A64B]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#21543b] text-[#E7A64B] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E7A64B] bg-[#21543b] px-3 py-1 rounded-full border border-[#E7A64B]/30 font-semibold shadow-xs">
                  Priority Dispatch Engine
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-[#F7F3E9]">
                {KEY_FEATURES[2].title}
              </h3>
              <p className="text-sm sm:text-base text-[#DDE9D8]/90 leading-relaxed max-w-xl mb-6 font-normal">
                {KEY_FEATURES[2].description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#DDE9D8]/15">
                {KEY_FEATURES[2].points.map((pt, idx) => (
                  <div key={idx} className="bg-[#21543b]/60 p-3.5 rounded-xl border border-[#DDE9D8]/10 text-xs text-[#F7F3E9]">
                    <span className="text-[#E7A64B] font-bold block mb-1">0{idx + 1}.</span>
                    <span className="leading-snug block">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center text-xs font-semibold text-[#E7A64B]">
              <span>Radius-optimized dispatch ensuring food never lingers</span>
            </div>
          </div>

          {/* Bento Item 2: Easy Food Donation (5 cols) */}
          <div className="md:col-span-5 bg-[#DDE9D8]/50 hover:bg-[#DDE9D8]/80 rounded-3xl p-8 border border-[#173D2B]/15 shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#173D2B] bg-[#DDE9D8] px-3 py-1 rounded-full border border-[#173D2B]/10">
                  Donor First
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-3 text-[#173D2B]">
                {KEY_FEATURES[0].title}
              </h3>
              <p className="text-sm text-[#252A25]/80 leading-relaxed mb-6 font-normal">
                {KEY_FEATURES[0].description}
              </p>

              <div className="space-y-2 pt-4 border-t border-[#173D2B]/10">
                {KEY_FEATURES[0].points.map((pt, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#252A25]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#173D2B] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#173D2B]/10">
              <button
                type="button"
                onClick={() => onOpenDonate('donor')}
                className="text-xs font-bold text-[#173D2B] hover:text-[#E7A64B] inline-flex items-center space-x-1 cursor-pointer"
              >
                <span>Try donation logging</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 3: NGO Partnerships (4 cols) */}
          <div className="md:col-span-4 bg-[#F7F3E9] rounded-3xl p-8 border border-[#173D2B]/15 shadow-md hover:shadow-xl hover:border-[#173D2B]/35 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#173D2B]">
                {KEY_FEATURES[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-6 font-normal">
                {KEY_FEATURES[1].description}
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#173D2B]/10">
              {KEY_FEATURES[1].points.map((pt, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#252A25]/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 4: Pickup Coordination (4 cols) */}
          <div className="md:col-span-4 bg-[#F7F3E9] rounded-3xl p-8 border border-[#173D2B]/15 shadow-md hover:shadow-xl hover:border-[#173D2B]/35 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#173D2B] text-[#E7A64B] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#173D2B]">
                {KEY_FEATURES[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-6 font-normal">
                {KEY_FEATURES[3].description}
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#173D2B]/10">
              {KEY_FEATURES[3].points.map((pt, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#252A25]/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Item 5: Community Participation (4 cols) */}
          <div className="md:col-span-4 bg-[#E7A64B]/15 hover:bg-[#E7A64B]/25 rounded-3xl p-8 border border-[#E7A64B]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E7A64B] text-[#173D2B] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#173D2B]">
                {KEY_FEATURES[4].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed mb-6 font-normal">
                {KEY_FEATURES[4].description}
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#173D2B]/10">
              {KEY_FEATURES[4].points.map((pt, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#173D2B] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#173D2B] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
