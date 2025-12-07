import { ReactNode } from 'react';

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
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
      )}
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-700 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          {children && <div className="mt-12">{children}</div>}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-forest-200 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default HeroSection;
