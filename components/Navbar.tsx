'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/brand', label: 'Our Story' },
    { href: '/why-cubes', label: 'Why CUBES' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'w-7 h-7 md:w-8 md:h-8' : 'w-8 h-8 md:w-10 md:h-10'
            }`}>
              <Image
                src="/images/CUBES_logo.png"
                alt="CUBES Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-bold text-forest-700 transition-all duration-300 ${
              isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
            }`}>CUBES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm lg:text-base py-2 px-4 lg:py-2.5 lg:px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-700 hover:text-primary-600 transition-transform duration-300 active:scale-90 touch-manipulation p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-neutral-700 hover:text-primary-600 font-medium py-2.5 px-2 hover:pl-3 hover:bg-cream-50 rounded-lg transition-all duration-300 touch-manipulation active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block btn-primary text-center mt-3 touch-manipulation active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
