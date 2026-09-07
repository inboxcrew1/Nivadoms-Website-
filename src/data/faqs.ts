export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Overview' | 'Products & Amenities' | 'Pricing & Commercials' | 'Logistics & Installation';
}

export const FAQS: FAQItem[] = [
  {
    id: 'd1-d2-differences',
    category: 'Products & Amenities',
    question: 'What are the dimensions and key differences between NIVA D1 and NIVA D2?',
    answer: 'Both NIVA D1 and NIVA D2 feature a 14 ft nominal dome diameter with an approximate 13.5 ft circular footprint. NIVA D1 is an elevated cabin perched approximately 7.5 ft above finished ground level on three primary elevated supports using the UHM pipe concept with an integrated folding access staircase. NIVA D2 is a grounded cabin engineered for direct integration on prepared plinths, lawns, or timber decks with a panoramic overhead star-gazing glass dome.',
  },
  {
    id: 'materials-construction',
    category: 'Products & Amenities',
    question: 'What materials are used in NIVA dome cabin construction?',
    answer: 'NIVA cabins are built on an iron/steel structural framework (pipe and rod framework for D1, grounded framework for D2) as the primary load-bearing system. The exterior features a premium Bakelite architectural finish, the interior utilizes 12-14 mm wood-colour Bakelite sheet panelling with acoustic insulation, and transparent window/skylight sections use toughened/tempered glass. Final specifications are subject to engineering approval.',
  },
  {
    id: 'public-pricing',
    category: 'Pricing & Commercials',
    question: 'What is the base price of NIVA D1 and NIVA D2?',
    answer: 'NIVA D1 (Elevated Luxury Cabin) has an official public base selling price of ₹6,00,000 per unit, and NIVA D2 (Grounded Luxury Cabin) has an official public base selling price of ₹5,20,000 per unit. Applicable taxes, site-specific civil foundation works, transportation, and special custom finishes are quoted based on destination logistics across India.',
  },
  {
    id: 'site-preparation',
    category: 'Logistics & Installation',
    question: 'What site preparation and foundations are required?',
    answer: 'Because NIVA D1 is elevated on 3 primary support pillars, it requires only 3 concrete footing pedestals, dramatically minimizing soil disruption on sloped contours. NIVA D2 requires a level prepared plinth, concrete slab, or timber deck platform. Both models connect to standard water, electricity, and sewage points.',
  },
  {
    id: 'attached-bathroom',
    category: 'Products & Amenities',
    question: 'Do NIVA cabins include a private attached bathroom?',
    answer: 'Yes. Both NIVA D1 and NIVA D2 come standard with a private attached ensuite bathroom featuring a glass shower enclosure, Western toilet fixture, wash basin with vanity mirror, and instant electric water heater provisions.',
  },
  {
    id: 'delivery-timeline',
    category: 'Logistics & Installation',
    question: 'What is the estimated delivery and setup timeline for Indian resorts?',
    answer: 'Because NIVA cabins are prefabricated off-site, fabrication typically takes 3 to 5 weeks depending on volume. On-site placement and utility hookup can be completed in just 2 to 4 days per unit, allowing hospitality projects to launch months ahead of traditional civil construction.',
  },
  {
    id: 'hospitality-roi',
    category: 'Pricing & Commercials',
    question: 'What is the commercial ROI potential for resort operators?',
    answer: 'With luxury glamping and dome cabin ADRs in India ranging from ₹6,000 to ₹14,000+ per night at 60-70% seasonal occupancy, each NIVA unit (₹5,20,000 to ₹6,00,000 base investment) typically achieves complete capital payback within 12 to 18 operational months.',
  },
  {
    id: 'brand-overview',
    category: 'Overview',
    question: 'What is NIVA Elevated Living?',
    answer: 'NIVA is an Indian luxury modular hospitality architecture brand fabricating distinctive 14 ft nominal elevated and grounded dome cabins for experiential resorts, agro-tourism farm stays, tea plantations, and eco-sanctuaries nationwide.',
  },
];
