import ScrollReveal from '@/components/ScrollReveal';
import { Sprout, ChefHat, Snowflake, Flame, Check, Sparkles, TrendingUp, Award, Clock, Leaf } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - CUBES',
  description: 'Learn how CUBES transforms fresh produce into convenient, portion-controlled frozen cubes.',
};

export default function HowItWorksPage() {
  const quickSteps = [
    {
      emoji: '🧊',
      title: 'Drop',
      description: 'From freezer to pan',
      gradient: 'from-blue-100 to-blue-50'
    },
    {
      emoji: '🍳',
      title: 'Cook',
      description: 'Heat & incorporate',
      gradient: 'from-orange-100 to-orange-50'
    },
    {
      emoji: '✨',
      title: 'Enjoy',
      description: 'Restaurant-quality meals',
      gradient: 'from-yellow-100 to-yellow-50'
    }
  ];

  const fullProcess = [
    {
      icon: Sprout,
      title: 'Source',
      description: 'Fresh produce at peak ripeness',
      details: [
        'Quality-checked at every stage',
        'Seasonal for maximum flavor',
        'Sustainable farming partners',
        'No harmful chemicals'
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: ChefHat,
      title: 'Prep',
      description: 'Cut, blanch/sauté (when needed), portion',
      details: [
        'Thoroughly washed and cleaned',
        'Expertly diced to uniform sizes',
        'Some items lightly blanched or sautéed',
        'Perfectly portioned for easy cooking'
      ],
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: Snowflake,
      title: 'Freeze',
      description: 'Flash-freeze at peak freshness',
      details: [
        'Rapid freezing preserves cell structure',
        'Retains vitamins and minerals',
        'No ice crystals or freezer burn',
        'Maintains authentic taste and texture'
      ],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Flame,
      title: 'Cook',
      description: 'Add cubes directly into pan',
      details: [
        'Use directly from freezer',
        'No thawing required',
        'Perfect portions every time',
        'Cooks in minutes'
      ],
      gradient: 'from-red-500 to-orange-600'
    },
    {
      icon: Sparkles,
      title: 'Enjoy',
      description: 'Fresh meals with zero prep',
      details: [
        'Restaurant-quality at home',
        'Save 20-30 minutes per meal',
        'No food waste',
        'Consistent results every time'
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const benefits = [
    {
      icon: '✓',
      title: 'Retains Nutrients',
      description: 'Flash-frozen vegetables retain more vitamins than "fresh" produce sitting on shelves for days.',
      color: 'from-green-50 to-emerald-50'
    },
    {
      icon: '✓',
      title: 'No Preservatives Needed',
      description: 'Freezing naturally preserves food without any chemicals, additives, or artificial preservatives.',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      icon: '✓',
      title: 'Extended Shelf Life',
      description: 'CUBES stay fresh for 6-9 months, eliminating food waste and reducing grocery trips.',
      color: 'from-purple-50 to-pink-50'
    },
    {
      icon: '✓',
      title: 'Authentic Taste',
      description: 'Properly frozen food tastes just as good as fresh—sometimes even better at peak ripeness.',
      color: 'from-orange-50 to-amber-50'
    }
  ];

  const qualityPromises = [
    {
      emoji: '🌱',
      title: '100% Real Food',
      description: 'No artificial flavors, colors, or preservatives. Just pure, real ingredients.'
    },
    {
      emoji: '✨',
      title: 'Peak Freshness',
      description: 'Frozen at the moment of peak ripeness for maximum flavor and nutrition.'
    },
    {
      emoji: '🔒',
      title: 'Quality Tested',
      description: 'Every batch is tested to ensure it meets our high standards for taste and safety.'
    }
  ];

  return (
    <>
      {/* Meet CUBES Section - Start Immediately */}
      <section className="pt-12 pb-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Sparkles className="w-10 h-10 text-primary-500 mx-auto mb-4 animate-float" />
              <h1 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
                Meet CUBES: Your Kitchen Shortcut
              </h1>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Perfectly portioned cubes made from fresh vegetables, fruits, and herbs
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} direction="scale">
            <div className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
                {quickSteps.map((step, index) => (
                  <div key={index} className="flex-1 group">
                    <div className={`w-20 h-20 mx-auto mb-3 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="text-4xl">{step.emoji}</div>
                    </div>
                    <h3 className="text-lg font-bold text-forest-700 mb-1">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.description}</p>
                    {index < quickSteps.length - 1 && (
                      <div className="md:hidden text-2xl text-primary-400 mt-4">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Process - Modern Timeline */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
                The Complete CUBES Process
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Every step designed for quality and freshness
              </p>
            </div>
          </ScrollReveal>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fullProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={index} delay={index * 100} direction="scale">
                  <div className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-300 p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-forest-700 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs text-neutral-600">
                          <Check className="w-3.5 h-3.5 text-primary-500 mr-1.5 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Flash Freezing */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Snowflake className="w-10 h-10 text-blue-500 mx-auto mb-4 animate-float" />
              <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
                Why Flash Freezing?
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Flash freezing is one of the <span className="font-semibold text-forest-700">most effective preservation methods available</span>. 
                By rapidly cooling food to extremely low temperatures, we preserve the cellular structure, locking in nutrients, flavor, and color.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${benefit.color} rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 animate-fade-in-scale delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md transform group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest-700 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 animate-fade-in delay-400">
            <p className="text-neutral-600 italic bg-white rounded-full px-6 py-3 inline-block shadow-sm">
              With CUBES, you&apos;re not compromising on quality—you&apos;re getting produce at its absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise - Enhanced Dark Section */}
      <section className="py-16 bg-gradient-to-br from-forest-700 via-forest-600 to-forest-700 text-white relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Quality Promise
            </h2>
            <p className="text-cream-200 max-w-2xl mx-auto">
              Every CUBES product is crafted with care, tested for quality, and designed to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityPromises.map((promise, index) => (
              <div 
                key={index}
                className={`group bg-forest-600/50 backdrop-blur-sm rounded-2xl p-8 border border-forest-500/30 hover:bg-forest-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{promise.emoji}</div>
                <h3 className="font-bold text-xl mb-3 text-white">{promise.title}</h3>
                <p className="text-cream-200 leading-relaxed">{promise.description}</p>
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
              Ready to Experience CUBES?
            </h2>
            <p className="text-base text-neutral-600 mb-8 max-w-lg mx-auto">
              Join our waitlist and be among the first to transform your cooking routine with CUBES.
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
              <Check className="w-4 h-4" />
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
