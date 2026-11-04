import React, { useState } from 'react';

/**
 * ImageWithFallback
 * Loads remote photography with smooth fade-in and falls back to an elegant
 * editorial SVG placeholder if the network fails or image is unavailable.
 */
export default function ImageWithFallback({
  src,
  alt = 'FoodBridge imagery',
  className = '',
  fallbackTitle = 'FoodBridge Community',
  fallbackIcon = 'food',
}) {
  const [hasError, setHasError] = useState(!src);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#DDE9D8]/30 ${className}`}>
      {!hasError && src ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#DDE9D8]/40 via-[#F7F3E9] to-[#DDE9D8]/40 animate-pulse" />
          )}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      ) : (
        /* Editorial Styled Fallback SVG */
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#173D2B] via-[#21543b] to-[#173D2B] text-[#F7F3E9] text-center">
          <div className="w-16 h-16 mb-3 rounded-full bg-[#E7A64B]/20 border border-[#E7A64B]/40 flex items-center justify-center text-[#E7A64B]">
            {fallbackIcon === 'food' ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )}
          </div>
          <span className="font-serif text-lg font-medium text-[#F7F3E9] tracking-wide">{fallbackTitle}</span>
          <span className="text-xs text-[#DDE9D8]/80 mt-1 uppercase tracking-wider">Good Food Deserves Another Chance</span>
        </div>
      )}
    </div>
  );
}
