import { ShoppingCart } from 'lucide-react';

interface MenuCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    isVeg: boolean;
    spiceLevel: string;
  };
  onAddToCart: (itemId: number) => void;
}

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'BESTSELLER':
        return 'bg-zaffran text-charcoal';
      case 'SPICY':
        return 'bg-red-500 text-white';
      case 'VEG':
        return 'bg-green-500 text-white';
      case 'REFRESHING':
        return 'bg-blue-500 text-white';
      case 'POPULAR':
        return 'bg-yellow-500 text-charcoal';
      case 'SWEET':
        return 'bg-pink-500 text-white';
      case 'MEDIUM':
        return 'bg-orange-500 text-white';
      case 'AUTHENTIC':
        return 'bg-biryani text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2 py-1 rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {item.isVeg && (
          <div className="absolute top-3 right-3">
            <div className="w-6 h-6 border-2 border-green-500 rounded-sm flex items-center justify-center bg-white">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-charcoal mb-2">{item.name}</h4>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-maroon">₹{item.price}</span>
          <button
            onClick={() => onAddToCart(item.id)}
            className="bg-brand-maroon text-brand-beige px-4 py-2 rounded-lg font-medium hover:bg-brand-gold hover:text-brand-maroon transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
