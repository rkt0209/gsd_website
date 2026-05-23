// ---------------------------------------------------------------------------
// Central place for all site content. Everything here is placeholder/dummy
// data — edit the values below to update the whole website.
// ---------------------------------------------------------------------------

export const company = {
  name: 'GSD TransXpress',
  legalName: 'GSD TransXpress Pvt. Ltd.',
  shortName: 'GSD',
  tagline: 'Connecting Business — Moving India Forward',
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
    role: 'Director',
    phone: '+91 92203 14370',
    phoneHref: 'tel:+919220314370',
    bio: 'Drives operations and the nationwide fleet network, ensuring every consignment moves safely and on schedule.',
  },
  {
    name: 'Vipin Pal',
    role: 'Director',
    phone: '+91 96075 07777',
    phoneHref: 'tel:+919607507777',
    bio: 'Leads client partnerships and growth, building long-term relationships across India’s industrial corridors.',
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
  { value: 60, suffix: '+', label: 'Container vehicles' },
  { value: 28, suffix: '', label: 'States covered' },
  { value: 18, suffix: '+', label: 'Cities served' },
  { value: 24, suffix: '/7', label: 'Support available' },
]

export const services = [
  {
    title: '3PL & Logistics Solutions',
    description:
      'End-to-end third-party logistics (3PL) — transport, warehousing and distribution managed for you, so you can focus on your business.',
    icon: 'box',
  },
  {
    title: 'Full Truckload (FTL)',
    description:
      'Dedicated 32ft and 34ft containers for your cargo — no sharing, no stops, direct point-to-point delivery across India.',
    icon: 'truck',
  },
  {
    title: 'Pan-India Delivery',
    description:
      'A nationwide network reaching metros, tier-2 cities and remote industrial belts in all 28 states and 8 union territories.',
    icon: 'map',
  },
  {
    title: 'Industrial & Project Cargo',
    description:
      'Reliable movement of factory goods, raw materials, machinery and bulk consignments with flexible single-axle capacity.',
    icon: 'box',
  },
  {
    title: 'Real-Time Tracking',
    description:
      'GPS-enabled fleet with live status updates and a dedicated coordinator for every shipment, from pickup to drop.',
    icon: 'pin',
  },
  {
    title: 'Warehousing Support',
    description:
      'Short and long-term storage and cross-docking at key transport hubs to keep your supply chain flowing smoothly.',
    icon: 'warehouse',
  },
  {
    title: 'Insured Transit',
    description:
      'Every consignment is moved by trained drivers under full transit insurance for complete peace of mind.',
    icon: 'shield',
  },
]

export const fleet = [
  {
    name: '32 ft Single-Axle Container',
    capacity: 'Up to 7 Tonnes',
    volume: '~1,400 cu. ft.',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=70',
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
    image:
      'https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=900&q=70',
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
