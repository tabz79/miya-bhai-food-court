import { useState } from 'react';
import { Users, Calendar, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEOHead from '../components/SEOHead';
import { brandData } from '../data/brand';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering inquiry:', formData);
    // TODO: Implement form submission
  };

  const services = [
    {
      title: "Wedding Catering",
      description: "Complete wedding feast with traditional Hyderabadi dishes",
      features: ["Traditional Menu", "Live Counters", "Professional Service", "Decoration Support"]
    },
    {
      title: "Corporate Events",
      description: "Professional catering for business meetings and corporate gatherings",
      features: ["Business Lunch", "Conference Catering", "Team Events", "Executive Dining"]
    },
    {
      title: "Private Parties",
      description: "Customized catering for birthdays, anniversaries, and celebrations",
      features: ["Customized Menu", "Home Delivery", "Setup Service", "Birthday Specials"]
    },
    {
      title: "Festival Catering",
      description: "Special arrangements for religious and cultural festivals",
      features: ["Festive Menu", "Large Quantities", "Traditional Recipes", "Community Events"]
    }
  ];

  return (
    <>
      <SEOHead
        title={`Catering Services - ${brandData.name} ${brandData.tagline}`}
        description="Professional catering services for weddings, corporate events, private parties, and festivals. Authentic Hyderabadi cuisine delivered fresh for your special occasions."
        keywords="catering services Hyderabad, wedding catering, corporate catering, event catering, bulk orders"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              کیٹرنگ سروسز
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Catering Services
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Make your special occasions memorable with our authentic Hyderabadi cuisine and professional catering services
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Our Catering Services
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From intimate gatherings to grand celebrations, we cater to all your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-biryani">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-jade mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  Get a Quote
                </h3>
                <p className="text-gray-600">
                  Tell us about your event and we'll provide a customized quote
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Catering Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="eventType"
                          placeholder="Event Type"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="guests"
                          type="number"
                          placeholder="Number of Guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <Textarea
                        name="message"
                        placeholder="Additional Details & Requirements"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      
                      <Button type="submit" className="w-full bg-jade hover:bg-jade/90">
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-jade" />
                        Call Us Directly
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">Speak with our catering team</p>
                      <p className="font-semibold text-lg">{brandData.contact.phone}</p>
                      <p className="text-sm text-gray-500 mt-2">Available 9:00 AM - 8:00 PM</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-jade" />
                        Email Inquiry
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">Send us detailed requirements</p>
                      <p className="font-semibold">{brandData.contact.email}</p>
                      <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-jade" />
                        Minimum Orders
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Corporate Events: 25+ people</li>
                        <li>• Weddings: 100+ people</li>
                        <li>• Private Parties: 15+ people</li>
                        <li>• Festival Catering: 50+ people</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
