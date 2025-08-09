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
import biryani from '@/assets/biryani.jpg';

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
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={biryani}
              alt="Royal Nizami Biryani served in authentic crockery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 text-center">
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-amiri font-bold text-brand-gold drop-shadow-md mb-6 animate-fade-in">
                Nizam’s Royal Flavors, Perfected Since 1960
              </h1>
              <p className="text-lg md:text-xl text-brand-beige max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-200" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
                Experience the Legendary Taste that has made Miya Bhai a household name across generations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
                <Link
                  href="/order"
                  className="bg-brand-gold text-brand-maroon border-2 border-brand-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-transparent hover:text-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Order Now
                </Link>
                <Link
                  href="/menu"
                  className="bg-transparent text-brand-gold border-2 border-brand-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-brand-gold hover:text-brand-maroon transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Menu
                </Link>
              </div>
            </div>

            {/* Stats Row */}
            <div className="relative mt-16 pt-8 border-t border-brand-gold/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center gap-3 animate-fade-in animate-delay-600">
                  <MapPin className="w-7 h-7 text-brand-gold/80" />
                  <div>
                    <p className="text-xl font-bold text-white">3+</p>
                    <p className="text-sm text-brand-beige/80">Branches</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 animate-fade-in animate-delay-700">
                  <Clock className="w-7 h-7 text-brand-gold/80" />
                  <div>
                    <p className="text-xl font-bold text-white">65+</p>
                    <p className="text-sm text-brand-beige/80">Years of Legacy</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 animate-fade-in animate-delay-800">
                  <Users className="w-7 h-7 text-brand-gold/80" />
                  <div>
                    <p className="text-xl font-bold text-white">1 Million+</p>
                    <p className="text-sm text-brand-beige/80">Customers Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-nizami-pattern opacity-50"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-biryani mb-4">
                Our Legacy
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-charcoal mb-6">
                A Tale of Taste & Tradition
              </h3>
              <div className="w-24 h-1 bg-zaffran mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed font-semibold">
                  Welcome to Miya Bhai Food Court — a legacy of Hyderabadi biryani, Mandi, and Irani Chai. Experience the Legendary Taste that has made Miya Bhai a household name across generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in the heart of the old city, Miya Bhai Food Court has carried forward a rich culinary legacy that celebrates timeless Hyderabadi traditions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey began with a simple vision: to share the authentic flavors of our ancestors with the world. Today, we continue to honor that vision in every dish we serve.
                </p>
                
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
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Inside ambiance of Miya Bhai Food Court"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Chefs cooking biryani"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1599563153863-09b9d3a4a643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="A family enjoying a meal"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu */}
        <section className="py-16 lg:py-24 bg-brand-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-amiri font-bold text-brand-maroon mb-4">
                Our Signature Menu
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
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
                className="bg-brand-maroon text-brand-beige px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold hover:text-brand-maroon transition-all inline-block"
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
              <h2 className="text-3xl md:text-5xl font-amiri font-bold text-brand-maroon mb-4">
                Find Miya Bhai Near You
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
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
                className="bg-brand-maroon text-brand-beige px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold hover:text-brand-maroon transition-all inline-block"
              >
                View All {brandData.stats.branches} Branches
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-brand-maroon relative overflow-hidden">
          <div className="absolute inset-0 bg-geometric opacity-20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-amiri font-bold text-brand-gold mb-6">
              Experience Royal Flavors Today
            </h2>
            <p className="text-lg text-brand-beige mb-8 max-w-2xl mx-auto">
              Don't wait to taste the authentic flavors of Hyderabad. Order now or book your table for an unforgettable dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/order"
                className="bg-brand-gold text-brand-maroon px-8 py-4 rounded-lg font-bold text-lg hover:bg-transparent hover:text-brand-gold border-2 border-brand-gold transition-all shadow-lg flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Order for Delivery
              </Link>
              <Link
                href="/book"
                className="bg-transparent text-brand-gold border-2 border-brand-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-gold hover:text-brand-maroon transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Your Table
              </Link>
              <a
                href={`tel:${brandData.contact.phone}`}
                className="border-2 border-brand-beige text-brand-beige px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-beige hover:text-brand-maroon transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-brand-beige">
              <div className="flex items-center">
                <Truck className="w-6 h-6 mr-2 text-brand-gold" />
                <span className="font-medium">30-Min Delivery</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="w-6 h-6 mr-2 text-brand-gold" />
                <span className="font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-6 h-6 mr-2 text-brand-gold" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-brand-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-amiri font-bold text-brand-maroon mb-4">
                What Our Customers Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storyData.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-maroon mb-2">
                  {brandData.stats.happyCustomers}
                </div>
                <div className="text-charcoal font-medium">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-maroon mb-2">
                  {brandData.stats.ordersDelivered}
                </div>
                <div className="text-charcoal font-medium">Orders Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-maroon mb-2">
                  {brandData.stats.rating}
                </div>
                <div className="text-charcoal font-medium">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-brand-maroon mb-2">
                  {brandData.stats.branches}
                </div>
                <div className="text-charcoal font-medium">Branches</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
