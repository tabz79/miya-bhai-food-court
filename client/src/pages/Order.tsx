import { ShoppingCart, Clock, Truck, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import SEOHead from '../components/SEOHead';
import { brandData } from '../data/brand';

export default function Order() {
  const orderMethods = [
    {
      title: "Call & Order",
      description: "Speak directly with our team",
      icon: Phone,
      action: "Call Now",
      link: `tel:${brandData.contact.phone}`,
      color: "bg-jade"
    },
    {
      title: "Visit Our Branches",
      description: "Dine-in or takeaway from any location",
      icon: CheckCircle,
      action: "Find Branches",
      link: "/branches",
      color: "bg-biryani"
    },
    {
      title: "Third-Party Apps",
      description: "Order through popular delivery apps",
      icon: Truck,
      action: "Coming Soon",
      link: "#",
      color: "bg-gray-500",
      disabled: true
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "30-Min Delivery",
      description: "Fast delivery to your doorstep"
    },
    {
      icon: CheckCircle,
      title: "Fresh & Hot",
      description: "Prepared fresh for every order"
    },
    {
      icon: Truck,
      title: "Wide Coverage",
      description: "Delivery across Hyderabad"
    }
  ];

  return (
    <>
      <SEOHead
        title={`Order Online - ${brandData.name} ${brandData.tagline}`}
        description="Order authentic Hyderabadi cuisine online for home delivery or pickup. Fast delivery, fresh food, and convenient ordering options available."
        keywords="order online Hyderabad, food delivery, Hyderabadi food order, home delivery"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              آن لائن آرڈر
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Order Online
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Get your favorite Hyderabadi dishes delivered fresh to your doorstep or ready for pickup
            </p>
          </div>
        </section>

        {/* Order Methods */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                How to Order
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your preferred way to order authentic Hyderabadi cuisine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {orderMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-charcoal">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{method.description}</p>
                      {method.disabled ? (
                        <Button disabled className="w-full">
                          {method.action}
                        </Button>
                      ) : method.link.startsWith('tel:') ? (
                        <a href={method.link} className="w-full">
                          <Button className={`w-full ${method.color} hover:opacity-90`}>
                            {method.action}
                          </Button>
                        </a>
                      ) : (
                        <Link href={method.link}>
                          <Button className={`w-full ${method.color} hover:opacity-90`}>
                            {method.action}
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Why Order from Us?
              </h3>
              <p className="text-gray-600">
                Experience the best of Hyderabadi cuisine with our reliable service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-zaffran rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-charcoal" />
                    </div>
                    <h4 className="text-xl font-bold text-charcoal mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-jade to-biryani">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Call us now to place your order and enjoy authentic Hyderabadi flavors at home
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${brandData.contact.phone}`}>
                <Button className="bg-white text-jade px-8 py-4 text-lg font-bold hover:bg-gray-100 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {brandData.contact.phone}
                </Button>
              </a>
              <Link href="/menu">
                <Button className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-jade transition-all">
                  Browse Menu
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
