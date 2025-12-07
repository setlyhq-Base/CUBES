import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import { Users, TrendingUp, Target, DollarSign, Rocket } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why CUBES - For Partners & Investors',
  description: 'Learn about the CUBES market opportunity, competitive advantage, and vision for the future of convenience food.',
};

export default function WhyCubesPage() {
  const targetAudiences = [
    {
      emoji: '👨‍🎓',
      title: 'Students',
      description: 'Living away from home, tight budgets, limited cooking skills, need quick and affordable meals.'
    },
    {
      emoji: '💼',
      title: 'Working Professionals',
      description: 'Long work hours, limited time for meal prep, want healthy options without the hassle.'
    },
    {
      emoji: '👨‍👩‍👧',
      title: 'Young Families',
      description: 'Busy parents juggling work and childcare, need nutritious meals fast.'
    },
    {
      emoji: '🏃',
      title: 'Health-Conscious Consumers',
      description: 'Want control over ingredients, avoid processed foods, prioritize nutrition.'
    },
    {
      emoji: '🍛',
      title: 'Indian Diaspora & Home Cooks',
      description: 'Crave authentic flavors, miss home-cooked meals, but lack time for traditional prep.'
    }
  ];

  const competitors = [
    {
      category: 'Traditional Frozen Vegetables',
      limitation: 'Limited variety, not portion-controlled, still requires prep work.'
    },
    {
      category: 'Meal Kit Services',
      limitation: 'Expensive ($8-15 per serving), subscription fatigue, still requires cooking from scratch.'
    },
    {
      category: 'Pre-Cut Fresh Vegetables',
      limitation: 'Short shelf life (3-5 days), expensive, limited availability.'
    },
    {
      category: 'Ready-Made Meals',
      limitation: 'Loaded with preservatives, high sodium, lacks authenticity and customization.'
    }
  ];

  return (
    <>
      <HeroSection
        title="Why CUBES?"
        subtitle="A massive market opportunity in the intersection of convenience, health, and sustainability."
      />

      {/* The Problem - Market Context */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered subtitle="The modern consumer is caught in a dilemma">
            The Convenience vs. Health Trade-Off
          </SectionTitle>
          <div className="bg-cream-100 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Consumers want <span className="font-semibold text-forest-700">healthy, home-cooked meals</span>, 
              but meal prep is time-consuming and overwhelming. At the same time, they're tired of:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-2xl">•</span>
                <span className="text-neutral-700">Expensive takeout and delivery services</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-2xl">•</span>
                <span className="text-neutral-700">Processed, preservative-laden convenience foods</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-2xl">•</span>
                <span className="text-neutral-700">Food waste from produce that spoils before it's used</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-2xl">•</span>
                <span className="text-neutral-700">Meal kits with subscription fatigue and still-lengthy prep</span>
              </li>
            </ul>
            <p className="text-lg text-forest-700 font-semibold text-center">
              CUBES fills this gap perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="section-container bg-cream-100">
        <SectionTitle centered subtitle="Who we serve">
          Our Target Audience
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {targetAudiences.map((audience, index) => (
            <div key={index} className="card text-center">
              <div className="text-5xl mb-4">{audience.emoji}</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                {audience.title}
              </h3>
              <p className="text-neutral-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Size */}
      <section className="section-container bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle centered>
            The Market Opportunity
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">$70B+</div>
              <p className="text-neutral-700 font-medium">US Frozen Food Market</p>
              <p className="text-sm text-neutral-500 mt-2">Growing annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-forest-600 mb-2">8-12%</div>
              <p className="text-neutral-700 font-medium">Convenience Food CAGR</p>
              <p className="text-sm text-neutral-500 mt-2">Annual growth rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">$25B+</div>
              <p className="text-neutral-700 font-medium">Meal Kit Market</p>
              <p className="text-sm text-neutral-500 mt-2">Shifting preferences</p>
            </div>
          </div>
          <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-8">
            <p className="text-lg text-neutral-700">
              <span className="font-semibold text-forest-700">The opportunity is massive:</span> As consumers seek healthier, 
              more sustainable alternatives to traditional convenience foods, CUBES is positioned to capture a significant 
              share of the growing frozen and convenience food markets.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-container bg-forest-700 text-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle centered>
            <span className="text-white">How CUBES is Different</span>
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitors.map((competitor, index) => (
              <div key={index} className="bg-forest-600 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary-300">
                  vs. {competitor.category}
                </h3>
                <p className="text-cream-200 mb-4">
                  <span className="text-red-300">✗</span> {competitor.limitation}
                </p>
                <p className="text-white font-medium">
                  <span className="text-primary-400">✓</span> CUBES offers better value, convenience, and quality
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Unique Value Proposition */}
      <section className="section-container bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered>
            The CUBES Advantage
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                Faster Than Meal Kits
              </h3>
              <p className="text-neutral-600">
                No subscription required. No 30-minute recipes. Just drop, cook, and eat in under 10 minutes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                More Affordable
              </h3>
              <p className="text-neutral-600">
                Significantly cheaper than meal kits and takeout. Premium quality without the premium price.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                Healthier Than Frozen Meals
              </h3>
              <p className="text-neutral-600">
                No preservatives, no sodium bombs, no mystery ingredients. Just real food, frozen right.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-forest-700 mb-3">
                Better Than Fresh Cut Veg
              </h3>
              <p className="text-neutral-600">
                Lasts 6-9 months vs. 3-5 days. More variety. Less waste. Lower cost per serving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <Rocket className="text-white" size={32} />
          </div>
          <SectionTitle centered>
            Our Vision for the Future
          </SectionTitle>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            CUBES will become the <span className="font-semibold text-forest-700">new frozen aisle staple</span>—
            as ubiquitous as frozen peas or ice cream. We envision CUBES in every home freezer, 
            helping millions of people cook better, faster, and smarter.
          </p>
          <div className="bg-gradient-to-br from-primary-50 to-forest-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-forest-700 mb-4">
              Expansion Roadmap
            </h3>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start">
                <span className="font-bold text-primary-600 mr-4">Phase 1:</span>
                <span className="text-neutral-700">Launch core vegetable and fruit cubes in local markets</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary-600 mr-4">Phase 2:</span>
                <span className="text-neutral-700">Expand to specialty cubes (curry bases, smoothie blends, ethnic flavors)</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary-600 mr-4">Phase 3:</span>
                <span className="text-neutral-700">Partner with grocery chains and online delivery platforms</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-primary-600 mr-4">Phase 4:</span>
                <span className="text-neutral-700">National and international distribution, subscription models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Partners */}
      <section className="section-container bg-forest-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnering with CUBES?
          </h2>
          <p className="text-xl text-cream-200 mb-8">
            Whether you're a retailer, investor, or distributor, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="mailto:cubeshq@gmail.com" className="btn-secondary bg-white hover:bg-cream-100">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
