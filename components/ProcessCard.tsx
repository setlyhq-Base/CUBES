import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProcessCard({ step, icon: Icon, title, description }: ProcessCardProps) {
  return (
    <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      {/* Step number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
        {step}
      </div>
      
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mt-2">
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
