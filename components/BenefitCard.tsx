import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

export default function BenefitCard({ 
  icon: Icon, 
  title, 
  description,
  iconBgColor = 'bg-primary-100',
  iconColor = 'text-primary-600'
}: BenefitCardProps) {
  return (
    <div className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      <div className={`w-11 h-11 ${iconBgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h3 className="font-semibold text-base text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm leading-snug">
        {description}
      </p>
    </div>
  );
}
