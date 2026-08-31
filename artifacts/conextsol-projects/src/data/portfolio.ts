import nexusLogistics from '@assets/generated_images/nexus-logistics.jpg';
import apexLegal from '@assets/generated_images/apex-legal.jpg';
import urbanNest from '@assets/generated_images/urban-nest.jpg';
import lumiereBoutique from '@assets/generated_images/lumiere-boutique.jpg';
import finvestCapital from '@assets/generated_images/finvest-capital.jpg';
import bistroBooking from '@assets/generated_images/bistro-booking.jpg';

export type Industry =
  | 'Logistics'
  | 'Legal'
  | 'Real Estate'
  | 'E-commerce'
  | 'Finance'
  | 'Hospitality';

export interface PortfolioProject {
  id: string;
  clientType: string;
  industry: Industry;
  services: string[];
  keyMetric: string;
  description: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  techStack?: string[];
  processSteps?: { title: string; description: string }[];
  gallery?: string[];
  testimonial?: { quote: string; author: string; role: string };
  relatedProjectIds?: string[];
}

const projectImages: Record<string, string> = {
  'nexus-logistics': nexusLogistics,
  'nexus-control': nexusLogistics,
  'nexus-route': nexusLogistics,
  'nexus-driver': nexusLogistics,
  'apex-legal': apexLegal,
  'apex-library': apexLegal,
  'apex-team': apexLegal,
  'urban-nest': urbanNest,
  'urban-map': urbanNest,
  'urban-home': urbanNest,
  'urban-agent': urbanNest,
  'lumiere-boutique': lumiereBoutique,
  'lumiere-product': lumiereBoutique,
  'lumiere-collection': lumiereBoutique,
  'finvest-capital': finvestCapital,
  'finvest-dashboard': finvestCapital,
  'finvest-security': finvestCapital,
  'bistro-booking': bistroBooking,
  'bistro-table': bistroBooking,
  'bistro-booking-flow': bistroBooking,
};

const image = (id: string, _width = 1200, _height = 800) =>
  projectImages[id] ?? nexusLogistics;

export const projects: PortfolioProject[] = [
  {
    id: 'nexus-logistics',
    clientType: 'Logistics & Supply Chain',
    industry: 'Logistics',
    services: ['Custom Software', 'UX Design', 'Operations'],
    keyMetric: 'Reduced dispatch time by 45%',
    description: 'A live operations cockpit that keeps freight moving and teams in sync.',
    imageUrl: image('nexus-logistics'),
    challenge:
      'Nexus was coordinating hundreds of daily consignments across calls, spreadsheets, and a legacy desktop tool. Dispatchers had no shared view of what was moving or where delays were forming.',
    solution:
      'We designed a calm, high-signal command centre with live status updates, driver handoffs, exception alerts, and a dispatch flow built around the decisions their team makes every hour.',
    outcomes: [
      'Dispatchers see every active consignment in one view',
      'Average dispatch time fell from 18 minutes to 10',
      'Live updates replaced the daily status-call ritual',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    processSteps: [
      { title: 'Shadow the operation', description: 'Mapped handoffs with dispatchers on the floor.' },
      { title: 'Prototype the critical path', description: 'Tested the dispatch view before a line of code.' },
      { title: 'Ship in the rhythm', description: 'Released a working slice every two weeks.' },
    ],
    gallery: [image('nexus-control', 900, 1100), image('nexus-route', 900, 700), image('nexus-driver', 900, 900)],
    testimonial: {
      quote: 'The new system gives our team a shared language. We spend less time chasing updates and more time moving freight.',
      author: 'Megan Jacobs',
      role: 'Operations Director, Nexus',
    },
    relatedProjectIds: ['finvest-capital', 'urban-nest'],
  },
  {
    id: 'apex-legal',
    clientType: 'Corporate Law Firm',
    industry: 'Legal',
    services: ['Website Design', 'SEO', 'Content System'],
    keyMetric: '+210% organic local traffic',
    description: 'A sharper digital front door for a firm trusted with complex decisions.',
    imageUrl: image('apex-legal'),
    challenge:
      'Apex had a strong referral business but an online presence that made them sound like every other firm. Prospective clients could not quickly tell where the team was exceptional.',
    solution:
      'We turned their expertise into a clear editorial system: direct practice-area pages, useful answers to real client questions, and proof points that made the firm feel both formidable and approachable.',
    outcomes: [
      'Organic local traffic more than tripled in six months',
      'Practice-area enquiries now arrive pre-qualified',
      'The team can publish without waiting on developers',
    ],
    techStack: ['Next.js', 'Tailwind', 'Sanity CMS'],
    processSteps: [
      { title: 'Find the sharp point', description: 'Interviewed partners and their best-fit clients.' },
      { title: 'Make expertise legible', description: 'Built a content architecture around intent.' },
      { title: 'Measure and refine', description: 'Optimised pages against enquiry quality, not clicks.' },
    ],
    gallery: [image('apex-library', 900, 900), image('apex-team', 900, 1100)],
    testimonial: {
      quote: 'Conextsol helped us sound like ourselves, only clearer. The quality of conversations coming through the website has changed completely.',
      author: 'Daniel Mokoena',
      role: 'Managing Partner, Apex Legal',
    },
    relatedProjectIds: ['urban-nest', 'lumiere-boutique'],
  },
  {
    id: 'urban-nest',
    clientType: 'Property Real Estate Agency',
    industry: 'Real Estate',
    services: ['Website Design', 'CRM Integration', 'Lead Generation'],
    keyMetric: 'R45M in property inquiries',
    description: 'A property search experience that turns neighbourhood curiosity into serious conversations.',
    imageUrl: image('urban-nest'),
    challenge:
      'Urban Nest had beautiful listings but a leaky path from search to sales. Agents were manually copying leads into a CRM and losing context along the way.',
    solution:
      'We created a location-first browsing experience and connected every meaningful action to their CRM, so agents could pick up a conversation with the full story intact.',
    outcomes: [
      'R45M worth of property enquiries attributed to the new experience',
      'Lead handoff is automatic, tagged, and visible',
      'Agents respond with listing context already in front of them',
    ],
    techStack: ['React', 'CRM API Integration', 'Mapbox'],
    processSteps: [
      { title: 'Follow the buyer', description: 'Observed how people shortlist homes and areas.' },
      { title: 'Connect the dots', description: 'Joined listings, maps, forms, and CRM signals.' },
      { title: 'Tune for intent', description: 'Improved the journey around high-intent actions.' },
    ],
    gallery: [image('urban-map', 900, 1000), image('urban-home', 900, 700), image('urban-agent', 900, 900)],
    relatedProjectIds: ['apex-legal', 'bistro-booking'],
  },
  {
    id: 'lumiere-boutique',
    clientType: 'Luxury E-commerce Retailer',
    industry: 'E-commerce',
    services: ['E-commerce', 'Conversion Design', 'Performance'],
    keyMetric: '32% increase in checkout rate',
    description: 'A quietly premium storefront that lets the product do the persuading.',
    imageUrl: image('lumiere-boutique'),
    challenge:
      'Lumière’s previous shop looked polished but made buying feel like work. Slow collection pages, unclear delivery information, and a noisy checkout were costing ready-to-buy customers.',
    solution:
      'We rebuilt the experience around product confidence: fast editorial collections, useful detail, transparent fulfilment, and a checkout that removes decisions at exactly the right moment.',
    outcomes: [
      'Checkout completion increased by 32%',
      'Collection pages load noticeably faster on mobile',
      'Customer support tickets about delivery dropped',
    ],
    techStack: ['Headless Shopify', 'React', 'Cloudflare Workers'],
    processSteps: [
      { title: 'Remove hesitation', description: 'Found the questions blocking confident purchases.' },
      { title: 'Design the detail', description: 'Balanced product theatre with useful information.' },
      { title: 'Protect the speed', description: 'Moved key commerce paths to an edge-first stack.' },
    ],
    gallery: [image('lumiere-product', 900, 1100), image('lumiere-collection', 900, 700)],
    testimonial: {
      quote: 'The new store feels like our best retail space. It is beautiful, but every beautiful detail has a job.',
      author: 'Amélie Fourie',
      role: 'Brand Director, Lumière',
    },
    relatedProjectIds: ['apex-legal', 'bistro-booking'],
  },
  {
    id: 'finvest-capital',
    clientType: 'Financial Services',
    industry: 'Finance',
    services: ['Custom Software', 'Platform Design', 'Security'],
    keyMetric: 'Zero downtime across 10k users',
    description: 'A resilient investor platform built for calm decisions under pressure.',
    imageUrl: image('finvest-capital'),
    challenge:
      'Finvest needed to modernise a high-traffic investor portal without interrupting daily trading support or compromising the trust their clients place in every screen.',
    solution:
      'We moved in deliberate layers: a clearer information model, a faster React interface, observable Node services, and a rollout plan that kept the existing experience available until each new path was proven.',
    outcomes: [
      'Zero downtime during the platform transition',
      '10,000 users supported through the new release',
      'Security and service health are now visible, not assumed',
    ],
    techStack: ['React', 'Node.js', 'AWS', 'Encryption'],
    processSteps: [
      { title: 'De-risk first', description: 'Audited the old platform and mapped failure points.' },
      { title: 'Build beside', description: 'Created new flows without taking old ones offline.' },
      { title: 'Prove every release', description: 'Used staged rollouts and clear service signals.' },
    ],
    gallery: [image('finvest-dashboard', 900, 900), image('finvest-security', 900, 1100)],
    relatedProjectIds: ['nexus-logistics', 'lumiere-boutique'],
  },
  {
    id: 'bistro-booking',
    clientType: 'Restaurant Group',
    industry: 'Hospitality',
    services: ['Custom Software', 'Booking UX', 'Integrations'],
    keyMetric: 'Fully automated booking system',
    description: 'A booking engine with the warmth of a good host and none of the admin.',
    imageUrl: image('bistro-booking'),
    challenge:
      'A growing group of restaurants was stitching bookings together across inboxes and disconnected tools. Guests waited for replies while teams spent evenings reconciling tables.',
    solution:
      'We built a single booking flow that understands each venue’s rules, gives guests immediate confirmation, and gives floor teams one simple view of the night ahead.',
    outcomes: [
      'Bookings are confirmed instantly, around the clock',
      'Venue teams manage availability from one place',
      'Fewer no-shows through timely, useful reminders',
    ],
    techStack: ['React', 'Node.js', 'Custom booking engine'],
    processSteps: [
      { title: 'Listen to the floor', description: 'Designed around real host stand decisions.' },
      { title: 'Make rules human', description: 'Translated venue logic into a friendly flow.' },
      { title: 'Keep it dependable', description: 'Automated reminders, confirmations, and edge cases.' },
    ],
    gallery: [image('bistro-table', 900, 1000), image('bistro-booking-flow', 900, 800)],
    testimonial: {
      quote: 'It feels like we hired a very organised host who never clocks off. Guests get answers and our team gets their evenings back.',
      author: 'Thando Petersen',
      role: 'Group General Manager, Bistro',
    },
    relatedProjectIds: ['lumiere-boutique', 'urban-nest'],
  },
];

export const industries = ['All', 'Logistics', 'Legal', 'Real Estate', 'E-commerce', 'Finance', 'Hospitality'] as const;

export const whatsappUrl =
  "https://wa.me/27661192498?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20website.";