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
    <Link href={`/products/${slug}`} className="card group cursor-pointer">
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-cream-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-forest-100">
            <span className="text-6xl">🧊</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-forest-700 mb-2 group-hover:text-primary-600 transition-colors">
        {name}
      </h3>
      <p className="text-neutral-600 text-sm mb-4">{description}</p>
      <span className="text-primary-600 font-medium inline-flex items-center">
        View Details
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default ProductCard;
