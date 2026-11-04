import React, { useState, useEffect } from 'react';
import { HeartHandshake, Menu, X, ShieldAlert } from 'lucide-react';
import { NAV_LINKS } from '../data/mockData';

export default function Navbar({ onOpenDonate, onOpenSafety }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection with header offset
      const sections = ['hero', 'mission', 'problem', 'solution', 'how-it-works', 'features', 'impact', 'stories'];
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3E9]/92 backdrop-blur-md shadow-xs border-b border-[#173D2B]/10 py-3 sm:py-3.5'
          : 'bg-[#F7F3E9] py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] rounded-xl p-0.5"
            aria-label="FoodBridge Home - Return to top"
          >
            <div className="w-10 h-10 rounded-xl bg-[#173D2B] flex items-center justify-center text-[#E7A64B] shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
              {/* Custom Bridge & Sprout Vector Motif */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19c4-5 12-5 16 0" />
                <path d="M7 16V9a4 4 0 0 1 8 0v7" />
                <circle cx="12" cy="5" r="2" fill="#E7A64B" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#173D2B] leading-none">
                Food<span className="text-[#E7A64B]">Bridge</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#252A25]/70 font-semibold mt-1">
                Good Food Deserves Another Chance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on large screens >= 1024px) */}
          <nav className="hidden lg:flex items-center lg:space-x-3.5 xl:space-x-5" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13px] xl:text-sm font-medium tracking-tight transition-colors duration-200 relative py-1 px-1.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] ${
                    isActive
                      ? 'text-[#173D2B] font-semibold'
                      : 'text-[#252A25]/75 hover:text-[#173D2B]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-[#E7A64B] rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Food Safety Guide Pill (Desktop & Tablet) */}
            <button
              onClick={onOpenSafety}
              type="button"
              className="hidden md:flex text-xs font-semibold text-[#173D2B] hover:text-[#E7A64B] items-center space-x-1.5 px-3 py-2 rounded-xl hover:bg-[#DDE9D8]/50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B]"
              title="View Safe Temperature & Handling Standards"
              aria-label="Food Safety Standards Guide"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#E7A64B]" />
              <span>Safety Guide</span>
            </button>

            {/* Primary Donate CTA Button (Always visible on sm: screens and up) */}
            <button
              onClick={() => onOpenDonate('donor')}
              type="button"
              className="hidden sm:inline-flex items-center space-x-2 bg-[#E7A64B] hover:bg-[#d89639] active:scale-[0.98] text-[#173D2B] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173D2B] focus-visible:ring-offset-2"
              aria-label="Open food donation request form"
            >
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span>Donate Food</span>
            </button>

            {/* Compact Donate Button for Mobile (screen < 640px) */}
            <button
              onClick={() => onOpenDonate('donor')}
              type="button"
              className="inline-flex sm:hidden items-center space-x-1 text-xs font-bold bg-[#E7A64B] active:scale-[0.98] text-[#173D2B] px-3 py-1.5 rounded-full shadow-xs cursor-pointer"
              aria-label="Open food donation request form"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Donate</span>
            </button>

            {/* Hamburger Button for Mobile & Tablet (visible below lg: 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-[#173D2B] hover:bg-[#DDE9D8]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7A64B] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (Dropdown below navbar) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3E9] border-b border-[#173D2B]/15 px-4 pt-3 pb-6 shadow-xl transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-medium py-2.5 px-3.5 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#DDE9D8] text-[#173D2B] font-bold'
                      : 'text-[#173D2B] hover:bg-[#DDE9D8]/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#173D2B]/10 flex flex-col space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSafety();
                }}
                className="flex items-center space-x-2 text-sm font-medium text-[#173D2B] py-2 px-3.5 rounded-xl hover:bg-[#DDE9D8]/40 text-left cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-[#E7A64B]" />
                <span>Food Safety & Thermal Standards</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate('donor');
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#173D2B] hover:bg-[#21543b] active:scale-[0.99] text-[#F7F3E9] font-bold text-sm py-3.5 rounded-xl shadow-md cursor-pointer transition-all"
              >
                <HeartHandshake className="w-4 h-4 text-[#E7A64B]" />
                <span>Donate Surplus Food Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
