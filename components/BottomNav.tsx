'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Package, BookOpen, Heart, Lightbulb, MessageCircle, Home } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      activePattern: /^\/$/
    },
    {
      href: '/products',
      label: 'Products',
      icon: Package,
      activePattern: /^\/products/
    },
    {
      href: '/how-it-works',
      label: 'How It Works',
      icon: BookOpen,
      activePattern: /^\/how-it-works/
    },
    {
      href: '/why-cubes',
      label: 'Why Cubes',
      icon: Lightbulb,
      activePattern: /^\/why-cubes/
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: MessageCircle,
      activePattern: /^\/contact/
    }
  ];

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.activePattern.test(pathname);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 transition-all duration-300 touch-manipulation active:scale-95 ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-neutral-500 active:text-primary-500'
                }`}
              >
                {/* Active background pill */}
                {isActive && (
                  <div className="absolute inset-x-2 inset-y-2 bg-primary-50 rounded-xl transition-all duration-300" />
                )}
                
                {/* Icon with active indicator */}
                <div className="relative z-10">
                  <Icon 
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {/* Active dot indicator */}
                  {isActive && (
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-primary-600 rounded-full" />
                  )}
                </div>
                
                {/* Label */}
                <span 
                  className={`relative z-10 text-[9px] font-medium transition-all duration-300 ${
                    isActive ? 'font-semibold' : 'font-normal'
                  }`}
                  style={{
                    lineHeight: '10px',
                    maxWidth: '60px',
                    textAlign: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: item.label === 'How It Works' ? 'normal' : 'nowrap'
                  }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
