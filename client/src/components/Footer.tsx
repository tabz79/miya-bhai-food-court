import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { brandData } from '../data/brand';

export default function Footer() {
  const quickLinks = [
    { name: 'Our Menu', href: '/menu' },
    { name: 'All Branches', href: '/branches' },
    { name: 'About Us', href: '/about' },
    { name: 'Catering Services', href: '/catering' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Home Delivery', href: '/order' },
    { name: 'Table Booking', href: '/book' },
    { name: 'Event Catering', href: '/catering' },
    { name: 'Corporate Orders', href: '/contact' },
    { name: 'Bulk Orders', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-charcoal text-warm-gray">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-arabic font-bold text-zaffran">{brandData.urduName}</div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white">{brandData.name}</h3>
                <p className="text-sm text-jade">{brandData.tagline}</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Serving authentic Hyderabadi cuisine with royal flavors that have made us a household name for over 25 years.
            </p>
            <div className="flex space-x-3">
              <a href={brandData.social.facebook} className="text-warm-gray hover:text-zaffran transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={brandData.social.instagram} className="text-warm-gray hover:text-zaffran transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={brandData.social.twitter} className="text-warm-gray hover:text-zaffran transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={brandData.social.youtube} className="text-warm-gray hover:text-zaffran transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-zaffran transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-zaffran transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 text-jade" />
                <div>
                  <div>{brandData.contact.phone}</div>
                  <div>{brandData.contact.supportPhone}</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 text-jade" />
                <div>{brandData.contact.email}</div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-jade" />
                <div>HITEC City, Madhapur,<br />Hyderabad - 500081</div>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 text-jade" />
                <div>Daily: 11:00 AM - 11:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              © 2024 {brandData.name} {brandData.tagline}. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-zaffran transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
