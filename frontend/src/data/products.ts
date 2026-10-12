import type { Product } from '../types';

export const products: Product[] = [
  // --- ELECTRONICS & AUDIO ---
  {
    id: 1,
    name: "TechNova Spatial Pro Active Noise Cancelling Headphones",
    brand: "TechNova",
    category: "Electronics",
    subcategory: "Audio",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.8,
    reviews: 1420,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Experience spatial 3D audio, hybrid active noise cancellation up to 40dB, and custom 40mm titanium drivers for studio-grade acoustic depth.",
    features: [
      "40dB Active Noise Cancellation",
      "50 Hours Battery Backup with Fast Charge",
      "Multipoint Bluetooth 5.3 Connectivity",
      "Custom EQ via Companion App"
    ],
    specs: {
      "Driver Size": "40mm Titanium",
      "Battery Life": "50 Hours",
      "Bluetooth": "v5.3",
      "Weight": "250g",
      "Warranty": "1 Year Replacement"
    },
    stock: 35,
    badge: "Deal of the Day",
    isDealOfDay: true,
    delivery: "Free Express Delivery by Tomorrow",
    seller: "TechNova Official Outlet",
    customerReviews: [
      {
        id: "r1",
        userName: "Aarav Sharma",
        rating: 5,
        date: "2 days ago",
        comment: "The noise cancellation is insane for this price. Battery easily lasts 4-5 days of heavy use!",
        verifiedPurchase: true
      },
      {
        id: "r2",
        userName: "Priya Nair",
        rating: 4.5,
        date: "1 week ago",
        comment: "Very comfortable ear cushions, audio clarity is crisp.",
        verifiedPurchase: true
      }
    ]
  },
  {
    id: 2,
    name: "AuraSound Studio ANC Wireless Earbuds with OLED Charging Case",
    brand: "AuraSound",
    category: "Electronics",
    subcategory: "Audio",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.6,
    reviews: 980,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Compact true wireless earbuds featuring smart touch screen case, dual microphones for HD calling, and IPX5 water resistance.",
    features: [
      "Smart Touch OLED Screen on Case",
      "Quad-Mic Environmental Noise Cancellation",
      "Low Latency Gaming Mode (38ms)",
      "IPX5 Sweat & Water Proof"
    ],
    specs: {
      "Playtime": "32 Hours Total",
      "Water Resistance": "IPX5",
      "Latency": "38ms Mode",
      "Warranty": "1 Year"
    },
    stock: 42,
    badge: "Hot Trend",
    delivery: "Free Delivery in 2 Days",
    seller: "AuraSound Direct"
  },
  {
    id: 3,
    name: "UltraCraft Book Pro 15.6'' Metal Ultrabook (16GB RAM / 512GB SSD)",
    brand: "UltraCraft",
    category: "Electronics",
    subcategory: "Laptops",
    price: 54990,
    originalPrice: 79990,
    discount: 31,
    rating: 4.7,
    reviews: 640,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-thin aluminum unibody laptop powered by next-gen Octa-Core Processor, 2.8K IPS anti-glare display, and 12-hour battery life.",
    features: [
      "15.6-inch 2.8K 120Hz IPS Display",
      "16GB LPDDR5 RAM & 512GB Gen4 NVMe SSD",
      "Backlit Keyboard & Fingerprint Reader",
      "Thunderbolt 4 & Fast 65W Type-C Charging"
    ],
    specs: {
      "Processor": "Intel Core i7 13th Gen",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB NVMe SSD",
      "Weight": "1.38 kg",
      "OS": "Windows 11 Home"
    },
    stock: 18,
    badge: "Best Seller",
    delivery: "Free Express Delivery",
    seller: "Computers Hub India"
  },
  {
    id: 4,
    name: "VividVision 55-inch 4K Ultra HD QLED Smart TV with Dolby Atmos",
    brand: "VividVision",
    category: "Electronics",
    subcategory: "TVs",
    price: 38990,
    originalPrice: 64990,
    discount: 40,
    rating: 4.6,
    reviews: 812,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Immerse yourself in 1 billion colors with Quantum Dot Technology, Hands-free Voice Controls, and 40W Dolby Atmos speaker setup.",
    features: [
      "4K Quantum Dot Display with HDR10+",
      "40W Built-in Dolby Atmos Sound System",
      "Google TV with Hands-free Voice Search",
      "ALLM Gaming Mode & 3x HDMI 2.1"
    ],
    specs: {
      "Screen Size": "55 Inch",
      "Display": "QLED 4K",
      "Sound": "40W Dolby Atmos",
      "Refresh Rate": "60Hz Native / 120Hz MEMC"
    },
    stock: 12,
    badge: "Limited Stock",
    delivery: "Scheduled Free Installation & Delivery",
    seller: "VividVision India"
  },
  {
    id: 5,
    name: "CineShot 4K Mirrorless Digital Camera Kit with 18-55mm Lens",
    brand: "CineShot",
    category: "Electronics",
    subcategory: "Cameras",
    price: 46990,
    originalPrice: 59990,
    discount: 21,
    rating: 4.9,
    reviews: 320,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Professional 24.2 MP APS-C sensor mirrorless camera for creators. Supports 4K 60fps uncropped video, Real-time Eye AF, and flip touch screen.",
    features: [
      "24.2MP APS-C CMOS Sensor",
      "4K 60p Uncropped Video Recording",
      "AI-Powered Real-time Eye & Animal Tracking",
      "Flip-out Touch LCD Screen for Vlogging"
    ],
    specs: {
      "Sensor": "24.2 MP APS-C",
      "ISO Range": "100-32000",
      "Connectivity": "Wi-Fi & Bluetooth 5.0",
      "Warranty": "2 Years Official Warranty"
    },
    stock: 9,
    badge: "Exclusive",
    delivery: "Free Insured Express Delivery",
    seller: "CameraWorld Official"
  },

  // --- MOBILES ---
  {
    id: 6,
    name: "Zenith Phone 15 Pro 5G (12GB RAM / 256GB Titanium Gray)",
    brand: "Zenith",
    category: "Mobiles",
    subcategory: "Smartphones",
    price: 69999,
    originalPrice: 89999,
    discount: 22,
    rating: 4.8,
    reviews: 2150,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Flagship smartphone crafted with Aerospace-grade Titanium, 200MP OIS Triple Camera, 120Hz LTPO AMOLED display, and 5000mAh battery.",
    features: [
      "200MP Primary Sensor with 5x Optical Zoom",
      "Snapdragon 8 Gen 3 Octa-Core Processor",
      "6.7'' QHD+ LTPO 120Hz Curved Display",
      "100W SuperVOOC Fast Charger Included"
    ],
    specs: {
      "RAM / Storage": "12GB / 256GB UFS 4.0",
      "Processor": "Snapdragon 8 Gen 3",
      "Camera": "200MP + 50MP + 12MP",
      "Battery": "5000mAh with 100W"
    },
    stock: 20,
    badge: "Best Seller",
    delivery: "Free Same-Day Delivery in Select Cities",
    seller: "Zenith Mobiles India"
  },
  {
    id: 7,
    name: "Nova Neo 5G Smartphone (8GB RAM / 128GB Midnight Blue)",
    brand: "Nova",
    category: "Mobiles",
    subcategory: "Smartphones",
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.4,
    reviews: 1840,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Budget performance champion featuring 108MP camera, Dimensity 7050 5G processor, and 67W Turbo Flash Charging.",
    features: [
      "108MP AI Clear Camera",
      "MediaTek Dimensity 7050 5G",
      "6.67'' FHD+ 120Hz Super AMOLED",
      "5000mAh Battery + 67W Charger"
    ],
    specs: {
      "RAM / Storage": "8GB / 128GB",
      "Display": "6.67 inch AMOLED",
      "Weight": "186g"
    },
    stock: 50,
    delivery: "Free Delivery by Tomorrow",
    seller: "Nova Retail"
  },

  // --- WATCHES ---
  {
    id: 8,
    name: "ChronoCraft Heritage Automatic Open-Heart Skeleton Watch",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Automatic",
    price: 12999,
    originalPrice: 24999,
    discount: 48,
    rating: 4.9,
    reviews: 512,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Hand-assembled 24-jewel automatic mechanical movement with open heart window, genuine Italian calfskin leather strap, and sapphire crystal glass.",
    features: [
      "Japanese Automatic Movement with 42H Power Reserve",
      "Scratch-Resistant Sapphire Crystal Lens",
      "50 Meters Water Resistance (5 ATM)",
      "Handmade Genuine Italian Leather Strap"
    ],
    specs: {
      "Movement": "Automatic Mechanical",
      "Case Diameter": "42mm Stainless Steel",
      "Glass": "Sapphire Crystal",
      "Strap": "Genuine Italian Leather"
    },
    stock: 14,
    badge: "Deal of the Day",
    isDealOfDay: true,
    delivery: "Free Express Delivery",
    seller: "ChronoCraft Horology"
  },
  {
    id: 9,
    name: "PulseFit Pro Smartwatch with AMOLED Display & ECG Monitor",
    brand: "PulseFit",
    category: "Watches",
    subcategory: "Smartwatches",
    price: 3499,
    originalPrice: 6999,
    discount: 50,
    rating: 4.5,
    reviews: 1350,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Next-generation health tracker with HD Always-On AMOLED screen, Bluetooth calling, continuous SpO2, HRV, and 100+ Sports modes.",
    features: [
      "1.43'' Super AMOLED Always-On Display",
      "Bluetooth HD Calling & Voice Assistant",
      "ECG, SpO2, Heart Rate & Sleep Tracking",
      "Up to 10 Days Battery Life"
    ],
    specs: {
      "Display": "1.43 Inch AMOLED",
      "Battery": "300mAh (Up to 10 Days)",
      "Protection": "IP68 Dust & Water Proof"
    },
    stock: 28,
    delivery: "Free Express Delivery",
    seller: "PulseFit Tech"
  },

  // --- FASHION & APPAREL ---
  {
    id: 10,
    name: "Aurelia Royal Handcrafted Silk Bandhgala Sherwani Suit",
    brand: "Aurelia",
    category: "Fashion",
    subcategory: "Men Ethnic",
    price: 14999,
    originalPrice: 28999,
    discount: 48,
    rating: 4.9,
    reviews: 240,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Exquisite raw silk Bandhgala crafted with intricate zardozi hand embroidery on mandarin collar and antique gold brass buttons.",
    features: [
      "100% Pure Raw Silk Fabric",
      "Intricate Zardozi Hand-Embroidered Collar",
      "Tailored Slim Fit with Soft Satin Lining",
      "Includes Churidar Trousers & Pocket Square"
    ],
    specs: {
      "Fabric": "Pure Silk",
      "Occasion": "Wedding / Grand Festive",
      "Care Instructions": "Dry Clean Only",
      "Fit": "Tailored Fit"
    },
    stock: 8,
    badge: "Exclusive",
    delivery: "Free Express Delivery in Designer Packaging",
    seller: "Aurelia Heritage Couturier"
  },
  {
    id: 11,
    name: "Royal Heritage Handwoven Kanjivaram Pure Zari Silk Saree",
    brand: "Royal Heritage",
    category: "Fashion",
    subcategory: "Women Ethnic",
    price: 9999,
    originalPrice: 18999,
    discount: 47,
    rating: 4.9,
    reviews: 620,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Authentic Kanjivaram silk saree in deep crimson red featuring rich gold zari pallu, traditional peacock motifs, and unstitched blouse piece.",
    features: [
      "Silk Mark Certified 100% Pure Mulberry Silk",
      "Heavy Gold Zari Woven Pallu & Border",
      "Traditional Temple Motif Weave",
      "Unstitched Running Silk Blouse Included"
    ],
    specs: {
      "Length": "5.5m Saree + 0.8m Blouse",
      "Certification": "Silk Mark Certified",
      "Care": "Dry Clean Only"
    },
    stock: 15,
    badge: "Deal of the Day",
    isDealOfDay: true,
    delivery: "Free Express Delivery",
    seller: "Kanjivaram Weavers Guild"
  },
  {
    id: 12,
    name: "Veloura Artisanal Italian Leather Kolhapuri Sandals",
    brand: "Veloura",
    category: "Fashion",
    subcategory: "Footwear",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.7,
    reviews: 410,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Handcrafted genuine leather Kolhapuri footwear with cushioned footbed and intricate braid strap detail.",
    features: [
      "100% Top-grain Genuine Leather",
      "Cushioned Ergonomic Memory Foam Insole",
      "Anti-skid Rubber Outsole",
      "Hand-braided Traditional Pattern"
    ],
    specs: {
      "Upper Material": "Genuine Leather",
      "Sole": "Anti-Skid Rubber",
      "Style": "Ethnic / Casual"
    },
    stock: 22,
    delivery: "Free Delivery in 2-3 Days",
    seller: "Veloura Footwear"
  },

  // --- KITCHEN & HOME ---
  {
    id: 13,
    name: "ArtisanChef Smart Digital Air Fryer (5.5L XL / 1800W)",
    brand: "ArtisanChef",
    category: "Kitchen",
    subcategory: "Appliances",
    price: 5999,
    originalPrice: 11999,
    discount: 50,
    rating: 4.8,
    reviews: 1890,
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Fry with 90% less oil! Features 12 preset digital cooking programs, 360-degree rapid hot air circulation, and non-stick dishwasher-safe basket.",
    features: [
      "5.5L Family Capacity Basket",
      "360° Rapid Air Crisp Technology",
      "12 One-Touch LED Touchscreen Presets",
      "Dishwasher Safe Non-Stick Basket"
    ],
    specs: {
      "Capacity": "5.5 Liters",
      "Power": "1800 Watts",
      "Temperature": "80°C to 200°C",
      "Warranty": "2 Years Home Service"
    },
    stock: 30,
    badge: "Deal of the Day",
    isDealOfDay: true,
    delivery: "Free Express Delivery",
    seller: "ArtisanChef Kitchenware"
  },
  {
    id: 14,
    name: "UrbanNest Handcrafted Brass Teapot & Tea Set with Wooden Tray",
    brand: "UrbanNest",
    category: "Home",
    subcategory: "Decor & Dining",
    price: 3299,
    originalPrice: 5999,
    discount: 45,
    rating: 4.9,
    reviews: 310,
    images: [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Traditional pure brass teapot with 4 hammered brass cups and carved Sheesham wood serving tray.",
    features: [
      "100% Solid Hammered Brass Teapot",
      "Food-grade Tin Lined Interior (Kalai Coating)",
      "Handcrafted Sheesham Wooden Tray",
      "Ideal for Royal Gifting & Home Decor"
    ],
    specs: {
      "Teapot Capacity": "750ml",
      "Material": "Solid Brass & Sheesham Wood",
      "Set Includes": "1 Teapot + 4 Cups + 1 Tray"
    },
    stock: 19,
    badge: "Exclusive",
    delivery: "Free Delivery in 3 Days",
    seller: "UrbanNest Artisanal Decor"
  },
  {
    id: 15,
    name: "Solace Luxury 300 TC Egyptian Cotton Bedsheet Set (King Size)",
    brand: "Solace",
    category: "Home",
    subcategory: "Bedding",
    price: 2199,
    originalPrice: 4299,
    discount: 48,
    rating: 4.7,
    reviews: 750,
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Silky smooth 300 Thread Count 100% long-staple Egyptian cotton bedsheet set with 2 pillow covers in crisp ivory finish.",
    features: [
      "300 TC 100% Long-Staple Cotton",
      "Breathable & Hypoallergenic Fabric",
      "Fade-Resistant Eco-Friendly Dyes",
      "Includes 1 King Sheet + 2 Pillow Covers"
    ],
    specs: {
      "Dimensions": "108 x 108 inches",
      "Thread Count": "300 TC",
      "Care": "Machine Wash Warm"
    },
    stock: 40,
    delivery: "Free Delivery by Tomorrow",
    seller: "Solace Home Linen"
  },

  // --- BEAUTY & PERSONAL CARE ---
  {
    id: 16,
    name: "Botanica Organic Saffron & Rose Facial Oil Serum (30ml)",
    brand: "Botanica",
    category: "Beauty",
    subcategory: "Skincare",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.8,
    reviews: 1120,
    images: [
      "https://images.unsplash.com/photo-1608248597560-84381534b8d7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ayurvedic Kumkumadi radiantly glowing serum infused with Kashmiri Saffron, Damask Rose extracts, and 24K Gold flakes.",
    features: [
      "100% Organic Cold-Pressed Oils",
      "Infused with Pure Kashmiri Saffron & Gold Flakes",
      "Dermatologically Tested & Paraben Free",
      "Reduces Dark Spots & Boosts Radiance"
    ],
    specs: {
      "Volume": "30 ml",
      "Skin Type": "All Skin Types",
      "Cruelty Free": "Yes"
    },
    stock: 60,
    badge: "Best Seller",
    delivery: "Free Delivery by Tomorrow",
    seller: "Botanica Organics"
  },
  {
    id: 17,
    name: "Velour Oud Noir EDP Luxury Eau de Parfum Unisex (100ml)",
    brand: "Velour",
    category: "Beauty",
    subcategory: "Fragrance",
    price: 3499,
    originalPrice: 5999,
    discount: 41,
    rating: 4.9,
    reviews: 430,
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A rich, seductive fragrance blending Cambodian Oud, Amber, Vanilla, and Spiced Rose for an unforgettable 24-hour trail.",
    features: [
      "24% High Oil Concentration (Eau de Parfum)",
      "Long-lasting 24H Sillage",
      "Notes of Oud, Amber, Rose & Bergamot",
      "Handmade Italian Glass Flacon"
    ],
    specs: {
      "Volume": "100 ml",
      "Type": "Eau De Parfum (EDP)",
      "Gender": "Unisex"
    },
    stock: 25,
    badge: "Exclusive",
    delivery: "Free Express Delivery",
    seller: "Velour Luxury Parfums"
  },

  // --- BAGS & LUGGAGE ---
  {
    id: 18,
    name: "LuxeBags Executive Italian Full-Grain Leather Messenger Bag",
    brand: "LuxeBags",
    category: "Bags",
    subcategory: "Laptop Bags",
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    rating: 4.8,
    reviews: 580,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Handcrafted full-grain leather briefcase featuring padded 15.6-inch laptop compartment, brass hardware, and detachable shoulder strap.",
    features: [
      "100% Full-Grain Vegetable Tanned Leather",
      "Fits up to 15.6'' Laptop + Tablet Sleeve",
      "Heavy-Duty YKK Antique Brass Zippers",
      "Trolley Strap for Seamless Travel"
    ],
    specs: {
      "Dimensions": "40 x 30 x 9 cm",
      "Material": "Full Grain Genuine Leather",
      "Capacity": "14 Liters"
    },
    stock: 18,
    badge: "Best Seller",
    delivery: "Free Express Delivery",
    seller: "LuxeBags Craftsmanship"
  },
  {
    id: 19,
    name: "TravelCraft 28-inch Polycarbonate Hard Shell Spinner Luggage",
    brand: "TravelCraft",
    category: "Bags",
    subcategory: "Travel Luggage",
    price: 6499,
    originalPrice: 12999,
    discount: 50,
    rating: 4.7,
    reviews: 790,
    images: [
      "https://images.unsplash.com/photo-1565026057447-b88e3f29042b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-lightweight indestructible German Bayer Polycarbonate shell with TSA combination lock and 360-degree Japanese silent spinner wheels.",
    features: [
      "100% Unbreakable Polycarbonate Body",
      "Integrated Flush TSA Combination Lock",
      "Dual 8-Wheel 360° Silent Spinners",
      "Expandable Compartment for Extra 20% Space"
    ],
    specs: {
      "Size": "28 Inch Check-In",
      "Weight": "4.1 kg",
      "Warranty": "5 Years International Warranty"
    },
    stock: 22,
    delivery: "Free Express Delivery",
    seller: "TravelCraft Luggage Co."
  },

  // --- SPORTS & FITNESS ---
  {
    id: 20,
    name: "EcoFit Pro Anti-Slip Natural Rubber Cork Yoga Mat (6mm)",
    brand: "EcoFit",
    category: "Sports",
    subcategory: "Fitness",
    price: 1899,
    originalPrice: 3499,
    discount: 46,
    rating: 4.9,
    reviews: 670,
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Eco-friendly natural cork top layer bonded with non-toxic tree rubber base. Non-slip grip gets stronger when wet or sweaty.",
    features: [
      "100% Biodegradable Organic Cork & Natural Rubber",
      "Laser-Engraved Alignment Guide Lines",
      "6mm High-Density Joint Cushioning",
      "Includes Carrying Strap & Cotton Bag"
    ],
    specs: {
      "Dimensions": "183cm x 66cm x 6mm",
      "Weight": "2.4 kg",
      "Eco-Friendly": "100% Recyclable"
    },
    stock: 35,
    delivery: "Free Delivery by Tomorrow",
    seller: "EcoFit Gear"
  },
  {
    id: 21,
    name: "IronFlex Adjustable Cast Iron Dumbbell Set (20KG with Connector Bar)",
    brand: "IronFlex",
    category: "Sports",
    subcategory: "Gym Equipment",
    price: 3299,
    originalPrice: 5999,
    discount: 45,
    rating: 4.6,
    reviews: 1490,
    images: [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Convertible 20KG dumbbell to barbell home workout kit with anti-slip knurled handles and star collar locks.",
    features: [
      "Solid Heavy Duty Cast Iron Weight Plates",
      "Includes 40cm Padded Barbell Extension Bar",
      "Spinlock Collars for Maximum Safety",
      "Compact Storage Case Included"
    ],
    specs: {
      "Total Weight": "20 KG Set",
      "Material": "Cast Iron",
      "Warranty": "1 Year Replacement"
    },
    stock: 25,
    delivery: "Free Heavy Express Delivery",
    seller: "IronFlex Fitness Store"
  },

  // --- BOOKS & ART ---
  {
    id: 22,
    name: "The Art of Mindful Living - Collector's Hardcover Edition",
    brand: "Artisan Press",
    category: "Books & Art",
    subcategory: "Books",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.9,
    reviews: 950,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "An inspiring bestseller printed on archival gold-gilded paper with ribbon bookmark and hand-drawn illustrations.",
    features: [
      "Gold-Foil Embossed Cloth Hardcover",
      "High-grade Acid-Free Archival Paper",
      "Includes Satin Ribbon Page Marker",
      "Autographed Collector Bookmark Included"
    ],
    specs: {
      "Format": "Hardcover",
      "Pages": "352 Pages",
      "Language": "English"
    },
    stock: 50,
    delivery: "Free Delivery in 2 Days",
    seller: "BookSphere Distributors"
  },

  // --- AUTOMOTIVE ---
  {
    id: 23,
    name: "DriveSafe 4K Front & Rear Dual Dash Cam with Night Vision & GPS",
    brand: "DriveSafe",
    category: "Automotive",
    subcategory: "Car Electronics",
    price: 6999,
    originalPrice: 11999,
    discount: 41,
    rating: 4.7,
    reviews: 520,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Capture crystal clear 4K UHD video front and 1080P rear with Sony STARVIS sensor, built-in GPS logging, and 24H parking monitoring.",
    features: [
      "Real 4K Ultra HD Ultra-Wide 170° Lens",
      "Sony STARVIS Night Vision Sensor",
      "Built-in Wi-Fi & Mobile App Control",
      "G-Sensor Loop Recording & Parking Mode"
    ],
    specs: {
      "Resolution": "4K (Front) + 1080P (Rear)",
      "Screen": "3.0 Inch IPS Display",
      "Storage": "Supports up to 256GB MicroSD"
    },
    stock: 21,
    delivery: "Free Express Delivery",
    seller: "AutoGadget India"
  },

  // --- PET SUPPLIES ---
  {
    id: 24,
    name: "PawPal Premium Orthopedic Memory Foam Dog Bed (Large)",
    brand: "PawPal",
    category: "Pet Supplies",
    subcategory: "Dog Care",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.8,
    reviews: 430,
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Therapeutic orthopedic memory foam bed with water-resistant plush velvet cover and non-skid bottom for maximum pet joint relief.",
    features: [
      "Human-grade High-Density Memory Foam Base",
      "Removable & Machine Washable Cover",
      "Waterproof Inner Lining Protection",
      "Non-Skid Rubber Dot Bottom"
    ],
    specs: {
      "Dimensions": "90 x 70 x 15 cm",
      "Ideal For": "Medium to Large Dogs",
      "Cover Material": "Plush Velvet"
    },
    stock: 30,
    delivery: "Free Delivery by Tomorrow",
    seller: "PawPal Petcare"
  },

  // --- MORE PRODUCTS FOR RICH CATALOG ---
  {
    id: 25,
    name: "AuraSound BoomBass 60W Portable Bluetooth Speaker with RGB Lights",
    brand: "AuraSound",
    category: "Electronics",
    subcategory: "Audio",
    price: 3999,
    originalPrice: 7999,
    discount: 50,
    rating: 4.7,
    reviews: 1110,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "60W Peak Output party speaker with dual passive radiators, 360-degree dynamic RGB light show, and IPX7 waterproof rating.",
    features: [
      "60W Stereo Sound with Bass Boost",
      "24 Hours Playtime on Single Charge",
      "IPX7 Fully Waterproof Construction",
      "TWS Pairing for 120W Stereo Sound"
    ],
    specs: {
      "Output": "60 Watts",
      "Battery": "8000mAh",
      "Protection": "IPX7 Waterproof"
    },
    stock: 24,
    badge: "Hot Trend",
    delivery: "Free Delivery in 2 Days",
    seller: "AuraSound Direct"
  },
  {
    id: 26,
    name: "Zenith Tab 11'' WQXGA Display (8GB RAM / 128GB Wi-Fi + 5G)",
    brand: "Zenith",
    category: "Mobiles",
    subcategory: "Tablets",
    price: 28999,
    originalPrice: 39999,
    discount: 27,
    rating: 4.7,
    reviews: 490,
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Versatile 11-inch Android tablet with Quad Speakers tuned by Dolby Atmos, Stylus pen included, and 8600mAh long battery life.",
    features: [
      "11'' 2.5K 120Hz IPS Display",
      "Active Precision Stylus Pen Included in Box",
      "Quad Stereo Speakers tuned by Dolby Atmos",
      "8600mAh Battery with 45W Fast Charge"
    ],
    specs: {
      "RAM / Storage": "8GB / 128GB",
      "Display": "11 Inch 2.5K 120Hz",
      "Weight": "490g"
    },
    stock: 16,
    delivery: "Free Express Delivery",
    seller: "Zenith Mobiles India"
  },
  {
    id: 27,
    name: "Veloura Signature Genuine Italian Leather Wallet for Men",
    brand: "Veloura",
    category: "Accessories",
    subcategory: "Wallets",
    price: 999,
    originalPrice: 2499,
    discount: 60,
    rating: 4.6,
    reviews: 1890,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Slim bifold wallet made from vegetable-tanned genuine leather with RFID blocking shield and 8 card slots.",
    features: [
      "100% Genuine Full-Grain Leather",
      "Advanced RFID Blocking Technology",
      "8 Dedicated Credit Card Slots",
      "Coin Pocket & Dual Currency Slots"
    ],
    specs: {
      "Material": "Genuine Leather",
      "Dimensions": "11.5 x 9 x 1.5 cm",
      "Color": "Vintage Saddle Brown"
    },
    stock: 80,
    badge: "Best Seller",
    delivery: "Free Delivery by Tomorrow",
    seller: "Veloura Leather Accessories"
  },
  {
    id: 28,
    name: "Botanica Tea Tree Pure Clarifying Face Wash (150ml)",
    brand: "Botanica",
    category: "Beauty",
    subcategory: "Skincare",
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.5,
    reviews: 2100,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Deep cleansing facial gel with organic Australian Tea Tree oil and Neem extracts to combat breakouts and excess oiliness.",
    features: [
      "Purifies pores and controls excess sebum",
      "Free from Sulphates, Parabens & Phthalates",
      "Enriched with Organic Tea Tree & Salicylic Acid",
      "Gentle everyday non-stripping cleanser"
    ],
    specs: {
      "Volume": "150 ml",
      "Key Ingredient": "Tea Tree & Neem",
      "Skin Type": "Oily / Acne Prone"
    },
    stock: 100,
    delivery: "Free Delivery by Tomorrow",
    seller: "Botanica Organics"
  },
  {
    id: 29,
    name: "GourmetReserve Artisanal Himalayan Organic Honey (500g Jar)",
    brand: "GourmetReserve",
    category: "Gourmet Food",
    subcategory: "Pantry",
    price: 699,
    originalPrice: 1199,
    discount: 41,
    rating: 4.9,
    reviews: 840,
    images: [
      "https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Raw, unprocessed wild flora honey harvested from pristine Himalayan valleys. Packed with natural antioxidants and enzymes.",
    features: [
      "100% Raw Unfiltered Pure Wild Honey",
      "Directly Sourced from Himalayan Apiaries",
      "Zero Added Sugar or Preservatives",
      "Glass Jar Packaging to Preserve Purity"
    ],
    specs: {
      "Net Weight": "500g",
      "Packaging": "Glass Jar",
      "FSSAI Certified": "Yes"
    },
    stock: 45,
    delivery: "Free Delivery in 2 Days",
    seller: "GourmetReserve Organic Foods"
  },
  {
    id: 30,
    name: "TechNova Curved 32'' 4K UHD 144Hz Gaming Monitor",
    brand: "TechNova",
    category: "Electronics",
    subcategory: "Monitors",
    price: 29990,
    originalPrice: 42990,
    discount: 30,
    rating: 4.8,
    reviews: 540,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "1500R curved gaming screen featuring 1ms response time, AMD FreeSync Premium, and 99% sRGB color accuracy for immersive gaming and creative editing.",
    features: [
      "32-inch 4K UHD (3840x2160) 1500R Curved Panel",
      "144Hz Refresh Rate with 1ms MPRT Response",
      "HDR 400 Brightness & 99% sRGB Color",
      "DisplayPort 1.4 & Dual HDMI 2.1 Ports"
    ],
    specs: {
      "Screen Size": "32 Inch Curved",
      "Resolution": "3840 x 2160",
      "Refresh Rate": "144Hz",
      "Panel Type": "VA Curved"
    },
    stock: 14,
    badge: "Hot Trend",
    delivery: "Free Express Delivery",
    seller: "TechNova Official Outlet"
  },
  {
    id: 31,
    name: "UrbanNest Modern Velvet Accent Armchair with Brass Legs",
    brand: "UrbanNest",
    category: "Home",
    subcategory: "Furniture",
    price: 11999,
    originalPrice: 21999,
    discount: 45,
    rating: 4.7,
    reviews: 290,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Plush emerald velvet armchair with ergonomic curved backrest and brushed gold stainless steel tapered legs.",
    features: [
      "Premium Stain-Resistant Velvet Upholstery",
      "High-Density Resilient Foam Cushion",
      "Solid Hardwood Frame & Gold Brass Legs",
      "Supports up to 150 kg Weight"
    ],
    specs: {
      "Dimensions": "75 x 72 x 82 cm",
      "Weight Capacity": "150 kg",
      "Assembly": "Pre-Assembled"
    },
    stock: 10,
    delivery: "Free Furniture Delivery & Setup",
    seller: "UrbanNest Furniture Studio"
  },
  {
    id: 32,
    name: "Aurelia Designer Embroidered Silk Lehenga Choli Set",
    brand: "Aurelia",
    category: "Fashion",
    subcategory: "Women Ethnic",
    price: 18999,
    originalPrice: 35999,
    discount: 47,
    rating: 4.9,
    reviews: 380,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Heavy wedding lehenga featuring raw silk flare encrusted with sequins, dori embroidery, semi-stitched waist, and organza net dupatta.",
    features: [
      "Heavy Resham & Sequin Handwork",
      "Pure Art Silk Flared Skirt (4.5 Meter Flare)",
      "Unstitched Silk Choli Fabric (1m)",
      "Soft Organza Net Dupatta with Zari Border"
    ],
    specs: {
      "Lehenga Length": "42 Inches",
      "Waist": "Customizable up to 44 Inches",
      "Care": "Dry Clean Only"
    },
    stock: 7,
    badge: "Exclusive",
    delivery: "Free Express Designer Shipping",
    seller: "Aurelia Heritage Couturier"
  },
  {
    id: 33,
    name: "ArtisanChef Espresso Coffee Machine 15-Bar Pump",
    brand: "ArtisanChef",
    category: "Kitchen",
    subcategory: "Appliances",
    price: 8999,
    originalPrice: 15999,
    discount: 43,
    rating: 4.8,
    reviews: 620,
    images: [
      "https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Italian 15-bar pressure pump espresso and cappuccino maker with high-pressure steam milk frothing wand.",
    features: [
      "Italian 15-Bar High Pressure Extraction",
      "Swivel Steam Milk Frother for Cappuccino & Latte",
      "1.5L Removable Transparent Water Tank",
      "Dual Filter Holder for Single & Double Shot"
    ],
    specs: {
      "Pressure": "15 Bar",
      "Tank Capacity": "1.5 Liters",
      "Power": "1050 Watts"
    },
    stock: 17,
    delivery: "Free Express Delivery",
    seller: "ArtisanChef Kitchenware"
  },
  {
    id: 34,
    name: "ChronoCraft Retro Vintage Pilot Chronograph Watch",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Analog",
    price: 4499,
    originalPrice: 8999,
    discount: 50,
    rating: 4.7,
    reviews: 410,
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Military inspired quartz chronograph with stopwatch sub-dials, luminescent hands, and distressed genuine calf leather strap.",
    features: [
      "Precision Japanese Chronograph Movement",
      "Super-LumiNova Hands & Hour Markers",
      "100M Water Resistance (10 ATM)",
      "Distressed Vintage Leather Strap"
    ],
    specs: {
      "Case": "43mm Black PVD Coated Steel",
      "Glass": "Hardened Mineral Crystal",
      "Warranty": "2 Years"
    },
    stock: 25,
    delivery: "Free Delivery in 2 Days",
    seller: "ChronoCraft Horology"
  },
  {
    id: 35,
    name: "EcoFit Ultra-Light Speed Running Shoes for Men",
    brand: "EcoFit",
    category: "Sports",
    subcategory: "Footwear",
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    rating: 4.6,
    reviews: 1320,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ergonomic road running shoe with breathable knit upper, carbon-infused energy return foam sole, and anti-slip grip.",
    features: [
      "Breathable Seamless Flyknit Upper",
      "High-Rebound Responsive Foam Cushioning",
      "Ultra-Lightweight Construction (210g)",
      "Durable Abrasion-Resistant Rubber Tread"
    ],
    specs: {
      "Weight": "210g",
      "Sole": "Carbon Energy Return Foam",
      "Closure": "Lace-Up"
    },
    stock: 45,
    badge: "Best Seller",
    delivery: "Free Delivery by Tomorrow",
    seller: "EcoFit Gear"
  },
  {
    id: 36,
    name: "Velour Golden Aura Polarized Aviator Sunglasses",
    brand: "Velour",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 1799,
    originalPrice: 3499,
    discount: 48,
    rating: 4.8,
    reviews: 510,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Classic gold-framed aviators with TAC 100% UV400 polarized lenses, spring hinges, and silicone nose pads.",
    features: [
      "TAC Polarized Lenses with Anti-Glare Coating",
      "100% UV400 Protection (UVA & UVB)",
      "Corrosion-Resistant Gold Plated Alloy Frame",
      "Includes Hard Leather Case & Microfiber Cloth"
    ],
    specs: {
      "Lens Width": "58mm",
      "Frame Material": "Monel Metal",
      "Lens": "TAC Polarized"
    },
    stock: 35,
    delivery: "Free Delivery in 2 Days",
    seller: "Velour Eyewear"
  },
  {
    id: 37,
    name: "UrbanNest Handwoven Wool Kilm Area Rug (5x7 Feet)",
    brand: "UrbanNest",
    category: "Home",
    subcategory: "Decor & Dining",
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    rating: 4.8,
    reviews: 230,
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Traditional bohemian geometric pattern hand-knotted by master artisans using 100% pure New Zealand wool.",
    features: [
      "100% Pure New Zealand Wool Weave",
      "Reversible Flatweave Construction",
      "Eco-Friendly Vegetable Dyes",
      "Durable & Stain Resistant"
    ],
    specs: {
      "Dimensions": "5 x 7 Feet (150 x 210 cm)",
      "Material": "100% Wool",
      "Care": "Vacuum regularly / Spot clean"
    },
    stock: 12,
    delivery: "Free Express Delivery",
    seller: "UrbanNest Artisanal Decor"
  },
  {
    id: 38,
    name: "TechNova Pro Soundbar 2.1 Channel with Wireless Subwoofer (160W)",
    brand: "TechNova",
    category: "Electronics",
    subcategory: "Audio",
    price: 7499,
    originalPrice: 14999,
    discount: 50,
    rating: 4.7,
    reviews: 890,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Powerful 160W soundbar with dedicated 6.5'' wireless subwoofer, HDMI ARC, Optical input, and 3 EQ Sound Modes.",
    features: [
      "160W Peak Room-Filling Audio",
      "6.5'' Deep Bass Wireless Subwoofer",
      "HDMI ARC, Optical, AUX & Bluetooth 5.3",
      "Movie, Music & News EQ Presets"
    ],
    specs: {
      "Output": "160 Watts",
      "Channel": "2.1 Channel",
      "Subwoofer": "Wireless 6.5 Inch"
    },
    stock: 20,
    delivery: "Free Express Delivery",
    seller: "TechNova Official Outlet"
  },
  {
    id: 39,
    name: "GourmetReserve Single Origin Roasted Arabica Coffee Beans (1KG)",
    brand: "GourmetReserve",
    category: "Gourmet Food",
    subcategory: "Pantry",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    rating: 4.9,
    reviews: 780,
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Medium-dark roasted whole Arabica beans grown in high altitude Chikmagalur estates with tasting notes of dark chocolate and caramel.",
    features: [
      "100% Single Origin Specialty Arabica Beans",
      "Freshly Medium-Dark Batch Roasted",
      "Notes of Dark Cocoa, Hazelnut & Caramel",
      "Degassing Valve Bag to Seal Peak Aroma"
    ],
    specs: {
      "Weight": "1 KG Whole Beans",
      "Roast Level": "Medium Dark",
      "Origin": "Chikmagalur, Karnataka"
    },
    stock: 55,
    delivery: "Free Delivery by Tomorrow",
    seller: "GourmetReserve Organic Foods"
  },
  {
    id: 40,
    name: "PawPal Automatic Smart Pet Water Fountain 2.5L",
    brand: "PawPal",
    category: "Pet Supplies",
    subcategory: "Cat & Dog Care",
    price: 1699,
    originalPrice: 2999,
    discount: 43,
    rating: 4.7,
    reviews: 310,
    images: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-quiet recirculating pet water dispenser with triple filtration system and LED water level window.",
    features: [
      "Quadruple Activated Carbon Filtration",
      "2.5 Liters Capacity with LED Night Light",
      "Ultra-Quiet Low Voltage Submersible Pump (<20dB)",
      "BPA-Free Food Grade Material"
    ],
    specs: {
      "Capacity": "2.5 Liters",
      "Noise Level": "<20dB",
      "Power": "USB Powered 5V"
    },
    stock: 28,
    delivery: "Free Delivery in 2 Days",
    seller: "PawPal Petcare"
  },
  {
    id: 41,
    name: "Venezia Tailored Italian Wool 3-Piece Tuxedo Suit",
    brand: "Venezia",
    category: "Men's Fashion",
    subcategory: "Suits & Tuxedos",
    price: 34999,
    originalPrice: 49999,
    discount: 30,
    rating: 4.9,
    reviews: 185,
    images: [
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Impeccably tailored 3-piece tuxedo crafted from Super 140s Italian merino wool with satin peak lapels and hand-finished pick stitching.",
    features: [
          "100% Super 140s Italian Virgin Wool",
          "Satin Silk Peak Lapels & Trimmed Pockets",
          "Half-Canvas Construction for Superior Drape",
          "Includes Tailored Waistcoat & Trousers"
    ],
    specs: {
          "Fabric": "Super 140s Merino Wool",
          "Fit": "Modern Tailored Fit",
          "Lapel": "Satin Peak Lapel",
          "Care": "Dry Clean Only",
          "Origin": "Biella, Italy"
    },
    stock: 14,
    badge: "Exclusive",
    delivery: "Free Express White-Glove Delivery by Tomorrow",
    seller: "Venezia Sartoria Flagship"
  },
  {
    id: 42,
    name: "Maharaja Royal Hand-Embroidered Raw Silk Sherwani Set",
    brand: "Royal Heritage",
    category: "Men's Fashion",
    subcategory: "Ethnic Wear",
    price: 42999,
    originalPrice: 59999,
    discount: 28,
    rating: 4.9,
    reviews: 210,
    images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Regal raw silk ivory sherwani embellished with antique gold dabka and zardozi needlework, accompanied by a chanderi silk stole and churidar.",
    features: [
          "Pure Banarasi Raw Mulberry Silk",
          "Handcrafted Antique Zardozi & Resham Embroidery",
          "Includes Embroidered Stole (Dupatta) & Churidar",
          "Bespoke Brass Buttons with Semi-Precious Stones"
    ],
    specs: {
          "Fabric": "Pure Raw Silk & Chanderi",
          "Work": "Antique Zardozi & Dabka",
          "Occasion": "Bridal & Royal Celebrations",
          "Origin": "Varanasi, India"
    },
    stock: 9,
    badge: "Best Seller",
    delivery: "Free Insured Express Delivery in 2 Days",
    seller: "Royal Heritage Atelier"
  },
  {
    id: 43,
    name: "Sovereign Hand-Tailored Silk Linen Bandhgala Coat",
    brand: "Aurelia",
    category: "Men's Fashion",
    subcategory: "Ethnic Wear",
    price: 18499,
    originalPrice: 24999,
    discount: 26,
    rating: 4.8,
    reviews: 320,
    images: [
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Modern royal bandhgala jodhpuri jacket crafted in structured silk-linen blend with hand-cast pewter metallic buttons.",
    features: [
          "Premium Silk-Linen Textured Weave",
          "Mandarin Collar with Piped Velvet Edges",
          "Full Bemberg Breathable Lining",
          "Structured Shoulder Silhouette"
    ],
    specs: {
          "Material": "Silk 40%, Linen 60%",
          "Cut": "Classic Jodhpuri Bandhgala",
          "Buttons": "Custom Pewter Lion Crest",
          "Color": "Royal Navy Blue"
    },
    stock: 22,
    badge: "New Arrival",
    delivery: "Free Delivery by Tomorrow",
    seller: "Aurelia Menswear"
  },
  {
    id: 44,
    name: "Milano Egyptian Giza Cotton Tailored Crisp Formal Shirt",
    brand: "Venezia",
    category: "Men's Fashion",
    subcategory: "Formal Shirts",
    price: 4999,
    originalPrice: 7999,
    discount: 37,
    rating: 4.7,
    reviews: 440,
    images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Silky, breathable formal dress shirt woven from 100% long-staple Egyptian Giza cotton with mother-of-pearl buttons.",
    features: [
          "100% Long-Staple Egyptian Giza 87 Cotton",
          "Genuine Australian Mother-of-Pearl Buttons",
          "French Seam Construction (22 Stitches/Inch)",
          "Wrinkle-Resistant Natural Easy-Iron Finish"
    ],
    specs: {
          "Collar": "Semi-Spread Cutaway",
          "Cuff": "Convertible French/Barrel",
          "Weave": "Royal Twill 120/2",
          "Color": "Crisp Optical White"
    },
    stock: 48,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Venezia Sartoria Flagship"
  },
  {
    id: 45,
    name: "Kashmir Pure Pashmina Hand-Sozni Embroidered Men's Shawl",
    brand: "Royal Heritage",
    category: "Men's Fashion",
    subcategory: "Shawls & Stoles",
    price: 28999,
    originalPrice: 38999,
    discount: 25,
    rating: 5,
    reviews: 95,
    images: [
          "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Certified GI-tagged authentic Ladakhi Changthangi cashmere handspun on traditional looms with delicate Sozni needle embroidery.",
    features: [
          "100% Certified Changthangi Cashmere Pashmina",
          "Handspun Yarn & Hand-Woven on Wooden Looms",
          "Master Artisan Sozni Floral Hashiya Border",
          "Featherlight Warmth with Micron Count Under 14.5"
    ],
    specs: {
          "Dimensions": "100 x 200 cm (Men Doshalla)",
          "Certification": "Kashmir GI Tagged & Barcoded",
          "Micron": "14.2 Microns Pure Cashmere",
          "Color": "Natural Walnut Charcoal"
    },
    stock: 8,
    badge: "Exclusive",
    delivery: "Free Insured Express Delivery in 2 Days",
    seller: "Kashmir Heritage Guild"
  },
  {
    id: 46,
    name: "Aurelia Mulberry Silk Kurta Pyjama with Silk Nehru Jacket",
    brand: "Aurelia",
    category: "Men's Fashion",
    subcategory: "Ethnic Sets",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    rating: 4.8,
    reviews: 280,
    images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Artisanal 3-piece celebratory ethnic ensemble consisting of a pure tussar silk kurta, chudidar, and woven jacquard Nehru jacket.",
    features: [
          "Pure Tussar Mulberry Silk Kurta",
          "Jacquard Brocade Woven Sleeveless Jacket",
          "Side Concealed Pockets & Side Slits",
          "Comfort Elasticated Silk Blend Chudidar"
    ],
    specs: {
          "Set Contents": "Kurta, Nehru Jacket & Pyjama",
          "Fabric": "Tussar Silk Blend",
          "Occasion": "Festive & Wedding Guest",
          "Care": "Dry Clean"
    },
    stock: 25,
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Aurelia Menswear"
  },
  {
    id: 47,
    name: "Belgravia Full-Grain Nappa Leather Biker Jacket",
    brand: "Venezia",
    category: "Men's Fashion",
    subcategory: "Jackets & Outerwear",
    price: 24999,
    originalPrice: 34999,
    discount: 28,
    rating: 4.9,
    reviews: 140,
    images: [
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Supple Italian full-grain lambskin leather cafe-racer jacket equipped with antiqued Japanese YKK Excella zippers.",
    features: [
          "100% Vegetable-Tanned Italian Lambskin Nappa",
          "Heavyweight YKK Excella Gunmetal Zippers",
          "Quilted Thermal Silk-Satin Interior Lining",
          "Interior Concealed Device & Passport Pockets"
    ],
    specs: {
          "Leather Type": "Full-Grain Lamb Nappa (0.9mm)",
          "Hardware": "Brushed Antique Brass",
          "Fit": "Tailored Slim Fit",
          "Origin": "Florence, Italy"
    },
    stock: 16,
    badge: "Limited Stock",
    delivery: "Free Delivery by Tomorrow",
    seller: "Venezia Sartoria Flagship"
  },
  {
    id: 48,
    name: "Devika Pure Mulberry Silk Handloom Paithani Saree with Peacock Zari",
    brand: "Royal Heritage",
    category: "Women's Fashion",
    subcategory: "Sarees",
    price: 36999,
    originalPrice: 48999,
    discount: 24,
    rating: 5,
    reviews: 230,
    images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Authentic Yeola Paithani saree handwoven on traditional pit looms featuring pure gold tested zari mor-bangadi (peacock in bangle) motifs on the pallu.",
    features: [
          "100% Pure Mulberry Silk (Silk Mark Certified)",
          "Intricate Peacock & Floral Tapestry Weave Pallu",
          "Tested Pure Gold & Silver Metallic Zari",
          "Comes with Matching Unstitched Blouse Piece"
    ],
    specs: {
          "Saree Length": "5.5 Meters + 0.8m Blouse",
          "Weave Technique": "Tapestry Handloom (Kadiyal)",
          "Weight": "850g Pure Silk",
          "Origin": "Yeola, Maharashtra"
    },
    stock: 7,
    badge: "Exclusive",
    delivery: "Free Insured Express Delivery in 2 Days",
    seller: "Royal Heritage Atelier"
  },
  {
    id: 49,
    name: "Aurelia Royal Zardozi Velvet Bridal Wedding Lehenga Choli",
    brand: "Aurelia",
    category: "Women's Fashion",
    subcategory: "Lehengas",
    price: 68999,
    originalPrice: 95000,
    discount: 27,
    rating: 4.9,
    reviews: 180,
    images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Grand bridal couture lehenga in rich crimson micro-velvet, embellished with intricate hand-embroidered dabka, cutdana, sequins, and French knots.",
    features: [
          "Heavy Crimson Micro-Velvet with 5.5m Flare",
          "Dual Dupatta Set: Velvet Shawl & Hand-Embroidered Organza Veil",
          "Embellished with Semi-Precious Beads & Dabka Work",
          "Built-in Double Cancan Layer for Dramatic Gher"
    ],
    specs: {
          "Fabric": "Micro Velvet & Silk Organza",
          "Flair": "5.5 Meters Circular Gher",
          "Blouse": "Unstitched Padded Pattern",
          "Care": "Specialized Bridal Dry Clean"
    },
    stock: 5,
    badge: "Best Seller",
    delivery: "Free Insured Express Delivery in 3 Days",
    seller: "Aurelia Bridal Studio"
  },
  {
    id: 50,
    name: "Chandni Handcrafted Chikankari Pure Georgette Anarkali Suit",
    brand: "Aurelia",
    category: "Women's Fashion",
    subcategory: "Anarkalis & Suits",
    price: 19999,
    originalPrice: 28999,
    discount: 31,
    rating: 4.8,
    reviews: 310,
    images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Floor-length pure viscose georgette Anarkali featuring authentic Lucknowi Chikankari needlework with subtle mukaish metallic accents.",
    features: [
          "Hand-Embroidered Bakhiya, Phanda & Keel Kangan Stitches",
          "Delicate Real Silver Mukaish Badla Work",
          "Includes Pure Crepe Chudidar & Matching Dupatta",
          "Dyed in Ethereal Powder Blush Rose"
    ],
    specs: {
          "Fabric": "Pure Viscose Georgette 60g",
          "Flair": "4.5 Meters Anarkali Kalis",
          "Lining": "Pure Butter Crepe Included",
          "Origin": "Lucknow, Uttar Pradesh"
    },
    stock: 14,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Aurelia Womenswear"
  },
  {
    id: 51,
    name: "Elysian Silk Organza Hand-Painted Floral Evening Saree",
    brand: "Royal Heritage",
    category: "Women's Fashion",
    subcategory: "Sarees",
    price: 15499,
    originalPrice: 22999,
    discount: 32,
    rating: 4.8,
    reviews: 195,
    images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Gossamer pure silk organza saree hand-painted by master artisans with botanical English roses and highlighted with scalloped sequin embroidery.",
    features: [
          "100% Pure Lightweight Silk Organza",
          "Hand-Painted One-of-a-Kind Botanical Motifs",
          "Delicate Hand-Embroidered Scallop Pearl Border",
          "Includes Raw Silk Blouse Fabric"
    ],
    specs: {
          "Saree Length": "5.5m with Scalloped Edges",
          "Blouse Fabric": "0.9m Pure Raw Silk",
          "Weight": "380g Ultra-Light",
          "Care": "Gentle Dry Clean Only"
    },
    stock: 18,
    badge: "New Arrival",
    delivery: "Free Delivery by Tomorrow",
    seller: "Royal Heritage Atelier"
  },
  {
    id: 52,
    name: "Nocturne Haute Couture Draped Emerald Satin Evening Gown",
    brand: "Veloura",
    category: "Women's Fashion",
    subcategory: "Couture Gowns",
    price: 24999,
    originalPrice: 35000,
    discount: 28,
    rating: 4.9,
    reviews: 165,
    images: [
          "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Architecturally draped floor-sweeping evening gown cut on the bias from heavy Italian silk satin with an asymmetric cowl neckline.",
    features: [
          "Heavy Silk Duchesse Satin with Luminous Luster",
          "Internal Corseted Bodice with Flexible Boning",
          "High Thigh Slit with Cascading Waterfall Drape",
          "Invisible Back Zip Closure"
    ],
    specs: {
          "Silhouette": "Fitted Column with Fluid Train",
          "Length": "Floor Length (155 cm)",
          "Color": "Deep Imperial Emerald",
          "Origin": "Milan, Italy"
    },
    stock: 11,
    badge: "Exclusive",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Veloura Luxury Studio"
  },
  {
    id: 53,
    name: "Kashmir Tilla Embroidered Pure Cashmere Pashmina Cape",
    brand: "Royal Heritage",
    category: "Women's Fashion",
    subcategory: "Winter Couture",
    price: 32999,
    originalPrice: 45000,
    discount: 26,
    rating: 5,
    reviews: 80,
    images: [
          "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Regal draped cape jacket tailored from Grade-A pure Kashmiri cashmere pashmina, outlined with authentic metallic silver Tilla embroidery.",
    features: [
          "100% Certified Hand-Loomed Pashmina",
          "Real Silver Thread Tilla Hand Embroidery",
          "Contemporary Draped Cape Silhouette",
          "Pure Mulberry Silk Satin Contrast Lining"
    ],
    specs: {
          "Fabric": "Changthangi Cashmere Pashmina",
          "Embroidery": "Traditional Kashmiri Tilla",
          "Fit": "Free Size Draped Cape",
          "Color": "Onyx Black with Silver Tilla"
    },
    stock: 6,
    badge: "Limited Stock",
    delivery: "Free Insured Delivery in 2 Days",
    seller: "Kashmir Heritage Guild"
  },
  {
    id: 54,
    name: "Sitara Mirror-Work Hand-Embroidered Silk Sharara Set",
    brand: "Aurelia",
    category: "Women's Fashion",
    subcategory: "Ethnic Sets",
    price: 17999,
    originalPrice: 25999,
    discount: 30,
    rating: 4.8,
    reviews: 240,
    images: [
          "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Festive pure crepe silk short peplum kurta with multi-tiered flared sharara pants and an organza dupatta adorned with mirror embroidery.",
    features: [
          "Pure Silk Crepe with Real Glass Mirror Work",
          "Voluminous Flared Tiered Sharara Bottoms",
          "Scalloped Organza Dupatta with Mirror Buttis",
          "Zari Lace Detailing on Sleeves & Hemline"
    ],
    specs: {
          "Set Contents": "Short Kurta, Tiered Sharara, Dupatta",
          "Fabric": "Silk Crepe & Organza",
          "Color": "Saffron Marigold Gold",
          "Care": "Dry Clean"
    },
    stock: 19,
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Aurelia Womenswear"
  },
  {
    id: 55,
    name: "Regalia Banarasi Katan Silk Tissue Brocade Saree",
    brand: "Royal Heritage",
    category: "Women's Fashion",
    subcategory: "Sarees",
    price: 27999,
    originalPrice: 38000,
    discount: 26,
    rating: 4.9,
    reviews: 290,
    images: [
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Heritage heirloom Banarasi Katan silk saree woven with real gold tissue threads in an all-over intricate jangla floral jaal pattern.",
    features: [
          "100% Pure Katan Silk Base with Metallic Tissue Warp",
          "Master Handloom Kadwa Weave (No Loose Floats)",
          "Traditional Meenakari Highlights in Flowers",
          "Govt Silk Mark Certified Authenticity"
    ],
    specs: {
          "Length": "6.3m (Including Blouse Piece)",
          "Weave": "Handloom Kadwa Brocade",
          "Origin": "Varanasi, India",
          "Color": "Metallic Gold-Rose Dual Tone"
    },
    stock: 9,
    badge: "Best Seller",
    delivery: "Free Insured Express Delivery in 2 Days",
    seller: "Royal Heritage Atelier"
  },
  {
    id: 56,
    name: "Venezia Goodyear Welted Italian Calfskin Oxford Shoes",
    brand: "Venezia",
    category: "Footwear",
    subcategory: "Men Formal",
    price: 18999,
    originalPrice: 26999,
    discount: 29,
    rating: 4.9,
    reviews: 310,
    images: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Benchmark formal cap-toe oxford dress shoes handcrafted in Tuscany using full-grain French box calf leather and traditional Goodyear welted soles.",
    features: [
          "Full-Grain French Box Calfskin Leather",
          "Traditional Hand-Sewn Goodyear Welted Construction",
          "Vegetable-Tanned Italian Leather Sole with Cork Filling",
          "Closed Channel Stitching & Chiseled Toe Silhouette"
    ],
    specs: {
          "Upper": "French Box Calfskin",
          "Sole": "Oak-Bark Tanned Leather Sole",
          "Construction": "Goodyear Welted 360",
          "Origin": "Tuscany, Italy"
    },
    stock: 15,
    badge: "Exclusive",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Venezia Shoemakers"
  },
  {
    id: 57,
    name: "Aurelia Handcrafted Zardozi Embroidered Royal Juttis",
    brand: "Aurelia",
    category: "Footwear",
    subcategory: "Ethnic Footwear",
    price: 4499,
    originalPrice: 6999,
    discount: 35,
    rating: 4.8,
    reviews: 420,
    images: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Artisanal ceremonial mojari juttis made from genuine vegetable-tanned leather, hand-embroidered with zardozi thread and padded memory foam insoles.",
    features: [
          "100% Genuine Camel Leather Soles & Upper",
          "Hand-Embroidered Dabka & Gold Zardozi Needlework",
          "Double-Cushioned Memory Foam Insole (Zero Bite)",
          "Traditional Curved Palla Silhouette"
    ],
    specs: {
          "Sole": "Handcrafted Genuine Leather",
          "Lining": "Soft Leather with Foam Padding",
          "Care": "Wipe with Dry Cloth, Keep in Dustbag",
          "Origin": "Jaipur, Rajasthan"
    },
    stock: 35,
    badge: "Hot Trend",
    delivery: "Free Delivery by Tomorrow",
    seller: "Aurelia Footwear"
  },
  {
    id: 58,
    name: "Veloura Crystal-Embellished Satin Stiletto Pumps (85mm)",
    brand: "Veloura",
    category: "Footwear",
    subcategory: "Women Heels",
    price: 16999,
    originalPrice: 23999,
    discount: 29,
    rating: 4.9,
    reviews: 175,
    images: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Glamorous pointed-toe evening pumps cloaked in lustrous Italian silk satin, crowned by an iconic multifaceted Austrian crystal buckle brooch.",
    features: [
          "Italian Silk Satin Upper with Leather Insole",
          "Precision-Cut Austrian Crystal Brooch Embellishment",
          "85mm Flared Stiletto Heel for Balanced Grace",
          "Slip-Resistant Leather Outsole"
    ],
    specs: {
          "Heel Height": "85mm (3.3 inches)",
          "Upper": "Pure Silk Satin",
          "Insole": "Padded Italian Kid Leather",
          "Origin": "Florence, Italy"
    },
    stock: 12,
    badge: "Best Seller",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Veloura Luxury Studio"
  },
  {
    id: 59,
    name: "AeroStrata Carbon-Plated Nitrogen Marathon Running Shoes",
    brand: "EcoFit",
    category: "Footwear",
    subcategory: "Performance Sneakers",
    price: 14999,
    originalPrice: 19999,
    discount: 25,
    rating: 4.8,
    reviews: 380,
    images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Flagship marathon racer equipped with a full-length curved carbon fiber propulsion plate and supercritical nitrogen-infused foam midsole.",
    features: [
          "Full-Length Spoon-Shaped Carbon Fiber Plate",
          "Supercritical Nitrogen PEBA Foam with 85% Energy Return",
          "Ultra-Lightweight Hydrophobic Engineered Mesh Upper (185g)",
          "Continental Wet-Grip Rubber Outsole Pods"
    ],
    specs: {
          "Weight": "188g (Size UK 8)",
          "Drop": "8mm Heel-to-Toe",
          "Foam": "Dual-Density Nitrogen PEBA",
          "Plate": "100% 3K Carbon Fiber"
    },
    stock: 28,
    badge: "Deal of the Day",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "EcoFit Sports Official"
  },
  {
    id: 60,
    name: "Venezia Hand-Stitched Suede Penny Loafers with Commando Sole",
    brand: "Venezia",
    category: "Footwear",
    subcategory: "Casual Loafers",
    price: 13999,
    originalPrice: 19999,
    discount: 30,
    rating: 4.7,
    reviews: 260,
    images: [
          "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Sophisticated everyday penny loafers crafted from velvety water-repellent Italian reverse suede on lightweight micro-lug rubber soles.",
    features: [
          "Water-Repellent Italian Reverse Calf Suede",
          "Blake Rapid Flex Stitched Construction",
          "Ultra-Lightweight Extralight Commando Lug Soles",
          "Full Leather Lined with Ergonomic Arch Support"
    ],
    specs: {
          "Upper": "Tuscan Calf Suede",
          "Sole": "Extralight EVA Lug Sole",
          "Construction": "Blake Stitched",
          "Color": "Espresso Snuff Brown"
    },
    stock: 22,
    badge: "New Arrival",
    delivery: "Free Delivery by Tomorrow",
    seller: "Venezia Shoemakers"
  },
  {
    id: 61,
    name: "Veloura Handcrafted Leather Block-Heel Kolhapuri Sandals",
    brand: "Veloura",
    category: "Footwear",
    subcategory: "Ethnic Footwear",
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    rating: 4.8,
    reviews: 340,
    images: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Contemporary fusion footwear marrying the classic T-strap Kolhapuri braid with a sturdy 50mm architectural wooden block heel.",
    features: [
          "Genuine Kolhapur Hand-Braided Leather Straps",
          "50mm Solid Rosewood Architectural Block Heel",
          "Anti-Slip Ribbed Rubber Forefoot Insert",
          "Triple Layer Memory Foam Insole"
    ],
    specs: {
          "Heel Height": "50mm Block Heel",
          "Upper": "Hand-Tanned Buffalo Leather",
          "Insole": "Cushioned Kid Leather",
          "Color": "Natural Tan Gold"
    },
    stock: 31,
    delivery: "Free Delivery in 2 Days",
    seller: "Veloura Luxury Studio"
  },
  {
    id: 62,
    name: "ArtisanCraft Goodyear Welted Wingtip Brogue Boots",
    brand: "Venezia",
    category: "Footwear",
    subcategory: "Boots",
    price: 21999,
    originalPrice: 29999,
    discount: 26,
    rating: 4.9,
    reviews: 130,
    images: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Rugged yet refined wingtip brogue ankle boots tailored in pull-up Horween leather with storm welt weather sealing and Dainite studded rubber soles.",
    features: [
          "Horween Chromexcel Pull-Up Leather",
          "Storm Welted 360 Weather-Proof Construction",
          "Dainite British Studded Rubber Outsole",
          "Speed Hook Brass Eyelets & Pull Tabs"
    ],
    specs: {
          "Upper": "Horween Leather (Chicago)",
          "Sole": "British Dainite Rubber",
          "Height": "6-Inch Ankle Boot",
          "Color": "Cognac Vintage Chestnut"
    },
    stock: 14,
    badge: "Exclusive",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Venezia Shoemakers"
  },
  {
    id: 63,
    name: "Zenith CinemaPro 4K Laser Ultra-Short-Throw Home Projector",
    brand: "Zenith",
    category: "Electronics",
    subcategory: "Home Theater",
    price: 189990,
    originalPrice: 249990,
    discount: 24,
    rating: 4.9,
    reviews: 88,
    images: [
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Triple-laser ultra-short throw projector casting 150 inches of true 4K HDR10+ imagery from just 9 inches away with built-in Bowers & Wilkins audio.",
    features: [
          "Triple Laser ALPD 4.0 RGB Light Engine (3,000 ANSI Lumens)",
          "True 4K UHD with Dolby Vision & HDR10+ Support",
          "Projects 100'' Screen from 6 Inches Away (Max 150'')",
          "Integrated 60W Acoustic Bowers & Wilkins Dolby Atmos Speakers"
    ],
    specs: {
          "Resolution": "3840 x 2160 4K UHD",
          "Brightness": "3,000 ANSI Lumens",
          "Throw Ratio": "0.19:1 Ultra Short Throw",
          "Lamp Life": "25,000+ Hours",
          "Connectivity": "3x HDMI 2.1 (eARC), WiFi 6, Bluetooth 5.2"
    },
    stock: 6,
    badge: "Exclusive",
    delivery: "Free White-Glove Installation & Delivery in 2 Days",
    seller: "Zenith Electronics Global"
  },
  {
    id: 64,
    name: "TechNova Spatial Omni 360 Studio Reference Hi-Fi Speaker",
    brand: "TechNova",
    category: "Electronics",
    subcategory: "Audio",
    price: 29999,
    originalPrice: 39999,
    discount: 25,
    rating: 4.8,
    reviews: 320,
    images: [
          "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Lossless audiophile wireless home speaker with 360-degree spatial acoustic array, custom carbon-dome tweeters, and room-adaptive calibration.",
    features: [
          "Lossless Hi-Res Audio Streaming (24-bit/192kHz)",
          "7 Precision Drivers with 150W Class-D Tri-Amplification",
          "RoomSense Microphones for Automatic Acoustic Calibration",
          "Supports AirPlay 2, Spotify Connect, Tidal Connect, Roon Ready"
    ],
    specs: {
          "Power Output": "150W RMS",
          "Frequency Response": "32Hz - 24,000Hz",
          "Connectivity": "Wi-Fi 6, Bluetooth 5.3, Optical 3.5mm",
          "Finish": "Anodized Aluminum & Acoustically Transparent Wool"
    },
    stock: 20,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "TechNova Official Outlet"
  },
  {
    id: 65,
    name: "UltraCraft Studio Max 34'' Curved Nano-IPS 165Hz Creator Display",
    brand: "UltraCraft",
    category: "Electronics",
    subcategory: "Monitors",
    price: 64999,
    originalPrice: 84999,
    discount: 23,
    rating: 4.9,
    reviews: 145,
    images: [
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultrawide 34-inch curved creator monitor boasting 98% DCI-P3 color gamut, Thunderbolt 4 90W single-cable dock, and Delta E < 1 calibration.",
    features: [
          "34-Inch WQHD (3440 x 1440) Nano-IPS Curved Panel (1900R)",
          "Factory Calibrated Delta E < 1 with Hardware LUT Calibration",
          "Thunderbolt 4 Single Cable Port with 90W Host Power Delivery",
          "165Hz Refresh Rate & 1ms GtG Response with G-Sync Compatibility"
    ],
    specs: {
          "Panel Type": "Nano-IPS 10-Bit Color",
          "Color Accuracy": "98% DCI-P3, 135% sRGB",
          "Ports": "Thunderbolt 4, 2x HDMI 2.1, DisplayPort 1.4, USB Hub",
          "Warranty": "3 Years Zero Bright Pixel Guarantee"
    },
    stock: 11,
    badge: "New Arrival",
    delivery: "Free Express Courier in 2 Days",
    seller: "UltraCraft Workstations"
  },
  {
    id: 66,
    name: "AuraSound Studio Earbuds Max with Wind Shielding & Spatial Audio",
    brand: "AuraSound",
    category: "Electronics",
    subcategory: "Audio",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.7,
    reviews: 510,
    images: [
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Flagship True Wireless earbuds with adaptive 48dB noise cancellation, graphene drivers, micro-mesh wind baffles, and wireless fast charging.",
    features: [
          "48dB Hybrid Adaptive Active Noise Cancellation",
          "Beryllium-Coated 11mm Acoustic Dynamic Drivers",
          "Triple Microphones with Bone Conduction Voice Pick-Up",
          "38 Hours Total Battery with Qi Wireless Charging Case"
    ],
    specs: {
          "Battery Life": "9h Buds + 29h Charging Case",
          "Codecs Supported": "LDAC, AAC, SBC, aptX Adaptive",
          "Water Resistance": "IPX7 Sweat & Water Proof",
          "Bluetooth": "v5.3 Multipoint Dual Connect"
    },
    stock: 45,
    badge: "Deal of the Day",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "AuraSound Direct"
  },
  {
    id: 67,
    name: "CineShot Pocket Cinema 6K Gimbal Stabilized Camera Kit",
    brand: "CineShot",
    category: "Electronics",
    subcategory: "Cameras",
    price: 89990,
    originalPrice: 115000,
    discount: 22,
    rating: 4.9,
    reviews: 110,
    images: [
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Compact cinema powerhouse recording 6K ProRes RAW with mechanical 3-axis gimbal stabilization and dual native ISO sensors.",
    features: [
          "Super 35 High-Resolution HDR Sensor (6K up to 50fps)",
          "Integrated 3-Axis Motorized Carbon Mechanical Gimbal",
          "13 Stops of Dynamic Range with Dual Native ISO up to 25,600",
          "Includes 24-70mm f/2.8 Parfocal Cinema Lens & Wireless Mic"
    ],
    specs: {
          "Sensor": "Super 35 Dual Native ISO",
          "Video Formats": "ProRes 422HQ, 6K RAW, 10-Bit 4:2:2",
          "Screen": "5.0-inch 1500-Nit HDR Touchscreen",
          "Storage": "CFexpress Type B & High-Speed SD UHS-II"
    },
    stock: 9,
    badge: "Exclusive",
    delivery: "Free Express Insured Courier in 2 Days",
    seller: "CineShot Optics Official"
  },
  {
    id: 68,
    name: "Zenith VisionPro VR/AR Spatial Computing Headset",
    brand: "Zenith",
    category: "Electronics",
    subcategory: "Wearables & VR",
    price: 149990,
    originalPrice: 189990,
    discount: 21,
    rating: 4.8,
    reviews: 75,
    images: [
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Next-generation mixed-reality spatial computer featuring dual 4K micro-OLED displays per eye, precise eye-tracking, and hand gesture navigation.",
    features: [
          "Dual Micro-OLED 4K Displays (23 Million Total Pixels)",
          "12 Cameras & 5 LiDAR Sensors for Real-Time Spatial Mapping",
          "Intuitive Eye-Tracking & Sub-Millimeter Hand Gesture Inputs",
          "Spatial Audio Pods with Dynamic Head Tracking"
    ],
    specs: {
          "Display": "2x 4K Micro-OLED 90Hz HDR",
          "Processor": "Dual M-Silicon Octa-Core Chipset",
          "Weight": "440g Balanced Carbon Fiber Frame",
          "Battery": "External Battery Pack (2.5 Hours Continuous)"
    },
    stock: 8,
    badge: "New Arrival",
    delivery: "Free White-Glove Hand Delivery in 2 Days",
    seller: "Zenith Electronics Global"
  },
  {
    id: 69,
    name: "ChronoCraft Tourbillon Masterpiece Rose Gold Automatic Watch",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Tourbillon",
    price: 145000,
    originalPrice: 195000,
    discount: 25,
    rating: 5,
    reviews: 65,
    images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Haute horlogerie flying tourbillon timepiece featuring an 18K rose gold plated 42mm case, skeletonized dial, and hand-beveled bridges.",
    features: [
          "Real Mechanical Flying Tourbillon (28,800 vph)",
          "Hand-Wind Calibre CC-901 with 72-Hour Power Reserve",
          "Double Anti-Reflective Curved Sapphire Crystal Front & Back",
          "Hand-Stitched Louisiana Alligator Leather Strap"
    ],
    specs: {
          "Case Diameter": "42mm",
          "Case Material": "316L Steel with 18K Rose Gold Ion Plating",
          "Power Reserve": "72 Hours",
          "Water Resistance": "50 Meters (5 ATM)"
    },
    stock: 5,
    badge: "Exclusive",
    delivery: "Free White-Glove Insured Delivery by Tomorrow",
    seller: "ChronoCraft Geneva Atelier"
  },
  {
    id: 70,
    name: "ChronoCraft Diver 300M Automatic Ceramic Bezel Marine Watch",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Diving Watches",
    price: 38999,
    originalPrice: 52000,
    discount: 25,
    rating: 4.9,
    reviews: 210,
    images: [
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Professional grade marine dive watch equipped with a scratch-proof ceramic rotating bezel, helium escape valve, and Super-LumiNova markers.",
    features: [
          "300 Meters (30 ATM) Certified Water Resistance",
          "Unidirectional 120-Click Zirconia Ceramic Bezel",
          "Swiss Automatic Movement with 42-Hour Reserve",
          "Super-LumiNova BGW9 Glowing Blue Markers & Hands"
    ],
    specs: {
          "Case Diameter": "41mm Stainless Steel",
          "Glass": "Flat Sapphire with AR Undercoating",
          "Bracelet": "Solid Link Stainless Steel with Diver Extension",
          "Movement": "Calibre 2824-2 Automatic (25 Jewels)"
    },
    stock: 18,
    badge: "Best Seller",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "ChronoCraft Geneva Atelier"
  },
  {
    id: 71,
    name: "PulseFit Titanium Elite Smartwatch with Sapphire Glass & ECG",
    brand: "PulseFit",
    category: "Watches",
    subcategory: "Smartwatches",
    price: 24999,
    originalPrice: 34999,
    discount: 28,
    rating: 4.8,
    reviews: 410,
    images: [
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Aerospace-grade Grade 5 titanium smartwatch featuring medical-grade ECG tracking, dual-frequency GNSS navigation, and 14 days of battery.",
    features: [
          "Grade 5 Aerospace Titanium Unibody & Sapphire Glass",
          "FDA-Cleared ECG & Bio-Impedance Sensor Array",
          "Dual-Band Multi-Constellation GPS (L1 + L5 Navigation)",
          "Up to 14 Days Typical Battery Life (Fast Wireless Charge)"
    ],
    specs: {
          "Display": "1.43'' LTPO AMOLED Always-On (1,000 Nits)",
          "Battery Life": "14 Days Typical / 36 Hours Full GPS",
          "Water Rating": "10 ATM / Diving EN13319 Compliant",
          "Sensors": "ECG, SpO2, Optical HR, Temperature, Barometer"
    },
    stock: 26,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "PulseFit Official"
  },
  {
    id: 72,
    name: "Aurelia Celestial Moonphase Diamond-Accented Ladies Timepiece",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Women Horology",
    price: 32999,
    originalPrice: 45000,
    discount: 26,
    rating: 4.9,
    reviews: 140,
    images: [
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ethereal ladies horology timepiece sporting a natural mother-of-pearl dial with real diamond hour indices and a gilded moonphase calendar.",
    features: [
          "Natural Tahitian Mother-of-Pearl Shimmering Dial",
          "12 Certified Lab-Grown Diamond Hour Markers",
          "Accurate 29.5-Day Astronomical Moonphase Complication",
          "Polished Mesh Stainless Steel Bracelet with Quick-Release"
    ],
    specs: {
          "Case Diameter": "34mm Delicate Slim Profile",
          "Diamonds": "0.12 Carats Total Weight (VVS Clarity)",
          "Glass": "Anti-Scratch Sapphire Crystal",
          "Water Resistance": "50 Meters"
    },
    stock: 14,
    badge: "New Arrival",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "ChronoCraft Geneva Atelier"
  },
  {
    id: 73,
    name: "ChronoCraft Heritage Monopusher Chronograph with Alligator Leather",
    brand: "ChronoCraft",
    category: "Watches",
    subcategory: "Chronograph",
    price: 49999,
    originalPrice: 65000,
    discount: 23,
    rating: 4.9,
    reviews: 95,
    images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Vintage 1940s-inspired monopusher column-wheel mechanical chronograph with telemeter dial track and blued steel hands.",
    features: [
          "Column-Wheel Monopusher Mechanical Calibre",
          "Thermally Blued Steel Breguet-Style Hands",
          "Dual Vintage Subdials for 30-Minute Counter & Seconds",
          "Exhibition Sapphire Caseback Revealing Engraved Rotor"
    ],
    specs: {
          "Case": "39mm Vintage Proportions 316L",
          "Movement": "Column-Wheel Chronograph 28,800 bph",
          "Strap": "Cognac Brown French Calfskin Leather",
          "Power Reserve": "48 Hours"
    },
    stock: 8,
    badge: "Limited Stock",
    delivery: "Free Insured Express Delivery in 2 Days",
    seller: "ChronoCraft Geneva Atelier"
  },
  {
    id: 74,
    name: "PulseFit Heritage Ceramic Edition GPS Wellness Smartwatch",
    brand: "PulseFit",
    category: "Watches",
    subcategory: "Smartwatches",
    price: 21999,
    originalPrice: 29999,
    discount: 26,
    rating: 4.8,
    reviews: 280,
    images: [
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-sleek nanotech white ceramic smartwatch body paired with 24/7 cardiovascular monitoring, sleep stages analysis, and Bluetooth calling.",
    features: [
          "Polished Nanocrystalline High-Tech White Ceramic Case",
          "Bluetooth HD Calling with Noise-Filtering Microphones",
          "100+ Professional Sports Modes & Automatic Rep Counting",
          "Skin Temperature & Continuous SpO2 Monitoring"
    ],
    specs: {
          "Display": "1.32'' AMOLED 466x466 (352 PPI)",
          "Battery": "7 Days Continuous Tracking",
          "Case": "White Zirconia Ceramic + Titanium Bezel",
          "Compatibility": "iOS & Android Companion Apps"
    },
    stock: 21,
    delivery: "Free Express Delivery by Tomorrow",
    seller: "PulseFit Official"
  },
  {
    id: 75,
    name: "LuxeBags Handcrafted Tuscan Leather Weekender Duffle Bag",
    brand: "LuxeBags",
    category: "Bags",
    subcategory: "Travel Luggage",
    price: 19999,
    originalPrice: 28999,
    discount: 31,
    rating: 4.9,
    reviews: 320,
    images: [
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Timeless 45-liter carry-on weekender travel duffle handcrafted in Santa Croce from vegetable-tanned full-grain vacchetta leather.",
    features: [
          "100% Certified Full-Grain Tuscan Vacchetta Leather",
          "Solid Antiqued Brass Hardware & Rivet Reinforcements",
          "Dedicated Zippered Shoe Compartment with Waterproof Lining",
          "Includes Detachable Padded Shoulder Strap & Luggage Tag"
    ],
    specs: {
          "Capacity": "45 Liters (Cabin Approved)",
          "Dimensions": "52 x 28 x 26 cm",
          "Weight": "1.95 KG",
          "Origin": "Tuscany, Italy"
    },
    stock: 17,
    badge: "Exclusive",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "LuxeBags Italia"
  },
  {
    id: 76,
    name: "Veloura Signature Monogram Saffiano Leather Tote Bag",
    brand: "Veloura",
    category: "Bags",
    subcategory: "Tote Bags",
    price: 14999,
    originalPrice: 21999,
    discount: 31,
    rating: 4.8,
    reviews: 410,
    images: [
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Structured daily luxury work tote meticulously constructed from scratch-resistant cross-grain Saffiano leather with 14-inch laptop sleeve.",
    features: [
          "Scratch & Water Resistant Italian Saffiano Leather",
          "Padded Central Sleeve Accommodating 14-inch Laptops",
          "Gold-Tone Protective Metal Base Studs",
          "Dual Reinforced Handles with 10-inch Drop Length"
    ],
    specs: {
          "Dimensions": "38 x 28 x 14 cm",
          "Weight": "920g",
          "Hardware": "14K Pale Gold Plated Metal",
          "Color": "Classic Noir Black & Gilded Monogram"
    },
    stock: 24,
    badge: "Best Seller",
    delivery: "Free Delivery by Tomorrow",
    seller: "Veloura Luxury Studio"
  },
  {
    id: 77,
    name: "Velour 24K Gold-Plated Polarized Aviator Sunglasses",
    brand: "Accessories",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 8999,
    originalPrice: 13999,
    discount: 35,
    rating: 4.8,
    reviews: 290,
    images: [
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Iconic teardrop aviators sculpted from surgical-grade titanium dipped in 24K yellow gold with distortion-free polarized crystal lenses.",
    features: [
          "24K Gold Ion-Plated Lightweight Beta-Titanium Frame",
          "Category 3 Polarized Glass Lenses with 100% UV400 Protection",
          "Hypoallergenic Medical-Grade Titanium Nosepads",
          "Includes Handcrafted Hard Leather Carrying Case"
    ],
    specs: {
          "Frame Material": "Beta-Titanium 24K Gold Plated",
          "Lens": "G-15 Polarized Mineral Glass",
          "Lens Width": "58mm Standard",
          "Weight": "Only 24 Grams"
    },
    stock: 30,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Velour Eyewear Atelier"
  },
  {
    id: 78,
    name: "Royal Heritage Sterling Silver 925 Handcrafted Cufflinks Set",
    brand: "Accessories",
    category: "Accessories",
    subcategory: "Jewellery & Cufflinks",
    price: 6499,
    originalPrice: 9499,
    discount: 31,
    rating: 4.9,
    reviews: 160,
    images: [
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Artisan pair of solid 925 hallmarked sterling silver cufflinks set with deep black onyx stone and accompanied by a matching tie bar.",
    features: [
          "Certified 925 Hallmarked Solid Sterling Silver",
          "Hand-Cut Natural Black Onyx Gemstone Inlay",
          "Swivel T-Bar Closure Mechanism with Polished Finish",
          "Includes Premium Velvet Lined Presentation Gift Box"
    ],
    specs: {
          "Metal": "Solid 925 Sterling Silver (14g)",
          "Stone": "Natural Black Onyx",
          "Hallmark": "Govt BIS Hallmarked 925",
          "Includes": "Pair of Cufflinks + Matching Tie Clip"
    },
    stock: 33,
    badge: "New Arrival",
    delivery: "Free Delivery by Tomorrow",
    seller: "Royal Heritage Silversmiths"
  },
  {
    id: 79,
    name: "LuxeBags Slim Bifold Carbon Fiber & Full-Grain Leather Wallet",
    brand: "Accessories",
    category: "Accessories",
    subcategory: "Wallets",
    price: 3499,
    originalPrice: 5999,
    discount: 41,
    rating: 4.7,
    reviews: 510,
    images: [
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-thin minimalist bifold wallet engineered with genuine 3K twill carbon fiber weave and Italian full-grain vegetable-tanned leather.",
    features: [
          "Genuine Aerospace 3K Carbon Fiber Outer Shell",
          "Full-Grain Italian Calfskin Leather Interior Lining",
          "Certified RFID-Blocking Shielding across All Slots",
          "Capacity for 8 Cards, Currency Notes & Hidden Pocket"
    ],
    specs: {
          "Dimensions": "11 x 8.5 x 0.8 cm (Ultra-Slim)",
          "Weight": "48g",
          "RFID Shield": "Blocks 13.56 MHz Signals",
          "Color": "Matte Carbon & Bordeaux Burgundy"
    },
    stock: 50,
    badge: "Deal of the Day",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "LuxeBags Italia"
  },
  {
    id: 80,
    name: "Veloura Reversible Monogram Leather Dress Belt with Gold Buckle",
    brand: "Accessories",
    category: "Accessories",
    subcategory: "Belts",
    price: 4999,
    originalPrice: 7499,
    discount: 33,
    rating: 4.8,
    reviews: 380,
    images: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Versatile 35mm reversible luxury belt offering sleek midnight black leather on one side and rich cognac brown on the reverse with a rotatable buckle.",
    features: [
          "100% Full-Grain Vegetable-Tanned Italian Leather",
          "Quick-Twist Reversible Mechanism (Black & Cognac Brown)",
          "Polished 18K Gold PVD-Coated Brass Buckle",
          "Hand-Burnished Waxed Edges for Long-Term Durability"
    ],
    specs: {
          "Width": "35mm (Standard Trouser/Suit Width)",
          "Material": "Double-Sided Full Grain Leather",
          "Buckle": "Solid Brass Rotatable Pin Buckle",
          "Sizes Available": "30 to 42 Inches Waist"
    },
    stock: 42,
    delivery: "Free Delivery by Tomorrow",
    seller: "Veloura Luxury Studio"
  },
  {
    id: 81,
    name: "Botanica 24K Pure Gold Radiance Elixir Infused Night Serum (30ml)",
    brand: "Beauty",
    category: "Beauty",
    subcategory: "Skincare",
    price: 4499,
    originalPrice: 6999,
    discount: 35,
    rating: 4.9,
    reviews: 480,
    images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ayurvedic rejuvenating anti-aging face elixir micro-infused with real 24-karat gold flakes, Kashmiri Mogra saffron, and cold-pressed Kumkumadi.",
    features: [
          "Infused with 99.9% Pure 24K Cosmetic Gold Flakes",
          "Rich in Kashmiri Saffron (Crocus Sativus) & Sandalwood",
          "Clinically Proven to Improve Skin Elasticity & Glow in 14 Days",
          "100% Clean, Paraben-Free, Mineral Oil-Free & Cruelty-Free"
    ],
    specs: {
          "Volume": "30ml Glass Dropper Bottle",
          "Skin Type": "Suitable for All Skin Types",
          "Key Ingredients": "24K Gold, Kumkumadi Tailam, Saffron, Lotus",
          "Made in": "Udaipur, India"
    },
    stock: 36,
    badge: "Best Seller",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Botanica Herbals Official"
  },
  {
    id: 82,
    name: "Velour Royal Ambergris Imperial Extrait de Parfum (100ml)",
    brand: "Beauty",
    category: "Beauty",
    subcategory: "Fragrance",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    rating: 5,
    reviews: 210,
    images: [
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "High-concentration 35% Extrait de Parfum blending rare vintage ambergris, smoky Cambodian oud, Bulgarian rose petals, and Tahitian vanilla.",
    features: [
          "35% Pure Perfume Oil Extrait Concentration",
          "Sillage Lasting 16+ Hours on Skin & Fabrics",
          "Presented in Heavy Cut-Crystal Flacon with Magnetic Cap",
          "Artisanal Small-Batch Matured for 6 Months"
    ],
    specs: {
          "Size": "100ml / 3.4 fl. oz.",
          "Fragrance Family": "Oriental Amber Woody",
          "Top Notes": "Bergamot, Cardamom, Pink Pepper",
          "Heart Notes": "Bulgarian Rose, Ambergris, Incense",
          "Base Notes": "Cambodian Oud, Sandalwood, Bourbon Vanilla"
    },
    stock: 15,
    badge: "Exclusive",
    delivery: "Free Insured Delivery by Tomorrow",
    seller: "Velour Parfums Paris"
  },
  {
    id: 83,
    name: "Botanica Kumkumadi Miracle Youth Restorative Night Cream",
    brand: "Beauty",
    category: "Beauty",
    subcategory: "Skincare",
    price: 3299,
    originalPrice: 4999,
    discount: 34,
    rating: 4.8,
    reviews: 360,
    images: [
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Decadent overnight recovery cream concocted with 26 Ayurvedic herbs, clarified cow's ghee, and vetiver to deeply nourish and fade hyperpigmentation.",
    features: [
          "Formulated with Authentic 26-Herb Kumkumadi Tailam",
          "Clarified A2 Desi Cow's Ghee Base for Deep Dermal Absorption",
          "Targets Fine Lines, Dark Circles, and Uneven Tone",
          "Non-Comedogenic & Dermatologically Tested"
    ],
    specs: {
          "Net Weight": "50g Amber Glass Jar",
          "Application": "Nighttime Face & Neck",
          "Free From": "Silicones, Sulfates, Artificial Fragrance"
    },
    stock: 42,
    badge: "Hot Trend",
    delivery: "Free Delivery by Tomorrow",
    seller: "Botanica Herbals Official"
  },
  {
    id: 84,
    name: "Botanica Kashmiri Rose Water & Saffron Hydrating Facial Mist",
    brand: "Beauty",
    category: "Beauty",
    subcategory: "Skincare",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    rating: 4.8,
    reviews: 580,
    images: [
          "https://images.unsplash.com/photo-1608248597359-52d3a3d548f0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Steam-distilled pure organic Damask rose water infused with active saffron extracts to instantly tone, hydrate, and tighten open pores.",
    features: [
          "100% Pure Steam-Distilled Rosa Damascena Water",
          "Infused with Pure Saffron Stigmas (Antioxidant Rich)",
          "Balances Natural pH and Calms Stressed Skin",
          "Ultra-Fine Continuous Atomizer Spray"
    ],
    specs: {
          "Net Volume": "200ml Recyclable Aluminum Bottle",
          "Use": "Face Toner, Makeup Setting Spray, Refreshing Mist",
          "Certification": "USDA Organic Certified"
    },
    stock: 65,
    delivery: "Free Delivery by Tomorrow",
    seller: "Botanica Herbals Official"
  },
  {
    id: 85,
    name: "Velour Imperial Mysore Sandalwood Pure Attar Oil (12ml)",
    brand: "Beauty",
    category: "Beauty",
    subcategory: "Fragrance",
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.9,
    reviews: 190,
    images: [
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Govt-certified mature Mysore Santalum Album sandalwood concentrated perfume oil hydro-distilled in traditional copper degs without any alcohol.",
    features: [
          "100% Pure Hydro-Distilled Mysore Sandalwood Oil",
          "Zero Alcohol, Zero Solvents & 100% Concentrated Pure Attar",
          "Deep Creamy Woody Warmth with Divine Calming Resonance",
          "Packaged in Gilded Crystal Ittar Bottle with Glass Dipstick"
    ],
    specs: {
          "Volume": "12ml (Approx 1 Tola)",
          "Grade": "Santalum Album First Quality",
          "Shelf Life": "Matures and Enriches with Age"
    },
    stock: 20,
    badge: "Exclusive",
    delivery: "Free Insured Delivery in 2 Days",
    seller: "Velour Parfums Paris"
  },
  {
    id: 86,
    name: "UrbanNest Hand-Knotted Kashmiri Pure Silk Area Rug (6x9 Ft)",
    brand: "Home",
    category: "Home",
    subcategory: "Carpets & Rugs",
    price: 74999,
    originalPrice: 110000,
    discount: 31,
    rating: 5,
    reviews: 65,
    images: [
          "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Exquisite hand-knotted Kashmiri carpet woven from 100% mulberry silk on cotton foundation boasting 400 knots per square inch in Persian medallion motif.",
    features: [
          "100% Pure Mulberry Silk Pile (High Knot Density 400 KPSI)",
          "Intricate Traditional Kashan Medallion & Floral Filigree",
          "Natural Vegetable Dyes with Luminescent Color Shift Under Light",
          "Govt Handicrafts Board Certified Authenticity"
    ],
    specs: {
          "Dimensions": "6 x 9 Feet (183 x 274 cm)",
          "Density": "400 Knots Per Square Inch",
          "Pile Material": "100% Pure Natural Silk",
          "Weaving Time": "Approx. 14 Months by Master Weavers"
    },
    stock: 4,
    badge: "Exclusive",
    delivery: "Free White-Glove Insured Delivery in 3 Days",
    seller: "UrbanNest Fine Interiors"
  },
  {
    id: 87,
    name: "ArtisanChef Hand-Hammered Pure Tri-Ply Copper Cookware Set (7 Pcs)",
    brand: "Kitchen",
    category: "Kitchen",
    subcategory: "Cookware",
    price: 24999,
    originalPrice: 34999,
    discount: 28,
    rating: 4.9,
    reviews: 140,
    images: [
          "https://images.unsplash.com/photo-1584990347449-399066667554?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Culinary chef-grade 7-piece cookware set made of heavy 2.5mm solid hammered copper with an indestructible 18/10 stainless steel cooking interior.",
    features: [
          "Heavy 2.5mm Gauge Tri-Ply (Copper Exterior + Aluminum + 18/10 Steel)",
          "Superior Thermal Conductivity Eliminating Hot Spots",
          "Ergonomic Cast-Stainless Riveted Cool-Touch Handles",
          "Includes 24cm Saute Pan, 20cm Saucepan, 28cm Kadai & 3 Lids"
    ],
    specs: {
          "Set Includes": "Kadai (3.5L), Saucepan (2L), Frying Pan (24cm) + 3 Stainless Lids + Copper Polish",
          "Compatibility": "Gas, Radiant, Ceramic & Oven Safe up to 260°C",
          "Exterior": "Hand-Hammered Mirror Polished Copper"
    },
    stock: 12,
    badge: "Best Seller",
    delivery: "Free Express Delivery in 2 Days",
    seller: "ArtisanChef Culinary"
  },
  {
    id: 88,
    name: "UrbanNest Solid Reclaimed Teak Mid-Century Modern Credenza Sideboard",
    brand: "Home",
    category: "Home",
    subcategory: "Furniture",
    price: 48999,
    originalPrice: 65000,
    discount: 24,
    rating: 4.9,
    reviews: 90,
    images: [
          "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Artisan-crafted 60-inch media credenza constructed from 100% solid seasoned teak wood with sliding slatted tambour doors and brass accents.",
    features: [
          "100% Solid Kiln-Dried Reclaimed Teakwood Construction",
          "Smooth Acoustic Slatted Tambour Sliding Doors",
          "Internal Cable Management Ports & Adjustable Shelving",
          "Natural Matte Polyurethane Protective Hardwax Finish"
    ],
    specs: {
          "Dimensions": "152 cm (W) x 46 cm (D) x 76 cm (H)",
          "Weight": "46 KG Solid Wood",
          "Assembly": "Fully Assembled (No Assembly Required)",
          "Warranty": "5 Years Structural Teak Warranty"
    },
    stock: 7,
    badge: "Limited Stock",
    delivery: "Free White-Glove Installation in 3 Days",
    seller: "UrbanNest Fine Interiors"
  },
  {
    id: 89,
    name: "Solace Royal Mulberry Silk 22-Momme Luxury Duvet & Pillowcase Set",
    brand: "Home",
    category: "Home",
    subcategory: "Luxury Bedding",
    price: 18999,
    originalPrice: 26999,
    discount: 29,
    rating: 4.8,
    reviews: 215,
    images: [
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Ultra-luxurious King bedding ensemble woven from Grade-6A pure 22-Momme mulberry silk designed to protect skin hydration and hair frizz.",
    features: [
          "100% Pure Grade-6A Long-Fiber Mulberry Silk (22 Momme)",
          "Naturally Hypoallergenic, Breathable and Temperature-Regulating",
          "Hidden Zipper Closure & 8 Interior Corner Duvet Ties",
          "Includes King Duvet Cover (90x108 in) & 2 Oxford Pillowcases"
    ],
    specs: {
          "Dimensions": "Duvet: 228 x 274 cm | Pillows: 50 x 75 cm",
          "Silk Quality": "OEKO-TEX Standard 100 Certified Grade 6A",
          "Color": "Champagne Pearl Ivory"
    },
    stock: 18,
    badge: "Hot Trend",
    delivery: "Free Express Delivery by Tomorrow",
    seller: "Solace Bedding Studio"
  },
  {
    id: 90,
    name: "ArtisanChef Barista Touch Dual Boiler Commercial Grade Espresso Machine",
    brand: "Kitchen",
    category: "Kitchen",
    subcategory: "Coffee Machines",
    price: 79999,
    originalPrice: 105000,
    discount: 23,
    rating: 5,
    reviews: 145,
    images: [
          "https://images.unsplash.com/photo-1517668808822-9ebd02f2a8ea?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Dual stainless steel boiler commercial home espresso machine featuring digital PID temperature control, Italian 15-bar pump, and rotary steam wand.",
    features: [
          "Dedicated Dual Stainless Boilers (Simultaneous Brewing & Steaming)",
          "Digital PID Temperature Stability within ±0.5°C",
          "Commercial 58mm Portafilter with Precision Baskets",
          "Cool-Touch Multi-Directional High-Pressure Microfoam Steam Wand"
    ],
    specs: {
          "Pump": "Commercial Rotary 15-Bar Pump",
          "Water Tank": "2.8 Liters Removable with Water Level Sensor",
          "Body": "Brushed Heavy-Gauge 304 Stainless Steel",
          "Power": "2200W Rapid Heating"
    },
    stock: 10,
    badge: "Exclusive",
    delivery: "Free Express Insured Courier in 2 Days",
    seller: "ArtisanChef Culinary"
  }
];
