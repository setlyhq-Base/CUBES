import Link from 'next/link';
import Image from 'next/image';
import { Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { href: '/products', label: 'All Products' },
      { href: '/products/onion-cubes', label: 'Onion Cubes' },
      { href: '/products/tomato-cubes', label: 'Tomato Cubes' },
      { href: '/products/mixed-veg-cubes', label: 'Mixed Veg Cubes' },
    ],
    company: [
      { href: '/brand', label: 'Our Story' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/why-cubes', label: 'Why CUBES' },
      { href: '/contact', label: 'Contact Us' },
    ],
    support: [
      { href: '/contact', label: 'Customer Support' },
      { href: '/contact', label: 'For Retailers' },
      { href: '/contact', label: 'For Investors' },
    ],
  };

  return (
    <footer className="bg-forest-700 text-white pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/CUBES_logo.png"
                  alt="CUBES Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">CUBES</span>
            </Link>
            <p className="text-cream-200 mb-4 max-w-sm">
              Real food. Zero prep. Infinite freshness.
            </p>
            <p className="text-cream-300 text-sm mb-4">
              Frozen portion-controlled cubes made from fresh vegetables, fruits, and herbs.
            </p>
            <div className="flex items-center space-x-2 text-cream-200">
              <Mail size={18} />
              <a href="mailto:cubeshq@gmail.com" className="hover:text-primary-400 transition-colors">
                cubeshq@gmail.com
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-forest-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CUBES. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-cream-200 hover:text-primary-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
