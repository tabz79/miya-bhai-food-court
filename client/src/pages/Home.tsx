import { useState } from 'react';
import { Link } from 'wouter';
import { ShoppingCart, Calendar, MapPin, Clock, Users, Crown, Award, Heart, Truck, ChefHat, Headphones, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import MenuCard from '../components/MenuCard';
import BranchCard from '../components/BranchCard';
import TestimonialCard from '../components/TestimonialCard';
import { brandData } from '../data/brand';
import { menuData } from '../data/menu';
import { branchesData } from '../data/branches';
import { storyData } from '../data/story';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredItems = menuData.items.slice(0, 8);
  const featuredBranches = branchesData.branches.slice(0, 3);

  const handleAddToCart = (itemId: number) => {
    console.log('Add to cart:', itemId);
    // TODO: Implement cart functionality
  };

  const handleGetDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": `${brandData.name} ${brandData.tagline}`,
    "description": brandData.fullDescription,
    "cuisine": ["Indian", "Hyderabadi", "Nizami"],
    "priceRange": "$$",
    "servesCuisine": "Hyderabadi",
    "telephone": brandData.contact.phone,
    "email": brandData.contact.email,
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": menuData.categories.map(cat => ({
        "@type": "MenuSection",
        "name": cat.name
      }))
    }
  };

  return (
    <>
      <SEOHead
        title={`${brandData.name} ${brandData.tagline} - ${brandData.description}`}
        description={brandData.fullDescription}
        keywords={brandData.keywords}
        structuredData={structuredData}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-biryani to-charcoal overflow-hidden">
          <div className="absolute inset-0 bg-geometric opacity-30"></div>
          
          <div className="relative container mx-auto px-4 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-arabic font-bold text-zaffran mb-4">
                    بادشاہی ذائقہ
                  </h2>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Royal Flavors of Hyderabad
                  </h3>
                  <p className="text-lg md:text-xl text-warm-gray font-medium">
                    Experience the legendary taste that has made Miya Bhai a household name across generations
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/order"
                    className="bg-zaffran text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all text-center"
                  >
                    Order Now
                  </Link>
                  <Link
                    href="/menu"
                    className="border-2 border-jade text-jade px-8 py-4 rounded-lg font-bold text-lg hover:bg-jade hover:text-white transition-all text-center"
                  >
                    Explore Menu
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-warm-gray">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-zaffran" />
                    <span className="font-medium">{brandData.stats.branches} Branches</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-zaffran" />
                    <span className="font-medium">{brandData.stats.experience} Years</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-zaffran" />
                    <span className="font-medium">{brandData.stats.customers} Served</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Images Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={menuData.featured[0].image}
                      alt={menuData.featured[0].name}
                      className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{menuData.featured[0].name}</h4>
                      <p className="text-sm">{menuData.featured[0].description}</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={menuData.featured[1].image}
                      alt={menuData.featured[1].name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <h5 className="font-bold text-sm">{menuData.featured[1].name}</h5>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={menuData.featured[2].image}
                      alt={menuData.featured[2].name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <h5 className="font-bold text-sm">{menuData.featured[2].name}</h5>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-zaffran/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-jade/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-nizami-pattern opacity-50"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-arabic font-bold text-biryani mb-4">
                {storyData.title}
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-charcoal mb-6">
                {storyData.subtitle}
              </h3>
              <div className="w-24 h-1 bg-zaffran mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {storyData.paragraphs.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {storyData.heritage.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 bg-${point.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        {point.icon === 'crown' && <Crown className="w-4 h-4 text-charcoal" />}
                        {point.icon === 'clock' && <Clock className="w-4 h-4 text-white" />}
                        {point.icon === 'award' && <Award className="w-4 h-4 text-white" />}
                        {point.icon === 'heart' && <Heart className="w-4 h-4 text-charcoal" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal">{point.title}</h4>
                        <p className="text-gray-600 text-sm">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                      alt="Historic Hyderabadi Architecture"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
                      alt="Traditional Cooking Methods"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
                      alt="Charminar Hyderabad"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-arabic font-bold text-biryani mb-4">
                منو خصوصی
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-charcoal mb-6">
                Our Signature Menu
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the authentic flavors of Hyderabad with our carefully curated selection of traditional dishes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="bg-biryani text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all inline-block"
              >
                View Complete Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-arabic font-bold text-biryani mb-4">
                ہمارے مقامات
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-charcoal mb-6">
                Find Miya Bhai Near You
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit any of our conveniently located branches to experience authentic Hyderabadi cuisine
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredBranches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  onGetDirections={handleGetDirections}
                  onCall={handleCall}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/branches"
                className="bg-biryani text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all inline-block"
              >
                View All {brandData.stats.branches} Branches
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-biryani to-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-geometric opacity-20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-arabic font-bold text-zaffran mb-6">
              آج ہی آرڈر کریں
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Experience Royal Flavors Today
            </h3>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Don't wait to taste the authentic flavors of Hyderabad. Order now or book your table for an unforgettable dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/order"
                className="bg-zaffran text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Order for Delivery
              </Link>
              <Link
                href="/book"
                className="bg-jade text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Your Table
              </Link>
              <a
                href={`tel:${brandData.contact.phone}`}
                className="border-2 border-warm-gray text-warm-gray px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm-gray hover:text-charcoal transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-warm-gray">
              <div className="flex items-center">
                <Truck className="w-6 h-6 mr-2 text-zaffran" />
                <span className="font-medium">30-Min Delivery</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="w-6 h-6 mr-2 text-zaffran" />
                <span className="font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-6 h-6 mr-2 text-zaffran" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-arabic font-bold text-biryani mb-4">
                گاہکوں کی رائے
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-charcoal mb-6">
                What Our Customers Say
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storyData.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-biryani mb-2">
                  {brandData.stats.happyCustomers}
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-biryani mb-2">
                  {brandData.stats.ordersDelivered}
                </div>
                <div className="text-gray-600 font-medium">Orders Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-biryani mb-2">
                  {brandData.stats.rating}
                </div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-biryani mb-2">
                  {brandData.stats.branches}
                </div>
                <div className="text-gray-600 font-medium">Branches</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
