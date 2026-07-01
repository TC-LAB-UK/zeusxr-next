export interface NewsArticle {
  slug: string
  title: string
  category: string
  date: string
  thumb: string
  hero: string
  excerpt: string
  body: { type: 'p' | 'h2' | 'quote'; text: string }[]
}

export const NEWS_DATA: Record<string, NewsArticle> = {
  'zeus-xr-msrt-installation': {
    slug: 'zeus-xr-msrt-installation',
    title: 'Zeus XR Installation at MSRT',
    category: 'Project',
    date: 'June 2026',
    thumb: '/media/news/msrt-hero.jpeg',
    hero: '/media/news/msrt-hero.jpeg',
    excerpt: 'MSRT — one of the UK\'s most respected refinishing operations — has become the latest facility to commission a full Zeus XR system.',
    body: [
      { type: 'p', text: 'MSRT — one of the UK\'s most respected refinishing operations — has become the latest facility to commission a full Zeus XR system. The installation marks a significant step in the commercial rollout of the Zeus XR, with MSRT becoming one of the first production bodyshops in the country to operate the system at full capacity.' },
      { type: 'p', text: 'The project involved a complete turnkey installation: site preparation, booth integration, robot commissioning and operator training. Our engineering team worked closely with the MSRT team throughout, ensuring the system was calibrated precisely to their workflow and vehicle mix.' },
      { type: 'h2', text: 'The Zeus XR Experience' },
      { type: 'p', text: 'The Zeus XR at MSRT operates as a fully integrated finishing system. The PG90-E robot arm executes spray programmes guided by real-time AI vision data, while the electric booth environment provides consistent temperature and airflow throughout every cycle.' },
      { type: 'quote', text: 'The Zeus XR has fundamentally changed how we operate. The consistency we\'re now achieving on every vehicle — that\'s not something you can replicate with manual spraying.' },
      { type: 'p', text: 'Since commissioning, the MSRT team has reported measurable improvements in throughput, finish quality and paint efficiency. The system\'s ability to repeat the same spray path — precisely, every time — is delivering results that manual finishing cannot match.' },
      { type: 'p', text: 'This installation represents exactly what Zeus XR is designed for: a serious operation that demands serious performance. We\'re proud to be part of MSRT\'s next chapter.' },
    ],
  },
  'car-sos-zeus-xr': {
    slug: 'car-sos-zeus-xr',
    title: 'Car S.O.S Approve of the Zeus XR',
    category: 'Media',
    date: 'May 2026',
    thumb: '/media/news/car-sos-thumb.jpeg',
    hero: '/media/news/car-sos-1.jpeg',
    excerpt: 'The team behind Channel 4\'s Car S.O.S visited Todd Engineering to experience the Zeus XR first-hand.',
    body: [
      { type: 'p', text: 'The team behind Channel 4\'s Car S.O.S visited Todd Engineering to experience the Zeus XR first-hand. What followed was a behind-the-scenes look at the most advanced spray finishing system ever built in Britain.' },
      { type: 'p', text: 'Car S.O.S has spent years restoring vehicles in traditional bodyshops. So when the crew arrived at our Staffordshire facility and watched the Zeus XR execute a full spray cycle — autonomous, precise, electric — the reaction said everything.' },
      { type: 'p', text: 'The visit took the team through the full Zeus XR workflow: from vehicle loading and AI scan, through robotic spray execution and electric curing, to the finished result. No manual intervention. No overspray. No compromise.' },
      { type: 'quote', text: 'We\'ve seen a lot of bodyshops. We\'ve never seen anything like this. The quality coming out of that booth — it\'s another level.' },
      { type: 'h2', text: 'Zeus XR — Explained' },
      { type: 'p', text: 'The visit included time with our engineering team, who walked through the technology behind the PG90-E robot arm, the AI vision system and the all-electric booth platform. The conversation covered not just what the Zeus XR does — but why it matters for the future of the industry.' },
      { type: 'p', text: 'We\'re proud to have the Car S.O.S team\'s endorsement. They know what great bodywork looks like — and they recognise what the Zeus XR means for the future of the industry.' },
    ],
  },
  'electric-spraybooth-ai-robotics': {
    slug: 'electric-spraybooth-ai-robotics',
    title: 'The Launch of the Zeus XR',
    category: 'Product Launch',
    date: 'April 2026',
    thumb: '/media/isolated-booth.jpg',
    hero: '/media/zeus-xr-hero.jpg',
    excerpt: 'After years of development, Todd Engineering is proud to introduce the Zeus XR — a fully integrated, AI-guided robotic spray finishing system.',
    body: [
      { type: 'p', text: 'After years of development, Todd Engineering is proud to introduce the Zeus XR — a fully integrated, AI-guided robotic spray finishing system that represents the most significant advance in spraybooth technology in a generation.' },
      { type: 'p', text: 'The Zeus XR is not an upgrade. It is a new category of machine. Built around an all-electric platform, a 7-axis PG90-E robot arm and a real-time AI vision system, it delivers spray finishing results that are repeatable, measurable and fundamentally better than anything achievable by hand.' },
      { type: 'h2', text: 'Zeus XR — Explained' },
      { type: 'p', text: 'The development programme has been running in parallel with our core business for several years — driven by a clear belief that the industry was ready for something genuinely different. Not a gimmick. Not a concept. A system that works, in a real bodyshop, on real vehicles, every day.' },
      { type: 'quote', text: 'We\'ve been building spraybooths for over 30 years. The Zeus XR is the product we always knew was possible — and the one the industry has been waiting for.' },
      { type: 'p', text: 'The Zeus XR is available now for order. Each system is designed, manufactured and installed by our own engineering team in Staffordshire — with full commissioning, training and ongoing support included as standard.' },
      { type: 'p', text: 'This is the beginning of a new chapter for Todd Engineering — and for the businesses that choose to operate at the forefront of the industry.' },
    ],
  },
  'todd-engineering-paintgo-partnership': {
    slug: 'todd-engineering-paintgo-partnership',
    title: 'Todd Engineering — Exclusive UK Distributor of PaintGo Robotic Technology',
    category: 'Partnership',
    date: 'March 2026',
    thumb: '/media/robot-image.jpg',
    hero: '/media/robot-image.jpg',
    excerpt: 'Todd Engineering is proud to announce that we are the exclusive UK distributor of PaintGo\'s AI-assisted robotic spray technology.',
    body: [
      { type: 'p', text: 'Todd Engineering is proud to announce that we are the exclusive UK distributor of PaintGo\'s AI-assisted robotic spray technology — the same system that powers the robot at the heart of the Zeus XR.' },
      { type: 'p', text: 'PaintGo is a pioneering robotics company specialising in AI-driven spray finishing systems for the automotive refinishing industry. Their flagship robot, the PG90-E, is a seven-axis system capable of executing precise, repeatable spray paths guided by real-time visual intelligence — and it is now exclusively available in the UK through Todd Engineering.' },
      { type: 'p', text: 'Todd Engineering has secured the exclusive rights to install, distribute and support PaintGo\'s technology across the United Kingdom. This means that if you want access to PaintGo\'s robotic platform in the UK, you come to us.' },
      { type: 'quote', text: 'PaintGo\'s robot is the most advanced spray finishing system we\'ve seen — and integrating it exclusively into the Zeus XR is what makes the booth genuinely unlike anything else on the market.' },
      { type: 'p', text: 'The PaintGo robot is not an optional add-on — it is built into the Zeus XR as a fully integrated, co-engineered system. The booth, the robot, the AI software and the commissioning process have all been developed together.' },
      { type: 'p', text: 'This exclusive arrangement positions the Zeus XR as the only spraybooth in the UK market with access to PaintGo\'s robotics platform — giving Todd Engineering customers a significant and sustainable competitive advantage.' },
    ],
  },
  'todd-engineering-rupes-partnership': {
    slug: 'todd-engineering-rupes-partnership',
    title: 'Todd Engineering Partners with RUPES — Complete Dust Extraction for ZEUS Prep Rooms',
    category: 'Partnership',
    date: 'June 2026',
    thumb: '',
    hero: '/media/prepped.jpg',
    excerpt: 'We\'re delighted to announce a new partnership between Todd Engineering and RUPES, bringing complete dust extraction solutions to our ZEUS preparation rooms.',
    body: [
      { type: 'p', text: 'We\'re delighted to announce a new partnership between Todd Engineering and RUPES. As part of our commitment to delivering complete finishing solutions, RUPES dust extraction and air purification systems are now available as part of our ZEUS preparation room packages.' },
      { type: 'p', text: 'This partnership combines Todd Engineering\'s expertise in spraybooths and finishing systems with RUPES\' industry-leading dust extraction technology — creating a smarter, cleaner, and more productive environment for vehicle preparation.' },
      { type: 'h2', text: 'The result for your bodyshop.' },
      { type: 'p', text: 'The RUPES NIVEUS range brings advanced air purification capability with ULPA U15 filtration, air quality monitoring, and high-efficiency removal of airborne contaminants — making it the ideal complement to the ZEUS preparation bay environment.' },
      { type: 'p', text: 'We look forward to showcasing these combined solutions in the coming months. If you\'d like to learn more about integrating RUPES technology into your ZEUS preparation room package, get in touch with our team.' },
    ],
  },
}

export const NEWS_LIST = Object.values(NEWS_DATA)
