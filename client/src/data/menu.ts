export const menuData = {
  categories: [
    { id: "all", name: "All Items", urdu: "تمام اشیاء" },
    { id: "biryani", name: "Biryani", urdu: "بریانی" },
    { id: "tandoori", name: "Tandoori", urdu: "تندوری" },
    { id: "beverages", name: "Beverages", urdu: "مشروبات" },
    { id: "desserts", name: "Desserts", urdu: "میٹھائیاں" },
    { id: "starters", name: "Starters", urdu: "آغاز" }
  ],
  
  items: [
    {
      id: 1,
      name: "Hyderabadi Mutton Biryani",
      description: "Tender mutton pieces cooked with aromatic basmati rice in traditional dum style",
      price: 450,
      category: "biryani",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["BESTSELLER", "SPICY"],
      isVeg: false,
      spiceLevel: "high"
    },
    {
      id: 2,
      name: "Tandoori Chicken Full",
      description: "Whole chicken marinated in yogurt and spices, grilled to perfection",
      price: 350,
      category: "tandoori",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["MEDIUM"],
      isVeg: false,
      spiceLevel: "medium"
    },
    {
      id: 3,
      name: "Vegetable Biryani",
      description: "Mixed vegetables cooked with fragrant basmati rice and traditional spices",
      price: 250,
      category: "biryani",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["VEG"],
      isVeg: true,
      spiceLevel: "medium"
    },
    {
      id: 4,
      name: "Sweet Lassi",
      description: "Traditional yogurt-based drink with cardamom and rose water",
      price: 80,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["REFRESHING"],
      isVeg: true,
      spiceLevel: "none"
    },
    {
      id: 5,
      name: "Chicken Tikka",
      description: "Succulent chicken pieces marinated and grilled in tandoor",
      price: 280,
      category: "tandoori",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["SPICY"],
      isVeg: false,
      spiceLevel: "high"
    },
    {
      id: 6,
      name: "Pani Puri (6 Pcs)",
      description: "Crispy puris filled with spiced water, tamarind chutney, and chutneys",
      price: 120,
      category: "starters",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["POPULAR"],
      isVeg: true,
      spiceLevel: "medium"
    },
    {
      id: 7,
      name: "Bhel Puri",
      description: "Mix of puffed rice, vegetables, and tangy chutneys",
      price: 100,
      category: "starters",
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: [],
      isVeg: true,
      spiceLevel: "medium"
    },
    {
      id: 8,
      name: "Gulab Jamun (2 Pcs)",
      description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
      price: 90,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["SWEET"],
      isVeg: true,
      spiceLevel: "none"
    },
    {
      id: 9,
      name: "Chicken Biryani",
      description: "Classic Hyderabadi chicken biryani with aromatic basmati rice",
      price: 400,
      category: "biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["BESTSELLER"],
      isVeg: false,
      spiceLevel: "medium"
    },
    {
      id: 10,
      name: "Irani Chai",
      description: "Traditional sweet tea brewed in authentic Irani style",
      price: 40,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      tags: ["AUTHENTIC"],
      isVeg: true,
      spiceLevel: "none"
    }
  ],

  featured: [
    {
      name: "Hyderabadi Dum Biryani",
      description: "Our signature recipe",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      name: "Tandoori Special",
      description: "Grilled to perfection",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Irani Chai",
      description: "Traditional brew",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ]
} as const;