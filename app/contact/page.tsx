'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { Mail, MapPin, Clock, Building2, TrendingUp, Users, Globe, CheckCircle2, Send, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setCurrentTime(timeString);

      // Business hours: Mon-Fri 9AM-6PM EST
      const day = now.getDay();
      const hour = now.getHours();
      setIsBusinessHours(day >= 1 && day <= 5 && hour >= 9 && hour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      question: "How can I place an order?",
      answer: "Currently, CUBES is in pre-launch. Join our waitlist to be notified when we launch and get early access to ordering."
    },
    {
      question: "Do you offer wholesale or retail partnerships?",
      answer: "Yes! We're actively seeking retail and distribution partners. Email us at cubeshq@gmail.com with 'Partnership' in the subject line."
    },
    {
      question: "What's your typical response time?",
      answer: "We aim to respond to all inquiries within 24-48 hours during business days."
    },
    {
      question: "Are you open to investment discussions?",
      answer: "We're currently in conversations with strategic investors. Reach out via email with 'Investment Inquiry' in the subject."
    }
  ];

  return (
    <>
      <section className="pt-4 md:pt-6 pb-2 md:pb-3 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-forest-700 mb-1">
                Contact Hub
              </h1>
              <p className="text-xs md:text-sm text-neutral-600">
                Get in touch • Partner with us • Ask questions
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            
            <div className="lg:col-span-1 lg:sticky lg:top-8 lg:self-start space-y-3 md:space-y-4">
              
              <ScrollReveal direction="left">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs md:text-sm font-semibold text-forest-700">Team Status</h3>
                    <div className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-neutral-600">
                      <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 mr-2 text-primary-500" />
                      <span>{currentTime}</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-700">
                      {isBusinessHours ? (
                        <span className="text-green-600">🟢 Online now</span>
                      ) : (
                        <span className="text-gray-500">⚫ Offline • Reply within 24h</span>
                      )}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Mon-Fri • 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={80}>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                  <h3 className="text-xs md:text-sm font-semibold text-forest-700 mb-3 md:mb-4">Quick Contact</h3>
                  <div className="space-y-3 md:space-y-4">
                    <a 
                      href="mailto:cubeshq@gmail.com"
                      className="flex items-center p-3 bg-cream-50 rounded-lg md:rounded-xl hover:bg-primary-50 transition-all duration-300 group/item active:scale-95 touch-manipulation"
                    >
                      <div className="w-9 h-9 md:w-10 md:h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] md:text-xs font-medium text-neutral-500">Email</p>
                        <p className="text-xs md:text-sm font-semibold text-forest-700 truncate">cubeshq@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center p-3 bg-cream-50 rounded-lg md:rounded-xl">
                      <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] md:text-xs font-medium text-neutral-500">Based in</p>
                        <p className="text-xs md:text-sm font-semibold text-forest-700">United States 🇺🇸</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={160}>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <h3 className="text-xs md:text-sm font-semibold text-forest-700 mb-3 md:mb-4">I&apos;m a...</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:cubeshq@gmail.com?subject=Customer Inquiry"
                      className="flex items-center p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-cream-50 transition-all duration-300 group active:scale-95 touch-manipulation"
                    >
                      <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-500 mr-2.5 md:mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-neutral-700">Customer</span>
                    </a>
                    <a 
                      href="mailto:cubeshq@gmail.com?subject=Retail Partnership"
                      className="flex items-center p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-cream-50 transition-all duration-300 group active:scale-95 touch-manipulation"
                    >
                      <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 mr-2.5 md:mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-neutral-700">Retailer</span>
                    </a>
                    <a 
                      href="mailto:cubeshq@gmail.com?subject=Investment Inquiry"
                      className="flex items-center p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-cream-50 transition-all duration-300 group active:scale-95 touch-manipulation"
                    >
                      <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500 mr-2.5 md:mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-neutral-700">Investor</span>
                    </a>
                    <a 
                      href="mailto:cubeshq@gmail.com?subject=General Inquiry"
                      className="flex items-center p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-cream-50 transition-all duration-300 group active:scale-95 touch-manipulation"
                    >
                      <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500 mr-2.5 md:mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-neutral-700">Other</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={240}>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <h3 className="text-xs md:text-sm font-semibold text-forest-700 mb-3">Our Region</h3>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-lg md:rounded-xl overflow-hidden relative touch-manipulation">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12587376.64058994!2d-107.08481565000001!3d37.09024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-70"
                    ></iframe>
                  </div>
                  <p className="text-[10px] md:text-xs text-neutral-500 mt-2 text-center">
                    Serving nationwide
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-bold text-forest-700">
                      Send a Message
                    </h2>
                    {submitSuccess && (
                      <div className="flex items-center text-green-600 text-xs md:text-sm font-medium animate-fade-in">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Sent successfully!
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div>
                      <label className="block text-[10px] md:text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                        What can we help with?
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('inquiryType')}
                        onBlur={() => setFocusedField(null)}
                        className={`input-field text-sm md:text-base transition-all duration-300 touch-manipulation ${
                          focusedField === 'inquiryType' ? 'ring-2 ring-primary-500 border-primary-500' : ''
                        }`}
                      >
                        <option value="general">General Question</option>
                        <option value="customer">Customer Support</option>
                        <option value="retail">Retail Partnership</option>
                        <option value="investment">Investment Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] md:text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="John Doe"
                          className={`input-field text-sm md:text-base transition-all duration-300 touch-manipulation ${
                            focusedField === 'name' ? 'ring-2 ring-primary-500 border-primary-500 scale-[1.01] md:scale-[1.02]' : ''
                          }`}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] md:text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="john@example.com"
                          className={`input-field text-sm md:text-base transition-all duration-300 touch-manipulation ${
                            focusedField === 'email' ? 'ring-2 ring-primary-500 border-primary-500 scale-[1.01] md:scale-[1.02]' : ''
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[10px] md:text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="How can we help you?"
                        className={`input-field text-sm md:text-base transition-all duration-300 touch-manipulation ${
                          focusedField === 'subject' ? 'ring-2 ring-primary-500 border-primary-500 scale-[1.01] md:scale-[1.02]' : ''
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] md:text-xs font-semibold text-neutral-600 mb-2 uppercase tracking-wide">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        className={`input-field text-sm md:text-base resize-none transition-all duration-300 touch-manipulation ${
                          focusedField === 'message' ? 'ring-2 ring-primary-500 border-primary-500' : ''
                        }`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      className={`w-full btn-primary flex items-center justify-center group relative overflow-hidden touch-manipulation active:scale-95 ${
                        isSubmitting ? 'opacity-75 cursor-wait' : ''
                      } ${
                        submitSuccess ? 'bg-green-500 hover:bg-green-600' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span className="text-sm md:text-base">Sending...</span>
                        </>
                      ) : submitSuccess ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                          <span className="text-sm md:text-base">Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          <span className="text-sm md:text-base">Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] md:text-xs text-neutral-500 text-center">
                      We typically respond within 24-48 hours during business days
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-forest-700 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs md:text-sm text-neutral-600">
                Quick answers to common questions
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-2 md:space-y-3">
            {faqItems.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="up">
                <div className="bg-white border-2 border-gray-100 rounded-lg md:rounded-xl overflow-hidden hover:border-primary-200 transition-all duration-300 shadow-sm hover:shadow-md">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left group touch-manipulation active:scale-[0.98]"
                  >
                    <span className="font-semibold text-sm md:text-base text-forest-700 group-hover:text-primary-600 transition-colors pr-3 md:pr-4">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-cream-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                      <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={320}>
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-sm md:text-base text-neutral-600 mb-3 md:mb-4">
                Still have questions?
              </p>
              <a 
                href="mailto:cubeshq@gmail.com"
                className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 bg-cream-50 hover:bg-primary-50 text-forest-700 text-sm md:text-base font-semibold rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Email us directly
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
