'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white z-[100] animate-fade-in pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Animated CUBES logo */}
              <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-lg animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-lg animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
            </div>
          </div>
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
}
