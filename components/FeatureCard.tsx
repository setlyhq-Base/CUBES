import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon: Icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 ${className}`}>
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="font-semibold text-lg text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
