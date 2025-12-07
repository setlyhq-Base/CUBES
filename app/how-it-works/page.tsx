import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import { Sprout, ChefHat, Snowflake, Flame, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - CUBES',
  description: 'Learn how CUBES transforms fresh produce into convenient, portion-controlled frozen cubes.',
};

export default function HowItWorksPage() {
  const processSteps = [
    {
      icon: Sprout,
      number: '01',
      title: 'Sourcing Fresh Produce',
      description: 'We partner with trusted suppliers to source the freshest vegetables, fruits, and herbs at peak ripeness.',
      details: [
        'Quality-checked at every stage',
        'Seasonal produce for maximum flavor',
        'Sustainable farming partnerships',
        'No pesticides or harmful chemicals'
      ]
    },
    {
      icon: ChefHat,
      number: '02',
      title: 'Prep & Portion',
      description: 'Our team carefully washes, peels, chops, and portions every ingredient to perfection.',
      details: [
        'Thoroughly washed and cleaned',
        'Expertly diced to uniform sizes',
        'Some items lightly blanched or sautéed',
        'Perfectly portioned for easy cooking'
      ]
    },
    {
      icon: Snowflake,
      number: '03',
      title: 'Flash Freezing',
      description: 'We freeze ingredients at their peak freshness to lock in nutrients, color, and flavor.',
      details: [
        'Rapid freezing preserves cell structure',
        'Retains vitamins and minerals',
        'No ice crystals or freezer burn',
        'Maintains authentic taste and texture'
      ]
    },
    {
      icon: Flame,
      number: '04',
      title: 'Drop, Cook & Enjoy',
      description: 'You simply drop the cubes into your cooking—no thawing, no prep, no hassle.',
      details: [
        'Use directly from freezer',
        'No thawing required',
        'Perfect portions every time',
        'Ready in minutes, not hours'
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="How CUBES Come to Life"
        subtitle="From farm to freezer to your kitchen—discover the simple process that makes CUBES possible."
      />

      {/* Process Overview */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`mb-20 last:mb-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Icon and Number */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative">
                      <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-forest-100 rounded-3xl flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 shadow-md">
                            <Icon className="text-primary-600" size={48} />
                          </div>
                          <div className="text-6xl font-bold text-forest-700">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-12">
                    <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-forest-600 rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Flash Freezing */}
      <section className="section-container bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered>
            Why Flash Freezing?
          </SectionTitle>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Flash freezing is one of the <span className="font-semibold text-forest-700">most effective preservation methods available</span>. 
              By rapidly cooling food to extremely low temperatures, we preserve the cellular structure of fresh produce, 
              locking in nutrients, flavor, and color.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-forest-700 mb-3 text-lg">
                  ✓ Retains Nutrients
                </h4>
                <p className="text-neutral-600">
                  Studies show that flash-frozen vegetables can retain more vitamins than &ldquo;fresh&rdquo; produce that&apos;s been sitting on shelves for days.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-forest-700 mb-3 text-lg">
                  ✓ No Preservatives Needed
                </h4>
                <p className="text-neutral-600">
                  Freezing naturally preserves food without any chemicals, additives, or artificial preservatives.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-forest-700 mb-3 text-lg">
                  ✓ Extended Shelf Life
                </h4>
                <p className="text-neutral-600">
                  CUBES stay fresh for 6-9 months, eliminating food waste and reducing grocery trips.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-forest-700 mb-3 text-lg">
                  ✓ Authentic Taste
                </h4>
                <p className="text-neutral-600">
                  Properly frozen food tastes just as good as fresh—sometimes even better because it&apos;s frozen at peak ripeness.
                </p>
              </div>
            </div>
            <p className="text-neutral-600 italic text-center">
              With CUBES, you&apos;re not compromising on quality—you&apos;re getting produce at its absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-container bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Quality Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-600 rounded-2xl p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-semibold text-xl mb-3">100% Real Food</h3>
              <p className="text-cream-200">
                No artificial flavors, colors, or preservatives. Just pure, real ingredients.
              </p>
            </div>
            <div className="bg-forest-600 rounded-2xl p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-semibold text-xl mb-3">Peak Freshness</h3>
              <p className="text-cream-200">
                Frozen at the moment of peak ripeness for maximum flavor and nutrition.
              </p>
            </div>
            <div className="bg-forest-600 rounded-2xl p-6">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-semibold text-xl mb-3">Quality Tested</h3>
              <p className="text-cream-200">
                Every batch is tested to ensure it meets our high standards for taste and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
            Ready to Experience CUBES?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Join our waitlist and be among the first to transform your cooking routine.
          </p>
          <a href="/#waitlist" className="btn-primary">
            Join Waitlist
          </a>
        </div>
      </section>
    </>
  );
}
