'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Eye, Heart } from 'lucide-react';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  name: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

const ProductCard = ({ name, description, slug, imageUrl }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowQuickView(true);
  };

  return (
    <>
      <div 
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-gray-100 hover:border-primary-300 hover:-translate-y-2 card-interactive"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cream-100 to-primary-50">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-shimmer" />
        )}
        
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            } ${isHovered ? 'scale-110 rotate-2' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-forest-100">
            <span className="text-6xl animate-float">🧊</span>
          </div>
        )}

        {/* Hover overlay with quick actions */}
        <div className={`absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/40 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <button 
              onClick={handleQuickView}
              className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-sm font-medium text-forest-700 animate-slide-up hover:bg-white transition-colors"
            >
              <Eye size={16} />
              Quick View
            </button>
            <button 
              className="bg-white/90 backdrop-blur-sm rounded-lg p-2 hover:bg-primary-100 transition-colors animate-slide-up"
              onClick={(e) => {
                e.preventDefault();
                // Add to favorites logic
              }}
            >
              <Heart size={18} className="text-primary-600" />
            </button>
          </div>
        </div>
      </div>

      <Link href={`/products/${slug}`} className="block p-5 hover:bg-gray-50 transition-colors">
        <h3 className="text-xl font-bold text-forest-700 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-primary-600 text-sm font-semibold inline-flex items-center group-hover:gap-2 gap-1 transition-all duration-300">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          
          {/* Badge */}
          <div className="badge badge-new text-xs px-3 py-1 shadow-sm">
            New
          </div>
        </div>
      </Link>
    </div>

    <QuickViewModal
      isOpen={showQuickView}
      onClose={() => setShowQuickView(false)}
      product={{ name, description, slug, imageUrl }}
    />
  </>
  );
};

export default ProductCard;
