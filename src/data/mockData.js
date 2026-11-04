/**
 * FoodBridge Mock Data & Structured Content
 * All metrics and stories are strictly illustrative for this UI/UX showcase entry.
 */

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Mission', href: '#mission' },
  { name: 'The Problem', href: '#problem' },
  { name: 'Our Solution', href: '#solution' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Impact', href: '#impact' },
  { name: 'Stories', href: '#stories' },
];

export const PROBLEM_BLOCKS = {
  surplus: {
    title: 'The Surplus Crisis',
    subtitle: 'Abundance that never reaches a table',
    icon: 'AlertCircle',
    badge: 'Supply Side Reality',
    points: [
      {
        title: 'Commercial Kitchen Overproduction',
        desc: 'Banquet halls, hotels, and event catering prepare buffer portions to guarantee full spreads, resulting in fresh, untouched trays discarded when events wrap up.',
      },
      {
        title: 'Strict Retail Freshness Windows',
        desc: 'Artisan bakeries and supermarkets cycle out wholesome bread, dairy, and produce at the end of each shift long before it has lost its nutritional value.',
      },
      {
        title: 'The Logistics Barrier',
        desc: 'Well-intentioned food businesses lack the immediate transport link and vetted recipient contacts to hand off food within the critical 2-hour window.',
      },
    ],
    quote: 'Wholesome, prepared dishes are often discarded merely because connecting with a recipient feels too complex after a long kitchen shift.',
    highlight: 'The food is already cooked. The nourishment is already prepared.',
  },
  hunger: {
    title: 'The Hunger Reality',
    subtitle: 'Nutritional deficit in our own neighborhoods',
    icon: 'Users',
    badge: 'Demand Side Reality',
    points: [
      {
        title: 'Overburdened Community Pantries',
        desc: 'Grassroots shelters, soup kitchens, and youth centers face surging demand, stretching tight budgets to purchase basic shelf-stable goods.',
      },
      {
        title: 'Lack of Fresh, Warm Meals',
        desc: 'While canned donations help, vulnerable populations rarely receive hot, protein-rich, chef-prepared meals essential for wellness and morale.',
      },
      {
        title: 'Dignity at the Center',
        desc: 'Access to nourishing meals is not charity—it is fundamental human dignity. Every neighbor deserves wholesome, delicious food with respect.',
      },
    ],
    quote: 'Neighborhood kitchens frequently run out of meal portions just miles away from hotel banquets clearing untouched buffet trays.',
    highlight: 'The need is urgent, daily, and happening right around the corner.',
  },
};

export const SOLUTION_NODES = [
  {
    id: 'donors',
    step: '01',
    role: 'Surplus Donors',
    entities: 'Restaurants • Hotels • Caterers • Bakeries • Households',
    description: 'Commercial kitchens and individuals log surplus in under 90 seconds, specifying meal type, portion count, safe temperature window, and pickup coordinates.',
    tag: 'Abundant Supply',
    color: 'from-[#173D2B] to-[#21543b]',
  },
  {
    id: 'bridge',
    step: '02',
    role: 'The FoodBridge Dispatch',
    entities: 'Intelligent Geo-Matching • Food Safety Verification • Route Optimisation',
    description: 'Our lightweight coordination engine instantly pairs the donation with the closest vetted NGO kitchen equipped to receive and distribute that specific volume.',
    tag: 'Safe & Rapid Bridge',
    color: 'from-[#E7A64B] to-[#d89639]',
  },
  {
    id: 'ngos',
    step: '03',
    role: 'Vetted NGO Partners',
    entities: 'Community Pantries • Shelters • Senior Centers • Youth Kitchens',
    description: 'Verified non-profit kitchens confirm receipt, mobilize volunteers or accept direct drop-offs, and inspect food against standard safe-consumption guidelines.',
    tag: 'Trusted Distribution',
    color: 'from-[#173D2B] to-[#252A25]',
  },
  {
    id: 'communities',
    step: '04',
    role: 'Empowered Communities',
    entities: 'Nourished Families • Less Landfill Waste • Strengthened Civic Solidarity',
    description: 'Surplus food is served with dignity while still hot and nutritious. Zero edible food goes to methane-generating landfills; community bonds grow stronger.',
    tag: 'Lasting Impact',
    color: 'from-[#21543b] to-[#173D2B]',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Share Surplus Food',
    subtitle: 'Takes under 2 minutes',
    description:
      'A banquet finishes or a bakery wraps for the evening. Kitchen staff opens FoodBridge, selects food category, inputs portion count, and specifies safe pickup time.',
    details: [
      'Pre-categorized dietary tags (vegetarian, halal, gluten-free)',
      'Temperature tracking and packing guidelines',
      'No complex logins or paperwork required',
    ],
    icon: 'PackagePlus',
    stat: '< 2 Mins to Log',
  },
  {
    step: '02',
    title: 'Connect with an NGO',
    subtitle: 'Instant proximity matching',
    description:
      'FoodBridge alerts nearby registered shelters, grassroots kitchens, and distribution teams whose intake capacity matches the available food volume and dietary profile.',
    details: [
      'Strictly vetted 501(c)(3) & non-profit registered partners',
      'Radius-based matching ensures food stays within the safe window',
      'Real-time acknowledgment prevents double-booking',
    ],
    icon: 'Network',
    stat: '100% Vetted Receivers',
  },
  {
    step: '03',
    title: 'Deliver Food and Create Impact',
    subtitle: 'Direct handoff & immediate meal service',
    description:
      'Volunteer couriers or NGO collection vehicles perform contactless pickup using thermal containers. Food is safely served to community members within hours.',
    details: [
      'Direct handoff verification with digital receipt',
      'Zero storage bottlenecks—food moves straight from donor to plate',
      'Immediate reduction in greenhouse gas emissions from landfills',
    ],
    icon: 'HeartHandshake',
    stat: 'Served Fresh',
  },
];

export const KEY_FEATURES = [
  {
    id: 'easy-donation',
    title: 'Easy Food Donation',
    description:
      'A frictionless, mobile-optimized interface tailored for busy commercial chefs and event planners. Log surplus trays in seconds without interrupting service.',
    badge: 'Donor Centric',
    icon: 'Sparkles',
    points: ['Quick-entry portion calculator', 'Packaging checklist guidance', 'Custom recurring schedules'],
  },
  {
    id: 'ngo-partnerships',
    title: 'NGO Partnerships',
    description:
      'Every recipient organization in our directory is verified for safe food-handling practices, sanitary refrigeration, and dignified distribution standards.',
    badge: 'Trust & Verification',
    icon: 'ShieldCheck',
    points: ['Compliance verification', 'Capacity-aware notifications', 'Direct coordinator contact'],
  },
  {
    id: 'smart-matching',
    title: 'Smart Food Matching',
    description:
      'Proximity-first dispatch logic ensures delicate hot dishes and perishable bakery items travel the shortest possible distance to reach active service tables.',
    badge: 'Rapid Logistics',
    icon: 'Zap',
    points: ['Neighborhood-radius priority', 'Dietary suitability filtering', 'Time-sensitive expiration window'],
  },
  {
    id: 'pickup-coordination',
    title: 'Pickup Coordination',
    description:
      'Flexible handover workflows supporting donor self-delivery, NGO fleet pickups, or neighborhood volunteer bicycle couriers with insulated transport gear.',
    badge: 'Seamless Transit',
    icon: 'Truck',
    points: ['Thermal container protocols', 'Driver handover verification', 'Flexible pickup time slots'],
  },
  {
    id: 'community-participation',
    title: 'Community Participation',
    description:
      'Empowering individual neighborhood champions, food bloggers, students, and civic groups to rally surplus from local cafes and spread hunger awareness.',
    badge: 'Grassroots Power',
    icon: 'Users',
    points: ['Volunteer courier sign-up', 'Neighborhood ambassador toolkit', 'Zero-waste event pledges'],
  },
];

export const IMPACT_METRICS = {
  notice: 'Illustrative Demonstration Metrics • Simulated Activity for Competition Showcase',
  summary: [
    {
      id: 'meals',
      value: '142,500+',
      label: 'Meals Rescued',
      subtext: 'Wholesome meal portions redirected to community tables',
      icon: 'Utensils',
      color: 'text-[#E7A64B]',
    },
    {
      id: 'donors',
      value: '480+',
      label: 'Active Donors',
      subtext: 'Restaurants, hotels, artisan bakeries, and event caterers',
      icon: 'Store',
      color: 'text-[#173D2B]',
    },
    {
      id: 'ngos',
      value: '120+',
      label: 'NGO Partners',
      subtext: 'Vetted community kitchens, shelters, and youth clubs',
      icon: 'Building2',
      color: 'text-[#173D2B]',
    },
    {
      id: 'waste',
      value: '78.4 Tons',
      label: 'Food Waste Prevented',
      subtext: 'Organic matter diverted from methane-producing landfills',
      icon: 'Leaf',
      color: 'text-[#E7A64B]',
    },
  ],
  categories: [
    { name: 'Prepared Hot Meals', percentage: 42, portions: '59,850 portions', trend: '+18% this month' },
    { name: 'Artisan Breads & Pastries', percentage: 28, portions: '39,900 portions', trend: '+12% this month' },
    { name: 'Fresh Farm Produce', percentage: 19, portions: '27,075 portions', trend: '+24% this month' },
    { name: 'Chilled Dairy & Pantry Goods', percentage: 11, portions: '15,675 portions', trend: '+8% this month' },
  ],
};

export const COMMUNITY_STORIES = [
  {
    id: 1,
    role: 'Donor Partner',
    name: 'Chef Marcus Vance',
    title: 'Executive Chef, The Olive Hearth Bistro & Catering',
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80',
    quote:
      'We host weddings every weekend. Seeing trays of braised vegetables and artisan bread go to an evening youth shelter within two hours transformed our entire kitchen culture. Our team takes immense pride knowing good food never ends up in a dumpster.',
    impactTag: 'Over 1,200 portions redirected in 4 months',
    highlight: 'Kitchen Culture Transformation',
    scenarioNote: 'Illustrative Story • Realistic Donor Profile',
  },
  {
    id: 2,
    role: 'NGO Kitchen Leader',
    name: 'Sister Amara & Priya Nair',
    title: 'Directors, Hope Harbor Community Kitchen',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote:
      'Hot, nutritious surplus from city hotels allows us to serve over 200 wholesome dinners every weekday without stretching our modest grocery budget. Our guests receive restaurant-grade, balanced meals made with love and dignity.',
    impactTag: 'Daily dinner service for 200+ individuals',
    highlight: 'Dignified Hot Dinners Daily',
    scenarioNote: 'Illustrative Story • Realistic NGO Partner Profile',
  },
  {
    id: 3,
    role: 'Volunteer Courier',
    name: 'David Chen',
    title: 'Neighborhood Bicycle Courier Volunteer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote:
      'I spend 45 minutes on my way home picking up surplus baguettes and salads to deliver to the senior community living center. It gives deep purpose to a simple evening commute, connecting me directly to neighbors I would otherwise never meet.',
    impactTag: '64 evening rescue runs completed',
    highlight: 'Purposeful Commute',
    scenarioNote: 'Illustrative Story • Realistic Volunteer Profile',
  },
];

export const SAFETY_GUIDELINES = [
  {
    category: 'Acceptable Food Items',
    items: [
      'Freshly prepared cooked meals kept at safe holding temperatures (>60°C or <4°C)',
      'Unsold artisan bakery goods, bagels, whole grain breads, and rolls',
      'Whole, unblemished fresh produce, fruits, and root vegetables',
      'Unopened commercially packaged dry pantry staples and non-perishables',
      'Properly chilled dairy or sealed plant-based milk alternatives before sell-by date',
    ],
  },
  {
    category: 'Non-Acceptable Items',
    items: [
      'Partially consumed dishes or food previously served on customer buffet lines',
      'Items stored in the temperature danger zone (4°C – 60°C) for over 2 hours',
      'Food with compromised, unsealed, or dented cans/packaging',
      'Unlabeled prepared foods containing unknown major allergens',
      'Expired infant formula or spoiled raw seafood/poultry',
    ],
  },
];
