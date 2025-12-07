import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { Heart, Target, Leaf, Zap, Shield, Clock, Trash2, Droplet, Sparkles, Users, TrendingUp, Award, ChefHat, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Brand Story - CUBES',
  description: 'Learn about CUBES mission, vision, values, and the founder\'s journey to revolutionize home cooking.',
};

export default function BrandPage() {
  const problemCards = [
    {
      icon: Clock,
      title: 'Endless Chopping',
      stat: '20-30min',
      description: 'wasted per meal on prep',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Trash2,
      title: 'Food Spoilage',
      stat: '40%',
      description: 'of produce goes to waste',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Droplet,
      title: 'Quality Issues',
      stat: '365 days',
      description: 'struggle to find fresh produce',
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  const valueCards = [
    {
      icon: Leaf,
      title: 'Freshness First',
      description: 'Peak ripeness, maximum nutrition',
      color: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-500'
    },
    {
      icon: Droplet,
      title: 'Smart Preservation',
      description: 'Flash-freezing, no chemicals',
      color: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Zero waste, eco-conscious',
      color: 'from-pink-50 to-rose-50',
      iconBg: 'bg-pink-500'
    },
    {
      icon: Zap,
      title: 'No Compromise',
      description: 'Convenience meets quality',
      color: 'from-yellow-50 to-amber-50',
      iconBg: 'bg-yellow-500'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Real ingredients, honest process',
      color: 'from-purple-50 to-violet-50',
      iconBg: 'bg-purple-500'
    }
  ];

  const journeySteps = [
    {
      phase: 'The Struggle',
      icon: Clock,
      story: 'Watching parents spend hours prepping fresh meals—then facing the reality of cooking alone.',
      emotion: '😓'
    },
    {
      phase: 'The Realization',
      icon: Trash2,
      story: 'Throwing away spoiled vegetables bought with good intentions. Ordering takeout yet again.',
      emotion: '💡'
    },
    {
      phase: 'The Idea',
      icon: Sparkles,
      story: 'What if someone had already done the prep work? What if cooking was just... easy?',
      emotion: '✨'
    },
    {
      phase: 'The Mission',
      icon: Target,
      story: 'Creating CUBES to help students, professionals, and families eat well without the hassle.',
      emotion: '🎯'
    }
  ];

  const impactStats = [
    { value: '30min', label: 'Time Saved', icon: Clock },
    { value: '40%', label: 'Less Waste', icon: Trash2 },
    { value: '100%', label: 'Fresh', icon: Leaf },
    { value: '9mo', label: 'Shelf Life', icon: Sparkles }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Story"
        subtitle="Real food for real people. A mission to bring back home-cooked meals without the hassle."
      />

      {/* Mission & Vision - Split Screen Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-forest-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-primary-300 transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-1 animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="text-white w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To make home cooking <span className="text-primary-600 font-semibold">effortless, accessible, and sustainable</span> for everyone—
                by delivering fresh, pre-prepped ingredients that save time, reduce waste, and preserve nutrition.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-gradient-to-br from-forest-700 to-forest-600 rounded-3xl p-8 md:p-10 border-2 border-forest-500 hover:border-forest-400 transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-1 animate-fade-in-up delay-200">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Heart className="text-forest-700 w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-cream-100 leading-relaxed">
                We envision a world where <span className="text-primary-300 font-semibold">every kitchen</span> is equipped with CUBES—
                where busy students, professionals, and families can enjoy 
                <span className="text-primary-300 font-semibold"> delicious, nutritious home-cooked meals</span> without the stress of meal prep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve - Interactive Stat Cards */}
      <section className="py-12 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              The Daily Frustrations
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              We understand what keeps you from cooking at home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {problemCards.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 overflow-hidden animate-fade-in-scale delay-${(index + 1) * 100}`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-forest-700 mb-3">{problem.title}</h3>

                    {/* Big Stat */}
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-forest-600 bg-clip-text text-transparent mb-2">
                      {problem.stat}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-neutral-600">{problem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result Callout */}
          <div className="max-w-3xl mx-auto animate-fade-in delay-400">
            <div className="relative bg-gradient-to-r from-primary-50 via-cream-50 to-forest-50 rounded-2xl p-8 border-2 border-primary-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
              <div className="relative z-10 text-center">
                <p className="text-lg text-neutral-700">
                  <span className="font-bold text-forest-700">The result?</span> People skip cooking altogether, 
                  resorting to expensive takeout or unhealthy processed meals. 
                  <span className="font-semibold text-primary-600"> We believe there&apos;s a better way.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Compact Cards with Hover Reveals */}
      <section className="py-12 bg-gradient-to-b from-cream-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <Sparkles className="w-8 h-8 text-primary-500 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-3">
              Our Values
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valueCards.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br ${value.color} rounded-2xl p-5 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-forest-700 mb-2 text-center">{value.title}</h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 text-center leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story - Interactive Timeline */}
      <section className="py-12 bg-gradient-to-br from-forest-700 via-forest-600 to-forest-700 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-4">
              <span className="text-primary-300 text-sm font-medium">Personal Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why I Created CUBES
            </h2>
            <p className="text-cream-200 text-lg max-w-2xl mx-auto">
              From frustration to innovation—one evening that changed everything
            </p>
          </div>

          {/* Journey Timeline - Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className={`group relative animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  {/* Timeline connector (desktop) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
                  )}

                  {/* Card */}
                  <div className="bg-forest-600/50 backdrop-blur-sm rounded-2xl p-6 border border-forest-500/30 hover:bg-forest-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    {/* Icon & Emotion */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-3xl">{step.emotion}</div>
                    </div>

                    {/* Phase Label */}
                    <div className="text-xs font-semibold text-primary-300 uppercase tracking-wide mb-2">
                      {step.phase}
                    </div>

                    {/* Story */}
                    <p className="text-sm text-cream-200 leading-relaxed">
                      {step.story}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Founder Quote Card */}
          <div className="max-w-4xl mx-auto animate-fade-in-scale delay-500">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="flex items-start gap-6">
                {/* Founder Photo */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/30">
                    <Image
                      src="/images/kiran_ceo.png"
                      alt="Kiran, Founder & CEO"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-lg md:text-xl text-cream-100 leading-relaxed mb-6 italic">
                    &ldquo;CUBES isn&apos;t just a product; it&apos;s a solution to a problem I lived. 
                    My hope is that CUBES will make it easier for you to enjoy healthy, delicious, 
                    home-cooked meals—<span className="text-primary-300 font-semibold">without the hassle that kept me from cooking</span> in the first place.&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-white text-lg">Kiran</div>
                      <div className="text-cream-300 text-sm">Founder & CEO, CUBES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-primary-600 via-primary-500 to-forest-600 gradient-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`text-center group animate-fade-in delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-white/80 mr-2" />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-cream-50 via-white to-primary-50 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Join the Movement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-base text-neutral-600 mb-8 max-w-lg mx-auto">
              Be part of the movement to bring back home cooking. Join our waitlist and be the first to experience CUBES.
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
              <Heart className="w-4 h-4" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
