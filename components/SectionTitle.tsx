import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ children, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
