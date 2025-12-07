import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - CUBES',
  description: 'Explore our range of frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Compact page header - no giant hero */}
      <section className="pt-8 pb-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-forest-700">Products</h1>
              <p className="text-sm text-neutral-600 mt-1">Pre-prepped, portioned, ready to transform your cooking</p>
            </div>
            <div className="hidden sm:block text-sm text-neutral-500">
              {products.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Start Immediately */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 80} direction="scale">
                <ProductCard
                  name={product.name}
                  description={product.description}
                  slug={product.slug}
                  imageUrl={product.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-forest-700 to-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to revolutionize your kitchen?
          </h2>
          <p className="text-cream-200 mb-6">
            Join our waitlist to be the first to experience CUBES when we launch.
          </p>
          <a href="/contact" className="btn-primary bg-white text-forest-700 hover:bg-cream-100">
            Join Waitlist
          </a>
        </div>
      </section>
    </>
  );
}
