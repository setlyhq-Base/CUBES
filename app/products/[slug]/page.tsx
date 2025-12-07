import { products, getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Thermometer, ChefHat } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found - CUBES',
    };
  }

  return {
    title: `${product.name} - CUBES`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Back Navigation */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-cream-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-forest-100">
                  <span className="text-9xl">🧊</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-forest-700 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {product.longDescription}
              </p>
              <button className="btn-primary mb-4" disabled>
                Coming Soon
              </button>
              <p className="text-sm text-neutral-500">
                Join our waitlist to be notified when {product.name} becomes available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-forest-700 mb-6">
                Ingredients
              </h2>
              <div className="bg-cream-100 rounded-2xl p-6">
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-neutral-700 text-lg">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-forest-700 mb-6">
                Storage Instructions
              </h2>
              <div className="bg-cream-100 rounded-2xl p-6">
                <div className="flex items-start mb-4">
                  <Thermometer className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-neutral-700 text-lg">{product.storage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="section-container bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <ChefHat className="text-primary-600 mr-3" size={36} />
            <h2 className="text-3xl font-bold text-forest-700">
              How to Use
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.howToUse.map((step, index) => (
              <div key={index} className="card">
                <div className="text-4xl font-bold text-primary-500 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-neutral-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-forest-700 mb-8">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <Check className="text-white" size={18} />
                </div>
                <p className="text-lg text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Recipes */}
      <section className="section-container bg-forest-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Perfect For These Recipes
          </h2>
          <p className="text-cream-200 mb-8 text-lg">
            Try {product.name} in these delicious dishes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {product.suggestedRecipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-forest-600 px-6 py-3 rounded-full text-white font-medium"
              >
                {recipe}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="section-container bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-forest-700 mb-4">
            Explore More Products
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Discover our full range of frozen cubes to make cooking even easier.
          </p>
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}
