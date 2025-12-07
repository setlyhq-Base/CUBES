import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

const ProductCard = ({ name, description, slug, imageUrl }: ProductCardProps) => {
  return (
    <Link href={`/products/${slug}`} className="group cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-primary-300">
      <div className="relative h-40 mb-3 rounded-lg overflow-hidden bg-cream-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-forest-100">
            <span className="text-5xl">🧊</span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-forest-700 mb-1.5 group-hover:text-primary-600 transition-colors">
        {name}
      </h3>
      <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{description}</p>
      <span className="text-primary-600 text-sm font-medium inline-flex items-center">
        View Details
        <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default ProductCard;
