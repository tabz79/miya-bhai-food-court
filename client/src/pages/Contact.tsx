import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEOHead from '../components/SEOHead';
import { brandData } from '../data/brand';
import { branchesData } from '../data/branches';
import { faqsData } from '../data/faqs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    console.log('Contact form submitted:', formData);
    // TODO: Implement form submission
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: [brandData.contact.phone, brandData.contact.supportPhone],
      action: `tel:${brandData.contact.phone}`,
      color: "text-jade"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [brandData.contact.email],
      action: `mailto:${brandData.contact.email}`,
      color: "text-biryani"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Multiple locations across Hyderabad"],
      action: "/branches",
      color: "text-zaffran"
    }
  ];

  return (
    <>
      <SEOHead
        title={`Contact Us - ${brandData.name} ${brandData.tagline}`}
        description="Get in touch with Miya Bhai Food Court. Contact us for reservations, catering, feedback, or any questions about our authentic Hyderabadi cuisine."
        keywords="contact Miya Bhai, restaurant contact, Hyderabad restaurant contact, customer service"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              رابطہ کریں
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch for reservations, feedback, or any questions about our services.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us for all your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8">
                      <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${method.color}`} />
                      </div>
                      <h4 className="text-xl font-bold text-charcoal mb-3">{method.title}</h4>
                      <div className="space-y-1 mb-6">
                        {method.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      {method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                        <a href={method.action}>
                          <Button className="bg-jade hover:bg-jade/90">
                            Contact Now
                          </Button>
                        </a>
                      ) : (
                        <a href={method.action}>
                          <Button className="bg-jade hover:bg-jade/90">
                            View Locations
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                    Send us a Message
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        
                        <Input
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                        
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                        
                        <Button type="submit" className="w-full bg-jade hover:bg-jade/90 text-lg py-3">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Business Hours & Featured Branches */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Business Hours</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="w-6 h-6 text-jade mr-3" />
                          <span className="text-lg font-semibold text-charcoal">All Branches</span>
                        </div>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>Monday - Sunday</span>
                            <span className="font-medium">11:00 AM - 11:00 PM</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-4">
                            *Some branches may have extended hours. Please check individual branch timings.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-6">Featured Locations</h3>
                    <div className="space-y-4">
                      {branchesData.branches.slice(0, 3).map((branch) => (
                        <Card key={branch.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-charcoal">{branch.name}</h4>
                                <p className="text-sm text-gray-600 mb-2">{branch.shortAddress}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                  <Phone className="w-3 h-3 mr-1" />
                                  {branch.phone}
                                </div>
                              </div>
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                branch.type === 'FLAGSHIP' ? 'bg-zaffran text-charcoal' :
                                branch.type === 'ORIGINAL' ? 'bg-biryani text-white' :
                                'bg-jade text-white'
                              }`}>
                                {branch.type}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqsData.faqs.slice(0, 6).map((faq) => (
                <Card key={faq.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-charcoal">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
