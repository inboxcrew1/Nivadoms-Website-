export interface ProductSpec {
  category: string;
  items: { label: string; value: string; note?: string }[];
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProductModel {
  id: string;
  name: string;
  code: string;
  tagline: string;
  positioning: string;
  price: string;
  priceFormatted: string;
  priceDisclaimer: string;
  heroHeadline: string;
  heroCopy: string;
  architectureHeadline: string;
  architectureCopy: string;
  experienceHeadline: string;
  experienceCopy: string;
  keyMetrics: { label: string; value: string; sub: string }[];
  interiorHighlights: ProductFeature[];
  specifications: ProductSpec[];
  gallery: { src: string; caption: string; alt: string }[];
  badge?: string;
}

export const PRODUCTS: Record<string, ProductModel> = {
  d1: {
    id: "d1",
    name: "NIVA D1",
    code: "14 FT NOMINAL CLASS",
    tagline: "ELEVATED LIVING",
    positioning: "ELEVATED LUXURY CABIN",
    price: "₹6,00,000",
    priceFormatted: "₹6,00,000",
    priceDisclaimer: "Applicable taxes, site-specific civil works, transportation and other exclusions may apply as specified in the quotation.",
    heroHeadline: "ELEVATED LUXURY, REDEFINED.",
    heroCopy: "A premium elevated dome cabin designed for distinctive hospitality environments, retreats, resorts and glamping destinations across India.",
    architectureHeadline: "A FORM WITH A PURPOSE.",
    architectureCopy: "NIVA D1 combines an iron/steel pipe and rod structural framework with a premium Bakelite exterior architectural finish and 12-14 mm wood-colour Bakelite sheet interior panelling. Elevated approximately 7.5 ft above finished ground level on three primary elevated supports using the UHM pipe concept, it minimizes the ground footprint while providing a dedicated folding access staircase.",
    experienceHeadline: "WAKE UP SOMEWHERE DIFFERENT.",
    experienceCopy: "A morning elevated above the landscape. A quiet evening beneath changing skies. A private retreat surrounded by nature. NIVA D1 makes the setting part of the stay.",
    badge: "ELEVATED CABIN",
    keyMetrics: [
      { label: "DIAMETER", value: "14 FT NOMINAL", sub: "Approx. 13.5 ft footprint" },
      { label: "ELEVATION", value: "APPROX. 7.5 FT", sub: "3 UHM pipe supports" },
      { label: "STRUCTURE", value: "IRON / STEEL", sub: "Pipe & rod framework" },
      { label: "CLADDING", value: "BAKELITE", sub: "12-14mm wood-colour interior" },
      { label: "BATHROOM", value: "PRIVATE", sub: "Attached ensuite & shower" },
      { label: "CLIMATE", value: "AC & TV", sub: "Hospitality-ready suite" },
    ],
    interiorHighlights: [
      {
        title: "QUEEN-SIZE BED",
        description: "A refined sleeping suite framed by panoramic glass sections and overhead nature outlooks.",
      },
      {
        title: "PRIVATE BATHROOM",
        description: "Attached ensuite bathroom complete with Western toilet, wash basin, shower, and instant hot water provisions.",
      },
      {
        title: "AIR CONDITIONING",
        description: "Quiet inverter split climate control system calibrated for seamless year-round thermal comfort.",
      },
      {
        title: "SMART TV",
        description: "Wall-mounted smart LED entertainment system paired with concealed hospitality wiring.",
      },
      {
        title: "AMBIENT LIGHTING",
        description: "Architectural warm cove lighting and dimmable accent strips creating an inviting nocturnal atmosphere.",
      },
      {
        title: "PREMIUM INTERIORS",
        description: "12-14 mm wood-colour Bakelite sheet interior finish with thermal acoustic insulation and safety locking arrangement.",
      },
    ],
    specifications: [
      {
        category: "DIMENSIONS & SPATIAL LAYOUT",
        items: [
          { label: "Dome Diameter", value: "14 ft nominal dome diameter" },
          { label: "Circular Footprint", value: "Approx. 13.5 ft circular footprint" },
          { label: "Elevated Height", value: "Approx. 7.5 ft above finished ground level" },
          { label: "Guest Capacity", value: "2 Guests (Queen-size hospitality suite)" },
        ],
      },
      {
        category: "STRUCTURAL FRAME & ELEVATED SUPPORTS",
        items: [
          { label: "Structural Frame", value: "Iron/steel pipe and rod structural framework" },
          { label: "Elevated Supports", value: "Three primary elevated supports using the UHM pipe concept" },
          { label: "Elevated Platform", value: "Steel/iron pipe-framed elevated floor/platform concept (subject to engineering approval)" },
          { label: "Access System", value: "Integrated folding / hydraulic access staircase and deck" },
        ],
      },
      {
        category: "MATERIALS & CLADDING",
        items: [
          { label: "Exterior Finish", value: "Premium Bakelite architectural finish" },
          { label: "Interior Finish", value: "12-14 mm wood-colour Bakelite sheet interior finish" },
          { label: "Glazing", value: "Selected transparent sections use toughened / tempered glass" },
          { label: "Insulation & Sealing", value: "Weather-resistant architectural sealing with thermal insulation" },
        ],
      },
      {
        category: "ENSUITE & HOSPITALITY AMENITIES",
        items: [
          { label: "Attached Bathroom", value: "Full private ensuite with glass shower enclosure" },
          { label: "Sanitary Fixtures", value: "Western toilet fixture, vanity wash basin, mirror" },
          { label: "Hot Water", value: "Instant electric water heater provision" },
          { label: "Climate Control", value: "Inverter split AC system" },
          { label: "Media & Power", value: "Smart LED TV, concealed electrical distribution, USB charging points" },
          { label: "Safety Arrangement", value: "Safety locking arrangement on entrance and access deck" },
          { label: "Engineering Note", value: "Final specifications subject to engineering approval." },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/products/d1-hero-resort-walkway.jpg",
        caption: "Three NIVA D1 elevated cabins in Royal Blue & Arctic White along resort walkway framing alpine mountain clouds.",
        alt: "NIVA D1 luxury elevated dome cabin along resort walkway",
      },
      {
        src: "/images/products/d1-twin-river.jpg",
        caption: "Twin NIVA D1 elevated white & charcoal cabins perched on 3 support pillars on green lawn by river valley.",
        alt: "Twin NIVA D1 elevated luxury dome cabins on lawn by river valley",
      },
      {
        src: "/images/products/d1-white-deck.jpg",
        caption: "NIVA D1 elevated white & charcoal cabin perched on 3 steel pillars with foldable access staircase.",
        alt: "NIVA D1 luxury elevated dome cabin with folding staircase",
      },
      {
        src: "/images/products/d1-gold-snow.jpg",
        caption: "NIVA D1 elevated golden yellow cabin on timber deck framing snow-capped alpine mountain peaks.",
        alt: "NIVA D1 elevated dome cabin with snowy mountain view",
      },
      {
        src: "/images/products/d1-hero-night.jpg",
        caption: "NIVA D1 elevated cabin in crimson and charcoal finish by alpine lake at twilight.",
        alt: "NIVA D1 elevated dome cabin lakeside evening view",
      },
      {
        src: "/images/products/d1-lake-mountain.jpg",
        caption: "Architectural silhouette against majestic snowy mountain backdrop.",
        alt: "NIVA D1 elevated dome cabin alpine daytime view",
      },
      {
        src: "/images/products/d1-mountain-ridge.jpg",
        caption: "Perched on mountain cliff overlook surrounded by pristine pine forest canopy.",
        alt: "NIVA D1 mountain ridge elevated dome cabin",
      },
      {
        src: "/images/products/d1-triple-units.jpg",
        caption: "Colorway expressions: Royal Blue, Matte Charcoal Black, and Arctic White.",
        alt: "NIVA D1 elevated dome cabin color variants",
      },
      {
        src: "/images/products/niva-interior-suite.jpg",
        caption: "Refined hospitality suite interior with star-gazing glass dome and ambient lighting.",
        alt: "NIVA D1 luxury cabin interior suite",
      },
    ],
  },

  d2: {
    id: "d2",
    name: "NIVA D2",
    code: "14 FT NOMINAL CLASS",
    tagline: "ELEVATED LIVING",
    positioning: "GROUNDED LUXURY CABIN",
    price: "₹5,20,000",
    priceFormatted: "₹5,20,000",
    priceDisclaimer: "Applicable taxes, site-specific civil works, transportation and other exclusions may apply as specified in the quotation.",
    heroHeadline: "LUXURY, GROUNDED IN NATURE.",
    heroCopy: "A premium NIVA dome cabin configuration designed for hospitality, resort and destination-stay applications.",
    architectureHeadline: "ARCHITECTURE THAT BELONGS.",
    architectureCopy: "Designed to integrate naturally within gardens, forests, tea estates, resorts and destination landscapes, NIVA D2 features a grounded structural framework with a premium Bakelite exterior architectural finish and 12-14 mm wood-colour Bakelite sheet interior panelling. Its ground-level profile offers effortless step-in accessibility and a panoramic overhead toughened glass dome framing the surrounding nature.",
    experienceHeadline: "THE LANDSCAPE BECOMES PART OF THE ROOM.",
    experienceCopy: "NIVA D2 is designed for destinations where the environment itself is part of the experience. From morning mist rising over tea hills to starry night skies visible from bed, every detail connects guests with the terrain.",
    badge: "GROUNDED CABIN",
    keyMetrics: [
      { label: "DIAMETER", value: "14 FT NOMINAL", sub: "Approx. 13.5 ft footprint" },
      { label: "INTEGRATION", value: "GROUND-LEVEL", sub: "Direct plinth / deck terrace" },
      { label: "GLAZING", value: "TOUGHENED GLASS", sub: "Panoramic star-gazing canopy" },
      { label: "CLADDING", value: "BAKELITE", sub: "12-14mm wood-colour interior" },
      { label: "BATHROOM", value: "PRIVATE", sub: "Attached ensuite & shower" },
      { label: "CLIMATE", value: "AC & TV", sub: "Hospitality-ready suite" },
    ],
    interiorHighlights: [
      {
        title: "QUEEN-SIZE BED",
        description: "A refined sleeping suite framed by expansive glass facades and an overhead star-gazing skylight dome.",
      },
      {
        title: "PRIVATE BATHROOM",
        description: "Attached ensuite bathroom complete with Western toilet, wash basin, shower, and hot water provisions.",
      },
      {
        title: "AIR CONDITIONING",
        description: "Quiet inverter split climate control system calibrated for seamless year-round thermal comfort.",
      },
      {
        title: "SMART TV",
        description: "Wall-mounted smart LED entertainment system paired with concealed hospitality wiring.",
      },
      {
        title: "AMBIENT LIGHTING",
        description: "Architectural warm cove lighting and dimmable accent strips creating an inviting nocturnal atmosphere.",
      },
      {
        title: "PREMIUM INTERIORS",
        description: "12-14 mm wood-colour Bakelite sheet interior finish with thermal acoustic insulation and safety locking arrangement.",
      },
    ],
    specifications: [
      {
        category: "DIMENSIONS & SPATIAL LAYOUT",
        items: [
          { label: "Dome Diameter", value: "14 ft nominal dome diameter" },
          { label: "Circular Footprint", value: "Approx. 13.5 ft circular footprint" },
          { label: "Access Profile", value: "Ground-level step-in terrace entrance" },
          { label: "Guest Capacity", value: "2 Guests (Queen-size hospitality suite)" },
        ],
      },
      {
        category: "STRUCTURAL FRAME & FOUNDATION",
        items: [
          { label: "Structural Frame", value: "Grounded structural framework integrated on prepared plinth or landscape foundation" },
          { label: "Foundation Standard", value: "Site-specific plinth, timber deck, or slab integration" },
          { label: "Engineering Standard", value: "Structural specifications to be finalized by the project engineer." },
        ],
      },
      {
        category: "MATERIALS & CLADDING",
        items: [
          { label: "Exterior Finish", value: "Premium Bakelite architectural finish" },
          { label: "Interior Finish", value: "12-14 mm wood-colour Bakelite sheet interior finish" },
          { label: "Glazing", value: "Selected transparent sections use toughened / tempered glass" },
          { label: "Overhead Dome", value: "Panoramic toughened glass skylight module for star-gazing" },
        ],
      },
      {
        category: "ENSUITE & HOSPITALITY AMENITIES",
        items: [
          { label: "Attached Bathroom", value: "Full private ensuite with shower enclosure" },
          { label: "Sanitary Fixtures", value: "Western toilet fixture, vanity wash basin, mirror" },
          { label: "Hot Water", value: "Instant electric water heater provision" },
          { label: "Climate Control", value: "Inverter split AC system" },
          { label: "Media & Power", value: "Smart LED TV, concealed electrical distribution, USB charging points" },
          { label: "Safety Arrangement", value: "Safety locking arrangement on entrance" },
          { label: "Engineering Note", value: "Final specifications subject to engineering approval." },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/products/d2-brand-sign.jpg",
        caption: "NIVA D2 grounded luxury cabin on manicured lawn with official brand mark signage.",
        alt: "NIVA D2 grounded luxury dome cabin with brand signage",
      },
      {
        src: "/images/products/d2-grounded-lawn.jpg",
        caption: "NIVA D2 grounded white dome cabin set on plinth deck with stone pathway and pine forest backdrop.",
        alt: "NIVA D2 grounded luxury dome cabin on lawn with stone path",
      },
      {
        src: "/images/products/d2-twin-grounded-river.jpg",
        caption: "NIVA D2 twin grounded luxury domes connected on circular plinth deck overlooking mountain river valley.",
        alt: "NIVA D2 twin grounded luxury dome cabins by river valley",
      },
      {
        src: "/images/products/d2-river-sunset.jpg",
        caption: "NIVA D2 grounded cabin on circular plinth deck overlooking mountain river valley at sunset.",
        alt: "NIVA D2 grounded luxury dome cabin river valley sunset view",
      },
      {
        src: "/images/products/d2-mountain-plinth.jpg",
        caption: "NIVA D2 grounded white dome cabin nestled on mountain lawn plinth with stone path.",
        alt: "NIVA D2 grounded luxury dome cabin on mountain lawn plinth",
      },
      {
        src: "/images/products/niva-interior-suite.jpg",
        caption: "Refined hospitality suite interior with star-gazing glass dome and ambient lighting.",
        alt: "NIVA D2 luxury cabin interior suite",
      },
    ],
  },
};
