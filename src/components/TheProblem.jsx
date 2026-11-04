import React from 'react';
import { AlertCircle, Users, ChevronRight, Trash2, HeartHandshake } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function TheProblem() {
  return (
    <section id="problem" className="py-24 bg-[#F7F3E9] relative border-t border-[#173D2B]/10 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <AlertCircle className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>The Core Disconnect</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-5 leading-tight">
            The Imbalance We Cannot Ignore
          </h2>
          <p className="text-base sm:text-lg text-[#252A25]/80 leading-relaxed font-normal">
            Food waste and hunger exist side by side in every community. Bridging this divide is not an issue of food scarcity—it is a challenge of timely, respectful connection.
          </p>
        </div>

        {/* Contrasting Visual Storytelling: Wasted Food vs. Empty Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Card 1: The Surplus Crisis (The Tragic Waste) */}
          <div className="rounded-3xl bg-[#173D2B] text-[#F7F3E9] overflow-hidden shadow-xl border border-[#173D2B] flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            {/* Visual Header Image of Prepared Surplus */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-[#0e271b]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Commercial buffet trays with freshly prepared food"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                fallbackTitle="Commercial Kitchen Surplus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B] via-[#173D2B]/50 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-700 text-white shadow-md">
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>The Tragedy of Waste</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3E9] leading-tight">
                  Untouched Meals Discarded at Midnight
                </h3>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <p className="text-sm sm:text-base text-[#DDE9D8]/90 leading-relaxed font-normal">
                  At 10:30 PM across our cities, hotel banquets, wedding halls, and corporate dining rooms conclude. Stainless buffet trays filled with braised vegetables, roasted chicken, and artisan pastries are cleared into black trash sacks.
                </p>
                <p className="text-xs sm:text-sm text-[#DDE9D8]/75 leading-relaxed font-normal">
                  These meals are freshly prepared, wholesome, and nutritious. Yet they are thrown away simply because busy kitchen staff lack an immediate, verified logistics link to hand them off within the safe temperature window.
                </p>
              </div>

              {/* Impact Callout */}
              <div className="pt-5 border-t border-[#DDE9D8]/15 bg-[#21543b]/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                <blockquote className="italic font-serif text-sm sm:text-base text-[#F7F3E9]/95 mb-2 leading-relaxed">
                  "The food is already cooked. The energy and resources were already spent. Discarding it is an avoidable tragedy."
                </blockquote>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E7A64B]">
                  Abundance with nowhere to go
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: The Hunger Reality (The Immediate Need) */}
          <div className="rounded-3xl bg-[#DDE9D8]/60 text-[#252A25] overflow-hidden shadow-xl border border-[#173D2B]/15 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            {/* Visual Header Image of Community Diners / Shelter Waiting */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-[#c2d6bb]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Community members gathering for food assistance"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                fallbackTitle="Community Kitchen Line"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#DDE9D8] via-[#DDE9D8]/50 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173D2B] text-[#F7F3E9] shadow-md">
                  <Users className="w-3.5 h-3.5 text-[#E7A64B]" />
                  <span>The Hunger Reality</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173D2B] leading-tight">
                  Empty Plates Minutes Down the Road
                </h3>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <p className="text-sm sm:text-base text-[#252A25]/90 leading-relaxed font-normal">
                  Just three miles away, a neighborhood soup kitchen scrapes the bottom of its chili pot. Working parents, seniors living on fixed pensions, and shelter residents stand in line hoping for a hot dinner that often runs out before everyone is served.
                </p>
                <p className="text-xs sm:text-sm text-[#252A25]/80 leading-relaxed font-normal">
                  Grassroots pantries face surging demand while purchasing basic shelf-stable dry goods on shoestring budgets. They rarely have access to hot, protein-rich, chef-prepared entrees that restore human warmth and dignity.
                </p>
              </div>

              {/* Impact Callout */}
              <div className="pt-5 border-t border-[#173D2B]/10 bg-[#DDE9D8] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                <blockquote className="italic font-serif text-sm sm:text-base text-[#173D2B]/95 mb-2 leading-relaxed">
                  "Access to nutritious food is fundamental human dignity. No family should go to bed hungry when kitchens next door have excess."
                </blockquote>
                <span className="text-xs font-bold uppercase tracking-wider text-[#173D2B]">
                  Urgent need happening right around the corner
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* The Transformative Bridge Banner */}
        <div className="rounded-3xl bg-[#173D2B] text-[#F7F3E9] p-6 sm:p-10 shadow-2xl border border-[#E7A64B]/40 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E7A64B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E7A64B] text-[#173D2B] flex items-center justify-center shrink-0 shadow-lg">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E7A64B]">
                  The FoodBridge Mission
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3E9] mt-0.5 leading-snug">
                  Turning Potential Waste into Immediate Nourishment
                </h4>
                <p className="text-sm text-[#DDE9D8]/90 mt-2 max-w-2xl leading-relaxed font-normal">
                  FoodBridge removes the friction. By enabling kitchens to log surplus in under 90 seconds, we coordinate swift volunteer and NGO pickups within the critical 2-hour window—ensuring good food ends up on plates, never in landfills.
                </p>
              </div>
            </div>

            <a
              href="#solution"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('solution');
                if (el) {
                  const navOffset = 84;
                  const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
                  window.scrollTo({ top: pos, behavior: 'smooth' });
                }
              }}
              className="shrink-0 inline-flex items-center space-x-2 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3E9]"
            >
              <span>Explore The Solution</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
