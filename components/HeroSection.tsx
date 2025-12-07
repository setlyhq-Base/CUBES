import { ReactNode } from 'react';
import FloatingCubes from './FloatingCubes';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  children,
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-cream-100 to-forest-50 overflow-hidden">
      {/* Floating cube animation */}
      <FloatingCubes />
      
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-700 mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-sm md:text-base text-neutral-600 mb-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {primaryCta && (
                <a href={primaryCta.href} className="btn-primary">
                  {primaryCta.text}
                </a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.text}
                </a>
              )}
            </div>
          )}
          
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
      
      {/* Decorative elements - made more subtle */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-primary-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-forest-200 rounded-full blur-3xl opacity-40" />
    </section>
  );
};

export default HeroSection;
