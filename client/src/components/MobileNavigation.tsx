import { Link, useLocation } from 'wouter';
import { Home, Menu as MenuIcon, ShoppingCart, Calendar, Phone } from 'lucide-react';

export default function MobileNavigation() {
  const [location] = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Menu', href: '/menu', icon: MenuIcon },
    { name: 'Order', href: '/order', icon: ShoppingCart, special: true },
    { name: 'Book', href: '/book', icon: Calendar },
    { name: 'Call', href: '/contact', icon: Phone }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-warm-gray z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center transition-colors ${
                item.special
                  ? 'bg-jade text-white rounded-t-2xl -mt-2 shadow-lg'
                  : location === item.href
                  ? 'text-biryani'
                  : 'text-charcoal hover:text-biryani'
              }`}
            >
              <Icon className={`${item.special ? 'w-6 h-6' : 'w-5 h-5'} mb-1`} />
              <span className={`text-xs ${item.special ? 'font-bold' : 'font-medium'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
