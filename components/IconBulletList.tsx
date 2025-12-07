import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface IconBulletListProps {
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  columns?: 1 | 2 | 3 | 4;
}

const IconBulletList = ({ items, columns = 3 }: IconBulletListProps) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-8`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col items-start">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-forest-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Icon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-forest-700 mb-2">
              {item.title}
            </h3>
            <p className="text-neutral-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default IconBulletList;
