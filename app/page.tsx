import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import BenefitCard from '@/components/BenefitCard';
import FeatureCard from '@/components/FeatureCard';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  Clock, 
  Leaf, 
  Trash2, 
  Scale, 
  Snowflake,
  ChefHat,
  AlertCircle,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
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
      description: 'Chopping and washing takes 20-30 minutes per meal'
    },
    {
      icon: Trash2,
      title: 'Food Waste',
      description: 'Fresh produce spoils before you can use it'
    },
    {
      icon: AlertCircle,
      title: 'Inconsistent Quality',
      description: 'Finding fresh produce is unpredictable'
    },
    {
      icon: Calendar,
      title: 'Busy Lifestyles',
      description: 'No time for home-cooked meals'
    }
  ];

  const benefits = [
    {
      icon: ChefHat,
      title: 'Zero Prep',
      description: 'No chopping, peeling, or washing. Just drop and cook.'
    },
    {
      icon: Leaf,
      title: 'Zero Preservatives',
      description: 'Real, fresh ingredients. No chemicals or additives.'
    },
    {
      icon: Trash2,
      title: 'Zero Waste',
      description: 'Pre-portioned cubes mean no spoilage.'
    },
    {
      icon: Scale,
      title: 'Perfect Portions',
      description: 'Consistent results every single time.'
    },
    {
      icon: Snowflake,
      title: 'Infinite Freshness',
      description: 'Stays fresh for 6-9 months in your freezer.'
    },
    {
      icon: Award,
      title: 'Restaurant Quality',
      description: 'Professional-grade flavor at home.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Source Fresh',
      description: 'Fresh vegetables, fruits, and herbs from trusted suppliers'
    },
    {
      number: '02',
      title: 'Prep & Portion',
      description: 'Washed, chopped, and perfectly portioned'
    },
    {
      number: '03',
      title: 'Flash Freeze',
      description: 'Frozen at peak freshness to lock in nutrients'
    },
    {
      number: '04',
      title: 'Drop & Cook',
      description: 'Ready to use—no thawing needed'
    }
  ];

  const stats = [
    { value: 30, suffix: 'min', label: 'Saved per meal', icon: Clock },
    { value: 100, suffix: '%', label: 'Fresh ingredients', icon: Leaf },
    { value: 9, suffix: 'mo', label: 'Stays fresh', icon: Snowflake },
    { value: 0, suffix: '', label: 'Food waste', prefix: '', icon: TrendingUp }
  ];

  return (
    <>
      {/* Hero Section with Animation */}
      <HeroSection
        title="Real food. Zero prep. Infinite freshness."
        subtitle="Frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs. No preservatives, no waste, no hassle—just drop, cook, and enjoy."
        primaryCta={{ text: 'Explore Products', href: '/products' }}
        secondaryCta={{ text: 'How It Works', href: '/how-it-works' }}
      />

      {/* Stats Bar - Animated Counters */}
      <section className="py-10 bg-gradient-to-r from-forest-700 via-forest-600 to-forest-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary-300 mr-2" />
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value === 0 ? (
                      <span>Zero</span>
                    ) : (
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        prefix={stat.prefix || ''}
                      />
                    )}
                  </div>
                </div>
                <div className="text-sm text-cream-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section with Scroll Reveals */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionTitle centered subtitle="We know cooking from scratch can feel overwhelming">
                The Daily Kitchen Challenge
              </SectionTitle>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <FeatureCard
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits - Scroll Revealed Grid */}
      <section className="py-16 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionTitle centered subtitle="Everything you need, nothing you don't">
                Why Choose CUBES?
              </SectionTitle>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="scale">
                <BenefitCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview - Premium Grid with Scroll Reveals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionTitle 
                centered 
                subtitle="From everyday essentials to gourmet shortcuts"
              >
                Our Product Range
              </SectionTitle>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100} direction="scale">
                <ProductCard
                  name={product.name}
                  description={product.description}
                  slug={product.slug}
                  imageUrl={product.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="scale">
            <div className="text-center">
              <Link href="/products" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
                View All Products
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works - Clean Section with Icons */}
      <section className="py-16 bg-gradient-to-br from-forest-700 to-forest-600 text-white relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How CUBES Come to Life</h2>
              <p className="text-cream-200 text-lg max-w-2xl mx-auto">
                From farm to freezer—here's our simple 4-step process
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold text-white border-2 border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-cream-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/how-it-works" className="btn-secondary inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-forest-700 border-0">
                Learn More About Our Process
                <ChefHat className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof - Persona Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-3">
              Made for Modern Lifestyles
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
              Join thousands who are transforming their cooking experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '👨‍🎓', title: 'Students', desc: 'Quick, healthy meals between classes' },
              { emoji: '💼', title: 'Professionals', desc: 'Home-cooked without sacrificing evenings' },
              { emoji: '👨‍👩‍👧', title: 'Families', desc: 'Nutritious dinners everyone loves' }
            ].map((persona, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-cream-50 to-white rounded-2xl p-6 border-2 border-cream-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{persona.emoji}</div>
                <h3 className="font-bold text-forest-700 mb-2 text-lg">{persona.title}</h3>
                <p className="text-neutral-600 text-sm">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Gradient */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-cream-50 to-forest-50 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Launching Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
              Get Notified When We Launch
            </h2>
            <p className="text-base text-neutral-600 mb-8 max-w-lg mx-auto">
              Be first to experience the future of home cooking. Exclusive early access and launch offers.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4 animate-fade-in-up delay-200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3.5 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 text-neutral-700 transition-all shadow-sm"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap px-8">
              Join Waitlist
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-6 text-sm text-neutral-500 animate-fade-in delay-300">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>No spam ever</span>
            </div>
            <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Leaf className="w-4 h-4" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
