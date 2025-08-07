export const branchesData = {
  branches: [
    {
      id: 1,
      name: "Hi-Tech City Branch",
      address: "HITEC City, Madhapur, Hyderabad - 500081",
      shortAddress: "HITEC City, Madhapur",
      phone: "+91 9876543210",
      hours: "11:00 AM - 11:00 PM",
      features: ["Parking Available", "WiFi", "Air Conditioning"],
      type: "FLAGSHIP",
      coordinates: { lat: 17.4483, lng: 78.3915 },
      mapUrl: "https://maps.google.com?q=HITEC+City+Madhapur+Hyderabad",
      isOpen: true
    },
    {
      id: 2,
      name: "Old City Branch",
      address: "Near Charminar, Old City, Hyderabad - 500002",
      shortAddress: "Near Charminar",
      phone: "+91 9876543211",
      hours: "10:00 AM - 12:00 AM",
      features: ["Family Dining", "Heritage Ambiance", "Traditional Seating"],
      type: "ORIGINAL",
      coordinates: { lat: 17.3616, lng: 78.4747 },
      mapUrl: "https://maps.google.com?q=Charminar+Old+City+Hyderabad",
      isOpen: true
    },
    {
      id: 3,
      name: "Jubilee Hills Branch",
      address: "Road No. 36, Jubilee Hills, Hyderabad - 500033",
      shortAddress: "Road No. 36, Jubilee Hills",
      phone: "+91 9876543212",
      hours: "11:30 AM - 11:30 PM",
      features: ["Free WiFi", "Valet Parking", "Private Dining"],
      type: "NEW",
      coordinates: { lat: 17.4239, lng: 78.4738 },
      mapUrl: "https://maps.google.com?q=Jubilee+Hills+Road+36+Hyderabad",
      isOpen: true
    },
    {
      id: 4,
      name: "Banjara Hills Branch",
      address: "Road No. 12, Banjara Hills, Hyderabad - 500034",
      shortAddress: "Road No. 12, Banjara Hills",
      phone: "+91 9876543213",
      hours: "11:00 AM - 11:00 PM",
      features: ["Outdoor Seating", "Live Music", "Bar"],
      type: "PREMIUM",
      coordinates: { lat: 17.4126, lng: 78.4482 },
      mapUrl: "https://maps.google.com?q=Banjara+Hills+Road+12+Hyderabad",
      isOpen: true
    },
    {
      id: 5,
      name: "Gachibowli Branch",
      address: "Financial District, Gachibowli, Hyderabad - 500032",
      shortAddress: "Financial District, Gachibowli",
      phone: "+91 9876543214",
      hours: "11:00 AM - 10:30 PM",
      features: ["Corporate Dining", "Quick Service", "Takeaway"],
      type: "EXPRESS",
      coordinates: { lat: 17.4400, lng: 78.3489 },
      mapUrl: "https://maps.google.com?q=Gachibowli+Financial+District+Hyderabad",
      isOpen: true
    },
    {
      id: 6,
      name: "Kukatpally Branch",
      address: "KPHB Colony, Kukatpally, Hyderabad - 500072",
      shortAddress: "KPHB Colony, Kukatpally",
      phone: "+91 9876543215",
      hours: "11:00 AM - 11:00 PM",
      features: ["Family Restaurant", "Kids Play Area", "Birthday Parties"],
      type: "FAMILY",
      coordinates: { lat: 17.4851, lng: 78.4056 },
      mapUrl: "https://maps.google.com?q=Kukatpally+KPHB+Hyderabad",
      isOpen: true
    }
  ]
} as const;