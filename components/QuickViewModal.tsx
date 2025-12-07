'use client';

import { X, ShoppingCart, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    slug: string;
    imageUrl?: string;
  };
}

const QuickViewModal = ({ isOpen, onClose, product }: QuickViewModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-cream-100 to-primary-50">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl animate-float">🧊</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-3xl font-bold text-forest-700 mb-2">{product.name}</h3>
              <div className="flex gap-2">
                <span className="badge badge-new text-xs px-3 py-1">New</span>
                <span className="badge badge-success text-xs px-3 py-1">In Stock</span>
              </div>
            </div>
          </div>

          <p className="text-neutral-600 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <Info size={16} className="text-primary-600" />
              </div>
              <span>Pre-portioned for perfect consistency</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Info size={16} className="text-green-600" />
              </div>
              <span>Stays fresh for 6-9 months frozen</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Info size={16} className="text-purple-600" />
              </div>
              <span>No preservatives or additives</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 btn-primary text-center inline-flex items-center justify-center gap-2"
              onClick={onClose}
            >
              <ShoppingCart size={18} />
              View Full Details
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
              onClick={onClose}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
