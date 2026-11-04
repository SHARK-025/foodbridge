import React from 'react';
import { ArrowRight, HeartHandshake, ShieldCheck, Clock, Utensils, Check, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const MARQUEE_ITEMS = [
  '140+ fresh dinner portions rescued today in Metro District',
  'Grand Heritage Bistro joined as donor partner',
  'Hope Harbor Kitchen received evening bakery surplus (18 mins ago)',
  'Zero edible food in landfills — 100% human dignity',
  'Average local matching time: 18 minutes',
  'River Hotel Catering logged 30 warm portions for dispatch',
];

export default function Hero({ onOpenDonate }) {
  const handleScrollToMission = (e) => {
    e.preventDefault();
    const element = document.getElementById('mission');
    if (element) {
      const navOffset = 84;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-0 overflow-hidden bg-[#F7F3E9]"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#DDE9D8]/45 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-[#E7A64B]/12 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Purpose, and High-Impact CTA */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Mission Category Kicker Pill */}
            <div className="inline-flex items-center space-x-2 bg-[#DDE9D8]/90 text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-[#173D2B]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E7A64B] animate-pulse" />
              <span>Surplus Food Rescue & Community Bridge</span>
            </div>

            {/* Main Headline with Distinct Editorial Hierarchy */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.35rem] font-bold tracking-tight text-[#173D2B] leading-[1.05] mb-6">
              Good food deserves{' '}
              <span className="block sm:inline font-normal italic text-[#173D2B] relative">
                another chance.
                <span className="absolute left-0 -bottom-1.5 w-full h-3 bg-[#E7A64B]/35 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#252A25]/85 leading-relaxed font-normal max-w-xl mb-8">
              Every rescued meal is an opportunity to nourish someone, support a community and protect our planet.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-6">
              {/* Main CTA: Highly prominent Harvest Gold button */}
              <button
                onClick={() => onOpenDonate('donor')}
                type="button"
                className="inline-flex items-center justify-center space-x-3 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173D2B] focus-visible:ring-offset-2"
                aria-label="Donate Surplus Food"
              >
                <HeartHandshake className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Donate Surplus Food</span>
                <span className="text-[11px] bg-[#173D2B] text-[#F7F3E9] py-0.5 px-2 rounded-full font-medium ml-1 hidden sm:inline">
                  Free Dispatch
                </span>
              </button>

              {/* Secondary CTA: Elegant outline */}
              <a
                href="#mission"
                onClick={handleScrollToMission}
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#DDE9D8]/50 active:scale-[0.98] text-[#173D2B] border-2 border-[#173D2B]/30 hover:border-[#173D2B] text-base font-semibold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              >
                <span>Explore Our Mission</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#252A25]/80 mb-8 font-medium">
              <span className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                <span>Zero donor paperwork</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                <span>Under 2-hour rapid pickup</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                <span>100% Tax-compliant receipts</span>
              </span>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#173D2B]/15 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#DDE9D8] flex items-center justify-center text-[#173D2B] shrink-0 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#173D2B]">Vetted Partners</span>
                  <span className="text-[11px] text-[#252A25]/70">Strict sanitation audits</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#DDE9D8] flex items-center justify-center text-[#173D2B] shrink-0 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#173D2B]">Safe Thermal Window</span>
                  <span className="text-[11px] text-[#252A25]/70">Heated & chilled transit</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#E7A64B]/20 flex items-center justify-center text-[#173D2B] shrink-0 shadow-xs">
                  <Utensils className="w-4 h-4 text-[#E7A64B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#173D2B]">100% Dignity</span>
                  <span className="text-[11px] text-[#252A25]/70">Chef-grade nourishment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Image Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative warm framed base shadow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#173D2B]/15 via-transparent to-[#E7A64B]/25 transform rotate-1 pointer-events-none" />

              {/* Main Primary Image: Authentic community food rescue */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] bg-[#173D2B] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80"
                  alt="Volunteers packaging wholesome food donations for distribution"
                  className="w-full h-[360px] sm:h-[460px] lg:h-[490px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  fallbackTitle="Community Food Rescue"
                />

                {/* Scrim Overlay & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B]/95 via-[#173D2B]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-[#F7F3E9]">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#E7A64B] text-[#173D2B] text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#173D2B]" />
                    <span>Live Network Active</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-medium leading-snug">
                    "Every tray collected is a meal shared with care and dignity."
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#DDE9D8]/80 mt-1">
                    Hot hotel catering handoff • Hope Harbor Community Kitchen
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Inset Image: Artisan fresh bakery */}
              <div className="absolute -top-6 -right-4 sm:-right-8 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] hidden sm:block bg-[#173D2B] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
                  alt="Artisan bakery loaves rescued fresh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  fallbackTitle="Fresh Bread"
                />
                <div className="absolute bottom-1.5 inset-x-1.5 text-center bg-[#173D2B]/90 text-[#F7F3E9] text-[9px] font-bold py-0.5 rounded shadow-xs">
                  Surplus Breads
                </div>
              </div>

              {/* Floating Badge: Recent Rescue Dispatch Preview */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#F7F3E9] p-3.5 rounded-2xl shadow-xl border border-[#173D2B]/15 hidden sm:flex items-center space-x-3 animate-float-gentle">
                <div className="w-10 h-10 rounded-xl bg-[#173D2B] flex items-center justify-center text-[#E7A64B] shadow-inner">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#173D2B]">Dinner Trays Rescued</div>
                  <div className="text-[11px] text-[#252A25]/75">45 hot portions safely matched</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Live Rescue Pulse Ribbon: Clean startup editorial marquee */}
      <div className="bg-[#173D2B] text-[#F7F3E9] py-3.5 border-y border-[#21543b] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs font-medium text-[#DDE9D8]">
              <Sparkles className="w-3.5 h-3.5 text-[#E7A64B] shrink-0" />
              <span>{item}</span>
              <span className="text-[#E7A64B]/40 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
