import ScrollReveal from '@/components/ScrollReveal';
import { 
  Users, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Rocket, 
  Zap, 
  Clock, 
  Heart, 
  Leaf, 
  Shield, 
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  Package,
  Globe,
  Store
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why CUBES - For Partners & Investors',
  description: 'Learn about the CUBES market opportunity, competitive advantage, and vision for the future of convenience food.',
};

export default function WhyCubesPage() {
  const targetAudiences = [
    {
      emoji: '👨‍🎓',
      icon: Users,
      title: 'Students',
      stat: '20M+',
      description: 'Tight budgets, quick meals needed',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      emoji: '💼',
      icon: Clock,
      title: 'Professionals',
      stat: '45M+',
      description: 'Long hours, healthy options wanted',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      emoji: '👨‍👩‍👧',
      icon: Heart,
      title: 'Young Families',
      stat: '30M+',
      description: 'Busy parents, nutritious meals fast',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      emoji: '🏃',
      icon: Zap,
      title: 'Health-Conscious',
      stat: '60M+',
      description: 'Control ingredients, avoid processed',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      emoji: '🍛',
      icon: Globe,
      title: 'Diaspora',
      stat: '15M+',
      description: 'Authentic flavors, less prep time',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const painPoints = [
    { icon: DollarSign, text: 'Expensive takeout and delivery', color: 'text-red-500' },
    { icon: Package, text: 'Processed, preservative-laden foods', color: 'text-orange-500' },
    { icon: Leaf, text: 'Food waste from spoiled produce', color: 'text-green-500' },
    { icon: Clock, text: 'Meal kits with subscription fatigue', color: 'text-blue-500' }
  ];

  const marketStats = [
    {
      value: '$70B+',
      label: 'US Frozen Food Market',
      sublabel: 'Growing annually',
      icon: TrendingUp,
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      value: '8-12%',
      label: 'Convenience Food CAGR',
      sublabel: 'Annual growth rate',
      icon: Target,
      gradient: 'from-forest-500 to-forest-600'
    },
    {
      value: '$25B+',
      label: 'Meal Kit Market',
      sublabel: 'Shifting preferences',
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const competitors = [
    {
      category: 'Traditional Frozen Veg',
      icon: Package,
      limitations: ['Limited variety', 'Not portion-controlled', 'Still requires prep'],
      gradient: 'from-gray-500 to-slate-600'
    },
    {
      category: 'Meal Kit Services',
      icon: DollarSign,
      limitations: ['$8-15 per serving', 'Subscription fatigue', 'Still scratch cooking'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      category: 'Pre-Cut Fresh',
      icon: Clock,
      limitations: ['3-5 days shelf life', 'Expensive', 'Limited availability'],
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      category: 'Ready-Made Meals',
      icon: Shield,
      limitations: ['Loaded with preservatives', 'High sodium', 'No customization'],
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  const advantages = [
    {
      emoji: '🚀',
      icon: Zap,
      title: 'Faster Than Meal Kits',
      description: 'Drop, cook, eat in under 10 minutes',
      stat: '10min',
      gradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-500'
    },
    {
      emoji: '💰',
      icon: DollarSign,
      title: 'More Affordable',
      description: 'Premium quality, no premium price',
      stat: '60% less',
      gradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-500'
    },
    {
      emoji: '🌱',
      icon: Leaf,
      title: 'Healthier Than Frozen',
      description: 'No preservatives, just real food',
      stat: '100% fresh',
      gradient: 'from-emerald-50 to-green-50',
      iconBg: 'bg-emerald-500'
    },
    {
      emoji: '🎯',
      icon: Target,
      title: 'Better Than Fresh Cut',
      description: '6-9 months vs 3-5 days',
      stat: '9mo shelf',
      gradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-500'
    }
  ];

  const roadmapPhases = [
    {
      phase: '1',
      title: 'Local Launch',
      description: 'Core vegetable and fruit cubes in local markets',
      icon: Store,
      color: 'primary'
    },
    {
      phase: '2',
      title: 'Product Expansion',
      description: 'Specialty cubes: curry bases, smoothies, ethnic flavors',
      icon: Package,
      color: 'forest'
    },
    {
      phase: '3',
      title: 'Partnership Scale',
      description: 'Grocery chains and online delivery platforms',
      icon: Users,
      color: 'green'
    },
    {
      phase: '4',
      title: 'Global Distribution',
      description: 'National and international, subscription models',
      icon: Globe,
      color: 'blue'
    }
  ];

  return (
    <>
      {/* The Problem - Interactive Pain Points */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                The Modern Dilemma
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
                The Convenience vs. Health Trade-Off
              </h2>
              <p className="text-base text-neutral-600 max-w-2xl mx-auto">
                Consumers want healthy meals, but meal prep is overwhelming
              </p>
            </div>
          </ScrollReveal>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <ScrollReveal key={index} delay={index * 80} direction="scale">
                  <div 
                    className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-6 h-6 ${point.color} flex-shrink-0 mt-1`} />
                      <p className="text-sm text-neutral-700 leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Result Callout */}
          <ScrollReveal delay={320}>
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-gradient-to-br from-primary-500 to-forest-600 rounded-2xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-3xl opacity-10"></div>
                <div className="relative z-10 text-center">
                  <Sparkles className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-lg font-semibold mb-2">
                    CUBES fills this gap perfectly
                  </p>
                  <p className="text-cream-200">
                    The perfect balance of convenience, health, and sustainability
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Audience - Enhanced Cards */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              Our Target Audience
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              170M+ consumers seeking convenient, healthy meal solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {targetAudiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 animate-fade-in-scale delay-${(index + 1) * 100}`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${audience.gradient} rounded-xl flex items-center justify-center mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Emoji */}
                    <div className="text-3xl mb-2 text-center">{audience.emoji}</div>

                    {/* Stat */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-forest-600 bg-clip-text text-transparent mb-2 text-center">
                      {audience.stat}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-forest-700 mb-2 text-center">{audience.title}</h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-600 text-center leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Opportunity - Animated Stats */}
      <section className="py-12 bg-gradient-to-br from-forest-700 via-forest-600 to-forest-700 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <TrendingUp className="w-8 h-8 text-primary-300 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Market Opportunity
            </h2>
            <p className="text-cream-200 max-w-2xl mx-auto">
              Massive growth in convenience food with shifting consumer preferences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {marketStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-forest-600/50 backdrop-blur-sm rounded-2xl p-8 border border-forest-500/30 hover:bg-forest-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-base font-semibold text-cream-100 mb-1">
                    {stat.label}
                  </div>

                  {/* Sublabel */}
                  <div className="text-sm text-cream-300">
                    {stat.sublabel}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Opportunity Callout */}
          <div className="max-w-4xl mx-auto animate-fade-in delay-400">
            <div className="bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-cream-100 leading-relaxed">
                <span className="font-bold text-white">The opportunity is massive:</span> As consumers seek healthier, 
                more sustainable alternatives, CUBES is positioned to capture significant market share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage - Comparison Cards */}
      <section className="py-12 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <Award className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              How CUBES is Different
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Clear advantages over traditional convenience options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitors.map((competitor, index) => {
              const Icon = competitor.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${competitor.gradient} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-forest-700">
                      vs. {competitor.category}
                    </h3>
                  </div>

                  {/* Limitations */}
                  <div className="space-y-2 mb-4 pl-1">
                    {competitor.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CUBES Advantage */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <p className="text-sm font-semibold text-forest-700">
                        CUBES offers better value, convenience, and quality
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUBES Advantage - Feature Highlights */}
      <section className="py-12 bg-gradient-to-b from-cream-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <Sparkles className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              The CUBES Advantage
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Superior in every way that matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br ${advantage.gradient} rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 animate-fade-in-scale delay-${(index + 1) * 100}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${advantage.iconBg} rounded-xl flex items-center justify-center mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Emoji */}
                  <div className="text-3xl mb-2">{advantage.emoji}</div>

                  {/* Stat Badge */}
                  <div className="inline-block bg-white rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-bold bg-gradient-to-r from-primary-600 to-forest-600 bg-clip-text text-transparent">
                      {advantage.stat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-forest-700 mb-2">{advantage.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Roadmap - Timeline */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-cream-50 to-forest-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <Rocket className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              Our Vision for the Future
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              CUBES will become the <span className="font-semibold">new frozen aisle staple</span>—
              in every home freezer, helping millions cook better, faster, smarter
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-forest-700 mb-8">
              Expansion Roadmap
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {roadmapPhases.map((phase, index) => {
                const Icon = phase.icon;
                const colorMap: {[key: string]: {bg: string, text: string, border: string}} = {
                  primary: {bg: 'bg-primary-500', text: 'text-primary-600', border: 'border-primary-300'},
                  forest: {bg: 'bg-forest-500', text: 'text-forest-600', border: 'border-forest-300'},
                  green: {bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-300'},
                  blue: {bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-300'}
                };
                const colors = colorMap[phase.color];

                return (
                  <div 
                    key={index}
                    className={`group relative animate-fade-in-up delay-${(index + 1) * 100}`}
                  >
                    {/* Connector Line (desktop) */}
                    {index < roadmapPhases.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
                    )}

                    {/* Card */}
                    <div className={`bg-white rounded-2xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}>
                      {/* Phase Number */}
                      <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-lg mb-3`}>
                        {phase.phase}
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 ${colors.bg}/10 rounded-xl flex items-center justify-center mb-3`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-forest-700 mb-2">{phase.title}</h4>

                      {/* Description */}
                      <p className="text-sm text-neutral-600 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA - Premium Design */}
      <section className="py-12 bg-gradient-to-br from-forest-700 via-forest-600 to-forest-700 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="text-primary-300 text-sm font-medium">Let&apos;s Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Partnering with CUBES?
            </h2>
            <p className="text-lg text-cream-200 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a retailer, investor, or distributor, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Get in Touch
            </a>
            <a href="mailto:cubeshq@gmail.com" className="bg-white hover:bg-cream-100 text-forest-700 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 inline-flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Email Us
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-cream-300 animate-fade-in delay-300">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Quick Response</span>
            </div>
            <div className="w-1 h-1 bg-cream-400 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Confidential</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
