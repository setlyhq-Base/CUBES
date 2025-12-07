import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - CUBES',
  description: 'Explore our range of frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.',
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Our Product Range"
        subtitle="From everyday essentials to gourmet shortcuts—all pre-prepped, portioned, and ready to transform your cooking."
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                slug={product.slug}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-10 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-3">
            Ready to revolutionize your kitchen?
          </h2>
          <p className="text-base text-neutral-600 mb-5">
            Join our waitlist to be the first to experience CUBES when we launch.
          </p>
          <a href="/#waitlist" className="btn-primary">
            Join Waitlist
          </a>
        </div>
      </section>
    </>
  );
}
