interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export default function StatCard({ value, label, sublabel, className = '' }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br from-white to-cream-50 rounded-xl p-6 border border-primary-200 ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-forest-700 mb-2">
        {value}
      </div>
      <div className="text-neutral-700 font-medium text-sm mb-1">
        {label}
      </div>
      {sublabel && (
        <div className="text-neutral-500 text-xs">
          {sublabel}
        </div>
      )}
    </div>
  );
}
