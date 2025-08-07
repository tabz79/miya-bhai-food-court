import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { brandData } from '../data/brand';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Branches', href: '/branches' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-warm-gray container mx-auto px-4">
        <div className="flex items-center space-x-4 text-charcoal">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            {brandData.contact.phone}
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            {brandData.contact.email}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <a href={brandData.social.facebook} className="text-biryani hover:text-zaffran transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href={brandData.social.instagram} className="text-biryani hover:text-zaffran transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href={brandData.social.twitter} className="text-biryani hover:text-zaffran transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <div className="text-2xl md:text-3xl font-arabic font-bold text-biryani">
            {brandData.urduName}
          </div>
          <div className="ml-3">
            <h1 className="text-xl md:text-2xl font-bold text-charcoal">{brandData.name}</h1>
            <p className="text-xs text-biryani font-medium">{brandData.tagline}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors ${
                location === item.href
                  ? 'text-biryani'
                  : 'text-charcoal hover:text-biryani'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            href="/order"
            className="hidden md:block bg-jade text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Order Now
          </Link>
          <Link
            href="/book"
            className="bg-zaffran text-charcoal px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Book Table
          </Link>
          <button
            className="lg:hidden text-charcoal"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-warm-gray">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    location === item.href
                      ? 'text-biryani'
                      : 'text-charcoal hover:text-biryani'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
