import React from 'react';
import { Heart, Sparkles, ShieldCheck, Leaf, Users } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const PILLARS = [
  {
    num: '01',
    icon: ShieldCheck,
    title: 'Human Dignity & Nourishment',
    desc: 'Receiving a meal should never feel like an afterthought. By rescuing chef-prepared entrees and fresh produce, we bring balanced, flavorful dishes to community dining rooms.',
  },
  {
    num: '02',
    icon: Leaf,
    title: 'Environmental Stewardship',
    desc: 'Food decaying in landfills generates potent methane gas. Diverting wholesome meals back into human consumption is one of the most effective local climate actions available.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Neighborhood Solidarity',
    desc: 'FoodBridge is not a distant corporation. We create direct, lasting relationships between local bakers, restaurant owners, and the shelter directors three blocks away.',
  },
];

export default function OurMission() {
  return (
    <section id="mission" className="py-24 bg-[#F7F3E9] relative border-t border-[#173D2B]/10 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Main Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Our Guiding Purpose</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-6 leading-tight">
            Nourishing Neighbors, Protecting Our Planet
          </h2>
          <p className="text-base sm:text-xl text-[#252A25]/85 leading-relaxed font-normal">
            We believe that surplus food is not waste—it is wholesome, prepared nourishment that deserves a dignified second chance to bring warmth to someone's table.
          </p>
        </div>

        {/* Two-Column Editorial Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F7F3E9] bg-[#173D2B] group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1000&q=80"
                alt="Community members sharing a warm, nutritious meal together at a communal table"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                fallbackTitle="Dignity at the Table"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-[#F7F3E9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E7A64B] bg-[#173D2B]/90 px-2.5 py-1 rounded shadow-xs">
                  Dignified Distribution
                </span>
                <p className="font-serif text-lg font-medium mt-2 leading-snug">
                  "Food connects us all. Sharing excess creates true community."
                </p>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#DDE9D8] p-5 rounded-2xl shadow-xl border border-[#173D2B]/15 max-w-xs hidden sm:block">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#173D2B] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#E7A64B]" />
                <span>The Core Belief</span>
              </div>
              <p className="text-xs text-[#252A25]/85 leading-relaxed">
                Zero edible food in landfills. 100% respect for every person served.
              </p>
            </div>
          </div>

          {/* Right Column: Three Foundational Pillars */}
          <div className="lg:col-span-6 space-y-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-[#DDE9D8]/40 hover:bg-[#DDE9D8]/70 rounded-2xl p-6 border border-[#173D2B]/10 hover:border-[#173D2B]/30 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#173D2B] text-[#E7A64B] flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
                      {pillar.num}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-[#173D2B]/80" />
                      <h3 className="font-serif text-xl font-bold text-[#173D2B]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#252A25]/80 leading-relaxed pl-11 font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
