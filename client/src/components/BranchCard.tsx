import { MapPin, Clock, Phone, Navigation, Car, Wifi, Users } from 'lucide-react';

interface BranchCardProps {
  branch: {
    id: number;
    name: string;
    shortAddress: string;
    phone: string;
    hours: string;
    features: string[];
    type: string;
    mapUrl: string;
    isOpen: boolean;
  };
  onGetDirections: (mapUrl: string) => void;
  onCall: (phone: string) => void;
}

export default function BranchCard({ branch, onGetDirections, onCall }: BranchCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'FLAGSHIP':
        return 'bg-zaffran text-charcoal';
      case 'ORIGINAL':
        return 'bg-biryani text-white';
      case 'NEW':
        return 'bg-jade text-white';
      case 'PREMIUM':
        return 'bg-purple-500 text-white';
      case 'EXPRESS':
        return 'bg-blue-500 text-white';
      case 'FAMILY':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Parking')) return <Car className="w-4 h-4" />;
    if (feature.includes('WiFi')) return <Wifi className="w-4 h-4" />;
    if (feature.includes('Family') || feature.includes('Dining')) return <Users className="w-4 h-4" />;
    return <Car className="w-4 h-4" />;
  };

  return (
    <div className="bg-warm-gray rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-bold text-charcoal mb-2">{branch.name}</h4>
          <div className="flex items-center text-jade mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{branch.shortAddress}</span>
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${getTypeColor(branch.type)}`}>
          {branch.type}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-biryani" />
          <span className="text-sm">{branch.hours}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2 text-biryani" />
          <span className="text-sm">{branch.phone}</span>
        </div>
        {branch.features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <span className="mr-2 text-biryani">{getFeatureIcon(feature)}</span>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onGetDirections(branch.mapUrl)}
          className="flex-1 bg-jade text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-1"
        >
          <Navigation className="w-4 h-4" />
          Directions
        </button>
        <button
          onClick={() => onCall(branch.phone)}
          className="flex-1 bg-zaffran text-charcoal py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-1"
        >
          <Phone className="w-4 h-4" />
          Call
        </button>
      </div>
    </div>
  );
}
