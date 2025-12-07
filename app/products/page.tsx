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

      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* CTA Section */}
      <section className="section-container bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
            Ready to revolutionize your kitchen?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
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
