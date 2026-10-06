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
  }
];
