'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import Link from 'next/link';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show FAB after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="animate-slide-up flex flex-col gap-2 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
          <Link
            href="/products"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-all duration-300 group whitespace-nowrap"
            onClick={() => setIsExpanded(false)}
          >
            <span className="text-sm font-medium text-forest-700 group-hover:text-primary-600">
              View Products
            </span>
          </Link>
          <Link
            href="/how-it-works"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-all duration-300 group whitespace-nowrap"
            onClick={() => setIsExpanded(false)}
          >
            <span className="text-sm font-medium text-forest-700 group-hover:text-primary-600">
              How It Works
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-all duration-300 group whitespace-nowrap"
            onClick={() => setIsExpanded(false)}
          >
            <span className="text-sm font-medium text-forest-700 group-hover:text-primary-600">
              Join Waitlist
            </span>
          </Link>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 animate-pulse-glow"
        aria-label={isExpanded ? 'Close menu' : 'Quick actions'}
      >
        {/* Rotating border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        {/* Icon */}
        <div className="relative z-10 text-white transition-transform duration-300">
          {isExpanded ? (
            <X size={24} className="animate-scale-in" />
          ) : (
            <Sparkles size={24} className="animate-float" />
          )}
        </div>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity duration-150" />
      </button>

      {/* Tooltip when not expanded */}
      {!isExpanded && (
        <div className="absolute right-16 bottom-0 px-3 py-1.5 bg-forest-700 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Quick Actions
          <div className="absolute right-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-forest-700 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
