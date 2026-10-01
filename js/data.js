/**
 * SOLVÉA - Clinical Skincare × Modern Beauty × Sunlight × Clean Science
 * Master Product Catalog & Knowledge Data Store
 */

const SOLVEA_DATA = {
  brand: {
    name: "SOLVÉA",
    tagline: "Protect Your Skin. Every Day.",
    concept: "Clinical Skincare × Modern Beauty × Sunlight × Clean Science",
    phone: "+1 (800) 765-8320",
    email: "concierge@solvea-skincare.com",
    address: "SOLVÉA Dermatological Labs, 450 Solar Way, San Diego, CA 92101"
  },

  products: [
    {
      id: "solvea-hydro-shield-spf50",
      name: "Hydro-Shield Invisible Fluid SPF 50+",
      subTitle: "Ultra-Lightweight Daily Broad-Spectrum Fluid",
      category: "face",
      spf: 50,
      spfLevel: "50+",
      pa: "PA++++",
      type: "hybrid", // mineral, chemical, hybrid
      skinType: ["all", "oily", "combination", "sensitive", "acne-prone"],
      finish: "Invisible Matte with Hydrating Glow",
      waterResistant: "80 min",
      fragranceFree: true,
      reefSafe: true,
      price: 34.00,
      subscriptionPrice: 28.90, // 15% off
      rating: 4.9,
      reviewCount: 428,
      size: "50 ml / 1.7 fl. oz.",
      badge: "Best Seller • Dermatologist #1",
      image: "imaghe/pexels-mearlywan-307951439-16378484.jpg",
      gallery: [
        "imaghe/pexels-mearlywan-307951439-16378484.jpg",
        "imaghe/pexels-mearlywan-307951439-16378485.jpg",
        "imaghe/pexels-karola-g-5202459.jpg",
        "imaghe/suncademy-suncare-WKCXM67lIC0-unsplash.jpg"
      ],
      description: "Our award-winning clinical fluid engineered with advanced Tri-Filter Matrix technology. Completely invisible on all Fitzpatrick skin types with zero white cast, zero eye stinging, and 24-hour hydration lock.",
      keyBenefits: [
        "Broad Spectrum UVA/UVB + High Energy Visible (HEV) Blue Light Shield",
        "Infused with 4D Hyaluronic Acid & 3% Niacinamide to restore the lipid barrier",
        "Non-comedogenic, oil-free formula designed for daily makeup wear",
        "Dermatologist tested on ultra-reactive and post-procedure skin"
      ],
      clinicalResults: [
        { stat: "99.2%", label: "UVB ray absorption efficiency" },
        { stat: "100%", label: "Zero white cast reported across all skin tones" },
        { stat: "+74%", label: "Immediate skin barrier hydration increase" }
      ],
      ingredients: [
        { name: "Tri-Filter UV Complex", role: "Photostable broad-spectrum solar defense (UVA1, UVA2, UVB)" },
        { name: "4D Multi-Molecular Hyaluronic Acid", role: "Deep dermal water retention & plumping" },
        { name: "3% Niacinamide (Vitamin B3)", role: "Controls sebum, fades sun spots, calms redness" },
        { name: "Ectoin & Vitamin E", role: "Cellular DNA antioxidant shield against environmental smog" },
        { name: "Centella Asiatica (Cica)", role: "Instant soothing of UV-induced micro-inflammation" }
      ],
      howToUse: "Shake well before dispensing. Apply 2 full finger-lengths evenly across clean face and neck 15 minutes before sun exposure. Reapply every 2 hours or after 80 minutes of swimming/sweating.",
      texture: "Ultra-fluid featherweight emulsion that melts upon contact."
    },
    {
      id: "solvea-mineral-pure-spf50",
      name: "Mineral Pure Barrier Defense SPF 50",
      subTitle: "100% Non-Nano Zinc Oxide Calming Physical Shield",
      category: "face",
      spf: 50,
      spfLevel: "50",
      pa: "PA++++",
      type: "mineral",
      skinType: ["sensitive", "dry", "eczema-prone", "post-procedure"],
      finish: "Dewy Satin, Neutral Tone",
      waterResistant: "40 min",
      fragranceFree: true,
      reefSafe: true,
      price: 38.00,
      subscriptionPrice: 32.30,
      rating: 4.8,
      reviewCount: 312,
      size: "60 ml / 2.0 fl. oz.",
      badge: "National Eczema Seal",
      image: "imaghe/biosparsha-sunscreen-9968928_1920.jpg",
      gallery: [
        "imaghe/biosparsha-sunscreen-9968928_1920.jpg",
        "imaghe/adorebeautynz-cream-4713579_1920.jpg",
        "imaghe/pexels-karola-g-5202453.jpg"
      ],
      description: "A clinically formulated 100% mineral sunscreen powered by 18.5% micronized non-nano Zinc Oxide. Specifically crafted for the most hypersensitive, rosacea-prone, and sensitized skin barriers.",
      keyBenefits: [
        "100% Physical Mineral Filter — reflects UV rays without chemical heat reaction",
        "Infused with Colloidal Oatmeal & Ceramide NP to repair damaged moisture barrier",
        "Eco-Cert verified Reef-Safe formula with zero chemical dispersants",
        "Safe for pregnant mothers, nursing women, and post-laser skin"
      ],
      clinicalResults: [
        { stat: "98.4%", label: "Physical UV reflection rating" },
        { stat: "96%", label: "Noticed immediate reduction in skin redness" },
        { stat: "0%", label: "Pore-clogging comedogenic potential" }
      ],
      ingredients: [
        { name: "Non-Nano Zinc Oxide (18.5%)", role: "Safe physical barrier reflecting UVA/UVB photons" },
        { name: "Ceramide NP Complex", role: "Replenishes skin barrier lipids" },
        { name: "Colloidal Oat Extract", role: "Relieves itching and sun-induced heat" },
        { name: "Bisabolol", role: "Botanical chamomile derivative for calm skin" }
      ],
      howToUse: "Warm a nickel-sized amount between fingertips and gently press into skin until evenly blended. Reapply every 2 hours.",
      texture: "Silky whipped mineral cream with sheer blending."
    },
    {
      id: "solvea-solar-body-mist-spf50",
      name: "Solar Aerosol-Free Dry Mist SPF 50+",
      subTitle: "Continuous 360° Non-Greasy Body Shield",
      category: "body",
      spf: 50,
      spfLevel: "50+",
      pa: "PA++++",
      type: "chemical",
      skinType: ["all", "athletes", "dry", "normal"],
      finish: "Invisible Dry-Touch Finish",
      waterResistant: "80 min",
      fragranceFree: true,
      reefSafe: true,
      price: 32.00,
      subscriptionPrice: 27.20,
      rating: 4.9,
      reviewCount: 254,
      size: "180 ml / 6.0 fl. oz.",
      badge: "Sport & Water Proof",
      image: "imaghe/deeznutz1-sunblock-8184610_1920.png",
      gallery: [
        "imaghe/deeznutz1-sunblock-8184610_1920.png",
        "imaghe/pexels-mearlywan-307951439-16378487.jpg",
        "imaghe/sidral-mundet-lW6dSRZCXFM-unsplash.jpg"
      ],
      description: "An innovative compressed-air micro-spray (zero chemical propellants) that delivers an ultra-fine, even veil of high-level SPF 50+ over arms, legs, back, and shoulders in seconds.",
      keyBenefits: [
        "Works from any angle (360° spray mechanism)",
        "Dries down instantly with zero stickiness or sand-cling",
        "Sweat-activated polymer stays locked during marathon training & water sports",
        "Contains organic Aloe Vera and Green Tea extract for cooling antioxidant boost"
      ],
      clinicalResults: [
        { stat: "80 min", label: "Certified extreme water & sweat resistance" },
        { stat: "99%", label: "Users reported zero greasy residue on car seats/clothes" },
        { stat: "360°", label: "Continuous even spray coverage at any angle" }
      ],
      ingredients: [
        { name: "Photostable UV Polymers", role: "Hydrophobic water-repellent sun barrier" },
        { name: "Organic Cold-Pressed Aloe", role: "Instantly cools overheated skin" },
        { name: "Green Tea Polyphenols (EGCG)", role: "Neutralizes solar free radicals" }
      ],
      howToUse: "Hold bottle 4-6 inches away and spray generously across exposed body areas. Rub in lightly. Do not spray directly into face; spray into hands first.",
      texture: "Cooling aerosol-free micro-mist with weightless dry-down."
    },
    {
      id: "solvea-peptide-glow-spf30",
      name: "Peptide Glow Daily Moisturizer SPF 30",
      subTitle: "Anti-Aging Sun Defense + Copper Tripeptide-1",
      category: "face",
      spf: 30,
      spfLevel: "30",
      pa: "PA+++",
      type: "hybrid",
      skinType: ["dry", "mature", "normal", "combination"],
      finish: "Luminous Glass-Skin Glow",
      waterResistant: "40 min",
      fragranceFree: true,
      reefSafe: true,
      price: 42.00,
      subscriptionPrice: 35.70,
      rating: 4.7,
      reviewCount: 189,
      size: "50 ml / 1.7 fl. oz.",
      badge: "Anti-Aging Clinical Formula",
      image: "imaghe/andrey-camara-tTWlWxcPeM4-unsplash.jpg",
      gallery: [
        "imaghe/andrey-camara-tTWlWxcPeM4-unsplash.jpg",
        "imaghe/arthur-pereira-9DAqQ3s9Wd0-unsplash.jpg",
        "imaghe/pexels-karola-g-5202459.jpg"
      ],
      description: "A dual-action anti-photoaging daily treatment combining broad-spectrum SPF 30 with cellular rejuvenating Copper Peptides, Squalane, and Ferulic Acid to visibly firm and brighten.",
      keyBenefits: [
        "Prevents 97% of daily UV radiation that causes 80% of facial wrinkles",
        "Stimulates collagen synthesis with bioactive multi-peptides",
        "Gives an instant luminous, lit-from-within healthy glow without makeup",
        "Non-comedogenic 100% plant squalane locks in 48-hour moisture"
      ],
      clinicalResults: [
        { stat: "-38%", label: "Visible reduction in fine lines after 6 weeks" },
        { stat: "+89%", label: "Skin elasticity and bounce improvement" },
        { stat: "97.1%", label: "UVA/UVB daily photon block" }
      ],
      ingredients: [
        { name: "Copper Tripeptide-1", role: "Cellular repair and collagen stimulation" },
        { name: "Pure Plant Squalane", role: "Biomimetic hydration sealing" },
        { name: "Ferulic Acid & Resveratrol", role: "Potent anti-glycation antioxidants" }
      ],
      howToUse: "Dispense 2 pumps onto face, neck, and décolleté as your final morning skincare step. Ideal as a glowing primer under makeup.",
      texture: "Rich yet breathable silky emulsion."
    },
    {
      id: "solvea-clarifying-matte-spf50",
      name: "Clarifying Matte Zinc Gel SPF 50+",
      subTitle: "Oil-Control Salicylic & Zinc PCA Sunscreen",
      category: "face",
      spf: 50,
      spfLevel: "50+",
      pa: "PA++++",
      type: "mineral",
      skinType: ["oily", "acne-prone", "congested", "sensitive"],
      finish: "12-Hour Oil-Free Matte",
      waterResistant: "80 min",
      fragranceFree: true,
      reefSafe: true,
      price: 36.00,
      subscriptionPrice: 30.60,
      rating: 4.9,
      reviewCount: 512,
      badge: "Breakout-Safe Guarantee",
      size: "50 ml / 1.7 fl. oz.",
      image: "imaghe/arthur-pereira-0oB1h0MA_ZA-unsplash.jpg",
      gallery: [
        "imaghe/arthur-pereira-0oB1h0MA_ZA-unsplash.jpg",
        "imaghe/agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg",
        "imaghe/pexels-mearlywan-307951439-16378490.jpg"
      ],
      description: "Engineered specifically for acne-prone skin that hates traditional sunscreens. Combines non-nano mineral zinc with 0.5% encapsulated Salicylic Acid and Zinc PCA to regulate shine all day.",
      keyBenefits: [
        "Controls excess sebum for 12 hours with volcanic silica spheres",
        "Prevents post-inflammatory hyperpigmentation (dark acne spots) from UV darkening",
        "Zero pore-clogging waxes, zero silicones, 100% breathable gel-cream",
        "Dermatologically certified non-acnegenic"
      ],
      clinicalResults: [
        { stat: "12 Hrs", label: "Continuous shine-free sebum control" },
        { stat: "94%", label: "Users reported zero new breakouts during 30-day trial" },
        { stat: "99.1%", label: "High-energy UV defense" }
      ],
      ingredients: [
        { name: "Non-Nano Zinc Oxide", role: "Calming anti-microbial physical UV filter" },
        { name: "Zinc PCA & 0.5% BHA", role: "Unclogs pores and minimizes excess sebum" },
        { name: "Silica Microspheres", role: "Absorbs oil like a microscopic sponge" }
      ],
      howToUse: "Apply 2 finger lengths across face focusing on T-zone. Dries in 60 seconds to a soft velvet matte.",
      texture: "Cooling water-gel that absorbs instantly."
    },
    {
      id: "solvea-kids-pure-barrier-spf50",
      name: "Pediatric Gentle Barrier Sunscreen SPF 50+",
      subTitle: "Pediatrician Approved Hypoallergenic Infant & Kids SPF",
      category: "body",
      spf: 50,
      spfLevel: "50+",
      pa: "PA++++",
      type: "mineral",
      skinType: ["sensitive", "all", "kids", "eczema-prone"],
      finish: "Gentle Soft Velvet",
      waterResistant: "80 min",
      fragranceFree: true,
      reefSafe: true,
      price: 29.00,
      subscriptionPrice: 24.65,
      rating: 5.0,
      reviewCount: 388,
      badge: "Pediatrician Tested (6M+)",
      size: "150 ml / 5.1 fl. oz.",
      image: "imaghe/deeznutz1-sunblock-8184613_1920.png",
      gallery: [
        "imaghe/deeznutz1-sunblock-8184613_1920.png",
        "imaghe/lal-mahammad--FReHISn5vc-unsplash.jpg",
        "imaghe/chezbeate-sunscreen-1461335_1920.jpg"
      ],
      description: "Tested under stringent pediatric supervision. Ultra-pure 100% zinc formula without fragrances, parabens, phthalates, or stinging agents. Tear-free and gentle enough for babies 6 months and older.",
      keyBenefits: [
        "Tear-free, sting-free ocular safety testing",
        "Formulated with nourishing Shea Butter & Calendula Flower",
        "80-minute water resistance for active poolside & beach play",
        "100% Biodegradable & Reef-Safe verified"
      ],
      clinicalResults: [
        { stat: "100%", label: "Tear-free clinical ophthalmology pass" },
        { stat: "0%", label: "Allergenic sensitization rate" },
        { stat: "80 min", label: "Water play durability" }
      ],
      ingredients: [
        { name: "Ultra-Pure Zinc Oxide", role: "Gentle physical sunscreen shielding" },
        { name: "Organic Calendula & Chamomile", role: "Nourishes and calms sensitive infant skin" },
        { name: "Fair-Trade Shea Butter", role: "Protects against wind and sun dryness" }
      ],
      howToUse: "Apply generously to all exposed skin of child 15 minutes before outdoor activities. Reapply after 80 minutes of water play.",
      texture: "Smooth, easy-glide lotion that leaves a protective barrier."
    },
    {
      id: "solvea-after-sun-rescue-cica",
      name: "Post-Sun Thermal Recovery Cica-Serum",
      subTitle: "Cellular DNA Repair & Immediate Cooling Complex",
      category: "face",
      spf: 0,
      spfLevel: "after-sun",
      pa: "N/A",
      type: "recovery",
      skinType: ["all", "sunburnt", "sensitive", "dehydrated"],
      finish: "Refreshing Dewy Barrier",
      waterResistant: "N/A",
      fragranceFree: true,
      reefSafe: true,
      price: 36.00,
      subscriptionPrice: 30.60,
      rating: 4.9,
      reviewCount: 215,
      badge: "Clinical Post-Sun Rescue",
      size: "75 ml / 2.5 fl. oz.",
      image: "imaghe/batch-by-wisconsin-hemp-scientific-XanILp6v_Eg-unsplash.jpg",
      gallery: [
        "imaghe/batch-by-wisconsin-hemp-scientific-XanILp6v_Eg-unsplash.jpg",
        "imaghe/onela-ymeri-3Uj7ttuo5kk-unsplash.jpg",
        "imaghe/adorebeautynz-cream-4713579_1920.jpg"
      ],
      description: "Clinically formulated to reverse erythema (sunburn redness) and repair UV-damaged cellular DNA. Drops skin surface temperature by 4.2°F within 3 minutes of application.",
      keyBenefits: [
        "Drops skin surface temperature immediately to stop thermal damage",
        "Centella Asiatica + Panthenol 5% accelerates barrier recovery by 3x",
        "Prevents skin peeling and preserves even melanin tone",
        "Replaces lost moisture after prolonged sun, sea salt, or chlorine exposure"
      ],
      clinicalResults: [
        { stat: "-4.2°F", label: "Skin surface temperature reduction in 3 mins" },
        { stat: "3X", label: "Faster barrier lipid restoration" },
        { stat: "98%", label: "Users reported zero peeling after sunburn" }
      ],
      ingredients: [
        { name: "Madecassoside & Asiaticoside (Cica)", role: "Accelerates cellular healing" },
        { name: "5% D-Panthenol (Pro-Vitamin B5)", role: "Intense hydration and redness relief" },
        { name: "Thermal Glacier Spring Water", role: "Mineral-rich calming base" }
      ],
      howToUse: "Apply generously to sun-exposed, warm, or reddened skin as often as needed. Keep in refrigerator for an enhanced cooling effect.",
      texture: "Crystalline hydrogel elixir."
    },
    {
      id: "solvea-tinted-mineral-glow-spf50",
      name: "Sol-Chroma Tinted Mineral Shield SPF 50+",
      subTitle: "Universal Adapt-Tone Physical Defense & HEV Blue Light",
      category: "face",
      spf: 50,
      spfLevel: "50+",
      pa: "PA++++",
      type: "mineral",
      skinType: ["all", "melasma-prone", "uneven-tone", "sensitive"],
      finish: "Semi-Matte Radiant Skin Tint",
      waterResistant: "40 min",
      fragranceFree: true,
      reefSafe: true,
      price: 40.00,
      subscriptionPrice: 34.00,
      rating: 4.8,
      reviewCount: 340,
      badge: "Melasma & Pigment Shield",
      size: "50 ml / 1.7 fl. oz.",
      image: "imaghe/servetphotograph-cosmetics-5475900_1920.jpg",
      gallery: [
        "imaghe/servetphotograph-cosmetics-5475900_1920.jpg",
        "imaghe/chezbeate-sunblock-1461397_1920.jpg",
        "imaghe/agenlaku-indonesia-FoUETBpb6mY-unsplash.jpg"
      ],
      description: "Powered by encapsulated iron oxides and 100% mineral zinc to block not only UVA/UVB but also 99% of Visible Blue Light from sun and screens that triggers stubborn melasma.",
      keyBenefits: [
        "Iron Oxides block High Energy Visible (HEV) blue light proven to worsen hyperpigmentation",
        "Smart adapt-color pigments blend seamlessly without chalky cast",
        "Substitutes heavy foundation with breathable skin tint coverage",
        "Contains Tranexamic Acid 2% to actively lighten stubborn dark patches"
      ],
      clinicalResults: [
        { stat: "99.4%", label: "Blue Light & UVA/UVB photon blocking" },
        { stat: "-42%", label: "Reduction in melasma patch darkness over 8 weeks" },
        { stat: "98%", label: "Color-matching satisfaction across undertones" }
      ],
      ingredients: [
        { name: "Iron Oxide Pigments", role: "Crucial HEV Blue Light photon filter" },
        { name: "2% Tranexamic Acid", role: "Inhibits melanin synthesis pathways" },
        { name: "Non-Nano Zinc 16%", role: "Broad-spectrum physical barrier" }
      ],
      howToUse: "Dispense 2-3 drops into palm and blend onto face like a lightweight foundation with fingers or sponge.",
      texture: "Silky fluid skin tint with light buildable coverage."
    }
  ],

  uvLevels: [
    {
      range: "0 - 2",
      category: "Low",
      color: "#52B788",
      textColor: "#fff",
      bgClass: "uv-low",
      riskText: "Minimal UV hazard. You can safely stay outdoors without strict gear, but daily baseline SPF is still recommended.",
      spfRecommendation: "SPF 30 Daily Fluid",
      reapplyInterval: "Every 4 hours (or morning routine)",
      protocol: [
        "Wear SOLVÉA SPF 30 Daily Moisturizer for photoaging prevention",
        "Sunglasses if direct bright sunlight",
        "Safe for all skin types for short periods"
      ]
    },
    {
      range: "3 - 5",
      category: "Moderate",
      color: "#F4A261",
      textColor: "#1E1E1B",
      bgClass: "uv-moderate",
      riskText: "Moderate risk of harm from unprotected sun exposure. Sunburn possible within 30-45 minutes for fair skin.",
      spfRecommendation: "SPF 50+ Broad Spectrum",
      reapplyInterval: "Every 2 hours outdoors",
      protocol: [
        "Apply 2 finger lengths of SOLVÉA Invisible Fluid SPF 50+",
        "Seek shade during peak noon hours (11 AM - 3 PM)",
        "Wear UV400 sunglasses and a brimmed hat"
      ]
    },
    {
      range: "6 - 7",
      category: "High",
      color: "#E76F51",
      textColor: "#fff",
      bgClass: "uv-high",
      riskText: "High risk of skin and ocular damage. Fast skin reddening in as little as 20 minutes for Fitzpatrick I-III.",
      spfRecommendation: "SPF 50+ PA++++ Hydro-Shield",
      reapplyInterval: "Every 90 - 120 minutes strictly",
      protocol: [
        "Mandatory SPF 50+ application 15 minutes before stepping out",
        "Reapply every 80 minutes if swimming, sweating, or exercising",
        "Wear UV-protective clothing and stay in shade around midday"
      ]
    },
    {
      range: "8 - 10",
      category: "Very High",
      color: "#D62828",
      textColor: "#fff",
      bgClass: "uv-very-high",
      riskText: "Very high danger. Unprotected skin will burn rapidly (10-15 minutes). Intense cellular DNA damage occurs.",
      spfRecommendation: "SPF 50+ High Defense + Physical Shield",
      reapplyInterval: "Every 80 minutes",
      protocol: [
        "Generous application of SOLVÉA Mineral or Hydro-Shield SPF 50+",
        "Reapply mist continuously for exposed body parts",
        "Avoid direct sun exposure between 10:00 AM and 4:00 PM",
        "Ensure children and infants are fully shaded"
      ]
    },
    {
      range: "11+",
      category: "Extreme",
      color: "#6A040F",
      textColor: "#fff",
      bgClass: "uv-extreme",
      riskText: "Extreme risk! Unprotected skin burns in under 5 minutes. High altitude, equatorial, and water reflection heighten danger.",
      spfRecommendation: "SPF 50+ Heavy-Duty Mineral / Water-Resistant",
      reapplyInterval: "Every 60 - 80 minutes",
      protocol: [
        "Full body barrier: SPF 50+ lotion + body spray + lip balm with SPF",
        "Strictly seek shade; wear UV protective clothing (UPF 50+)",
        "Hydrate and apply Post-Sun Rescue Cica-Serum after coming indoors"
      ]
    }
  ],

  quizQuestions: [
    {
      id: 1,
      title: "What is your primary skin type?",
      description: "This helps us match the optimal texture and sebum-regulating ingredients.",
      options: [
        { label: "Oily / Acne-Prone", sub: "Prone to shine, clogged pores, breakout flare-ups", value: "oily", icon: "💧" },
        { label: "Dry / Dehydrated", sub: "Flaky, tight sensation, needs deep nourishment", value: "dry", icon: "✨" },
        { label: "Sensitive / Reactive", sub: "Redness, stinging, rosacea or eczema tendency", value: "sensitive", icon: "🌿" },
        { label: "Combination / Normal", sub: "Oily T-zone, normal cheeks, balanced", value: "combination", icon: "⚖️" }
      ]
    },
    {
      id: 2,
      title: "What finish do you prefer on your skin?",
      description: "How would you like your sunscreen to feel throughout the day?",
      options: [
        { label: "Invisible Matte / Oil-Free", sub: "Zero shine, velvet dry-touch, undetectable", value: "matte", icon: "🛡️" },
        { label: "Hydrating Dewy Glow", sub: "Fresh radiant glass-skin finish, moisturizing", value: "glow", icon: "☀️" },
        { label: "Satin Natural Tint", sub: "Evens out skin tone, replaces light makeup", value: "tint", icon: "🎨" },
        { label: "Weightless Water-Gel", sub: "Absorbs instantly with refreshing hydration", value: "fluid", icon: "🌊" }
      ]
    },
    {
      id: 3,
      title: "What is your typical daily sun exposure?",
      description: "Determines whether SPF 30 or maximum SPF 50+ PA++++ is essential.",
      options: [
        { label: "Urban & Office", sub: "Commuting, window sunlight, screen blue light", value: "urban", icon: "🏢" },
        { label: "Outdoor Sports & Active", sub: "Running, cycling, swimming, intense sweat", value: "sports", icon: "🏃" },
        { label: "Beach, Pool & High UV Travel", sub: "Direct high UV radiation, water immersion", value: "beach", icon: "🏖️" },
        { label: "Post-Procedure / Laser Care", sub: "Ultra-vulnerable recovering skin barrier", value: "clinical", icon: "🩺" }
      ]
    },
    {
      id: 4,
      title: "Do your eyes or skin tend to sting with chemical filters?",
      description: "We formulate both pure 100% minerals and eye-safe hybrid polymers.",
      options: [
        { label: "Yes, I need 100% Mineral Zinc", sub: "Zero burning, physical photon reflection", value: "mineral", icon: "🌱" },
        { label: "No, I love invisible modern hybrid filters", sub: "Super lightweight, zero white cast", value: "hybrid", icon: "💎" },
        { label: "I want tinted mineral for melasma & blue light", sub: "Blocks screens + solar UV", value: "tinted", icon: "👁️" }
      ]
    }
  ],

  reviews: [
    {
      author: "Dr. Elena Rostova, MD",
      role: "Board-Certified Dermatologist",
      product: "Hydro-Shield Invisible Fluid SPF 50+",
      rating: 5,
      date: "September 2026",
      text: "SOLVÉA has achieved what dermatologists have begged for: an SPF 50+ that looks like pure water on skin, zero white cast on dark Fitzpatrick skin tones, and zero eye burn. My top clinical recommendation.",
      verified: true
    },
    {
      author: "Marcus Chen",
      role: "Triathlete & Marathoner",
      product: "Solar Aerosol-Free Dry Mist SPF 50+",
      rating: 5,
      date: "August 2026",
      text: "Ran 22 miles in 88-degree heat. Not a single drip into my eyes and zero sunburn on my shoulders. The compressed air mist is brilliant.",
      verified: true
    },
    {
      author: "Sophie Van Der Bilt",
      role: "Melasma & Rosacea Patient",
      product: "Sol-Chroma Tinted Mineral Shield SPF 50+",
      rating: 5,
      date: "September 2026",
      text: "The iron oxides have stopped my summer melasma flare-up completely. It replaces my tinted BB cream and feels like velvet.",
      verified: true
    }
  ]
};

// Expose globally
window.SOLVEA_DATA = SOLVEA_DATA;
