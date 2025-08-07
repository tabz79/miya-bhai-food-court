import { Crown, Clock, Award, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import TestimonialCard from '../components/TestimonialCard';
import { brandData } from '../data/brand';
import { storyData } from '../data/story';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Restaurant",
      "name": `${brandData.name} ${brandData.tagline}`,
      "description": brandData.fullDescription,
      "foundingDate": "1998",
      "founder": "Miya Bhai Family"
    }
  };

  return (
    <>
      <SEOHead
        title={`About Us - ${brandData.name} ${brandData.tagline}`}
        description="Learn about Miya Bhai Food Court's heritage, our 25+ year legacy of serving authentic Hyderabadi cuisine, and our commitment to preserving traditional Nizami flavors."
        keywords="Miya Bhai history, Hyderabadi restaurant story, authentic Nizami cuisine, traditional recipes"
        structuredData={structuredData}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              {storyData.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              {storyData.subtitle}
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Discover the story behind Hyderabad's most beloved food destination
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-nizami-pattern opacity-50"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {storyData.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
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

        {/* Heritage Points */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Our Heritage
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What makes us special and keeps our customers coming back
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storyData.heritage.map((point, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-${point.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {point.icon === 'crown' && <Crown className="w-8 h-8 text-charcoal" />}
                    {point.icon === 'clock' && <Clock className="w-8 h-8 text-white" />}
                    {point.icon === 'award' && <Award className="w-8 h-8 text-white" />}
                    {point.icon === 'heart' && <Heart className="w-8 h-8 text-charcoal" />}
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storyData.values.map((value, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-bold text-biryani mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                What Our Customers Say
              </h3>
              <p className="text-gray-600">
                Real experiences from our valued customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storyData.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
