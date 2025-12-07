import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import BenefitCard from '@/components/BenefitCard';
import FeatureCard from '@/components/FeatureCard';
import { 
  Clock, 
  Leaf, 
  Trash2, 
  Scale, 
  Snowflake,
  ChefHat,
  AlertCircle,
  Calendar,
  Heart,
  Zap,
  Shield
} from 'lucide-react';
import { getFeaturedProducts } from '@/lib/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  const problemPoints = [
    {
      icon: Clock,
      title: 'Time-Consuming Prep',
      description: 'Chopping, peeling, and washing vegetables takes 20-30 minutes every meal.'
    },
    {
      icon: Trash2,
      title: 'Food Waste',
      description: 'Fresh produce spoils quickly, leading to waste and repeated grocery trips.'
    },
    {
      icon: AlertCircle,
      title: 'Inconsistent Quality',
      description: 'Finding fresh, quality produce can be unpredictable and seasonal.'
    },
    {
      icon: Calendar,
      title: 'Busy Lifestyles',
      description: 'Students, professionals, and families struggle to find time for home-cooked meals.'
    }
  ];

  const benefits = [
    {
      icon: ChefHat,
      title: 'Zero Prep',
      description: 'No chopping, peeling, or washing. Just drop the cubes and cook.'
    },
    {
      icon: Leaf,
      title: 'Zero Preservatives',
      description: 'Nothing but real, fresh ingredients. No chemicals, no additives.'
    },
    {
      icon: Trash2,
      title: 'Zero Waste',
      description: 'Use only what you need. Pre-portioned cubes mean no spoilage.'
    },
    {
      icon: Scale,
      title: 'Perfect Portions',
      description: 'Consistent portions every time for reliable, delicious results.'
    },
    {
      icon: Snowflake,
      title: 'Infinite Freshness',
      description: 'Flash-frozen at peak ripeness. Stays fresh for 6-9 months.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Source Fresh',
      description: 'We select the freshest vegetables, fruits, and herbs from trusted suppliers.'
    },
    {
      number: '02',
      title: 'Prep & Portion',
      description: 'Everything is washed, chopped, and portioned to perfection by our team.'
    },
    {
      number: '03',
      title: 'Flash Freeze',
      description: 'We freeze at peak freshness to lock in nutrients, flavor, and color.'
    },
    {
      number: '04',
      title: 'Drop & Cook',
      description: 'You drop cubes directly into your cooking—no thawing needed!'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Real food. Zero prep. Infinite freshness."
        subtitle="Frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs. No preservatives, no waste, no hassle—just drop, cook, and enjoy."
        primaryCta={{ text: 'Explore Products', href: '/products' }}
        secondaryCta={{ text: 'How It Works', href: '/how-it-works' }}
      />

      {/* Problem Section - Compact Card Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="We know cooking from scratch can feel overwhelming">
            The Daily Kitchen Challenge
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {problemPoints.map((point, index) => (
              <FeatureCard
                key={index}
                icon={point.icon}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Compact */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle centered>
            Meet CUBES: Your Kitchen Shortcut
          </SectionTitle>
          <p className="text-base text-neutral-600 mb-6 max-w-2xl mx-auto">
            Frozen portion-controlled cubes made from fresh vegetables, fruits, curry bases, and herbs. Perfectly portioned for your cooking needs.
          </p>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="flex-1">
                <div className="text-4xl mb-2">🧊</div>
                <h3 className="text-lg font-semibold text-forest-700 mb-1">Drop</h3>
                <p className="text-neutral-600 text-sm">From freezer to pan</p>
              </div>
              <div className="text-2xl text-primary-500">→</div>
              <div className="flex-1">
                <div className="text-4xl mb-2">🍳</div>
                <h3 className="text-lg font-semibold text-forest-700 mb-1">Cook</h3>
                <p className="text-neutral-600 text-sm">Heat & incorporate</p>
              </div>
              <div className="text-2xl text-primary-500">→</div>
              <div className="flex-1">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="text-lg font-semibold text-forest-700 mb-1">Enjoy</h3>
                <p className="text-neutral-600 text-sm">Restaurant-quality meals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Compact Card Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Everything you need, nothing you don't">
            Why Choose CUBES?
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Grid - Compact */}
      <section className="py-12 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            centered 
            subtitle="From everyday essentials to gourmet shortcuts"
          >
            Our Product Range
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              slug={product.slug}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        <div className="text-center mt-2">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
        </div>
      </section>

      {/* How It Works Mini Teaser - Compact */}
      <section className="py-12 bg-forest-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered>
            <span className="text-white">How CUBES Come to Life</span>
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center bg-forest-600 rounded-xl p-5">
                <div className="text-4xl font-bold text-primary-400 mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-cream-200 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/how-it-works" className="btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof - Compact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-3">
              Made for Modern Lifestyles
            </h2>
            <p className="text-base text-neutral-600 max-w-3xl mx-auto">
              Loved by students, professionals, health-conscious cooks, and families craving authentic flavors without the prep time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-cream-50 rounded-xl p-5 border border-cream-200">
              <div className="text-3xl mb-2">👨‍🎓</div>
              <h3 className="font-semibold text-forest-700 mb-2">Students</h3>
              <p className="text-neutral-600 text-sm">Quick, healthy meals between classes</p>
            </div>
            <div className="bg-cream-50 rounded-xl p-5 border border-cream-200">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-semibold text-forest-700 mb-2">Professionals</h3>
              <p className="text-neutral-600 text-sm">Home-cooked meals without sacrificing evenings</p>
            </div>
            <div className="bg-cream-50 rounded-xl p-5 border border-cream-200">
              <div className="text-3xl mb-2">👨‍👩‍👧</div>
              <h3 className="font-semibold text-forest-700 mb-2">Families</h3>
              <p className="text-neutral-600 text-sm">Nutritious dinners the whole family will love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture / CTA - Compact */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-forest-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-3">
            Get Notified When We Launch
          </h2>
          <p className="text-base text-neutral-600 mb-6">
            Be the first to experience the future of home cooking. Join our waitlist for exclusive early access and special launch offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-forest-300 focus:border-primary-500 focus:outline-none text-neutral-700"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Join Waitlist
            </button>
          </form>
          <p className="text-sm text-neutral-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
