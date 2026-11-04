import React from 'react';
import { HeartHandshake, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../data/mockData';

const CURRENT_YEAR = 2026;

export default function Footer({ onOpenDonate, onOpenSafety }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#173D2B] text-[#F7F3E9] pt-20 pb-12 border-t border-[#21543b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DDE9D8]/15">
          
          {/* Column 1: Brand & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#21543b] flex items-center justify-center text-[#E7A64B] shadow-inner">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19c4-5 12-5 16 0" />
                  <path d="M7 16V9a4 4 0 0 1 8 0v7" />
                  <circle cx="12" cy="5" r="2" fill="#E7A64B" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F3E9] leading-none">
                  Food<span className="text-[#E7A64B]">Bridge</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#DDE9D8]/70 font-semibold mt-1">
                  Good Food Deserves Another Chance
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DDE9D8]/85 leading-relaxed font-normal mb-6 max-w-md">
              FoodBridge is a grassroots social-impact initiative designed to bridge the gap between commercial surplus kitchens and neighborhood community pantries. We believe that wholesome food belongs on plates, nourishing lives and protecting the environment.
            </p>

            {/* Social Media Link Icons (Crisp Inline SVGs with Accessible Labels) */}
            <div className="flex items-center space-x-3" aria-label="Social media links">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow FoodBridge on X / Twitter"
                className="w-9 h-9 rounded-xl bg-[#21543b] flex items-center justify-center text-[#DDE9D8] hover:text-[#E7A64B] hover:bg-[#2a684a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with FoodBridge on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#21543b] flex items-center justify-center text-[#DDE9D8] hover:text-[#E7A64B] hover:bg-[#2a684a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow FoodBridge on Instagram"
                className="w-9 h-9 rounded-xl bg-[#21543b] flex items-center justify-center text-[#DDE9D8] hover:text-[#E7A64B] hover:bg-[#2a684a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="FoodBridge on GitHub"
                className="w-9 h-9 rounded-xl bg-[#21543b] flex items-center justify-center text-[#DDE9D8] hover:text-[#E7A64B] hover:bg-[#2a684a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#F7F3E9] mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DDE9D8]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#E7A64B] transition-colors duration-150 inline-block py-0.5 focus:outline-none focus-visible:text-[#E7A64B]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenSafety}
                  className="hover:text-[#E7A64B] transition-colors duration-150 inline-block py-0.5 text-left cursor-pointer focus:outline-none focus-visible:text-[#E7A64B]"
                >
                  Food Safety Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Placeholder & Demonstrative Info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-[#F7F3E9] mb-4 tracking-wide">
              Contact & Inquiries
            </h4>
            <p className="text-xs text-[#DDE9D8]/70 mb-4 leading-relaxed font-normal">
              Demonstration Contact Placeholder (For OSCode AI Prompt Battle showcase):
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#DDE9D8]/85 mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E7A64B] shrink-0 mt-0.5" />
                <span>FoodBridge Coordination Hub, 100 Civic Park Way, Metro District</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#E7A64B] shrink-0" />
                <span>hello@foodbridge-demo.org (Demo mailbox)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#E7A64B] shrink-0" />
                <span>+1 (555) 019-FOOD • Mon - Sun 8:00 AM - 10:00 PM</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenDonate('donor')}
              className="inline-flex items-center space-x-2 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3E9]"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Launch Demo Donation Form</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Competition Notice & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDE9D8]/65 gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <span>© {CURRENT_YEAR} FoodBridge Project. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>OSCode AI Prompt Battle Competition Showcase</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] bg-[#21543b] px-2.5 py-1 rounded text-[#DDE9D8]">
              UI/UX Showcase • Pure Frontend
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#21543b] hover:bg-[#E7A64B] hover:text-[#173D2B] text-[#DDE9D8] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
