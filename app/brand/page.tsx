import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import IconBulletList from '@/components/IconBulletList';
import { Heart, Target, Leaf, Zap, Shield, Clock, Trash2, Droplet } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Brand Story - CUBES',
  description: 'Learn about CUBES mission, vision, values, and the founder\'s journey to revolutionize home cooking.',
};

export default function BrandPage() {
  const purposePoints = [
    {
      icon: Clock,
      title: 'Endless Chopping',
      description: 'No more spending 20-30 minutes cutting, peeling, and cleaning vegetables before you can even start cooking.'
    },
    {
      icon: Trash2,
      title: 'Food Spoilage & Waste',
      description: 'Fresh produce goes bad quickly, leading to wasted money and repeated trips to the grocery store.'
    },
    {
      icon: Droplet,
      title: 'Inconsistent Quality',
      description: 'Finding fresh, high-quality produce year-round is unpredictable and often frustrating.'
    }
  ];

  const brandValues = [
    {
      icon: Leaf,
      title: 'Freshness First',
      description: 'We source the best produce and freeze it at peak ripeness to lock in maximum nutrition, flavor, and quality.'
    },
    {
      icon: Droplet,
      title: 'Smart Preservation',
      description: 'Flash-freezing is one of nature\'s best preservation methods—no chemicals, no compromises, just pure freshness.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'By eliminating waste and extending shelf life, we help reduce food waste while supporting sustainable farming.'
    },
    {
      icon: Zap,
      title: 'Ease Without Compromise',
      description: 'Convenience should never mean sacrificing health, taste, or quality. CUBES delivers all three.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Real ingredients, clear labels, and honest processes. What you see is exactly what you get.'
    }
  ];

  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="Real food for real people. A mission to bring back home-cooked meals without the hassle."
      />

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <Target className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
            To make home cooking <span className="text-primary-600 font-semibold">effortless, accessible, and sustainable</span> for everyone—
            by delivering fresh, pre-prepped ingredients that save time, reduce waste, and preserve nutrition.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container bg-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-600 rounded-full mb-6">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-6">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-6">
            We envision a world where <span className="text-forest-600 font-semibold">every kitchen</span> is equipped with CUBES—
            where busy students, working professionals, and health-conscious families can enjoy 
            <span className="text-forest-600 font-semibold"> delicious, nutritious home-cooked meals</span> without the stress of meal prep.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            CUBES will become the <span className="font-semibold">go-to frozen aisle staple</span>—
            as essential as milk and eggs, redefining what convenience food means.
          </p>
        </div>
      </section>

      {/* Purpose - Problems We Solve */}
      <section className="section-container bg-white">
        <SectionTitle 
          centered 
          subtitle="We understand the daily frustrations of home cooking"
        >
          Problems We Solve
        </SectionTitle>
        <IconBulletList items={purposePoints} columns={3} />
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-8">
            <p className="text-lg text-neutral-700">
              <span className="font-semibold text-forest-700">The result?</span> People skip cooking altogether, 
              resorting to expensive takeout or unhealthy processed meals. 
              We believe there's a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-container bg-gradient-to-b from-cream-50 to-white">
        <SectionTitle 
          centered 
          subtitle="The principles that guide everything we do"
        >
          Our Values
        </SectionTitle>
        <IconBulletList items={brandValues} />
      </section>

      {/* Founder Story */}
      <section className="section-container bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why I Created CUBES
            </h2>
            <p className="text-cream-200 text-lg">
              A personal journey from frustration to innovation
            </p>
          </div>

          <div className="bg-forest-600 rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-cream-100 text-lg leading-relaxed mb-6">
                Hi, I'm <span className="font-semibold text-white">Kiran</span>, founder of CUBES. 
                Like many of you, I grew up watching my parents spend hours in the kitchen—
                chopping vegetables, grinding spices, and preparing fresh meals from scratch. 
                It was labor-intensive, but the food was always incredible.
              </p>
              
              <p className="text-cream-100 text-lg leading-relaxed mb-6">
                When I moved out and started living on my own, I quickly realized how much time 
                and effort went into those home-cooked meals. Between work, classes, and life responsibilities, 
                I found myself ordering takeout more than I'd like to admit. I wanted to cook, 
                but the <span className="text-primary-300 font-semibold">prep time was exhausting</span>.
              </p>

              <p className="text-cream-100 text-lg leading-relaxed mb-6">
                One evening, after throwing away spoiled vegetables I'd bought with good intentions, 
                I had an idea: <span className="text-white font-semibold">What if someone had already done the prep work for me?</span> 
                What if I could have perfectly portioned, fresh ingredients that I could just drop into my pan and cook?
              </p>

              <p className="text-cream-100 text-lg leading-relaxed mb-6">
                That's when CUBES was born. I wanted to create something that would help people like me—
                <span className="text-white font-semibold"> students, young professionals, busy parents, and anyone who wants to eat well</span> without sacrificing hours of their day.
              </p>

              <p className="text-cream-100 text-lg leading-relaxed">
                CUBES isn't just a product; it's a <span className="text-primary-300 font-semibold">solution to a problem I lived</span>. 
                My hope is that CUBES will make it easier for you to enjoy healthy, delicious, 
                home-cooked meals—without the hassle that kept me from cooking in the first place.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-forest-500 text-center">
              <p className="text-xl text-white font-semibold mb-2">
                — Kiran, Founder & CEO
              </p>
              <p className="text-cream-200">
                CUBES: Real food. Zero prep. Infinite freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Be part of the movement to bring back home cooking. Join our waitlist and be the first to experience CUBES.
          </p>
          <a href="/#waitlist" className="btn-primary">
            Join Waitlist
          </a>
        </div>
      </section>
    </>
  );
}
