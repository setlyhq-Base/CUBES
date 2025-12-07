'use client';

import HeroSection from '@/components/HeroSection';
import { Mail, MapPin, Phone, Building2, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Have questions? Want to partner with us? We'd love to hear from you."
      />

      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-forest-700 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Whether you&apos;re a customer, retailer, or investor, we&apos;re here to help. 
                Reach out and let&apos;s start a conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">Email</h3>
                    <a href="mailto:cubeshq@gmail.com" className="text-primary-600 hover:text-primary-700">
                      cubeshq@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700 mb-1">Location</h3>
                    <p className="text-neutral-600">United States</p>
                  </div>
                </div>
              </div>

              {/* Special Inquiries */}
              <div className="mt-12 space-y-4">
                <h3 className="text-2xl font-bold text-forest-700 mb-4">
                  Special Inquiries
                </h3>

                <div className="card">
                  <div className="flex items-center mb-3">
                    <Building2 className="text-primary-600 mr-3" size={24} />
                    <h4 className="font-semibold text-forest-700">For Retailers & Distributors</h4>
                  </div>
                  <p className="text-neutral-600 mb-3">
                    Interested in carrying CUBES in your store or becoming a distribution partner?
                  </p>
                  <a href="mailto:cubeshq@gmail.com?subject=Retail Partnership Inquiry" className="text-primary-600 hover:text-primary-700 font-medium">
                    Contact our partnerships team →
                  </a>
                </div>

                <div className="card">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="text-primary-600 mr-3" size={24} />
                    <h4 className="font-semibold text-forest-700">For Investors</h4>
                  </div>
                  <p className="text-neutral-600 mb-3">
                    Interested in learning more about investment opportunities with CUBES?
                  </p>
                  <a href="mailto:cubeshq@gmail.com?subject=Investment Inquiry" className="text-primary-600 hover:text-primary-700 font-medium">
                    Get in touch →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="text-2xl font-bold text-forest-700 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="customer">Customer Support</option>
                      <option value="retail">Retail Partnership</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-container bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-forest-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Before reaching out, you might find answers to common questions about CUBES, 
            our products, ordering, and more.
          </p>
          <button className="btn-secondary" disabled>
            View FAQ (Coming Soon)
          </button>
        </div>
      </section>
    </>
  );
}
