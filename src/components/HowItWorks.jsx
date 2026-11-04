import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import ImageWithFallback from './ImageWithFallback';

const stepMedia = [
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    caption: 'Step 1: Fresh surplus packed in clean thermal catering containers',
    highlight: 'Takes under 2 minutes for kitchen staff',
  },
  {
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
    caption: 'Step 2: Instant pairing with the nearest registered NGO kitchen',
    highlight: 'Radius-filtered within 3-5 miles',
  },
  {
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=900&q=80',
    caption: 'Step 3: Direct handoff and dignified dinner service for community members',
    highlight: 'Served fresh within 2 hours',
  },
];

export default function HowItWorks({ onOpenDonate }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-[#F7F3E9] relative border-t border-[#173D2B]/10 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Three Simple Steps</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-5 leading-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#252A25]/80 leading-relaxed font-normal">
            Designed for busy kitchen staff and grassroots shelters—moving surplus food from commercial kitchens to community tables before cooling down.
          </p>
        </div>

        {/* Horizontal Timeline Navigation Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 relative" role="tablist" aria-label="How it works steps">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] ${
                  isActive
                    ? 'bg-[#173D2B] text-[#F7F3E9] border-[#E7A64B] shadow-xl scale-[1.01]'
                    : 'bg-[#DDE9D8]/45 hover:bg-[#DDE9D8]/75 text-[#252A25] border-[#173D2B]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                      isActive ? 'bg-[#E7A64B] text-[#173D2B]' : 'bg-[#173D2B]/10 text-[#173D2B]'
                    }`}
                  >
                    STEP 0{step.step}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      isActive ? 'text-[#E7A64B]' : 'text-[#252A25]/70'
                    }`}
                  >
                    {step.stat}
                  </span>
                </div>

                <h3
                  className={`font-serif text-xl font-bold mb-1 ${
                    isActive ? 'text-[#F7F3E9]' : 'text-[#173D2B]'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed font-normal ${
                    isActive ? 'text-[#DDE9D8]/85' : 'text-[#252A25]/70'
                  }`}
                >
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight Presentation for the Active Step */}
        <div className="rounded-3xl bg-[#173D2B] text-[#F7F3E9] overflow-hidden shadow-2xl border border-[#173D2B] grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Visual Handoff Photography */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[480px] bg-[#0e271b] group">
            <ImageWithFallback
              src={stepMedia[activeStep].image}
              alt={stepMedia[activeStep].caption}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              fallbackTitle={`Step ${activeStep + 1} Visualization`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#173D2B] pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#173D2B]/90 backdrop-blur-xs p-4 rounded-xl border border-[#DDE9D8]/15 text-xs text-[#F7F3E9] shadow-lg">
              <span className="font-bold text-[#E7A64B] block mb-0.5">
                {stepMedia[activeStep].highlight}
              </span>
              {stepMedia[activeStep].caption}
            </div>
          </div>

          {/* Right Column: Deep Operational Detail */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#21543b] text-[#E7A64B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#E7A64B]/30 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Protocol • Step 0{HOW_IT_WORKS_STEPS[activeStep].step}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold mb-4 text-[#F7F3E9] leading-tight">
                {HOW_IT_WORKS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#DDE9D8]/90 leading-relaxed mb-6 font-normal">
                {HOW_IT_WORKS_STEPS[activeStep].description}
              </p>

              {/* Protocol Checklist */}
              <div className="space-y-3 pt-4 border-t border-[#DDE9D8]/15 mb-8">
                {HOW_IT_WORKS_STEPS[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F7F3E9]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#E7A64B] shrink-0 mt-0.5" />
                    <span className="leading-snug">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenDonate('donor')}
                className="inline-flex items-center space-x-2 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3E9]"
              >
                <span>Experience Step 1: Log Surplus Food</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
