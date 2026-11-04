import React from 'react';
import { Quote, HeartHandshake, Building2, Bike, ChefHat, Info } from 'lucide-react';
import { COMMUNITY_STORIES } from '../data/mockData';
import ImageWithFallback from './ImageWithFallback';

export default function CommunityStories() {
  const [featuredStory, ...otherStories] = COMMUNITY_STORIES;

  return (
    <section id="stories" className="py-24 bg-[#F7F3E9] relative border-t border-[#173D2B]/10 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#DDE9D8] text-[#173D2B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#173D2B]/10 shadow-xs">
            <HeartHandshake className="w-3.5 h-3.5 text-[#E7A64B]" />
            <span>Voices From The Table</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D2B] tracking-tight mb-5 leading-tight">
            Community Stories
          </h2>
          <p className="text-base sm:text-lg text-[#252A25]/80 leading-relaxed font-normal">
            Real human impact comes alive through the everyday dedication of restaurant chefs, shelter directors, and volunteer couriers.
          </p>
        </div>

        {/* Clear Mandatory Label for Illustrative Stories */}
        <div className="mb-12 max-w-2xl mx-auto bg-[#DDE9D8]/70 border border-[#173D2B]/15 rounded-2xl p-3.5 sm:p-4 text-center text-xs text-[#173D2B] flex items-center justify-center space-x-2 shadow-xs">
          <Info className="w-4 h-4 text-[#E7A64B] shrink-0" />
          <span>
            <strong>Illustrative Case Narratives:</strong> The following three profiles are realistic demonstrative scenarios created to depict our donor, partner, and volunteer experiences.
          </span>
        </div>

        {/* Asymmetrical Editorial Story Showcase (Featured Left + Stacked Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Spotlight Story: Chef Marcus Vance (7 cols) */}
          <div className="lg:col-span-7 bg-[#173D2B] text-[#F7F3E9] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#173D2B] flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E7A64B]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#173D2B] bg-[#E7A64B] px-3.5 py-1 rounded-full shadow-xs">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Spotlight Donor Partner</span>
                </span>
                <Quote className="w-10 h-10 text-[#E7A64B]/35" />
              </div>

              <div className="text-xs text-[#DDE9D8]/80 mb-6 bg-[#21543b] px-3 py-1.5 rounded-lg inline-block font-mono">
                {featuredStory.scenarioNote}
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium leading-snug mb-8 text-[#F7F3E9] italic">
                "{featuredStory.quote}"
              </blockquote>

              <div className="inline-block text-xs font-bold text-[#173D2B] bg-[#E7A64B] px-3.5 py-1.5 rounded-lg mb-8 shadow-xs">
                {featuredStory.impactTag}
              </div>
            </div>

            {/* Profile Footer */}
            <div className="pt-6 border-t border-[#DDE9D8]/15 flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#E7A64B] shadow-sm">
                <ImageWithFallback
                  src={featuredStory.avatar}
                  alt={featuredStory.name}
                  className="w-full h-full object-cover"
                  fallbackTitle={featuredStory.name}
                  fallbackIcon="profile"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#F7F3E9]">
                  {featuredStory.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#DDE9D8]/80 font-normal">
                  {featuredStory.title}
                </p>
              </div>
            </div>
          </div>

          {/* Stacked Stories: NGO Director & Volunteer Courier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {otherStories.map((story) => {
              const Icon = story.role.includes('NGO') ? Building2 : Bike;

              return (
                <div
                  key={story.id}
                  className="bg-[#F7F3E9] rounded-3xl p-6 sm:p-8 border border-[#173D2B]/15 shadow-md hover:shadow-xl hover:border-[#E7A64B] transition-all duration-300 flex flex-col justify-between flex-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-[#173D2B] text-[#E7A64B] flex items-center justify-center shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#173D2B]">
                          {story.role}
                        </span>
                      </div>
                      <Quote className="w-6 h-6 text-[#E7A64B]/35" />
                    </div>

                    <blockquote className="font-serif text-sm sm:text-base text-[#252A25] leading-relaxed mb-4 italic font-medium">
                      "{story.quote}"
                    </blockquote>

                    <span className="text-[11px] font-semibold text-[#173D2B] bg-[#DDE9D8] px-2.5 py-1 rounded-md inline-block mb-4">
                      {story.impactTag}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[#173D2B]/10 flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#E7A64B] shadow-xs">
                      <ImageWithFallback
                        src={story.avatar}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        fallbackTitle={story.name}
                        fallbackIcon="profile"
                      />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-bold text-[#173D2B]">
                        {story.name}
                      </h5>
                      <p className="text-[11px] text-[#252A25]/70 line-clamp-1 font-normal">
                        {story.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
