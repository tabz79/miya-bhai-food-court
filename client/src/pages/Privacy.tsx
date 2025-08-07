import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { brandData } from '../data/brand';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: [
        "Personal information such as name, email, phone number, and address when you make reservations or place orders.",
        "Payment information processed securely through our payment partners.",
        "Dining preferences, special requests, and feedback you provide.",
        "Usage data from our website and mobile applications for service improvement."
      ]
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: [
        "To process your orders, reservations, and provide customer service.",
        "To send you order confirmations, updates, and important service notifications.",
        "To improve our services, menu offerings, and customer experience.",
        "To send promotional offers and updates with your consent."
      ]
    },
    {
      icon: Lock,
      title: "3. Information Security",
      content: [
        "We implement industry-standard security measures to protect your data.",
        "Payment information is encrypted and processed through secure payment gateways.",
        "Access to personal information is restricted to authorized personnel only.",
        "Regular security audits are conducted to ensure data protection."
      ]
    },
    {
      icon: UserCheck,
      title: "4. Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt-out of promotional communications at any time.",
        "You can request a copy of the personal data we hold about you.",
        "You can file a complaint if you believe your privacy rights have been violated."
      ]
    }
  ];

  const dataTypes = [
    {
      title: "Personal Data",
      items: ["Name", "Email address", "Phone number", "Delivery address", "Date of birth (optional)"]
    },
    {
      title: "Order Information",
      items: ["Order history", "Payment details", "Delivery preferences", "Special dietary requirements"]
    },
    {
      title: "Technical Data",
      items: ["IP address", "Browser type", "Device information", "Website usage patterns"]
    },
    {
      title: "Marketing Data",
      items: ["Email preferences", "SMS opt-ins", "Promotional responses", "Customer feedback"]
    }
  ];

  const protectionMeasures = [
    {
      icon: Shield,
      title: "Data Encryption",
      description: "All sensitive data is encrypted in transit and at rest"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Strict access controls with role-based permissions"
    },
    {
      icon: AlertTriangle,
      title: "Regular Monitoring",
      description: "Continuous monitoring for security threats and breaches"
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "Data stored in secure, compliant cloud infrastructure"
    }
  ];

  return (
    <>
      <SEOHead
        title={`Privacy Policy - ${brandData.name} ${brandData.tagline}`}
        description="Privacy policy for Miya Bhai Food Court explaining how we collect, use, and protect your personal information when using our restaurant services."
        keywords="privacy policy, data protection, personal information, restaurant privacy"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              پرائیویسی پالیسی
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Privacy Policy
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              We are committed to protecting your privacy and personal information
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

        {/* Main Privacy Sections */}
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
                        <ul className="space-y-3">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="text-gray-600 leading-relaxed flex items-start">
                              <span className="text-jade mr-2 mt-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Data Types */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  Types of Data We Collect
                </h3>
                <p className="text-gray-600">
                  Detailed breakdown of information categories we collect
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataTypes.map((type, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">
                        {type.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.items.map((item, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center">
                            <span className="w-2 h-2 bg-jade rounded-full mr-2"></span>
                            {item}
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

        {/* Security Measures */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  How We Protect Your Data
                </h3>
                <p className="text-gray-600">
                  Security measures we implement to safeguard your information
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {protectionMeasures.map((measure, index) => {
                  const Icon = measure.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-8">
                        <div className="w-16 h-16 bg-jade/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-jade" />
                        </div>
                        <h4 className="text-lg font-bold text-charcoal mb-2">{measure.title}</h4>
                        <p className="text-gray-600 text-sm">{measure.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Privacy */}
        <section className="py-16 bg-warm-gray">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or want to exercise your rights, please contact us.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`tel:${brandData.contact.phone}`}
                    className="bg-jade text-white px-6 py-3 rounded-lg font-medium hover:bg-jade/90 transition-all"
                  >
                    Call: {brandData.contact.phone}
                  </a>
                  <a 
                    href={`mailto:${brandData.contact.email}`}
                    className="border-2 border-jade text-jade px-6 py-3 rounded-lg font-medium hover:bg-jade hover:text-white transition-all"
                  >
                    Email: {brandData.contact.email}
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  We will respond to privacy-related inquiries within 30 days
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
