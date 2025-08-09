import SEOHead from '../components/SEOHead';
import BranchCard from '../components/BranchCard';
import { brandData } from '../data/brand';
import { branchesData } from '../data/branches';

export default function Branches() {
  const handleGetDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: brandData.name,
    description: 'A legendary Hyderabadi food brand serving authentic biryani, Mandi, and Irani Chai.',
    telephone: branchesData.branches[0].phone, // Using the first branch phone as a general contact
    address: {
      '@type': 'PostalAddress',
      streetAddress: branchesData.branches[0].address,
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    url: 'https://www.miyabhai.com/branches',
    servesCuisine: 'Hyderabadi',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '23:00',
      },
    ],
    hasMenu: 'https://www.miyabhai.com/menu',
    acceptsReservations: 'True',
    image: 'https://www.miyabhai.com/og-image.jpg', // Replace with a representative image
    geo: {
      '@type': 'GeoCoordinates',
      latitude: branchesData.branches[0].coordinates.lat,
      longitude: branchesData.branches[0].coordinates.lng,
    },
    department: branchesData.branches.map((branch) => ({
      '@type': 'FoodEstablishment',
      name: branch.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address,
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: branch.address.slice(-6),
        addressCountry: 'IN',
      },
      telephone: branch.phone,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: branch.coordinates.lat,
        longitude: branch.coordinates.lng,
      },
      url: branch.mapUrl,
    })),
  };

  return (
    <>
      <SEOHead
        title={`Our Branches - ${brandData.name}`}
        description={`Find all ${brandData.stats.branches} branches of Miya Bhai Food Court in Hyderabad. Visit us for an authentic Nizami dining experience.`}
        canonicalUrl="https://www.miyabhai.com/branches"
        schemaJson={schema}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-warm-gray max-w-3xl mx-auto mb-4">
              Welcome to Miya Bhai Food Court — a legacy of Hyderabadi biryani, Mandi, and Irani Chai. Find our authentic flavors at any of our {branchesData.branches.length} locations across Hyderabad.
            </p>
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              ہمارے مقامات
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              All Our Branches
            </h2>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branchesData.branches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  onGetDirections={handleGetDirections}
                  onCall={handleCall}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Find Us on Map
              </h3>
              <p className="text-gray-600">
                Interactive map feature will be implemented here
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Interactive Map Integration</p>
                <p className="text-sm text-gray-500">Google Maps integration coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}