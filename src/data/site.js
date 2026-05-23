// ---------------------------------------------------------------------------
// Central place for all site content. Everything here is placeholder/dummy
// data — edit the values below to update the whole website.
// ---------------------------------------------------------------------------

export const company = {
  name: 'GSD TransXpress',
  legalName: 'GSD TransXpress Pvt. Ltd.',
  shortName: 'GSD',
  tagline: 'Logistics, Built Different.',
  phone: '+91 92052 32900',
  phoneHref: 'tel:+919205232900',
  whatsapp: '919205232900',
  email: 'gsdtransxpress@gmail.com',
  address:
    'Gali No. 3, NH-48, Near Apollo Tyres Agency, Opp. BPCL Petrol Pump, Bilaspur Chowk, Gurugram, Haryana 122413',
  hours: 'Open 24 / 7 · 365 days a year',
  founded: 2026,
}

// Company leadership (Directors).
export const founders = [
  {
    name: 'Amit Kumar',
    role: 'Director — Planning',
    phone: '+91 92203 14370',
    phoneHref: 'tel:+919220314370',
    points: [
      '20+ years of expertise in supply-chain planning, optimization, warehousing & transportation planning',
      'Executive Programme in Supply Chain & Logistics, IIM Ahmedabad',
      'MBA in Logistics & Supply Chain Management',
    ],
  },
  {
    name: 'Vipin Pal',
    role: 'Director — Operations Management',
    phone: '+91 96075 07777',
    phoneHref: 'tel:+919607507777',
    points: [
      '20+ years of experience in operations management',
      'Leads GSD’s nationwide fleet operations',
      'Hands-on route planning & fleet optimization',
      'Focused on safe, on-time delivery across India',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 100, suffix: '+', label: 'Vehicles in fleet' },
  { value: 100, suffix: '+', label: 'Cities served' },
  { value: 28, suffix: '', label: 'States covered' },
  { value: 24, suffix: '/7', label: 'Support available' },
]

export const services = [
  {
    title: '3PL & End-to-End Logistics',
    description:
      'Complete third-party logistics managed for you — road transport, plus rail, air & EXIM movements when you need them — so you can focus on your business.',
    icon: 'box',
  },
  {
    title: 'Full & Part Truckload (FTL / PTL)',
    description:
      'Dedicated full loads or shared part loads in 32ft and 34ft containers — direct, point-to-point delivery across India.',
    icon: 'truck',
  },
  {
    title: 'Pan-India Distribution',
    description:
      'A nationwide network reaching metros, tier-2 cities and remote industrial belts in all 28 states and 8 union territories.',
    icon: 'map',
  },
  {
    title: 'Industrial & Project Cargo',
    description:
      'Reliable movement of factory goods, raw materials, machinery and bulk consignments at scale.',
    icon: 'warehouse',
  },
  {
    title: 'Real-Time Tracking',
    description:
      'GPS-enabled fleet with live status updates and a dedicated coordinator for every shipment, from pickup to drop.',
    icon: 'pin',
  },
]

export const fleet = [
  {
    name: '32 ft Single-Axle Container',
    capacity: 'Up to 7 Tonnes',
    volume: '~1,400 cu. ft.',
    image: '/truck-angle.jpg',
    points: [
      'Ideal for medium-volume, light-to-medium weight cargo',
      'Closed body protection against rain & dust',
      'Best value for long-haul intercity routes',
    ],
  },
  {
    name: '34 ft Single-Axle Container',
    capacity: 'Up to 9 Tonnes',
    volume: '~1,550 cu. ft.',
    image: '/truck-side.jpg',
    points: [
      'Extra length for high-volume consignments',
      'Smooth single-axle ride for fragile goods',
      'Maximised space for full-truckload shipments',
    ],
  },
]

export const whyUs = [
  {
    title: 'On-Time, Every Time',
    description: 'Disciplined scheduling and route planning so your goods arrive when promised.',
    icon: 'clock',
  },
  {
    title: 'Trained Drivers',
    description: 'Experienced, verified drivers who treat your cargo as their own responsibility.',
    icon: 'badge',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, upfront quotes with no hidden charges or last-minute surprises.',
    icon: 'rupee',
  },
  {
    title: '24/7 Support',
    description: 'A real human on the line, day or night, for every shipment you book with us.',
    icon: 'headset',
  },
]

export const regions = [
  'Delhi NCR', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad',
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Indore',
  'Nagpur', 'Coimbatore', 'Visakhapatnam', 'Guwahati', 'Chandigarh', 'Kochi',
]

// Enquiry-form dropdown choices — edit these lists to change the options.
export const weightOptions = [
  '1 Ton', '2 Ton', '3 Ton', '4 Ton', '5 Ton',
  '6 Ton', '7 Ton', '8 Ton', '9 Ton', '10 Ton',
]

export const vehicleSizeOptions = [
  '14 feet', '17 feet', '20 feet', '22 feet', '24 feet', '32 feet', '34 feet',
]

export const testimonials = [
  {
    quote:
      'GSD has handled our pan-India dispatches for three years. Their 34ft containers and on-time delivery keep our factory running without delays.',
    name: 'Rajesh Mehta',
    role: 'Operations Head, Apex Industries',
  },
  {
    quote:
      'Transparent rates and live tracking gave us total confidence. The best transport partner we have worked with in India.',
    name: 'Priya Nair',
    role: 'Supply Chain Manager, NovaMart',
  },
  {
    quote:
      'From Delhi to Chennai, every consignment arrived safe and on schedule. Highly professional team and well-maintained fleet.',
    name: 'Amit Verma',
    role: 'Director, Verma Exports',
  },
]
