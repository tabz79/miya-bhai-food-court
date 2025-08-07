import { FileText, Calendar, Shield, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { brandData } from '../data/brand';

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using Miya Bhai Food Court's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service."
      ]
    },
    {
      icon: Shield,
      title: "2. Service Description",
      content: [
        "Miya Bhai Food Court provides restaurant services including dine-in, takeaway, delivery, and catering services.",
        "We reserve the right to modify or discontinue any service without notice.",
        "All menu items are subject to availability and may vary by location."
      ]
    },
    {
      icon: Calendar,
      title: "3. Reservations and Orders",
      content: [
        "Table reservations are subject to availability and restaurant policies.",
        "We reserve the right to cancel reservations in case of no-show beyond 15 minutes.",
        "Food orders are final once confirmed and payment is processed.",
        "Delivery charges may apply based on location and order value."
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Payment Terms",
      content: [
        "Payment is required at the time of service for dine-in and takeaway orders.",
        "For delivery orders, payment must be completed before order confirmation.",
        "We accept cash, cards, and digital payment methods as available.",
        "All prices are inclusive of applicable taxes unless otherwise specified."
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "5. Cancellation and Refunds",
      points: [
        "Order cancellations are accepted within 5 minutes of confirmation",
        "Refunds will be processed within 7-10 business days",
        "Table reservation cancellations must be made at least 2 hours in advance",
        "No-show charges may apply for large group reservations"
      ]
    },
    {
      title: "6. Food Safety and Allergies",
      points: [
        "Please inform us of any food allergies or dietary restrictions",
        "We cannot guarantee complete absence of allergens in our dishes",
        "Food safety is our priority and we follow all health regulations",
        "Customers consume food at their own risk regarding allergies"
      ]
    },
    {
      title: "7. Intellectual Property",
      points: [
        "All content, trademarks, and data on our platforms are proprietary",
        "Unauthorized use of our brand name or content is prohibited",
        "Our recipes and cooking methods are trade secrets",
        "Customer reviews and photos may be used for promotional purposes"
      ]
    },
    {
      title: "8. Limitation of Liability",
      points: [
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our liability is limited to the value of the specific service provided",
        "Force majeure events may affect service delivery without liability",
        "Customers are responsible for their personal belongings"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title={`Terms of Service - ${brandData.name} ${brandData.tagline}`}
        description="Terms of service and conditions for using Miya Bhai Food Court's restaurant services, including dine-in, delivery, catering, and online ordering."
        keywords="terms of service, restaurant terms, legal conditions, service agreement"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              شرائط و ضوابط
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Terms of Service
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-warm-gray">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </div>
        </section>

        {/* Main Terms */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-8">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl text-charcoal">
                          <Icon className="w-6 h-6 text-jade" />
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {section.content.map((paragraph, idx) => (
                            <p key={idx} className="text-gray-600 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalTerms.map((term, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">
                        {term.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {term.points.map((point, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="text-jade mr-2">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${brandData.contact.phone}`}
                  className="bg-jade text-white px-6 py-3 rounded-lg font-medium hover:bg-jade/90 transition-all"
                >
                  Call Us: {brandData.contact.phone}
                </a>
                <a 
                  href={`mailto:${brandData.contact.email}`}
                  className="border-2 border-jade text-jade px-6 py-3 rounded-lg font-medium hover:bg-jade hover:text-white transition-all"
                >
                  Email: {brandData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
