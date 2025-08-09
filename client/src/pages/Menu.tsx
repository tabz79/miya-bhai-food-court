import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import MenuCard from '../components/MenuCard';
import { brandData } from '../data/brand';
import { menuData } from '../data/menu';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuData.items 
    : menuData.items.filter(item => item.category === selectedCategory);

  const handleAddToCart = (itemId: number) => {
    console.log('Add to cart:', itemId);
    // TODO: Implement cart functionality
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": `${brandData.name} Menu`,
    "description": "Complete menu of authentic Hyderabadi cuisine",
    "hasMenuSection": menuData.categories.filter(cat => cat.id !== 'all').map(category => ({
      "@type": "MenuSection",
      "name": category.name,
      "hasMenuItem": menuData.items
        .filter(item => item.category === category.id)
        .map(item => ({
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price,
            "priceCurrency": "INR"
          }
        }))
    }))
  };

  return (
    <>
      <SEOHead
        title={`Menu - ${brandData.name} ${brandData.tagline}`}
        description="Explore our complete menu of authentic Hyderabadi cuisine including biryani, tandoori dishes, beverages, and desserts."
        keywords="Hyderabadi menu, biryani menu, tandoori dishes, Indian food menu, restaurant menu"
        structuredData={structuredData}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-warm-gray max-w-3xl mx-auto mb-4">
              Explore the rich tapestry of Hyderabadi flavors at Miya Bhai Food Court. Our menu features a wide array of authentic dishes, from world-famous biryanis to succulent kebabs and traditional desserts, all prepared with generations-old recipes.
            </p>
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              منو خصوصی
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Our Complete Menu
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Discover the authentic flavors of Hyderabad with our traditional recipes passed down through generations
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {menuData.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all shadow-md ${
                    selectedCategory === category.id
                      ? 'bg-biryani text-white'
                      : 'bg-white text-charcoal hover:bg-biryani hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* No items message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
