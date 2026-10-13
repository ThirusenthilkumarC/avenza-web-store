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
  },
  {
    "id": 91,
    "name": "AuraSound Studio Reference Planar Magnetic Hi-Fi Headphones",
    "brand": "AuraSound",
    "category": "Electronics",
    "subcategory": "Audiophile Audio",
    "price": 34999,
    "originalPrice": 48000,
    "discount": 27,
    "rating": 4.9,
    "reviews": 320,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Open-back planar magnetic headphones featuring ultra-thin nanometer diaphragms, lambskin memory foam pads, and balanced XLR cable for acoustic purists.",
    "features": [
      "Nanometer-Grade Planar Magnetic Transducers",
      "Open-Back Acoustic Architecture with Spatial Soundstage",
      "Handcrafted CNC Aluminum Yokes & Real Walnut Earcups",
      "Detachable 4.4mm Pentaconn & 6.35mm Gold-Plated Cables"
    ],
    "specs": {
      "Frequency Response": "5Hz – 55,000Hz",
      "Impedance": "32 Ohms",
      "Total Harmonic Distortion": "< 0.05% @ 1kHz",
      "Warranty": "2 Years International Warranty"
    },
    "stock": 22,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "AuraSound Acoustics Lab",
    "sizes": [
      "Standard",
      "XLR Balanced Edition"
    ],
    "colors": [
      "Walnut & Gunmetal",
      "Obsidian Black"
    ],
    "customerReviews": [
      {
        "id": "r91_1",
        "userName": "Devendra Rathore",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Unbelievable resolution. You hear instrument separation you never knew existed.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 92,
    "name": "Lumina Vision Pro 4K HDR Cinema Pocket Gimbal Camera",
    "brand": "Lumina",
    "category": "Electronics",
    "subcategory": "Cameras & Vlogging",
    "price": 38499,
    "originalPrice": 49999,
    "discount": 23,
    "rating": 4.8,
    "reviews": 410,
    "images": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Ultra-compact 3-axis mechanical stabilized camera capable of 4K 120fps recording with 1-inch CMOS sensor and AI tracking.",
    "features": [
      "1-Inch High-Sensitivity CMOS Sensor",
      "3-Axis Mechanical Gimbal Hardware Stabilization",
      "4K/120fps Cinematic Slow Motion & 10-bit D-Log M",
      "ActiveTrack 6.0 Face & Object Tracking"
    ],
    "specs": {
      "Video Resolution": "4K Ultra HD @ 120fps",
      "Battery Life": "166 Minutes Continuous Recording",
      "Display": "2-Inch Rotatable OLED Touchscreen",
      "Weight": "179g Ultra-Lightweight"
    },
    "stock": 19,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Lumina Digital Store",
    "sizes": [
      "Standard Bundle",
      "Creator Combo (Mic + Tripod)"
    ],
    "colors": [
      "Matte Graphite",
      "Alpine White"
    ]
  },
  {
    "id": 93,
    "name": "Sonora Waveform Dual-Driver Spatial Soundbar with Wireless Subwoofer",
    "brand": "Sonora",
    "category": "Electronics",
    "subcategory": "Home Audio",
    "price": 24999,
    "originalPrice": 35000,
    "discount": 29,
    "rating": 4.7,
    "reviews": 580,
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Dolby Atmos 5.1.2 home theater soundbar system with wireless down-firing subwoofer, eARC HDMI pass-through, and Apple AirPlay 2.",
    "features": [
      "Dolby Atmos 3D Overhead Object Audio",
      "380W Total Output with Wireless 8-Inch Subwoofer",
      "HDMI eARC 4K Pass-Through with HDR10+",
      "Wi-Fi, Bluetooth 5.3 & AirPlay 2 Built-in"
    ],
    "specs": {
      "Channels": "5.1.2 Spatial Surround",
      "Total Output": "380 Watts Peak",
      "Connectivity": "HDMI eARC, Optical, AUX, Wi-Fi",
      "Dimensions": "Soundbar: 98 x 6.5 x 10 cm"
    },
    "stock": 25,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Sonora Audio India",
    "sizes": [
      "Standard 380W",
      "Pro 520W Edition"
    ],
    "colors": [
      "Midnight Black",
      "Anthracite Gray"
    ]
  },
  {
    "id": 94,
    "name": "AeroPulse ANC True Wireless Earbuds with Wireless Charging Case",
    "brand": "TechNova",
    "category": "Electronics",
    "subcategory": "Earbuds",
    "price": 6999,
    "originalPrice": 12999,
    "discount": 46,
    "rating": 4.8,
    "reviews": 840,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Compact in-ear wireless earbuds with 42dB smart adaptive noise cancellation, LDAC Hi-Res wireless audio, and 36-hour total battery life.",
    "features": [
      "42dB Adaptive Smart Active Noise Cancellation",
      "LDAC Hi-Res Audio Certified with 11mm Beryllium Drivers",
      "Triple Microphones with AI Wind-Reduction Call Tech",
      "Qi Wireless Charging & IPX5 Water Resistance"
    ],
    "specs": {
      "Driver": "11mm Beryllium Coated Dynamic",
      "Battery Life": "8.5 Hrs Earbuds | 36 Hrs with Case",
      "Water Resistance": "IPX5 Sweat & Water Resistant",
      "Bluetooth": "v5.3 Multipoint"
    },
    "stock": 40,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "TechNova Official Outlet",
    "sizes": [
      "Standard Fit (S/M/L Tips)"
    ],
    "colors": [
      "Pearl White",
      "Obsidian Black",
      "Sage Green"
    ]
  },
  {
    "id": 95,
    "name": "ApexPro 4K HDR Drone with 3-Axis Obstacle Avoidance",
    "brand": "ApexFlight",
    "category": "Electronics",
    "subcategory": "Drones & Tech",
    "price": 54999,
    "originalPrice": 69999,
    "discount": 21,
    "rating": 4.9,
    "reviews": 210,
    "images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Foldable aerial photography drone with Hasselblad optical color solution, omnidirectional obstacle sensors, and 46-minute flight time.",
    "features": [
      "4K 60fps HDR Video with 48MP Stills",
      "Omnidirectional APAS 5.0 Obstacle Sensing",
      "15km HD Video Transmission Range (O3+)",
      "46 Minutes Ultra-Long Flight Duration"
    ],
    "specs": {
      "Sensor": "1/1.3-Inch CMOS Dual Native ISO",
      "Max Flight Time": "46 Minutes per Battery",
      "Weight": "249g (No Pilot License Required)",
      "Max Speed": "57.6 km/h"
    },
    "stock": 14,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "ApexFlight Aerial Systems",
    "sizes": [
      "Single Battery Kit",
      "Fly More Combo (3 Batteries)"
    ],
    "colors": [
      "Arctic Gray"
    ]
  },
  {
    "id": 96,
    "name": "Nexus Titan 5G Flagship Smartphone with Periscope Zoom",
    "brand": "Nexus",
    "category": "Smartphones",
    "subcategory": "Flagship 5G",
    "price": 84999,
    "originalPrice": 99999,
    "discount": 15,
    "rating": 4.9,
    "reviews": 1120,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Premium titanium frame smartphone with 6.8-inch Dynamic AMOLED 2X 120Hz display, Snapdragon 8 Gen 3, and 200MP quad camera setup.",
    "features": [
      "Aerospace-Grade Grade-5 Titanium Frame",
      "6.8-Inch QHD+ Dynamic AMOLED 2X 1-120Hz LTPO",
      "200MP Quad Camera with 5x & 10x Optical Periscope Zoom",
      "5000mAh Battery with 45W Fast Charging"
    ],
    "specs": {
      "Processor": "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "Display": "6.8\" Quad HD+ 2600 Nits Peak Brightness",
      "RAM & Storage": "12GB RAM | 256GB / 512GB UFS 4.0",
      "OS": "OxygenOS 14 (7 Years OS Updates Guarantee)"
    },
    "stock": 30,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Nexus Official Flagship Store",
    "sizes": [
      "256 GB",
      "512 GB",
      "1 TB"
    ],
    "colors": [
      "Titanium Gray",
      "Titanium Black",
      "Titanium Violet"
    ],
    "customerReviews": [
      {
        "id": "r96_1",
        "userName": "Kunal Mehra",
        "rating": 5,
        "date": "Yesterday",
        "comment": "The camera is unmatched in low light. Titanium body feels incredibly premium in hand.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 97,
    "name": "Aura Fold X Dual-Screen Seamless Foldable 5G Smartphone",
    "brand": "AuraPhone",
    "category": "Smartphones",
    "subcategory": "Foldable Phones",
    "price": 124999,
    "originalPrice": 149999,
    "discount": 17,
    "rating": 4.8,
    "reviews": 430,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Ultra-slim foldable smartphone featuring a zero-crease teardrop hinge, 7.92-inch 120Hz inner foldable screen, and stylus pen support.",
    "features": [
      "Zero-Crease Flexion Hinge Tested for 400,000 Folds",
      "7.92-Inch Foldable LTPO OLED Inner Screen + 6.43-Inch Outer Screen",
      "Flagship Triple 50MP Falcon Camera System",
      "5000mAh Silicon-Carbon Battery with 66W SuperCharge"
    ],
    "specs": {
      "Thickness": "4.7mm Unfolded | 9.9mm Folded",
      "Weight": "231g Ultra-Slim",
      "Processor": "Qualcomm Snapdragon 8 Gen 3",
      "Inner Display": "7.92\" 2156x2344 120Hz HDR10+"
    },
    "stock": 15,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Aura Innovations Flagship",
    "sizes": [
      "512 GB",
      "1 TB"
    ],
    "colors": [
      "Phantom Black",
      "Silk Gold",
      "Imperial Blue"
    ]
  },
  {
    "id": 98,
    "name": "Veloce Pure 12 Pro Ceramic Edition 5G",
    "brand": "Veloce",
    "category": "Smartphones",
    "subcategory": "Flagship 5G",
    "price": 64999,
    "originalPrice": 79999,
    "discount": 19,
    "rating": 4.7,
    "reviews": 690,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Ceramic back flagship smartphone engineered with Hasselblad color calibration, 100W SuperVOOC rapid charging, and Aqua Touch screen technology.",
    "features": [
      "Micro-Arc Oxidation Ceramic Unibody Finish",
      "50MP Sony LYT-808 Sensor with OIS",
      "100W GaN Fast Charger Included in Box (0 to 100% in 26 Min)",
      "IP68 Water & Dust Immersion Resistance"
    ],
    "specs": {
      "Display": "6.82\" 2K 120Hz ProXDR Display with Dolby Vision",
      "Processor": "Snapdragon 8 Gen 3",
      "Battery": "5400mAh Dual-Cell",
      "RAM": "16GB LPDDR5X"
    },
    "stock": 28,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Veloce Mobile Hub",
    "sizes": [
      "256 GB",
      "512 GB"
    ],
    "colors": [
      "Emerald Green",
      "Silky Black",
      "Flowy Silver"
    ]
  },
  {
    "id": 99,
    "name": "Zenith Note 14 Ultra Camera Specialist 5G",
    "brand": "Zenith",
    "category": "Smartphones",
    "subcategory": "Camera Phones",
    "price": 74999,
    "originalPrice": 89999,
    "discount": 17,
    "rating": 4.8,
    "reviews": 510,
    "images": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Professional imaging smartphone equipped with 1-inch Sony LYT-900 sensor with stepless variable aperture f/1.63 - f/4.0 and Leica Summilux lens.",
    "features": [
      "1-Inch Sony LYT-900 Main Camera Sensor",
      "Stepless Physical Variable Aperture (f/1.63 - f/4.0)",
      "Quad 50MP Leica Focal Range (12mm to 120mm)",
      "Ultra-Tough Dragon Crystal Glass Shield"
    ],
    "specs": {
      "Camera Setup": "50MP (1\") + 50MP Ultra-Wide + 50MP Tele + 50MP Periscope",
      "Display": "6.73\" WQHD+ 120Hz AMOLED 3000 nits",
      "Charging": "90W Wired + 80W Wireless HyperCharge",
      "Weight": "224g"
    },
    "stock": 20,
    "badge": "New Arrival",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Zenith India Retail",
    "sizes": [
      "512 GB",
      "1 TB"
    ],
    "colors": [
      "Titanium Black",
      "Optic White"
    ]
  },
  {
    "id": 100,
    "name": "Pulse Lite Compact 5G with Symmetrical Bezel Display",
    "brand": "Pulse",
    "category": "Smartphones",
    "subcategory": "Compact Phones",
    "price": 39999,
    "originalPrice": 49999,
    "discount": 20,
    "rating": 4.6,
    "reviews": 730,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Pocket-friendly 6.1-inch compact smartphone with uniform ultra-thin 1.45mm bezels, aerospace aluminum frame, and pure bloatware-free OS.",
    "features": [
      "Compact 6.1-Inch Symmetrical Bezel AMOLED Display",
      "Clean Stock Android Experience with Zero Bloatware",
      "Dual 50MP Sony Flagship Cameras with Horizon Steady",
      "IP68 Rated with Gorilla Glass Armor"
    ],
    "specs": {
      "Display": "6.1\" Full HD+ 120Hz OLED",
      "Processor": "Dimensity 9300+ Octa-Core",
      "Battery": "4600mAh with 67W Fast Charging",
      "Weight": "168g Featherlight"
    },
    "stock": 35,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Pulse Technologies",
    "sizes": [
      "128 GB",
      "256 GB"
    ],
    "colors": [
      "Sky Blue",
      "Graphite Gray",
      "Sunset Rose"
    ]
  },
  {
    "id": 101,
    "name": "MacBook Air 15 M3 Chip Liquid Retina Ultrabook",
    "brand": "Apple",
    "category": "Laptops & Computers",
    "subcategory": "Ultrabooks",
    "price": 134900,
    "originalPrice": 144900,
    "discount": 7,
    "rating": 4.9,
    "reviews": 1450,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Impossibly thin 15.3-inch laptop powered by the next-generation M3 chip with up to 18 hours of battery life and silent fanless aluminum architecture.",
    "features": [
      "Apple M3 8-Core CPU and 10-Core GPU with Hardware Ray Tracing",
      "15.3-Inch Liquid Retina Display with 500 Nits True Tone",
      "Six-Speaker Sound System with Spatial Audio",
      "MagSafe 3 Charging Port & Dual Thunderbolt / USB 4 Ports"
    ],
    "specs": {
      "Processor": "Apple M3 Chip (3nm)",
      "Memory": "16GB Unified Memory",
      "Storage": "512GB High-Speed SSD",
      "Battery Life": "Up to 18 Hours Wireless Web",
      "Weight": "1.51 kg"
    },
    "stock": 25,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Avenza Authorized Apple Partner",
    "sizes": [
      "16GB / 512GB SSD",
      "24GB / 1TB SSD"
    ],
    "colors": [
      "Midnight",
      "Starlight",
      "Space Gray",
      "Silver"
    ],
    "customerReviews": [
      {
        "id": "r101_1",
        "userName": "Rohan Varma",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Silent, cool, and battery literally lasts 2 full workdays. The 15-inch screen is gorgeous.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 102,
    "name": "Zenith AeroBook 14 OLED Intel Core Ultra 9 Touchscreen Laptop",
    "brand": "Zenith",
    "category": "Laptops & Computers",
    "subcategory": "Ultrabooks",
    "price": 119999,
    "originalPrice": 139999,
    "discount": 14,
    "rating": 4.8,
    "reviews": 620,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Premium Intel Evo certified laptop with 14-inch 3K 120Hz OLED touchscreen, AI NPU boost, Intel Core Ultra 9 processor, and military-grade magnesium alloy chassis.",
    "features": [
      "14-Inch 3K (2880x1800) 120Hz 0.2ms Lumina OLED Display",
      "Intel Core Ultra 9 185H with Dedicated Intel AI Boost NPU",
      "32GB LPDDR5X 7467MHz RAM & 1TB PCIe 4.0 NVMe SSD",
      "Harman Kardon Dolby Atmos Audio with Smart Amp"
    ],
    "specs": {
      "Display": "14.0\" 3K OLED 16:10 100% DCI-P3 Color",
      "Processor": "Intel Core Ultra 9 185H (16 Cores, 22 Threads)",
      "Weight": "1.20 kg Ultra-Light",
      "Battery": "75Wh with 65W USB-C PD Charging"
    },
    "stock": 18,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Zenith Official Hub",
    "sizes": [
      "32GB / 1TB SSD",
      "32GB / 2TB SSD"
    ],
    "colors": [
      "Ponder Blue",
      "Fog Silver"
    ]
  },
  {
    "id": 103,
    "name": "Predator Stealth 16 Gaming Laptop RTX 4080",
    "brand": "TechNova",
    "category": "Laptops & Computers",
    "subcategory": "Gaming Laptops",
    "price": 189999,
    "originalPrice": 225000,
    "discount": 16,
    "rating": 4.9,
    "reviews": 380,
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "High-performance gaming laptop equipped with NVIDIA GeForce RTX 4080 12GB GPU, AMD Ryzen 9 8945HS processor, and 240Hz QHD+ G-Sync display.",
    "features": [
      "NVIDIA GeForce RTX 4080 12GB GDDR6 (175W Max TGP)",
      "16-Inch WQXGA (2560x1600) 240Hz 3ms Mini-LED Display",
      "Liquid Metal Thermal Cooling with Dual 5th Gen AeroBlade Fans",
      "Per-Key RGB Backlit Mechanical Switch Keyboard"
    ],
    "specs": {
      "CPU": "AMD Ryzen 9 8945HS (8 Cores, 16 Threads, up to 5.2GHz)",
      "GPU": "NVIDIA GeForce RTX 4080 12GB VRAM",
      "RAM": "32GB DDR5 5600MHz (Upgradable to 64GB)",
      "SSD": "2TB Gen4 NVMe M.2 SSD"
    },
    "stock": 11,
    "badge": "Hot Trend",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "TechNova Extreme Gaming",
    "sizes": [
      "RTX 4080 / 32GB / 2TB"
    ],
    "colors": [
      "Abyssal Black"
    ]
  },
  {
    "id": 104,
    "name": "UltraView 34-Inch Curved 4K WQHD OLED Professional Monitor",
    "brand": "UltraView",
    "category": "Laptops & Computers",
    "subcategory": "Monitors",
    "price": 64999,
    "originalPrice": 85000,
    "discount": 24,
    "rating": 4.8,
    "reviews": 490,
    "images": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "34-inch 1800R curved QD-OLED workstation display with 175Hz refresh rate, 99.3% DCI-P3 color gamut, USB-C 90W PD single cable hub, and KVM switch.",
    "features": [
      "Quantum Dot OLED Panel with Infinite Contrast Ratio",
      "34-Inch WQHD (3440 x 1440) UltraWide 21:9 Aspect",
      "175Hz Refresh Rate with 0.03ms GtG Response Time",
      "USB-C 90W Power Delivery Hub with Built-in KVM Switch"
    ],
    "specs": {
      "Curvature": "1800R Ergonomic Curve",
      "Color Accuracy": "Delta E < 1 Factory Calibrated",
      "Ports": "1x USB-C 90W, 2x HDMI 2.1, 1x DP 1.4, 4x USB 3.2",
      "Stand": "Height, Tilt and Swivel Adjustable"
    },
    "stock": 16,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "UltraView Display Systems",
    "sizes": [
      "34-Inch WQHD OLED",
      "38-Inch 4K OLED"
    ],
    "colors": [
      "Titanium Silver & White"
    ]
  },
  {
    "id": 105,
    "name": "DeskMatrix Pro Studio Mac & PC Thunderbolt 4 Docking Station",
    "brand": "DeskMatrix",
    "category": "Laptops & Computers",
    "subcategory": "Computer Accessories",
    "price": 18499,
    "originalPrice": 24999,
    "discount": 26,
    "rating": 4.7,
    "reviews": 340,
    "images": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "16-in-1 Thunderbolt 4 dock delivering 98W host charging, dual 4K 120Hz display outputs, 2.5GbE Ethernet, and SD 4.0 card reader.",
    "features": [
      "Universal Thunderbolt 4 & USB4 40Gbps High-Speed Bandwidth",
      "98W Power Delivery Smart Laptop Charging",
      "Supports Dual 4K 120Hz or Single 8K 60Hz Displays",
      "16 Ports Total with High-Speed UHS-II SD/microSD Readers"
    ],
    "specs": {
      "Host Connection": "Thunderbolt 4 (40Gbps)",
      "Power Adapter": "180W External DC Power Brick",
      "Enclosure": "Extruded Aluminum Heat-Dissipation Casing",
      "Compatibility": "macOS Sonoma, Windows 11, iPadOS"
    },
    "stock": 32,
    "badge": "New Arrival",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "DeskMatrix Workspaces",
    "sizes": [
      "16-in-1 Thunderbolt 4"
    ],
    "colors": [
      "Space Gray Aluminum"
    ]
  },
  {
    "id": 106,
    "name": "Sartorial Bespoke Super 180s Wool Double-Breasted Suit",
    "brand": "Aurelia",
    "category": "Fashion — Men",
    "subcategory": "Suits & Blazers",
    "price": 48999,
    "originalPrice": 65000,
    "discount": 25,
    "rating": 4.9,
    "reviews": 280,
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Hand-tailored double-breasted suit crafted from authentic Biella Italian Super 180s merino wool with horn buttons, peak lapels, and silk cupro lining.",
    "features": [
      "100% Italian Super 180s Pure Virgin Merino Wool",
      "Full Floating Horsehair Canvas Construction",
      "Natural Buffalo Horn Buttons & Hand-Finished Boutonnière",
      "Includes Double-Breasted Jacket & Flat-Front Trousers"
    ],
    "specs": {
      "Fabric Origin": "Biella, Northern Italy",
      "Fit": "Tailored Contemporary Fit",
      "Care": "Specialist Dry Clean Only",
      "Lapel": "10cm Classic Peak Lapel"
    },
    "stock": 12,
    "badge": "Exclusive",
    "delivery": "Complimentary White-Glove Courier in 2 Days",
    "seller": "Aurelia Sartoria Guild",
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "colors": [
      "Midnight Navy Pinstripe",
      "Charcoal Herringbone"
    ],
    "customerReviews": [
      {
        "id": "r106_1",
        "userName": "Armaan Singhania",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Drapes like a dream. The full canvas chest piece adapts to your posture within hours.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 107,
    "name": "Varanasi Silk Brocade Handcrafted Imperial Sherwani",
    "brand": "Devika Heritage",
    "category": "Fashion — Men",
    "subcategory": "Ethnic & Wedding",
    "price": 58999,
    "originalPrice": 75000,
    "discount": 21,
    "rating": 5,
    "reviews": 190,
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Royal royal wedding sherwani woven on vintage Jacquard pit looms in Varanasi with antique gold zari motifs and mother-of-pearl buttons.",
    "features": [
      "Pure Banarasi Katan Silk with Antique Metallic Zari",
      "Intricate French Wire & Dabka Hand-Embroidery",
      "Concealed Mandarin Collar with Velvet Piped Placket",
      "Includes Churidar & Silk Pocket Square"
    ],
    "specs": {
      "Weave Type": "Varanasi Kadwa Silk Brocade",
      "Lining": "100% Breathable Mulberry Silk Satin",
      "Embellishment": "Zardozi & Semi-Precious Stone Studs",
      "Care": "Dry Clean & Preserved Muslin Storage"
    },
    "stock": 9,
    "badge": "Exclusive",
    "delivery": "Insured Express White-Glove in 2 Days",
    "seller": "Devika Master Weavers",
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      "Imperial Cream & Gold",
      "Heritage Maroon & Zari"
    ]
  },
  {
    "id": 108,
    "name": "Highland 100% Pure Mongolian Cashmere Overcoat",
    "brand": "Aurelia",
    "category": "Fashion — Men",
    "subcategory": "Coats & Jackets",
    "price": 36999,
    "originalPrice": 48000,
    "discount": 23,
    "rating": 4.8,
    "reviews": 240,
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Double-faced unlined coat hand-stitched from 100% Grade-A Mongolian cashmere fibers, offering weightless warmth and silky soft drape.",
    "features": [
      "100% Grade-A Mongolian Long-Staple Cashmere (480 GSM)",
      "Hand-Split & Turned Edges (Doppio Tessuto Technique)",
      "Notched Lapels & Deep Welted Fleece-Lined Pockets",
      "Genuine Corozo Nut Buttons"
    ],
    "specs": {
      "Material": "100% Mongolian Cashmere",
      "Length": "Mid-Thigh Overcoat Length (102cm)",
      "Fit": "Relaxed Tailored Layering Fit",
      "Care": "Professional Cashmere Dry Clean"
    },
    "stock": 15,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Aurelia Sartoria Guild",
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      "Camel Tan",
      "Charcoal Melange",
      "Black Pearl"
    ]
  },
  {
    "id": 109,
    "name": "Artisan Sea Island Cotton Casual Cutaway Shirt",
    "brand": "Gilded Thread",
    "category": "Fashion — Men",
    "subcategory": "Casual & Formal Shirts",
    "price": 6499,
    "originalPrice": 9500,
    "discount": 32,
    "rating": 4.7,
    "reviews": 420,
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "World-renowned West Indian Sea Island cotton shirt woven at 140/2 ply, providing unparalleled silkiness and cool breathability in Indian summers.",
    "features": [
      "Certified 140/2 Extra-Long Staple Sea Island Cotton",
      "Italian Semi-Spread Cutaway Collar with Removable Stays",
      "Thick Australian Mother-of-Pearl Trocas Buttons",
      "Single-Needle French Seam Stitching (22 Stitches per Inch)"
    ],
    "specs": {
      "Weave": "Fine Poplin Weave",
      "Cuff": "Chiseled Barrel Cuffs",
      "Fit": "Tailored Slim Fit",
      "Care": "Machine Wash Cold or Gentle Hand Wash"
    },
    "stock": 30,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Gilded Thread Shirthouse",
    "sizes": [
      "39 (15.5\")",
      "40 (15.75\")",
      "42 (16.5\")",
      "44 (17.5\")"
    ],
    "colors": [
      "Crisp Chalk White",
      "Sky Blue Bengal Stripe",
      "Powder Pink"
    ]
  },
  {
    "id": 110,
    "name": "Raw Silk Bandhgala Nehru Jacket with Silver Buttons",
    "brand": "Devika Heritage",
    "category": "Fashion — Men",
    "subcategory": "Ethnic Vests",
    "price": 12999,
    "originalPrice": 17500,
    "discount": 26,
    "rating": 4.9,
    "reviews": 310,
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Sophisticated sleeveless bandhgala jacket crafted from textured Bhagalpur raw tussar silk with cast silver filigree buttons.",
    "features": [
      "100% Hand-Spun Bhagalpur Raw Tussar Silk",
      "Cast Sterling Silver Plated Embossed Filigree Buttons",
      "Structured Mandarin Collar with Piped Welt Pockets",
      "Inner Bemberg Cupro Breathable Lining"
    ],
    "specs": {
      "Style": "Sleeveless Royal Bandhgala Waistcoat",
      "Fabric Weight": "Mid-Weight Structured Tussar",
      "Dry Clean": "Yes",
      "Closure": "Five Button Front"
    },
    "stock": 22,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Devika Master Weavers",
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "colors": [
      "Emerald Green",
      "Royal Navy",
      "Burnt Saffron"
    ]
  },
  {
    "id": 111,
    "name": "Kanjivaram Korvai Gold Zari Pure Silk Bridal Saree",
    "brand": "Devika Heritage",
    "category": "Fashion — Women",
    "subcategory": "Sarees",
    "price": 64999,
    "originalPrice": 85000,
    "discount": 24,
    "rating": 5,
    "reviews": 360,
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Authentic Silk Mark certified Kanchipuram bridal saree hand-loomed with Korvai interlocking border technique and pure silver electroplated in 24K gold zari.",
    "features": [
      "Certified 100% Pure Mulberry Silk (Silk Mark Guaranteed)",
      "Traditional Korvai Double-Weft Interlocking Borders",
      "Pure Silver Thread Electroplated in 24K Gold Zari",
      "Includes Matching Unstitched Blouse Piece with Zari Border"
    ],
    "specs": {
      "Length": "6.3 Meters (Includes 0.8m Blouse Fabric)",
      "Origin": "Kanchipuram, Tamil Nadu",
      "Weight": "850g Rich Heavy Silk",
      "Zari Purity": "Pure Tested Zari"
    },
    "stock": 10,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Devika Master Weavers",
    "sizes": [
      "Free Size (6.3m with Blouse)"
    ],
    "colors": [
      "Vermillion Crimson & Temple Gold",
      "Peacock Blue & Copper Zari"
    ],
    "customerReviews": [
      {
        "id": "r111_1",
        "userName": "Ananya Iyer",
        "rating": 5,
        "date": "4 days ago",
        "comment": "The sheer weight and gleam of the zari is breathtaking. Wore it for my reception and received endless compliments.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 112,
    "name": "Zardozi Hand-Embroidered Velvet Kalidar Bridal Lehenga",
    "brand": "Aurelia Couture",
    "category": "Fashion — Women",
    "subcategory": "Lehengas",
    "price": 94999,
    "originalPrice": 125000,
    "discount": 24,
    "rating": 4.9,
    "reviews": 220,
    "images": [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Masterwork 16-kali bridal lehenga in plush micro-velvet, hand-embroidered with dabka, gota patti, and Swarovski crystals over 320 artisan hours.",
    "features": [
      "Opulent 16-Kalidar Flare with 4.5 Meter Circumference",
      "320+ Hours of Detailed Hand Zardozi Embroidery",
      "Includes Embroidered Velvet Blouse & Hand-Dyed Organza Dupatta",
      "Custom Micro-Can-Can Layering for Voluminous Silhouette"
    ],
    "specs": {
      "Skirt Material": "Pure Silk Micro-Velvet",
      "Dupatta": "Silk Organza with Four-Sided Scalloped Border",
      "Waist": "Customizable up to 42 Inches",
      "Care": "Museum-Grade Preservation Dry Clean"
    },
    "stock": 7,
    "badge": "Exclusive",
    "delivery": "Free White-Glove Concierge in 3 Days",
    "seller": "Aurelia Bridal Atelier",
    "sizes": [
      "Custom Stitched",
      "Semi-Stitched"
    ],
    "colors": [
      "Deep Wine Velvet",
      "Heritage Vermilion Red"
    ]
  },
  {
    "id": 113,
    "name": "Pleated Chiffon Grecian Gown with Embroidered Crystal Bodice",
    "brand": "Aurelia Couture",
    "category": "Fashion — Women",
    "subcategory": "Evening Gowns",
    "price": 28999,
    "originalPrice": 38000,
    "discount": 24,
    "rating": 4.8,
    "reviews": 310,
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Floor-length evening gown with hand-pleated silk chiffon skirt, semi-corseted boned bodice with celestial glass crystal embellishments.",
    "features": [
      "Hand-Draped Floating Pure Silk Chiffon",
      "Couture Boned Corsetry Bodice with Built-in Support",
      "Hand-Applied Swarovski Crystals & Cut-Bead Fringe",
      "Thigh-High Front Slit with Flowing Sweep Train"
    ],
    "specs": {
      "Silhouette": "A-Line Grecian Draped",
      "Closure": "Hidden Back Zip with Hook-and-Eye",
      "Lining": "100% Stretch Silk Charmeuse",
      "Length": "Floor Length (155cm from Shoulder)"
    },
    "stock": 14,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Aurelia Bridal Atelier",
    "sizes": [
      "XS (UK 6)",
      "S (UK 8)",
      "M (UK 10)",
      "L (UK 12)"
    ],
    "colors": [
      "Champagne Gold",
      "Midnight Sapphire",
      "Emerald Mist"
    ]
  },
  {
    "id": 114,
    "name": "Pure Mulberry Silk Trench Coat with Horn Belt Buckle",
    "brand": "Gilded Thread",
    "category": "Fashion — Women",
    "subcategory": "Outerwear",
    "price": 24999,
    "originalPrice": 32000,
    "discount": 22,
    "rating": 4.8,
    "reviews": 270,
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Modernized classic double-breasted trench coat reimagined in fluid heavyweight 30-momme mulberry silk twill with water-resistant finish.",
    "features": [
      "Heavyweight 30-Momme Pure Mulberry Silk Twill",
      "Water-Repellent Eco-Shield Finish",
      "Removable Waist Tie Belt with Natural Buffalo Horn Buckle",
      "Storm Flap, Epaulettes, and Storm Shield Back"
    ],
    "specs": {
      "Material": "100% Mulberry Silk",
      "Buttons": "Engraved Horn Buttons",
      "Length": "Knee Length (108cm)",
      "Care": "Professional Dry Clean Only"
    },
    "stock": 16,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Gilded Thread Studio",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Honey Beige",
      "Noir Black",
      "Pistachio Sage"
    ]
  },
  {
    "id": 115,
    "name": "Chanderi Silk Hand-Block Printed Anarkali Kurta Set",
    "brand": "Devika Heritage",
    "category": "Fashion — Women",
    "subcategory": "Kurtas & Suits",
    "price": 11499,
    "originalPrice": 15999,
    "discount": 28,
    "rating": 4.9,
    "reviews": 450,
    "images": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Flowing 28-kali Anarkali suit set in gossamer Chanderi silk with authentic Sanganeri vegetable dye hand-block prints and delicate gota patti work.",
    "features": [
      "Pure Handwoven Chanderi Silk with Sheer Luster",
      "Traditional Wooden Block Hand-Print with Natural Dyes",
      "Delicate Gota Patti Yoke & Hem Detailing",
      "Includes Mulmul Trousers & Organza Scalloped Dupatta"
    ],
    "specs": {
      "Set Includes": "Kurta, Trousers & Dupatta (3 Pieces)",
      "Kurta Length": "Calf Length (124cm)",
      "Fabric": "Chanderi Silk with Pure Cotton Mulmul Lining",
      "Wash": "Dry Clean Recommended"
    },
    "stock": 25,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Devika Master Weavers",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Powder Blue & Gold",
      "Blush Peach & Silver"
    ]
  },
  {
    "id": 116,
    "name": "Stradale Full-Grain Italian Calfskin Oxford Dress Shoes",
    "brand": "Calzolaio",
    "category": "Shoes & Sneakers",
    "subcategory": "Formal Shoes",
    "price": 18999,
    "originalPrice": 26000,
    "discount": 27,
    "rating": 4.9,
    "reviews": 380,
    "images": [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Hand-burnished closed-lacing Oxford shoes handcrafted in Tuscany using full-grain French calfskin with Goodyear-welted leather soles.",
    "features": [
      "Goodyear Welted Construction (Resoleable for Decades)",
      "Full-Grain French Boxcalf Leather Hand-Patinated in Tuscany",
      "Oak-Bark Tanned Leather Outsole with Beveled Waist",
      "Cushioned Cork Bed Molded to Foot Anatomy"
    ],
    "specs": {
      "Origin": "Florence, Italy",
      "Sole": "Hand-Stitched Leather Sole with Brass Nails",
      "Lining": "Full Glove Calf Leather",
      "Includes": "Solid Cedarwood Shoe Trees & Velour Dustbags"
    },
    "stock": 18,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Calzolaio Artisans Florence",
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "colors": [
      "Burnished Antique Cognac",
      "Espresso Dark Brown",
      "Onyx Black"
    ],
    "customerReviews": [
      {
        "id": "r116_1",
        "userName": "Vicky Singhal",
        "rating": 5,
        "date": "1 week ago",
        "comment": "The leather quality and hand-painted patina are museum-grade. Incredibly comfortable after break-in.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 117,
    "name": "Apex Velocity Runner Luxury Chunky Designer Sneakers",
    "brand": "ApexFlight",
    "category": "Shoes & Sneakers",
    "subcategory": "Designer Sneakers",
    "price": 14999,
    "originalPrice": 21999,
    "discount": 32,
    "rating": 4.8,
    "reviews": 640,
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Futuristic luxury runner combining Italian nappa leather, technical ballistic mesh, sculpted lightweight Vibram outsole, and reflective 3M details.",
    "features": [
      "Mixed-Media Upper (Italian Nappa Leather & Technical Mesh)",
      "Ultra-Lightweight Ergonomic Vibram MegaGrip Outsole",
      "Ortholite Breathable Antimicrobial Cushioned Footbed",
      "Reflective 3M Piping Accents"
    ],
    "specs": {
      "Outsole": "Vibram High-Rebound Foam",
      "Lacing": "Quick-Cinch Speed Toggle System",
      "Drop": "8mm Athletic Heel-to-Toe Drop",
      "Weight": "380g per Shoe"
    },
    "stock": 26,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexFlight Footwear",
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "colors": [
      "Triple White & Silver",
      "Monochrome Shadow Black",
      "Volt Neon & Slate"
    ]
  },
  {
    "id": 118,
    "name": "Classic Minimalist Low-Top Leather Court Sneakers",
    "brand": "Calzolaio",
    "category": "Shoes & Sneakers",
    "subcategory": "Minimalist Sneakers",
    "price": 9999,
    "originalPrice": 14500,
    "discount": 31,
    "rating": 4.8,
    "reviews": 920,
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "The timeless wardrobe essential: clean monochromatic court sneaker handcrafted from buttery Italian nappa leather with Margom rubber cupsole.",
    "features": [
      "Supple Full-Grain Italian Nappa Leather Upper",
      "Authentic Italian Margom Vulcanized Rubber Cupsole",
      "Calfskin Interior Lining with Arch-Support Insole",
      "Gold Foil Serial Number Embossing on Heel"
    ],
    "specs": {
      "Sole": "Stitched Margom Cupsole (Never Glued)",
      "Laces": "Waxed Egyptian Cotton Laces",
      "Origin": "Civitanova Marche, Italy",
      "Care": "Leather Balm & Sneaker Protector"
    },
    "stock": 35,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Calzolaio Artisans Florence",
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "colors": [
      "Pure Chalk White",
      "Off-White & Gum Sole",
      "Matte Black & White"
    ]
  },
  {
    "id": 119,
    "name": "Heritage Tuscan Suede Chelsea Boots with Crepe Sole",
    "brand": "Calzolaio",
    "category": "Shoes & Sneakers",
    "subcategory": "Boots",
    "price": 16499,
    "originalPrice": 22000,
    "discount": 25,
    "rating": 4.9,
    "reviews": 310,
    "images": [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Effortlessly stylish pull-on Chelsea boots in water-resistant velvety Italian suede with flexible natural crepe rubber soles and pull tabs.",
    "features": [
      "Hydro-Treated Weather-Resistant Italian Reverse Suede",
      "Heavy-Duty Elastic Side Gussets for Easy Slip-On",
      "Natural Plantation Crepe Cushion Sole",
      "Blake Stitched Construction"
    ],
    "specs": {
      "Shaft Height": "6 Inches Ankle Height",
      "Upper": "100% Calf Suede",
      "Sole": "100% Natural Crepe Rubber",
      "Country of Origin": "Italy"
    },
    "stock": 20,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Calzolaio Artisans Florence",
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "colors": [
      "Snuff Tobacco Brown",
      "Sandy Taupe",
      "Charcoal Suede"
    ]
  },
  {
    "id": 120,
    "name": "Imperial Double Monk Strap Handcrafted Leather Shoes",
    "brand": "Calzolaio",
    "category": "Shoes & Sneakers",
    "subcategory": "Monk Straps",
    "price": 17999,
    "originalPrice": 24000,
    "discount": 25,
    "rating": 4.8,
    "reviews": 280,
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Distinguished double monk strap dress shoes featuring solid palladium-finished brass buckles, hand-burnished toe medallion, and Goodyear welt.",
    "features": [
      "Full-Grain Vegetable-Tanned Tuscan Calf Leather",
      "Double Solid Brass Buckles with Palladium Electroplating",
      "Goodyear Welted with Channelled Leather Insole",
      "Hand-Finished Museum Patina Dip"
    ],
    "specs": {
      "Toe Style": "Chiseled Cap Toe with Brogue Perforations",
      "Insole": "Poron High-Density Shock Absorber",
      "Weight": "490g per Shoe",
      "Warranty": "5 Years Structural Guarantee"
    },
    "stock": 15,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Calzolaio Artisans Florence",
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "colors": [
      "Museum Burgundy",
      "Deep Espresso",
      "Black Onyx"
    ]
  },
  {
    "id": 121,
    "name": "Chronos Perpetual Master Tourbillon Sapphire Mechanical Watch",
    "brand": "Chronos",
    "category": "Watches",
    "subcategory": "Haute Horlogerie",
    "price": 89999,
    "originalPrice": 125000,
    "discount": 28,
    "rating": 5,
    "reviews": 140,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Fine horology timepiece housing a 60-second flying tourbillon cage at 6 o'clock, exhibition sapphire caseback, Côtes de Genève finishing, and hand-stitched alligator strap.",
    "features": [
      "Open-Heart Flying Tourbillon Complication (28,800 vph)",
      "Sapphire Crystal with Double Anti-Reflective Glare Coat",
      "72-Hour Power Reserve Twin-Barrel Movement",
      "Louisiana Farmed Alligator Leather Deployment Buckle Strap"
    ],
    "specs": {
      "Case Diameter": "41.5mm | Thickness 11.2mm",
      "Case Material": "316L Surgical Grade Stainless Steel",
      "Water Resistance": "50 Meters (5 ATM)",
      "Accuracy": "COSC Certified Criteria (-3/+5 sec/day)"
    },
    "stock": 8,
    "badge": "Exclusive",
    "delivery": "Armored Courier Insured Delivery in 2 Days",
    "seller": "Chronos Horlogerie Geneve",
    "sizes": [
      "41.5mm Case"
    ],
    "colors": [
      "Sunburst Silver & Blue Hands",
      "Rose Gold Bezel & Obsidian Dial"
    ],
    "customerReviews": [
      {
        "id": "r121_1",
        "userName": "Sameer Nambiar",
        "rating": 5,
        "date": "2 days ago",
        "comment": "The hypnotic rotation of the tourbillon cage is art. Absolute pinnacle of mechanical mastery.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 122,
    "name": "Aura Oceanographer 300M Automatic Titanium Diver Watch",
    "brand": "Chronos",
    "category": "Watches",
    "subcategory": "Diver Watches",
    "price": 42999,
    "originalPrice": 58000,
    "discount": 26,
    "rating": 4.9,
    "reviews": 380,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Grade 5 titanium professional saturation diving watch rated to 300 meters with ceramic unidirectional countdown bezel and Super-LumiNova BGW9 lume.",
    "features": [
      "Full Grade-5 Titanium Case and Bracelet (40% Lighter than Steel)",
      "300 Meters (30 ATM) Water Resistance with Helium Escape Valve",
      "Swiss ETA 2824-2 Automatic Movement (28,800 BPH)",
      "Zirconia Ceramic 120-Click Unidirectional Bezel"
    ],
    "specs": {
      "Case": "42mm Grade 5 Titanium",
      "Lume": "Swiss Super-LumiNova BGW9 Grade X1",
      "Crystal": "4mm Domed Sapphire with Undercoating",
      "Clasp": "Titanium Diver Extension On-the-Fly Micro-Adjust"
    },
    "stock": 16,
    "badge": "Best Seller",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Chronos Horlogerie Geneve",
    "sizes": [
      "42mm Case"
    ],
    "colors": [
      "Deep Sea Ocean Blue",
      "Matte Stealth Black"
    ]
  },
  {
    "id": 123,
    "name": "Vanguard Heritage Gold Chronograph with Enamel Dial",
    "brand": "Chronos",
    "category": "Watches",
    "subcategory": "Chronographs",
    "price": 49999,
    "originalPrice": 65000,
    "discount": 23,
    "rating": 4.8,
    "reviews": 290,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Vintage-inspired column wheel chronograph watch with high-fire Grand Feu enamel dial, blued Breguet hands, and 18K yellow gold PVD case.",
    "features": [
      "Mechanical Column-Wheel Column Chronograph Movement",
      "High-Fire Grand Feu White Enamel Scratchproof Dial",
      "Heat-Blued Steel Breguet Moon Hands",
      "Hand-Stitched Italian Horween Shell Cordovan Strap"
    ],
    "specs": {
      "Movement": "Seagull ST1901 Column Wheel Manual Wind",
      "Diameter": "39mm Vintage Proportions",
      "Glass": "Boxed Sapphire Crystal with AR Coating",
      "Case": "316L Steel with 18K Yellow Gold 10-Micron PVD"
    },
    "stock": 14,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Chronos Horlogerie Geneve",
    "sizes": [
      "39mm Case"
    ],
    "colors": [
      "Grand Feu Enamel White",
      "Salmon Vintage Dial"
    ]
  },
  {
    "id": 124,
    "name": "Elegance Ultra-Slim Dress Watch with Onyx Cabochon Crown",
    "brand": "Gilded Thread",
    "category": "Watches",
    "subcategory": "Dress Watches",
    "price": 21999,
    "originalPrice": 29999,
    "discount": 27,
    "rating": 4.7,
    "reviews": 410,
    "images": [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Ultra-thin 6.2mm minimalist dress watch featuring genuine black onyx cabochon crown, guilloché silver dial, and butterfly deployment clasp.",
    "features": [
      "Ultra-Slim 6.2mm Case Slides Effortlessly Under Shirt Cuffs",
      "Guilloché Roman Numeral Textured Dial",
      "Natural Black Onyx Gemstone Inset Crown",
      "Quick-Release Italian Saddle Leather Strap"
    ],
    "specs": {
      "Case Thickness": "6.2mm Ultra-Thin",
      "Movement": "Swiss Ronda Slimtech Quartz Movement",
      "Battery Life": "5 Years Continuous",
      "Glass": "Sapphire Crystal Glass"
    },
    "stock": 28,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Gilded Thread Studio",
    "sizes": [
      "38mm Case"
    ],
    "colors": [
      "Polished Rose Gold & White",
      "Steel & Midnight Blue"
    ]
  },
  {
    "id": 125,
    "name": "TechNova Pulse Horizon GPS Titanium Smartwatch",
    "brand": "TechNova",
    "category": "Watches",
    "subcategory": "Smartwatches",
    "price": 27999,
    "originalPrice": 36999,
    "discount": 24,
    "rating": 4.9,
    "reviews": 780,
    "images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Aviation-grade titanium smartwatch with sapphire crystal touch display, dual-band GPS, 14-day battery life, ECG heart telemetry, and 100+ sport modes.",
    "features": [
      "Grade-5 Titanium Unibody with Ceramic Caseback",
      "1.43-Inch 466x466 AMOLED Always-On Display (1500 Nits)",
      "Medical-Grade Optical Heart, SpO2 & ECG Telemetry",
      "Dual-Frequency L1+L5 GNSS Route Tracking with Offline Maps"
    ],
    "specs": {
      "Battery Life": "14 Days Regular | 40 Hours Continuous GPS",
      "Waterproof": "5 ATM + 40m Recreational Scuba Diving (EN13319)",
      "Connectivity": "Bluetooth 5.3, Wi-Fi, NFC Contactless Payments",
      "Compatibility": "iOS & Android Companion App"
    },
    "stock": 35,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "TechNova Official Outlet",
    "sizes": [
      "46mm Titanium"
    ],
    "colors": [
      "Titanium Silver & Orange Strap",
      "Titanium Black & Leather Strap"
    ]
  },
  {
    "id": 126,
    "name": "Firenze Full-Grain Saddle Leather Weekender Duffle Bag",
    "brand": "Tuscan Craft",
    "category": "Bags & Accessories",
    "subcategory": "Travel Bags",
    "price": 19999,
    "originalPrice": 28000,
    "discount": 29,
    "rating": 4.9,
    "reviews": 390,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Spacious airline carry-on weekender duffle made from 2.2mm thick Tuscan vegetable-tanned saddle leather, antique solid brass hardware, and dedicated shoe compartment.",
    "features": [
      "100% Certified Full-Grain Tuscan Saddle Leather",
      "Separate Exterior Water-Resistant Shoe / Laundry Compartment",
      "Solid Cast Antiqued Brass YKK Excella Zippers",
      "Reinforced Padded Ergonomic Leather Shoulder Strap"
    ],
    "specs": {
      "Dimensions": "52 x 28 x 26 cm (Airline Cabin Approved 42L)",
      "Lining": "Heavyweight 16oz Scottish Waxed Cotton Canvas",
      "Hardware": "100% Solid Cast Brass",
      "Weight": "2.1 kg"
    },
    "stock": 22,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Tuscan Craft Guild",
    "sizes": [
      "42L Weekender"
    ],
    "colors": [
      "Rich Cognac Brown",
      "Espresso Walnut",
      "Classic Black"
    ],
    "customerReviews": [
      {
        "id": "r126_1",
        "userName": "Tarun Kapoor",
        "rating": 5,
        "date": "3 days ago",
        "comment": "The leather aroma filled the room right out of the box. Extremely rugged and looks better every time I travel.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 127,
    "name": "Saffiano Leather Executive Laptop Briefcase with Brass Lock",
    "brand": "Tuscan Craft",
    "category": "Bags & Accessories",
    "subcategory": "Briefcases",
    "price": 16999,
    "originalPrice": 23500,
    "discount": 28,
    "rating": 4.8,
    "reviews": 410,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Slim professional briefcase crafted from scratch-resistant Italian Saffiano calf leather, dedicated 16-inch padded laptop sleeve, and key-lock push latch.",
    "features": [
      "Water & Scratch-Resistant Italian Saffiano Cross-Grain Leather",
      "Padded Shock-Absorbing Sleeve Fits up to 16\" MacBook Pro",
      "Solid Brass Combination & Key Dual-Lock Mechanism",
      "Trolley Pass-Through Sleeve for Rolling Luggage"
    ],
    "specs": {
      "Dimensions": "40 x 30 x 8 cm",
      "Pockets": "Laptop sleeve, 2 phone pockets, 3 pen holders, RFID passport pocket",
      "Strap": "Detachable Leather Shoulder Strap",
      "Hardware": "Palladium Plated Brass"
    },
    "stock": 20,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Tuscan Craft Guild",
    "sizes": [
      "16-Inch Briefcase"
    ],
    "colors": [
      "Midnight Black",
      "Bordeaux Burgundy",
      "Navy Blue"
    ]
  },
  {
    "id": 128,
    "name": "Palermo Handwoven Soft Nappa Leather Crossbody Hobo Tote",
    "brand": "Aurelia",
    "category": "Bags & Accessories",
    "subcategory": "Handbags & Totes",
    "price": 18499,
    "originalPrice": 25000,
    "discount": 26,
    "rating": 4.9,
    "reviews": 330,
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Supple intrecciato hand-woven calf leather shoulder tote with magnetic closure, detachable interior zip pouch, and gold-plated hardware.",
    "features": [
      "Intrecciato Seamless Hand-Woven Italian Nappa Leather",
      "Detachable Zippered Calfskin Document Pouch Included",
      "Dual Top Handles + Adjustable Crossbody Shoulder Strap",
      "Magnetic Foldover Closure with Suede Interior"
    ],
    "specs": {
      "Dimensions": "36 x 26 x 14 cm",
      "Material": "100% Full-Grain Nappa Calfskin",
      "Weight": "720g Ultra-Soft",
      "Origin": "Milan, Italy"
    },
    "stock": 18,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Aurelia Luxury Accessories",
    "sizes": [
      "Medium Tote"
    ],
    "colors": [
      "Butter Cream",
      "Caramel Tan",
      "Emerald Forest"
    ]
  },
  {
    "id": 129,
    "name": "Bespoke Horween Shell Cordovan Bifold Wallet with RFID Shield",
    "brand": "Tuscan Craft",
    "category": "Bags & Accessories",
    "subcategory": "Wallets",
    "price": 7499,
    "originalPrice": 10999,
    "discount": 32,
    "rating": 4.9,
    "reviews": 580,
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "The rarest leather in the world: hand-stitched wallet made from genuine Horween Shell Cordovan leather that never creases, featuring 8 card slots and full RFID protection.",
    "features": [
      "Genuine Chicago Horween Shell Cordovan Leather (Horsehide Membrane)",
      "Six-Month Vegetable Tanning Process with Mirror-Like Sheen",
      "8 Dedicated Credit Card Slots + 2 Hidden Currency Pockets",
      "Certified 13.56 MHz RFID Shielding Barrier"
    ],
    "specs": {
      "Thickness": "Only 9mm Slim Profile when Folded",
      "Thread": "Japanese Fil Au Chinois Waxed Linen Thread",
      "Edges": "Hand-Beveled, Burnished with Beeswax",
      "Lifespan": "Inheritable Lifetime Durability"
    },
    "stock": 29,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Tuscan Craft Guild",
    "sizes": [
      "Bifold 8-Slot"
    ],
    "colors": [
      "Color #8 Deep Burgundy",
      "Natural Glazed Tan",
      "Black Cordovan"
    ]
  },
  {
    "id": 130,
    "name": "Kashmiri Royal Saffron & 24K Gold Youth Restoring Night Elixir",
    "brand": "AyurVeda Luxe",
    "category": "Beauty & Personal Care",
    "subcategory": "Skincare Serums",
    "price": 6499,
    "originalPrice": 8999,
    "discount": 28,
    "rating": 5,
    "reviews": 510,
    "images": [
      "https://images.unsplash.com/photo-1608248597359-573523315dfa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Cold-infused face oil blending Grade-1 Pamore Kashmiri Mogra Saffron, 24K colloidal gold leaf flakes, and cold-pressed wild rosehip oil to visibly restore cellular radiance.",
    "features": [
      "Certified Grade-1 Kashmiri Mogra Saffron (Pampore Harvest)",
      "Real 24K Pure Cosmetic Gold Leaf Suspended Micro-Flakes",
      "Cold-Pressed Cold-Infused Rosehip & Kumkumadi Botanical Actives",
      "Free from Parabens, Sulfates, Mineral Oils & Synthetic Fragrances"
    ],
    "specs": {
      "Volume": "30 ml / 1.0 fl. oz. Miron Violet Glass Dropper Bottle",
      "Skin Type": "All Skin Types (Mature, Dry, & Combination)",
      "Usage": "3-4 Drops Nightly Before Moisturizer",
      "Certifications": "Ecocert Organic & Dermatologically Tested"
    },
    "stock": 45,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "AyurVeda Luxe Botanical Labs",
    "sizes": [
      "30 ml",
      "50 ml Deluxe"
    ],
    "colors": [
      "Gold Amber Elixir"
    ],
    "customerReviews": [
      {
        "id": "r130_1",
        "userName": "Geetika Bansal",
        "rating": 5,
        "date": "Yesterday",
        "comment": "This elixir changed my skin texture completely in 10 days. The glow when waking up is genuine.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 131,
    "name": "Royal Oudh & Damascena Rose Extrait de Parfum (50ml)",
    "brand": "Maison d'Avenza",
    "category": "Beauty & Personal Care",
    "subcategory": "Fine Fragrances",
    "price": 11999,
    "originalPrice": 16500,
    "discount": 27,
    "rating": 4.9,
    "reviews": 320,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Concentrated 35% Extrait de Parfum blending aged Assam Agarwood Oudh, morning-harvested Taif Damascena roses, warm ambergris, and smoky Cambodian incense.",
    "features": [
      "35% Pure Perfume Oil Concentration (Over 14+ Hours Longevity)",
      "Vintage 12-Year Aged Natural Assam Agarwood (Aquilaria)",
      "Handcrafted Heavy Crystal Flacon with Gold Magnetic Cap",
      "Artisanal Micro-Batch Macerated in Grasse, France"
    ],
    "specs": {
      "Olfactory Family": "Woody Floral Oriental",
      "Top Notes": "Taif Rose, Bergamot, Saffron",
      "Heart Notes": "Bulgarian Rose Absolute, Patchouli, Amber",
      "Base Notes": "Natural Assam Oudh, Frankincense, Sandalwood"
    },
    "stock": 20,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Maison d'Avenza Parfumerie",
    "sizes": [
      "50 ml Extrait",
      "100 ml Flacon"
    ],
    "colors": [
      "Amber Glass"
    ]
  },
  {
    "id": 132,
    "name": "Botanical Ceramide Barrier Repair Intensive Cream",
    "brand": "AyurVeda Luxe",
    "category": "Beauty & Personal Care",
    "subcategory": "Face Creams",
    "price": 4499,
    "originalPrice": 6200,
    "discount": 27,
    "rating": 4.8,
    "reviews": 670,
    "images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-573523315dfa?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Deeply nourishing recovery cream enriched with 5 skin-identical ceramides, bio-fermented hyaluronic acid, and centella asiatica to repair the lipid barrier.",
    "features": [
      "5 Essential Ceramide Complex (EOP, NP, AP, AS, NS)",
      "Centella Asiatica (Cica) & Madecassoside Anti-Inflammatory Actives",
      "Non-Comedogenic Velvety Whipped Texture with Zero Stickiness",
      "Clinically Proven 72-Hour Continuous Hydration Lock"
    ],
    "specs": {
      "Volume": "50 ml / 1.7 oz Opal Glass Jar with Spatula",
      "pH": "Balanced at 5.5",
      "Formula": "Hypoallergenic & Fragrance-Free",
      "Origin": "Formulated in Switzerland & Handcrafted in India"
    },
    "stock": 35,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "AyurVeda Luxe Botanical Labs",
    "sizes": [
      "50 ml Jar"
    ],
    "colors": [
      "Cream White"
    ]
  },
  {
    "id": 133,
    "name": "Mysore Pure Sandalwood & Vetiver Botanical Body Cleanser",
    "brand": "AyurVeda Luxe",
    "category": "Beauty & Personal Care",
    "subcategory": "Bath & Body",
    "price": 2499,
    "originalPrice": 3500,
    "discount": 29,
    "rating": 4.8,
    "reviews": 820,
    "images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Luxurious foaming gel body wash infused with certified wild-harvested Mysore Sandalwood oil, earthy Khus (Vetiver) root extract, and organic aloe vera.",
    "features": [
      "Authentic GI-Tagged Mysore White Sandalwood (Santalum Album)",
      "Hydrating Organic Aloe Leaf Juice & Vegetable Glycerin Base",
      "Sulfate-Free Coconut Cleansing Agents that Protect Skin Moisture",
      "Earthy Calming Aromatherapy Scent Profile"
    ],
    "specs": {
      "Volume": "300 ml Pump Bottle",
      "Scent": "Mysore Sandalwood & Khus Root",
      "Texture": "Rich Silk Foaming Gel",
      "Cruelty-Free": "100% Leaping Bunny Certified"
    },
    "stock": 50,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "AyurVeda Luxe Botanical Labs",
    "sizes": [
      "300 ml Pump"
    ],
    "colors": [
      "Amber Bottle"
    ]
  },
  {
    "id": 134,
    "name": "SonicPulse Ultra Titanium Facial Sculpting & LED Light Device",
    "brand": "Lumina",
    "category": "Beauty & Personal Care",
    "subcategory": "Beauty Tech",
    "price": 13999,
    "originalPrice": 19999,
    "discount": 30,
    "rating": 4.9,
    "reviews": 410,
    "images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-573523315dfa?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Handheld microcurrent and sonic sculpting wand with red (630nm) and near-infrared (830nm) LED light therapy to tighten jawline contours and stimulate collagen.",
    "features": [
      "Dual Microcurrent Rollers (350 Microamps) for Facial Lifting",
      "Medical-Grade Red (630nm) & Near-Infrared (830nm) LED Phototherapy",
      "12,000 Sonic Vibrations Per Minute for Deep Product Absorption",
      "Thermal Heating at 42°C for Lymphatic Drainage"
    ],
    "specs": {
      "Battery": "Rechargeable Lithium-Ion (Up to 3 Weeks on Single Charge)",
      "Water Resistance": "IPX7 Waterproof for In-Shower Use",
      "Warranty": "2 Years Official Replacement Guarantee",
      "Includes": "Conductive Peptide Gel Primer (50ml)"
    },
    "stock": 22,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Lumina Digital Store",
    "sizes": [
      "Device + Primer Gel Kit"
    ],
    "colors": [
      "Rose Gold",
      "Titanium Graphite"
    ]
  },
  {
    "id": 135,
    "name": "Hand-Knotted Kashmiri Pure Mulberry Silk Carpet (6x4 Feet)",
    "brand": "Artisan Guild",
    "category": "Home & Living",
    "subcategory": "Rugs & Carpets",
    "price": 89999,
    "originalPrice": 120000,
    "discount": 25,
    "rating": 5,
    "reviews": 180,
    "images": [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Masterwork hand-knotted silk carpet boasting 600 knots per square inch (KPSI), created over 14 months by master weavers in Srinagar using Persian Tree-of-Life motifs.",
    "features": [
      "100% Pure Mulberry Silk on Cotton Foundation",
      "High Density: Over 600 Knots Per Square Inch (KPSI)",
      "Traditional Natural Vegetable Dye Color Palette",
      "Silk Mark Certificate of Provenance Included"
    ],
    "specs": {
      "Dimensions": "6 x 4 Feet (183 x 122 cm)",
      "Origin": "Srinagar, Kashmir Valley",
      "Weave Duration": "14 Months by Master Artisan",
      "Maintenance": "Professional Silk Carpet Care"
    },
    "stock": 6,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "Artisan Kashmir Guild",
    "sizes": [
      "6x4 Feet (183x122cm)",
      "9x6 Feet (274x183cm)"
    ],
    "colors": [
      "Jeweled Ivory & Ruby Medallion",
      "Midnight Indigo & Gold"
    ],
    "customerReviews": [
      {
        "id": "r135_1",
        "userName": "Sunita Chawla",
        "rating": 5,
        "date": "1 week ago",
        "comment": "The luminosity of the silk changes depending on the light angle. A true heirloom investment.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 136,
    "name": "Artisan Hand-Cast Brass & Alabaster Ambient Table Lamp",
    "brand": "Lumina Home",
    "category": "Home & Living",
    "subcategory": "Lighting",
    "price": 18499,
    "originalPrice": 24999,
    "discount": 26,
    "rating": 4.8,
    "reviews": 320,
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Architectural bedside table lamp sculptured from solid hand-burnished brass and natural veined Spanish alabaster globe diffuser with touch dimming.",
    "features": [
      "Solid Hand-Turned Antiqued Brass Base with Protective Wax Finish",
      "Genuine Spanish Translucent Alabaster Stone Sphere",
      "Integrated 2700K Warm Filament LED with 3-Step Touch Dimmer",
      "Hand-Knotted Braided Silk Cord with Solid Brass Inline Switch"
    ],
    "specs": {
      "Height": "42 cm | Base Diameter: 18 cm",
      "Weight": "4.8 kg Solid Stone & Brass",
      "Bulb": "Included Dimmable Warm LED (25,000 Hr Lifespan)",
      "Power": "Universal 110-240V"
    },
    "stock": 19,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Lumina Home Design Studio",
    "sizes": [
      "Medium 42cm Table Lamp"
    ],
    "colors": [
      "Aged Brass & Veined White Alabaster"
    ]
  },
  {
    "id": 137,
    "name": "Pure Belgian Washed Linen King Duvet Ensemble (4-Piece)",
    "brand": "Solace Living",
    "category": "Home & Living",
    "subcategory": "Bedding",
    "price": 16999,
    "originalPrice": 22500,
    "discount": 24,
    "rating": 4.9,
    "reviews": 480,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Naturally thermoregulating stonewashed bedding set woven from 100% certified Flanders Belgian flax linen, getting softer with every wash.",
    "features": [
      "100% Certified European Flax Grown in Flanders, Belgium",
      "Pre-Washed Using Pumice Stones for Supreme Lived-In Softness",
      "Naturally Breathable, Moisture-Wicking and Hypoallergenic",
      "Set Includes King Duvet Cover, Fitted Sheet, and 2 Oxford Shams"
    ],
    "specs": {
      "Dimensions": "Duvet: 230 x 260 cm | Fitted Sheet: 180 x 200 x 40 cm",
      "Weight": "175 GSM Heavyweight Flax",
      "Certifications": "OEKO-TEX Standard 100 Certified Toxic-Free",
      "Closures": "Natural Olive Wood Buttons & Interior Corner Ties"
    },
    "stock": 25,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Solace Bedding Studio",
    "sizes": [
      "King (Set of 4)",
      "Queen (Set of 4)"
    ],
    "colors": [
      "Oatmeal Natural Flax",
      "French White",
      "Muted Sage"
    ]
  },
  {
    "id": 138,
    "name": "Hand-Carved Black Marquina Marble Scented Candle Trio",
    "brand": "Solace Living",
    "category": "Home & Living",
    "subcategory": "Home Fragrance",
    "price": 6999,
    "originalPrice": 9500,
    "discount": 26,
    "rating": 4.8,
    "reviews": 390,
    "images": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Trio of clean-burning soy wax candles housed inside reusable solid hand-carved Nero Marquina Spanish marble vessels with wood wicks.",
    "features": [
      "Solid Hand-Turned Spanish Nero Marquina Black Marble Jars",
      "100% Biodegradable Organic Soy & Coconut Wax Blend",
      "Crackling FSC-Certified Double Wooden Wicks",
      "Signature Aromas: Smoked Amber, Cardamom Fig, Bergamot Cedar"
    ],
    "specs": {
      "Burn Time": "65 Hours per Candle (195 Hours Total Trio)",
      "Wax Weight": "300g per Vessel",
      "Vessel": "Permanent Keepsake Marble Container",
      "Safety": "Lead-Free Wicks & Phthalate-Free Oils"
    },
    "stock": 35,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Solace Bedding Studio",
    "sizes": [
      "Trio Set (3x 300g Jars)"
    ],
    "colors": [
      "Black Marquina Marble"
    ]
  },
  {
    "id": 139,
    "name": "BaristaPro Dual-Boiler Commercial Espresso Machine with Rotary Pump",
    "brand": "ArtisanChef",
    "category": "Kitchen Appliances",
    "subcategory": "Coffee & Espresso",
    "price": 68999,
    "originalPrice": 89999,
    "discount": 23,
    "rating": 5,
    "reviews": 240,
    "images": [
      "https://images.unsplash.com/photo-1517668808822-9ebd02f2a8ea?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Italian commercial espresso machine for the home barista featuring dual stainless steel boilers, PID thermal regulation, commercial 58mm portafilter, and silent rotary pump.",
    "features": [
      "Dual Dedicated Boilers for Simultaneous Brewing & High-Pressure Steaming",
      "Digital PID Temperature Controller Configurable to 0.1°C Precision",
      "Commercial Silent Rotary Vane Pump with Direct Plumbing Option",
      "Commercial Grade 58mm Stainless Steel Portafilter & IMS Precision Baskets"
    ],
    "specs": {
      "Brew Boiler": "0.75L Stainless Steel",
      "Steam Boiler": "1.5L Stainless Steel with Cool-Touch Wand",
      "Body": "Heavy-Duty Mirror-Polished AISI 304 Stainless Steel",
      "Power": "2200W Rapid Ready in 9 Minutes"
    },
    "stock": 12,
    "badge": "Exclusive",
    "delivery": "Free Express Insured Courier in 2 Days",
    "seller": "ArtisanChef Culinary Store",
    "sizes": [
      "Standard 58mm Kit",
      "Barista Deluxe Kit with Tamper"
    ],
    "colors": [
      "Polished Stainless Steel",
      "Matte Carbon Black"
    ],
    "customerReviews": [
      {
        "id": "r139_1",
        "userName": "Aditya Khurana",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Produces thick, syrupy café-quality espresso shots effortlessly. Steaming power is monstrous.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 140,
    "name": "Apex MasterBlend 1800W Commercial High-Velocity Vacuum Blender",
    "brand": "ArtisanChef",
    "category": "Kitchen Appliances",
    "subcategory": "Blenders & Juicers",
    "price": 21999,
    "originalPrice": 29999,
    "discount": 27,
    "rating": 4.8,
    "reviews": 490,
    "images": [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebd02f2a8ea?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Ultra-quiet commercial blender featuring high-power vacuum de-aeration chamber that removes air before blending to eliminate oxidation and preserve 100% nutrients.",
    "features": [
      "Vacuum Blending Chamber (0.8 Bar Negative Pressure Extraction)",
      "1800W Peak Horsepower Motor Rotating at 32,000 RPM",
      "Aircraft-Grade Laser-Cut Japanese 6-Leaf Titanium Blades",
      "Acoustic Sound Enclosure Shield Reduces Operating Noise to 62dB"
    ],
    "specs": {
      "Capacity": "2.0 Liter BPA-Free Eastman Tritan Pitcher",
      "Speeds": "Variable 10 Speeds + 5 One-Touch Presets",
      "Safety": "Child-Lock Interlock Mechanism",
      "Warranty": "7 Years Motor Guarantee"
    },
    "stock": 24,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ArtisanChef Culinary Store",
    "sizes": [
      "2.0L Pitcher + Vacuum Tumbler"
    ],
    "colors": [
      "Brushed Gunmetal",
      "Onyx Black"
    ]
  },
  {
    "id": 141,
    "name": "Heritage Enameled Cast Iron Dutch Oven (6.5 Quarts / 6.2L)",
    "brand": "ArtisanChef",
    "category": "Kitchen Appliances",
    "subcategory": "Cookware",
    "price": 9499,
    "originalPrice": 13999,
    "discount": 32,
    "rating": 4.9,
    "reviews": 730,
    "images": [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Heavy-duty enameled cast iron Dutch oven with self-basting condensation spikes in the lid, engineered for braising, slow cooking, bread baking, and stews.",
    "features": [
      "Heavy-Gauge Cast Iron for Superior Heat Retention & Distribution",
      "Triple-Layer Non-Reactive Vitreous Enamel Glaze",
      "Self-Basting Dimpled Heavy Lid Keeps Moisture Trapped",
      "Oven Safe up to 260°C (500°F) on Induction, Gas, and Electric"
    ],
    "specs": {
      "Capacity": "6.2 Liters (Feeds 6-8 People)",
      "Diameter": "28 cm Across",
      "Weight": "6.8 kg Solid Cast Iron",
      "Knob": "Cast Stainless Steel Ergonomic Knob"
    },
    "stock": 30,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ArtisanChef Culinary Store",
    "sizes": [
      "6.2 Liter Round"
    ],
    "colors": [
      "Cherry Glaze Crimson",
      "Ocean Cerulean Blue",
      "Emerald Pine"
    ]
  },
  {
    "id": 142,
    "name": "Artisan Precision Gooseneck Electric Pour-Over Kettle",
    "brand": "ArtisanChef",
    "category": "Kitchen Appliances",
    "subcategory": "Coffee & Tea",
    "price": 6499,
    "originalPrice": 8999,
    "discount": 28,
    "rating": 4.8,
    "reviews": 580,
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebd02f2a8ea?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Counterbalanced gooseneck variable temperature kettle with 1°C precision digital base, brew stopwatch, and 60-minute temperature hold.",
    "features": [
      "Precision Gooseneck Spout for Controlled Spiral Pour Rate",
      "PID Temperature Strix Controller Configurable from 40°C to 100°C",
      "60-Minute Automatic Keep Warm Function & Integrated Brew Timer",
      "Food-Grade 304 Stainless Steel Interior with Zero Plastic Contact"
    ],
    "specs": {
      "Capacity": "0.9 Liters",
      "Power": "1200W Rapid Boil (Water reaches 93°C in 3 Minutes)",
      "Display": "Hidden Backlit LCD Screen in Base",
      "Cord": "360-Degree Swivel Base with Cord Wrap"
    },
    "stock": 38,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ArtisanChef Culinary Store",
    "sizes": [
      "0.9L Precision Kettle"
    ],
    "colors": [
      "Matte Black & Walnut Handle",
      "Warm Copper & Walnut"
    ]
  },
  {
    "id": 143,
    "name": "Milanese Mid-Century 3-Seater Velvet Sofa in Emerald Green",
    "brand": "Habitat Luxe",
    "category": "Furniture",
    "subcategory": "Living Room",
    "price": 64999,
    "originalPrice": 85000,
    "discount": 24,
    "rating": 4.9,
    "reviews": 210,
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Architectural 3-seater sofa upholstered in stain-resistant performance cotton velvet with kiln-dried solid teakwood frame and brushed brass stiletto legs.",
    "features": [
      "Stain-Shield Performance Cotton Velvet Upholstery (50,000 Rubs)",
      "Kiln-Dried Solid Teakwood Internal Frame with Lifetime Warranty",
      "High-Resiliency Multi-Density Foam Core with Down Feather Blend Wrap",
      "Tapered Brushed Brass Stiletto Legs with Floor Protectors"
    ],
    "specs": {
      "Dimensions": "218 cm Length x 92 cm Depth x 82 cm Height",
      "Seating Capacity": "Comfortable 3-Seater",
      "Cushioning": "High-Resilience 32-Density Foam + Feather Plump",
      "Assembly": "Delivered Pre-Assembled with White-Glove Placement"
    },
    "stock": 8,
    "badge": "Exclusive",
    "delivery": "Free White-Glove In-Home Placement in 3 Days",
    "seller": "Habitat Luxe Furniture Studio",
    "sizes": [
      "3-Seater (218cm)",
      "4-Seater (250cm)"
    ],
    "colors": [
      "Emerald Jewel Green",
      "Royal Navy Blue",
      "Warm Ochre Velvet"
    ],
    "customerReviews": [
      {
        "id": "r143_1",
        "userName": "Manish Somani",
        "rating": 5,
        "date": "5 days ago",
        "comment": "The centerpiece of our drawing room. The velvet is sumptuous and the seating depth is extremely relaxing.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 144,
    "name": "Ergonomic Executive High-Back Lounge Armchair with Ottoman",
    "brand": "Habitat Luxe",
    "category": "Furniture",
    "subcategory": "Chairs & Recliners",
    "price": 49999,
    "originalPrice": 68000,
    "discount": 26,
    "rating": 5,
    "reviews": 310,
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Iconic mid-century lounge chair and matching ottoman set engineered with molded 7-ply walnut wood veneer shells and premium top-grain Italian leather.",
    "features": [
      "7-Ply Molded FSC-Certified Walnut Hardwood Veneer Shells",
      "Hand-Upholstered Top-Grain Italian Semi-Aniline Leather",
      "Die-Cast Aluminum 5-Star Swivel Base with Built-In 15-Degree Tilt",
      "Includes Matching Ergonomic Padded Leather Ottoman"
    ],
    "specs": {
      "Chair Dimensions": "85 cm Width x 85 cm Depth x 82 cm Height",
      "Ottoman Dimensions": "65 cm Width x 54 cm Depth x 44 cm Height",
      "Swivel": "360-Degree Smooth Bearing Rotation",
      "Leather": "Top-Grain Supple Black Leather"
    },
    "stock": 12,
    "badge": "Best Seller",
    "delivery": "Free White-Glove In-Home Placement in 3 Days",
    "seller": "Habitat Luxe Furniture Studio",
    "sizes": [
      "Chair + Ottoman Set"
    ],
    "colors": [
      "Walnut & Black Leather",
      "Palisander & Caramel Leather"
    ]
  },
  {
    "id": 145,
    "name": "Scandinavian Solid White Oak Dining Table (6-8 Seater)",
    "brand": "Habitat Luxe",
    "category": "Furniture",
    "subcategory": "Dining Room",
    "price": 54999,
    "originalPrice": 72000,
    "discount": 24,
    "rating": 4.8,
    "reviews": 190,
    "images": [
      "https://images.unsplash.com/photo-1580481077195-c0e86b89f5ce?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Handcrafted 2-meter dining table constructed from sustainable solid European White Oak planks with natural beveled live edge and matte oil protection.",
    "features": [
      "100% Solid European White Oak (No Particle Board or Veneers)",
      "Treated with Natural Organic Plant-Based Hardwax Oil",
      "Subtle 45-Degree Chamfered Edge Profiles",
      "Heavy Solid Oak Trestle Leg Base Engineered for Maximum Legroom"
    ],
    "specs": {
      "Dimensions": "200 cm Length x 95 cm Width x 76 cm Height",
      "Tabletop Thickness": "38 mm Solid Oak",
      "Seating Capacity": "Comfortable 6-8 Seater",
      "Weight": "78 kg Solid Timber"
    },
    "stock": 9,
    "badge": "Exclusive",
    "delivery": "Free White-Glove In-Home Placement in 3 Days",
    "seller": "Habitat Luxe Furniture Studio",
    "sizes": [
      "6-8 Seater (200x95cm)"
    ],
    "colors": [
      "Natural Light Oak",
      "Smoked Brown Oak"
    ]
  },
  {
    "id": 146,
    "name": "Calacatta Gold Italian Marble Top Coffee Table",
    "brand": "Habitat Luxe",
    "category": "Furniture",
    "subcategory": "Living Room Tables",
    "price": 28999,
    "originalPrice": 38000,
    "discount": 24,
    "rating": 4.9,
    "reviews": 260,
    "images": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Round statement coffee table with hand-honed genuine Italian Calacatta Gold marble slab and fluted solid ash wood pedestal base.",
    "features": [
      "Genuine 20mm Italian Calacatta Gold Marble Slab with Polished Edges",
      "Coated with Invisible Anti-Stain Nano-Sealant Protection",
      "Fluted Solid Hardwood Column Pedestal Base",
      "Beveled Reverse Bullnose Edge Profile"
    ],
    "specs": {
      "Diameter": "90 cm Round | Height: 42 cm",
      "Marble Origin": "Carrara, Tuscany, Italy",
      "Weight": "42 kg Heavyweight Stability",
      "Assembly": "Fully Assembled with Leveling Feet"
    },
    "stock": 14,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery in 2 Days",
    "seller": "Habitat Luxe Furniture Studio",
    "sizes": [
      "90cm Round Coffee Table"
    ],
    "colors": [
      "Calacatta White & Walnut Pedestal",
      "Nero Marquina & Black Pedestal"
    ]
  },
  {
    "id": 147,
    "name": "Solid Teakwood Floating Platform Bed with Upholstered Headboard",
    "brand": "Habitat Luxe",
    "category": "Furniture",
    "subcategory": "Bedroom",
    "price": 68999,
    "originalPrice": 89000,
    "discount": 22,
    "rating": 4.9,
    "reviews": 170,
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Architectural King size platform bed frame constructed from aged Indian teakwood with recessed cantilever legs and linen-padded headboard.",
    "features": [
      "Seasoned Grade-A CP Teakwood Frame with Mortise & Tenon Joinery",
      "Recessed Hidden Cantilever Base Gives Effortless Floating Appearance",
      "Belgian Washed Linen Padded Ergonomic Angled Headboard",
      "Integrated Slat System Supporting up to 600kg Weight Capacity"
    ],
    "specs": {
      "Mattress Size": "King (183 x 198 cm / 72 x 78 in)",
      "Headboard Height": "105 cm",
      "Material": "100% Solid Indian Teakwood + Belgian Linen",
      "Warranty": "10 Years Structural Frame Warranty"
    },
    "stock": 7,
    "badge": "Exclusive",
    "delivery": "Free White-Glove Installation in 3 Days",
    "seller": "Habitat Luxe Furniture Studio",
    "sizes": [
      "King Size",
      "Queen Size"
    ],
    "colors": [
      "Honey Teak & Natural Linen",
      "Dark Walnut & Charcoal Linen"
    ]
  },
  {
    "id": 148,
    "name": "ApexPro Smart Magnetic Indoor Studio Cycle with 22\" HD Screen",
    "brand": "ApexFlight",
    "category": "Sports & Fitness",
    "subcategory": "Cardio Equipment",
    "price": 54999,
    "originalPrice": 72000,
    "discount": 24,
    "rating": 4.9,
    "reviews": 340,
    "images": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Silent magnetic resistance stationary studio cycle with 22-inch rotating HD touchscreen, automatic resistance adjustments, and SPD dual pedals.",
    "features": [
      "Silent Magnetic Resistance (SMR) with 100 Micro-Adjust Levels",
      "22-Inch 360-Degree Swiveling HD Touchscreen for On/Off Bike Workouts",
      "Dual-Sided Pedals (SPD Cleats & Standard Toe Cages)",
      "Real-Time Metrics: Wattage, RPM, Cadence, and Heart Rate Telemetry"
    ],
    "specs": {
      "Flywheel": "18 kg High-Inertia Precision Balanced",
      "Max User Weight": "150 kg",
      "Audio": "Front-Facing 20W Stereo Speakers with Bluetooth 5.0",
      "Footprint": "140 x 56 x 145 cm"
    },
    "stock": 15,
    "badge": "Best Seller",
    "delivery": "Free Express In-Home Delivery in 2 Days",
    "seller": "ApexFlight Fitness Systems",
    "sizes": [
      "Studio Cycle + 22\" Screen"
    ],
    "colors": [
      "Matte Anthracite & Crimson Accents"
    ],
    "customerReviews": [
      {
        "id": "r148_1",
        "userName": "Kavita Rao",
        "rating": 5,
        "date": "1 week ago",
        "comment": "Completely whisper silent. You can workout at 5 AM without disturbing anyone. The screen rotation is a huge plus.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 149,
    "name": "Machined Steel Quick-Adjust Dumbbell Set (5 to 32 kg Pair)",
    "brand": "ApexFlight",
    "category": "Sports & Fitness",
    "subcategory": "Strength Training",
    "price": 24999,
    "originalPrice": 32000,
    "discount": 22,
    "rating": 4.8,
    "reviews": 470,
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Space-saving dumbbell pair replacing 16 pairs of individual weights; rotate the knurled handle to switch between 5kg and 32kg in 2-second increments.",
    "features": [
      "Instant 1-Second Twist Dial Selection System (5kg to 32kg per Hand)",
      "Machined Solid Steel Weight Plates with Zero Plastic Shells",
      "Diamond Knurled Stainless Steel Ergonomic Grip Handles",
      "Includes Heavy-Duty Compact Storage Cradle Trays"
    ],
    "specs": {
      "Weight Range": "5, 7, 9, 11, 14, 16, 18, 20, 23, 25, 27, 30, 32 kg",
      "Total Pair Weight": "64 kg Combined",
      "Material": "Solid Steel with Electro-Coated Scratch Resistance",
      "Mechanism": "Internal Steel Cam Locking Pins"
    },
    "stock": 20,
    "badge": "Hot Trend",
    "delivery": "Free Express Insured Delivery in 2 Days",
    "seller": "ApexFlight Fitness Systems",
    "sizes": [
      "Pair (5kg to 32kg per hand)"
    ],
    "colors": [
      "Gunmetal Steel & Black"
    ]
  },
  {
    "id": 150,
    "name": "Carbon Pro Gravel & Endurance Road Bicycle (Shimano GRX 12-Speed)",
    "brand": "ApexFlight",
    "category": "Sports & Fitness",
    "subcategory": "Cycling",
    "price": 98999,
    "originalPrice": 125000,
    "discount": 21,
    "rating": 4.9,
    "reviews": 180,
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Toray T800 high-modulus carbon fiber gravel bike with Shimano GRX 820 1x12 groupset, hydraulic disc brakes, and tubeless 700x42c tires.",
    "features": [
      "Toray T800 Monocoque Carbon Fiber Frame & Fork (Weight: 8.4kg)",
      "Shimano GRX 820 12-Speed Dedicated Gravel Groupset",
      "Hydraulic Ice-Tech 160mm Freeza Disc Brakes",
      "Tubeless Ready DT Swiss Gravel LN Wheels with Maxxis Rambler Tires"
    ],
    "specs": {
      "Frame Weight": "980g Raw Frame",
      "Tire Clearance": "Up to 700x47c or 650bx50",
      "Cables": "Fully Integrated Internal Routing",
      "Bottom Bracket": "Threaded T47 Inboard"
    },
    "stock": 8,
    "badge": "Exclusive",
    "delivery": "Shipped in 95% Assembled Bike Flight Case in 3 Days",
    "seller": "ApexFlight Velocity Cycles",
    "sizes": [
      "52cm (S)",
      "54cm (M)",
      "56cm (L)"
    ],
    "colors": [
      "Sage Green & Raw Carbon",
      "Desert Sand Matte"
    ]
  },
  {
    "id": 151,
    "name": "Organic Cork & Natural Tree Rubber Luxury Yoga Mat (5mm)",
    "brand": "Solace Living",
    "category": "Sports & Fitness",
    "subcategory": "Yoga & Wellness",
    "price": 4499,
    "originalPrice": 5999,
    "discount": 25,
    "rating": 4.8,
    "reviews": 620,
    "images": [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Extra-long non-slip yoga mat made from sustainable Portuguese oak cork with high-density natural rubber base and laser-etched alignment guides.",
    "features": [
      "100% Sustainable Portuguese Oak Bark Cork Surface",
      "High-Density Non-Slip Natural Tree Rubber Base (No PVC / TPE)",
      "Grip Increases as You Sweat (Natural Antimicrobial Cork Properties)",
      "Precision Laser-Etched Body Alignment Navigation Lines"
    ],
    "specs": {
      "Dimensions": "183 x 66 cm (Extra-Long & Wide)",
      "Thickness": "5mm Joint-Protecting Cushion",
      "Weight": "2.7 kg Stable Grounding Weight",
      "Includes": "100% Cotton Mat Carry Strap"
    },
    "stock": 45,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Solace Bedding Studio",
    "sizes": [
      "5mm Cushion (183x66cm)"
    ],
    "colors": [
      "Natural Golden Cork"
    ]
  },
  {
    "id": 152,
    "name": "The Complete Works of William Shakespeare Leatherbound Collector's Folio",
    "brand": "Folio Heritage",
    "category": "Books & Stationery",
    "subcategory": "Collector Editions",
    "price": 8999,
    "originalPrice": 12000,
    "discount": 25,
    "rating": 5,
    "reviews": 210,
    "images": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Hardcover deluxe folio edition bound in genuine bonded burgundy goat leather with 24K gilded page edges, ribbon markers, and archival acid-free paper.",
    "features": [
      "Real Bonded Moroccan Leather Binding with Gilded Foil Stamping",
      "24K Gold Leaf Edged Pages (Gilt Edge Craftsmanship)",
      "Acid-Free 120 GSM Muted Ivory Paper (Preserved for Centuries)",
      "Includes Satin Ribbon Markers and Custom Hand-Numbered Bookplate"
    ],
    "specs": {
      "Pages": "1,280 Pages Complete Folio Edition",
      "Dimensions": "28 x 20 x 7 cm Heavyweight Tome",
      "Language": "English",
      "Publisher": "Folio Heritage Press London"
    },
    "stock": 16,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Folio Heritage Booksellers",
    "sizes": [
      "Deluxe Leatherbound Folio"
    ],
    "colors": [
      "Imperial Burgundy & 24K Gold",
      "Forest Green & Gold"
    ],
    "customerReviews": [
      {
        "id": "r152_1",
        "userName": "Prof. Arvind Sen",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Exquisite binding. The gold leaf on the page edges reflects light magnificently.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 153,
    "name": "Artisan Handcrafted Full-Grain Buffalo Leather Journal (A5)",
    "brand": "Folio Heritage",
    "category": "Books & Stationery",
    "subcategory": "Notebooks & Journals",
    "price": 2999,
    "originalPrice": 4200,
    "discount": 29,
    "rating": 4.9,
    "reviews": 580,
    "images": [
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Refillable A5 journal wrapped in thick crazy horse oil-tanned water buffalo leather with hand-sewn binding, brass pen loop, and fountain pen friendly cotton paper.",
    "features": [
      "Full-Grain Rustic Oil-Tanned Buffalo Leather Cover",
      "240 Pages of 140 GSM Bleed-Proof Recycled Cotton Paper",
      "Fountain Pen Friendly with Zero Feathering or Ghosting",
      "Leather Wrap-Around Tie with Antique Brass Key Charm"
    ],
    "specs": {
      "Size": "A5 Format (21 x 15 cm)",
      "Paper": "140 GSM Unlined Deckle Edge Rag Paper",
      "Refillable": "Yes (3-Section Coptic Hand-Stitched Spine)",
      "Packaging": "Kraft Gift Box with Wax Seal"
    },
    "stock": 35,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Folio Heritage Booksellers",
    "sizes": [
      "A5 Standard (240 Pages)"
    ],
    "colors": [
      "Distressed Saddle Brown",
      "Espresso Dark",
      "Vintage Tan"
    ]
  },
  {
    "id": 154,
    "name": "Imperial Solid Brass & Urushi Lacquer Fountain Pen (Fine Nib)",
    "brand": "Gilded Thread",
    "category": "Books & Stationery",
    "subcategory": "Luxury Pens",
    "price": 8499,
    "originalPrice": 11999,
    "discount": 29,
    "rating": 4.8,
    "reviews": 340,
    "images": [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Precision-balanced fountain pen turned from solid brass bar, coated in traditional Japanese Urushi-style glossy lacquer, and fitted with an 18K gold-plated German Schmidt nib.",
    "features": [
      "Solid Brass Core Weight Balanced for Fatigue-Free Writing",
      "Hand-Polished High-Gloss Multi-Layered Lacquer Finish",
      "German Schmidt 18K Gold Plated Stainless Steel Fine (F) Nib",
      "Includes Smooth Piston Ink Converter & 6 International Ink Cartridges"
    ],
    "specs": {
      "Nib Size": "Fine (0.5mm)",
      "Filling System": "Piston Converter / Standard International Cartridge",
      "Weight": "44g Weighted Luxury Feel",
      "Gift Box": "Solid Walnut Presentation Case Included"
    },
    "stock": 24,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Gilded Thread Studio",
    "sizes": [
      "Fine (0.5mm) Nib",
      "Medium (0.7mm) Nib"
    ],
    "colors": [
      "Deep Piano Black & Gold",
      "Emerald Green Lacquer",
      "Brushed Raw Brass"
    ]
  },
  {
    "id": 155,
    "name": "India: A Journey Across Empires Illustrated Coffee Table Book",
    "brand": "Folio Heritage",
    "category": "Books & Stationery",
    "subcategory": "Art & Photography",
    "price": 5499,
    "originalPrice": 7500,
    "discount": 27,
    "rating": 4.9,
    "reviews": 290,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Oversized collector photography tome exploring 5,000 years of Indian royal palaces, textiles, temples, and artisan guilds with archival museum photography.",
    "features": [
      "Large Format (32 x 26 cm) Hardcover with Cloth Bound Spine",
      "Over 400 Full-Color High-Resolution Archival Photographs",
      "Printed on Heavy 170 GSM Semi-Gloss Art Paper in Italy",
      "Foreword by Renowned Historians and Curators"
    ],
    "specs": {
      "Pages": "384 Pages Hardcover with Embossed Dust Jacket",
      "Weight": "3.4 kg Heavyweight Statement Tome",
      "Dimensions": "32 x 26 x 4.5 cm",
      "Publisher": "Folio Heritage Fine Art Editions"
    },
    "stock": 20,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "Folio Heritage Booksellers",
    "sizes": [
      "Hardcover Coffee Table Book"
    ],
    "colors": [
      "Cloth Bound Crimson & Gold"
    ]
  },
  {
    "id": 156,
    "name": "ApexForge Pro 75% Wireless Mechanical Keyboard with Brass Weight",
    "brand": "ApexForge",
    "category": "Gaming Accessories",
    "subcategory": "Keyboards",
    "price": 14999,
    "originalPrice": 19999,
    "discount": 25,
    "rating": 4.9,
    "reviews": 680,
    "images": [
      "https://images.unsplash.com/photo-1612287233207-6b45eb9d04ba?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Enthusiast-grade gasket-mounted 75% mechanical keyboard with CNC aluminum chassis, internal brass weight, pre-lubed Gateron Oil King linear switches, and per-key RGB.",
    "features": [
      "Full CNC Anodized 6063 Aluminum Case with Mirror Brass Weight (1.8kg)",
      "Flex-Cut Polycarbonate Plate with Multi-Layer Poron Foam Dampening",
      "Pre-Lubed Gateron Oil King Factory Linear Switches (Hot-Swappable 5-Pin)",
      "Tri-Mode Connectivity: 2.4GHz Low-Latency, Bluetooth 5.1 & USB-C"
    ],
    "specs": {
      "Layout": "75% Exploded Layout with CNC Rotary Volume Knob",
      "Keycaps": "Thick 1.5mm Doubleshot PBT Cherry Profile",
      "Battery": "4000mAh Battery (Up to 200 Hours RGB Off)",
      "Software": "QMK / VIA Open-Source Keymap Programmable"
    },
    "stock": 22,
    "badge": "Exclusive",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexForge Gaming Labs",
    "sizes": [
      "Pre-Built Keyboard",
      "Barebones Kit (No Switches)"
    ],
    "colors": [
      "Anodized Midnight Black",
      "Retro E-White",
      "Navy Blue & Gold"
    ],
    "customerReviews": [
      {
        "id": "r156_1",
        "userName": "Aryan Chhabra",
        "rating": 5,
        "date": "2 days ago",
        "comment": "The typing acoustic sound profile is pure 'creamy thock'. Heavy aluminum build feels indestructible.",
        "verifiedPurchase": true
      }
    ]
  },
  {
    "id": 157,
    "name": "ApexGlide Ultralight 49g Wireless Gaming Mouse (4000Hz Polling)",
    "brand": "ApexForge",
    "category": "Gaming Accessories",
    "subcategory": "Gaming Mice",
    "price": 8999,
    "originalPrice": 12499,
    "discount": 28,
    "rating": 4.8,
    "reviews": 540,
    "images": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612287233207-6b45eb9d04ba?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Solid-shell ultralight 49-gram symmetrical wireless mouse equipped with PixArt PAW3395 26,000 DPI sensor and 4000Hz hyper-polling rate wireless dongle.",
    "features": [
      "Solid Shell 49g Featherweight Ergonomic Symmetrical Design",
      "PixArt PAW3395 Flagship 26,000 DPI Optical Sensor (650 IPS, 50G)",
      "4000Hz (4K) High-Speed Wireless Dongle Included for 0.25ms Latency",
      "Optical Dustproof Micro-Switches Rated for 100 Million Clicks"
    ],
    "specs": {
      "Weight": "49 Grams Ultra-Light",
      "Skates": "100% Virgin Grade Curved PTFE Feet",
      "Battery Life": "80 Hours at 1000Hz | 35 Hours at 4000Hz",
      "Cable": "Superflex Paracord USB-C Charging Cable"
    },
    "stock": 35,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexForge Gaming Labs",
    "sizes": [
      "4K Dongle Edition"
    ],
    "colors": [
      "Matte Polar White",
      "Stealth Carbon Black",
      "Pastel Lilac"
    ]
  },
  {
    "id": 158,
    "name": "SoundStorm 7.1 Spatial Audio Wireless Esports Gaming Headset",
    "brand": "ApexForge",
    "category": "Gaming Accessories",
    "subcategory": "Headsets",
    "price": 11499,
    "originalPrice": 15999,
    "discount": 28,
    "rating": 4.8,
    "reviews": 430,
    "images": [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612287233207-6b45eb9d04ba?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Pro tournament wireless gaming headset with 50mm bio-cellulose drivers, detachable broadcast-grade cardioid microphone, and dual 2.4GHz + Bluetooth audio mixing.",
    "features": [
      "50mm Bio-Cellulose Acoustic Neodymium Drivers",
      "Simultaneous 2.4GHz Wireless Gaming + Bluetooth Mobile Chat",
      "Detachable 9.7mm Broadcast-Grade ClearVoice Microphone",
      "Memory Foam Breathable Mesh Cooling-Gel Earcups"
    ],
    "specs": {
      "Battery Life": "60 Hours Continuous Gameplay with Fast Charge",
      "Wireless Range": "Up to 20 Meters (65 Feet)",
      "Weight": "285g Lightweight Comfort",
      "Compatibility": "PC, PS5, Xbox Series X, Nintendo Switch, Mac, Mobile"
    },
    "stock": 28,
    "badge": "Hot Trend",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexForge Gaming Labs",
    "sizes": [
      "Wireless Pro Headset"
    ],
    "colors": [
      "Gunmetal & Carbon",
      "Arctic Frost White"
    ]
  },
  {
    "id": 159,
    "name": "ApexStrike Hall-Effect Wireless Pro Controller with Back Paddles",
    "brand": "ApexForge",
    "category": "Gaming Accessories",
    "subcategory": "Controllers",
    "price": 8499,
    "originalPrice": 11500,
    "discount": 26,
    "rating": 4.9,
    "reviews": 390,
    "images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612287233207-6b45eb9d04ba?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Zero-stick-drift pro gamepad equipped with electromagnetic Hall Effect thumbsticks, microswitch mechanical triggers, 4 remappable rear paddles, and 1000Hz polling.",
    "features": [
      "Electromagnetic Hall Effect Joysticks (Guaranteed Zero Stick Drift)",
      "Mechanical Microswitch D-Pad and Action Buttons (0.3mm Actuation)",
      "Adjustable 2-Way Trigger Stops (Hair Triggers for FPS / Analog for Racing)",
      "4 Ergonomic Programmable Back Paddles with On-the-Fly Macro Mapping"
    ],
    "specs": {
      "Polling Rate": "1000Hz (1ms Wired & 2.4G Wireless)",
      "Vibration": "Dual Asymmetric Rotor Motors + Impulse Trigger Rumble",
      "Battery": "1200mAh Lithium Rechargeable (20+ Hours Playtime)",
      "Platform Support": "PC, Steam Deck, Switch, Android, iOS"
    },
    "stock": 30,
    "badge": "Deal of the Day",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexForge Gaming Labs",
    "sizes": [
      "Pro Controller with 2.4G Dongle"
    ],
    "colors": [
      "Smoky Translucent Black",
      "Cyberpunk Yellow",
      "Alpine White"
    ]
  },
  {
    "id": 160,
    "name": "TitanDesk XL Cordura Precision Waterproof Gaming Desk Pad (90x40cm)",
    "brand": "ApexForge",
    "category": "Gaming Accessories",
    "subcategory": "Desk Mats",
    "price": 2499,
    "originalPrice": 3800,
    "discount": 34,
    "rating": 4.8,
    "reviews": 760,
    "images": [
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80"
    ],
    "description": "Extra-large desk mat crafted from military-spec authentic Cordura fabric with spill-proof water repellent treatment and reinforced low-profile stitched edges.",
    "features": [
      "Authentic Cordura Military-Grade High-Density Weave Surface",
      "Waterproof & Stain-Repellent Coating (Liquids Bead Up for Easy Wipe)",
      "Anti-Fray Ultra-Dense Micro-Stitched Edge Seams Flush with Surface",
      "4mm Non-Slip Natural Textured Herringbone Rubber Base"
    ],
    "specs": {
      "Dimensions": "900 x 400 x 4 mm (35.4 x 15.7 Inches)",
      "Surface": "Cordura Speed-Control Hybrid Texture",
      "Base": "Eco-Friendly Natural Rubber",
      "Cleaning": "Water Washable"
    },
    "stock": 50,
    "badge": "Best Seller",
    "delivery": "Free Express Delivery by Tomorrow",
    "seller": "ApexForge Gaming Labs",
    "sizes": [
      "XL (90x40cm)",
      "XXL (120x60cm)"
    ],
    "colors": [
      "Stealth Carbon Black",
      "Deep Slate Gray"
    ]
  }
];
