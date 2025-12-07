'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  Clock, 
  Leaf, 
  Snowflake,
  ChefHat,
  ArrowRight,
  Sparkles,
  Play,
  Check,
  Zap,
  Heart,
  Package
} from 'lucide-react';
import { getFeaturedProducts } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const steps = [
    { icon: Package, title: 'Drop', desc: 'Frozen cubes straight from freezer' },
    { icon: ChefHat, title: 'Cook', desc: 'No prep, no thaw, just cook' },
    { icon: Heart, title: 'Enjoy', desc: 'Fresh taste, zero hassle' }
  ];

  const quickStats = [
    { value: 30, suffix: 'min', label: 'Time saved', icon: Clock },
    { value: 100, suffix: '%', label: 'Fresh', icon: Leaf },
    { value: 9, suffix: 'mo', label: 'Shelf life', icon: Snowflake }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <>
      {/* App-Like Hero - Compact & Interactive */}
      <section className="pt-8 md:pt-12 pb-6 md:pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left: Clean Copy */}
            <ScrollReveal direction="left">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold">
                  <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5" />
                  PRE-LAUNCH
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-700 leading-tight">
                  Real food.<br />
                  Zero prep.<br />
                  <span className="text-primary-600">Infinite freshness.</span>
                </h1>
                
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  Flash-frozen portion cubes. Drop, cook, enjoy. No preservatives. No waste. No hassle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/products"
                    className="btn-primary inline-flex items-center justify-center gap-2 group text-center"
                  >
                    Explore Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cream-50 hover:bg-cream-100 text-forest-700 font-semibold rounded-xl transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Interactive Step Slider */}
            <ScrollReveal direction="right" delay={100}>
              <div className="relative">
                <div className="bg-gradient-to-br from-cream-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-soft border-2 border-gray-100">
                  {/* Step Display */}
                  <div className="space-y-3 md:space-y-6">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = index === activeStep;
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 touch-manipulation ${
                            isActive 
                              ? 'bg-primary-50 border-2 border-primary-300 scale-[1.02] md:scale-105' 
                              : 'bg-white border-2 border-gray-100 hover:border-gray-200 active:scale-95'
                          }`}
                        >
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive ? 'bg-primary-500 scale-110' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className={`font-bold text-sm md:text-base ${isActive ? 'text-forest-700' : 'text-neutral-600'}`}>
                              {step.title}
                            </h3>
                            <p className={`text-xs md:text-sm ${isActive ? 'text-neutral-700' : 'text-neutral-500'}`}>
                              {step.desc}
                            </p>
                          </div>
                          {isActive && (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center gap-2 mt-4 md:mt-6">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`h-1.5 md:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                          index === activeStep ? 'w-6 md:w-8 bg-primary-500' : 'w-1.5 md:w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar - Minimal */}
      <section className="py-4 md:py-6 bg-forest-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 mb-1">
                    <Icon className="w-3 h-3 md:w-4 md:h-4 text-primary-300" />
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-cream-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits - Compact Cards */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-forest-700 mb-2">
                Why CUBES?
              </h2>
              <p className="text-xs md:text-sm text-neutral-600">
                Everything you need, nothing you don&apos;t
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: Zap, title: 'Zero Prep', desc: 'Drop frozen cubes straight into your pan' },
              { icon: Leaf, title: 'Zero Chemicals', desc: 'Real ingredients, flash-frozen at peak' },
              { icon: Snowflake, title: 'Zero Waste', desc: 'Pre-portioned perfection, 9-month life' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} delay={index * 80} direction="scale">
                  <div className="bg-cream-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group active:scale-95">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-forest-700 mb-1 md:mb-2">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview - Minimal Grid */}
      <section className="py-8 md:py-12 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-3">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-forest-700 mb-1">
                  Featured Products
                </h2>
                <p className="text-xs md:text-sm text-neutral-600">
                  From everyday essentials to gourmet shortcuts
                </p>
              </div>
              <Link 
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-xs md:text-sm group"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
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

          <ScrollReveal>
            <div className="text-center sm:hidden">
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm active:scale-95 transition-transform"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mini How It Works - Just Link */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link 
              href="/how-it-works"
              className="block bg-gradient-to-br from-forest-700 to-forest-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white hover:shadow-2xl transition-all duration-300 group relative overflow-hidden active:scale-[0.98]"
            >
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
              </div>

              <div className="relative z-10 text-center">
                <ChefHat className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary-300 group-hover:scale-110 transition-transform" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                  How CUBES Come to Life
                </h2>
                <p className="text-cream-200 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
                  From farm to freezer—see our simple 4-step process that locks in freshness
                </p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold group-hover:bg-white/20 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof - Compact Row */}
      <section className="py-8 md:py-12 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-forest-700 mb-1">
                Made for Modern Lifestyles
              </h3>
              <p className="text-xs md:text-sm text-neutral-600">
                Perfect for busy people who love real food
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { emoji: '👨‍🎓', title: 'Students' },
              { emoji: '💼', title: 'Professionals' },
              { emoji: '👨‍👩‍👧', title: 'Families' }
            ].map((persona, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="scale">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 text-center group active:scale-95">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                    {persona.emoji}
                  </div>
                  <h4 className="font-bold text-forest-700 text-xs md:text-sm">{persona.title}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean & Compact */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary-50 to-cream-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-primary-100">
              <div className="inline-flex items-center gap-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-semibold text-primary-700 mb-3 md:mb-4">
                <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5" />
                Launching Soon
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-forest-700 mb-2 md:mb-3">
                Get Early Access
              </h2>
              
              <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6 max-w-md mx-auto">
                Join the waitlist for exclusive launch offers and be first to experience CUBES
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 md:px-5 py-3 rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-all text-sm"
                  required
                />
                <button type="submit" className="btn-primary px-6 py-3 text-sm touch-manipulation active:scale-95">
                  Join Waitlist
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-forest-700">How CUBES Works</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors touch-manipulation active:scale-90"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center">
              <p className="text-sm md:text-base text-neutral-500">Video demo coming soon</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
