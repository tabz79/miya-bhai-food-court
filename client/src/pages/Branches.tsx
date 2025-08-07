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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": `${brandData.name} ${brandData.tagline}`,
    "description": brandData.fullDescription,
    "branch": branchesData.branches.map(branch => ({
      "@type": "Restaurant",
      "name": branch.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": branch.address,
        "addressLocality": "Hyderabad",
        "addressCountry": "IN"
      },
      "telephone": branch.phone,
      "openingHours": branch.hours
    }))
  };

  return (
    <>
      <SEOHead
        title={`All Branches - ${brandData.name} ${brandData.tagline}`}
        description={`Find ${brandData.name} ${brandData.tagline} locations near you. We have ${brandData.stats.branches} branches across Hyderabad serving authentic Hyderabadi cuisine.`}
        keywords="Miya Bhai locations, restaurant branches Hyderabad, Hyderabadi restaurant locations"
        structuredData={structuredData}
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              ہمارے مقامات
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              All Our Branches
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Visit any of our {brandData.stats.branches} conveniently located branches across Hyderabad to experience authentic cuisine
            </p>
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
