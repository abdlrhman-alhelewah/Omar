export interface Project {
  id: string;
  client: string;
  industry: string;
  type: 'B2B' | 'B2C' | 'B2B / B2C';
  logo: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  objective: string;
  keyResults: {
    label: string;
    value: string;
    context?: string;
  }[];
  platforms: string[];
  proofSlide: string;
  proofTitle: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  details: string;
  type: 'Degree' | 'Certificate';
}

export const PERSONAL_INFO = {
  name: "Omar Mohamed ElBasstawisy",
  fullName: "Omar Mohamed Elsayed ElBasstawisy",
  title: "Media Buyer & Digital Marketer",
  shortTitle: "Mid-Level Media Buyer",
  profilePhoto: "/assets/aistudio/1000000631.jpg_9780f390.jpeg",
  summary: "Results-driven Media Buyer & Digital Marketer with 2 years of experience planning, launching, and optimizing performance campaigns across Meta, TikTok, and Google Ads. Focused on lead generation, ROI, and business growth through strategic media planning, budget allocation, and continuous A/B testing.",
  portfolioStatement: "Scaled 7+ B2B and B2C clients across Egypt, the Gulf region (Saudi Arabia & UAE), and Europe.",
  email: "omar.bastawissy@gmail.com",
  secondaryEmail: "omarbasstawisy@yahoo.com",
  phone: "+20 111 817 3848",
  phoneDisplay: "0111 817 3848",
  linkedinUrl: "https://www.linkedin.com/in/omar-basstawisy-b3673b31b/",
  whatsappUrl: "https://wa.me/201118173848?text=Hello%20Omar,%20I%20reviewed%20your%20Media%20Buyer%20portfolio%20and%20would%20like%20to%20connect.",
  location: "29 Abu Bakr St Ard Elgameya, Giza, Egypt",
  dateOfBirth: "03/28/1996",
  nationality: "Egyptian",
  maritalStatus: "Single",
  cvPdfPath: "/assets/aistudio/CV_Omar_Mohamed_Elsayed_ElBasstawisy_cee73ba6.pdf",
};

export const CORE_METRICS = [
  {
    value: "4,485+",
    label: "TikTok Conversions",
    subtext: "Across 33 campaigns with 58.85 EGP avg CPA",
  },
  {
    value: "98.2M+",
    label: "IHF Total Views",
    subtext: "11.49M unique viewers reached globally",
  },
  {
    value: "622",
    label: "UGT Travel Leads",
    subtext: "Acquired at $2.53 average Cost Per Lead",
  },
  {
    value: "7+",
    label: "Scaled Brands",
    subtext: "Operating in Egypt, Saudi Arabia, UAE & Europe",
  },
];

export const CLIENT_LOGOS = [
  { name: "IHF", logo: "/logos/ihf_logo.png", industry: "International Sports" },
  { name: "Concrete Surgeons", logo: "/logos/cs_logo.png", industry: "Construction & Engineering" },
  { name: "United Guides Travel", logo: "/logos/ugt_logo.png", industry: "Inbound Tourism" },
  { name: "Grand Heights", logo: "/logos/grand_heights_logo.png", industry: "Luxury Real Estate" },
  { name: "IFCG", logo: "/logos/ifcg_logo.png", industry: "Food Manufacturing (B2B)" },
  { name: "MasterMind", logo: "/logos/mastermind_logo.png", industry: "Business Consulting" },
  { name: "CarDip", logo: "/logos/cardip_logo.png", industry: "Automotive Customization" },
];

export const PROJECTS: Project[] = [
  {
    id: "ihf",
    client: "IHF (International Handball Federation)",
    industry: "International Sports Governing Body",
    type: "B2C",
    logo: "/logos/ihf_logo.png",
    headlineMetric: "98.2M+",
    headlineMetricLabel: "Total Video Views",
    objective: "Manage live streaming, digital publishing, and content coordination across official channels to boost tournament viewership and audience interaction.",
    keyResults: [
      { label: "Total Views", value: "98,263,390", context: "77.4% Reels, 17.2% Posts" },
      { label: "Unique Viewers", value: "11,490,338", context: "62.3% non-followers reach" },
      { label: "Content Interactions", value: "3,790,963", context: "1,165,470 accounts engaged" },
      { label: "Community", value: "340K+ IG / 72K+ X", context: "328,030 profile visits" }
    ],
    platforms: ["Instagram (@ihfworldhandball)", "X (@ihfhandball)", "Live Streaming"],
    proofSlide: "/portfolio_slides/slide_37.png",
    proofTitle: "IHF Analytics: 98.2M Views & 11.4M Viewers (Slide 37)",
    tags: ["Sports", "Live Streaming", "B2C", "Global"]
  },
  {
    id: "concrete-surgeons",
    client: "Concrete Surgeons (CS)",
    industry: "Specialized Construction & Contracting",
    type: "B2B / B2C",
    logo: "/logos/cs_logo.png",
    headlineMetric: "High-Intent",
    headlineMetricLabel: "B2B Contractor Pipeline",
    objective: "Generate consistent, qualified B2B leads from contractors and civil engineers while eliminating wasted broad spend through precision audience targeting.",
    keyResults: [
      { label: "Lead Pipeline", value: "Consistent B2B Inquiries", context: "Targeted civil engineering audiences" },
      { label: "Spend Efficiency", value: "Minimized Waste", context: "Aggressive exclusion of non-commercial clicks" },
      { label: "Brand Presence", value: "Category Leader", context: "Strengthened presence among project managers" }
    ],
    platforms: ["Meta Ads", "Instagram B2B", "Lead Forms"],
    proofSlide: "/portfolio_slides/slide_17.png",
    proofTitle: "B2B Lead Sets & Audience Targeting Performance (Slide 17)",
    tags: ["B2B", "Construction", "Lead Gen"]
  },
  {
    id: "united-guides-travel",
    client: "United Guides Travel (UGT)",
    industry: "Inbound Tourism & Tours",
    type: "B2C",
    logo: "/logos/ugt_logo.png",
    headlineMetric: "622",
    headlineMetricLabel: "Leads at $2.53 CPL",
    objective: "Acquire high-intent international tourists searching for Egypt travel experiences while maximizing ROAS and minimizing acquisition costs.",
    keyResults: [
      { label: "Verified Leads", value: "622 Leads", context: "$2.53 average Cost Per Lead" },
      { label: "Messaging Leads", value: "188+ Inquiries", context: "$1.93 – $2.85 per engaged conversation" },
      { label: "Campaign Reach", value: "292,399", context: "$2,200.22 total spend" }
    ],
    platforms: ["Meta Ads", "Instagram Ads", "Messenger Funnels"],
    proofSlide: "/portfolio_slides/slide_18.png",
    proofTitle: "Meta Ads Dashboard: 622 Leads @ $2.53 CPL & Messaging Costs (Slide 18)",
    tags: ["Tourism", "International", "B2C"]
  },
  {
    id: "grand-heights",
    client: "Grand Heights (6th of October)",
    industry: "Luxury Real Estate",
    type: "B2C",
    logo: "/logos/grand_heights_logo.png",
    headlineMetric: "97",
    headlineMetricLabel: "High-Ticket Leads @ 175 EGP",
    objective: "Generate high-intent buyer inquiries for luxury residential properties in 6th of October City, including Egyptian expatriates in Saudi Arabia.",
    keyResults: [
      { label: "Top Ad Set Leads", value: "97 Buyer Leads", context: "175.55 EGP Cost Per Lead" },
      { label: "Audited Reach", value: "75,151", context: "Managed across 47 active campaigns" },
      { label: "Total Spent", value: "69,732.71 EGP", context: "Rigorous lead qualification" }
    ],
    platforms: ["Meta Ads Manager", "Facebook Lead Forms", "Instagram"],
    proofSlide: "/portfolio_slides/slide_16.png",
    proofTitle: "Meta Ads Dashboard: Grand Heights 47 Campaigns & 97 Leads (Slide 16)",
    tags: ["Real Estate", "Luxury", "B2C"]
  },
  {
    id: "ifcg",
    client: "IFCG - Egypt",
    industry: "Food Manufacturing & Distribution",
    type: "B2B",
    logo: "/logos/ifcg_logo.png",
    headlineMetric: "655K+",
    headlineMetricLabel: "B2B Professionals Reached",
    objective: "Generate commercial distribution inquiries by targeting food wholesalers, retail chains, and foodservice procurement directors across Egypt and MENA.",
    keyResults: [
      { label: "Total Reach", value: "655,556", context: "Across 23 performance campaigns" },
      { label: "Total Spend", value: "177,979.71 EGP", context: "Targeted commercial distribution" },
      { label: "Distributor Leads", value: "34+ Bulk RFQs", context: "High-value commercial partnerships" }
    ],
    platforms: ["Meta Ads", "Instagram B2B", "Audience Network"],
    proofSlide: "/portfolio_slides/slide_17.png",
    proofTitle: "Meta Ads Dashboard: IFCG 655K Reach & 177K Spend (Slide 17)",
    tags: ["B2B", "FMCG", "Distribution"]
  },
  {
    id: "mastermind",
    client: "MasterMind",
    industry: "Marketing & Business Solutions",
    type: "B2B",
    logo: "/logos/mastermind_logo.png",
    headlineMetric: "UAE & GCC",
    headlineMetricLabel: "Executive Pipeline",
    objective: "Capture corporate decision-makers and founders seeking strategic marketing solutions across the UAE and Gulf region.",
    keyResults: [
      { label: "Target Market", value: "UAE & GCC", context: "Corporate business decision-makers" },
      { label: "Lead Caliber", value: "C-Level & Founders", context: "Direct corporate inquiries" },
      { label: "Optimization", value: "Audience Segmentation", context: "Continuous creative iteration" }
    ],
    platforms: ["Meta Ads", "LinkedIn", "Instagram"],
    proofSlide: "/portfolio_slides/slide_19.png",
    proofTitle: "GCC & UAE Campaign Performance Breakdown (Slide 19)",
    tags: ["B2B", "UAE", "GCC"]
  },
  {
    id: "cardip",
    client: "CarDip (Saudi Arabia)",
    industry: "Automotive Customization",
    type: "B2C",
    logo: "/logos/cardip_logo.png",
    headlineMetric: "2,895+",
    headlineMetricLabel: "Add to Basket Actions",
    objective: "Drive demand for peelable automotive paint and luxury vehicle protection across Saudi Arabia through high-volume Snapchat and TikTok campaigns.",
    keyResults: [
      { label: "Snapchat Conversions", value: "2,895+ Add to Cart", context: "1,575 Ramadan adds ($1.23) + 1,320 Jan ($1.27)" },
      { label: "Snapchat Spend", value: "$5,148.48", context: "Delivering catalog e-commerce orders" },
      { label: "TikTok KSA Sales", value: "142 Purchases", context: "70.85 SAR Cost Per Conversion" }
    ],
    platforms: ["Snapchat Ads", "TikTok Ads Manager", "Meta Ads"],
    proofSlide: "/portfolio_slides/slide_24.png",
    proofTitle: "Snapchat Ads Manager: $5,148 Spent & 2,895+ Add to Basket (Slide 24)",
    tags: ["Automotive", "Saudi Arabia", "Snapchat", "TikTok"]
  }
];

export const PLATFORM_DASHBOARDS = [
  {
    id: "meta-performance",
    platform: "Meta Ads (Facebook & Instagram)",
    summary: "Audited multi-account execution delivering low-cost qualified leads for luxury real estate (Grand Heights: 97 leads @ 175 EGP), inbound travel (UGT: 622 leads @ $2.53), and large-scale B2B distribution (IFCG: 655K reach).",
    stats: [
      { label: "Grand Heights Leads", value: "97 Leads @ 175 EGP" },
      { label: "UGT Travel Leads", value: "622 Leads @ $2.53" },
      { label: "IFCG B2B Reach", value: "655,556 Reach" },
      { label: "Total Tracked Spend", value: "249,000+ EGP & $2,200+" }
    ],
    proofImage: "/portfolio_slides/slide_16.png",
    proofTitle: "Meta Ads Manager - Grand Heights Dashboard (Slide 16)"
  },
  {
    id: "tiktok-performance",
    platform: "TikTok Ads Manager",
    summary: "Proven high-velocity conversion campaigns across 33 monitored ad groups. Delivered 4,485 verified conversions with a 9.63% destination click-to-conversion rate and a sub-60 EGP CPA.",
    stats: [
      { label: "Total Impressions", value: "8,416,835" },
      { label: "Destination Clicks", value: "46,572" },
      { label: "Verified Conversions", value: "4,485" },
      { label: "Average CPA", value: "58.85 EGP" }
    ],
    proofImage: "/portfolio_slides/slide_21.png",
    proofTitle: "TikTok Ads Manager - 33 Campaigns & 4,485 Conversions (Slide 21)"
  },
  {
    id: "snapchat-performance",
    platform: "Snapchat Ads Manager",
    summary: "Ramadan Catalog and Sales campaigns driving 2,895+ Add-to-Basket actions for automotive products across Saudi Arabia at an efficient $1.23 to $1.27 cost per add.",
    stats: [
      { label: "Add to Basket Actions", value: "2,895+" },
      { label: "Cost Per Add to Basket", value: "$1.23 – $1.27" },
      { label: "Paid Impressions", value: "595,462" },
      { label: "Total Ad Spend", value: "$5,148.48" }
    ],
    proofImage: "/portfolio_slides/slide_24.png",
    proofTitle: "Snapchat Ads Manager - Ramadan Catalog Dashboard (Slide 24)"
  },
  {
    id: "linkedin-performance",
    platform: "LinkedIn Campaign Manager",
    summary: "Targeted Account-Based Marketing (ABM) and executive messaging campaigns capturing corporate decision-makers across 30 filtered B2B campaigns.",
    stats: [
      { label: "Filtered Campaigns", value: "30 Campaigns" },
      { label: "UK Messaging Leads", value: "15 Leads" },
      { label: "Lead Gen Form Inquiries", value: "11 Leads" },
      { label: "Page Follows Generated", value: "64 Follows" }
    ],
    proofImage: "/portfolio_slides/slide_26.png",
    proofTitle: "LinkedIn Campaign Manager - B2B Leads Dashboard (Slide 26)"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Media Buyer",
    company: "Emarketing Egypt",
    location: "ElDokki, Giza, Egypt",
    period: "Feb 2024 – Present",
    description: "Managing paid performance campaigns across Meta, Google, and TikTok to drive high-intent conversions and revenue growth.",
    achievements: [
      "Optimized multi-channel ad performance through systematic A/B testing and cohort data analysis.",
      "Allocated ad budgets strategically to maximize ROAS and aggressively reduce CPA.",
      "Scaled 7+ regional and international client accounts across Egypt, the Gulf, and Europe."
    ],
    skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Snapchat Ads", "Budget Allocation", "CPA Reduction"]
  },
  {
    id: "exp-2",
    title: "Sales Manager",
    company: "Dar-ElMaghraby",
    location: "6th of October City, Egypt",
    period: "Mar 2022 – Dec 2023",
    description: "Led commercial sales initiatives to drive revenue growth, customer acquisition, and brand visibility.",
    achievements: [
      "Led and coached sales representatives to consistently hit monthly revenue targets.",
      "Developed and executed local marketing strategies that enhanced brand recall.",
      "Managed key account relationships and maintained high customer satisfaction ratings."
    ],
    skills: ["Sales Leadership", "Commercial Strategy", "Client Retention", "Revenue Growth"]
  },
  {
    id: "exp-3",
    title: "Developer (ERP Systems)",
    company: "TAB Software",
    location: "Masr-ElGdeeda, Cairo, Egypt",
    period: "Mar 2021 – Dec 2021",
    description: "Designed, developed, and maintained scalable ERP business applications to support commercial workflows.",
    achievements: [
      "Architected backend modules and database structures for enterprise business processes.",
      "Troubleshot and optimized code performance to improve system stability and speed."
    ],
    skills: ["Software Engineering", "ERP Systems", "Database Logic", "Performance Optimization"]
  },
  {
    id: "exp-4",
    title: "Supervisor for Marketing and Sales",
    company: "Touch Media International",
    location: "Masr-ElGdeeda, Cairo, Egypt",
    period: "2018 – Dec 2019",
    description: "Supervised marketing and sales teams to hit monthly revenue quotas and expand customer acquisition.",
    achievements: [
      "Synchronized lead generation campaigns with direct sales team outreach.",
      "Increased brand awareness and inbound inquiries through targeted promotional campaigns."
    ],
    skills: ["Team Supervision", "Campaign Planning", "Revenue Goals", "Lead Qualification"]
  },
  {
    id: "exp-5",
    title: "Data Entry Specialist",
    company: "Mejoral (Uber Partner Operations)",
    location: "ElMaadi, Cairo, Egypt",
    period: "2017 – Dec 2017",
    description: "High-volume data entry and database verification for Uber partner driver onboarding.",
    achievements: [
      "Audited and processed partner driver documentation with high speed and zero errors."
    ],
    skills: ["Data Verification", "Database Auditing", "Quality Assurance", "Excel"]
  },
  {
    id: "exp-6",
    title: "Technical Support Team Leader",
    company: "Mobily Ecco",
    location: "ElMaadi, Cairo, Egypt",
    period: "2015 – 2017",
    description: "Led a frontline technical support unit resolving complex telecommunication and network issues.",
    achievements: [
      "Maintained top-tier resolution and CSAT satisfaction ratings across demanding telecom accounts.",
      "Provided tier-2 troubleshooting and coaching for new technical support specialists."
    ],
    skills: ["Technical Support", "Team Leadership", "Telecommunications", "Customer Service"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    title: "Bachelor of Science: Faculty of Information System and Management",
    institution: "Thebes Academy El Maadi",
    period: "2016 – 2020",
    details: "Graduation Project: Hospital Management System (Awarded A+ Grade with honors). Rigorous training in database management, algorithms, and systems analysis.",
    type: "Degree"
  },
  {
    title: "Diploma Digital Marketing - Media Buyer",
    institution: "Professional Media Buying Institute",
    period: "Certified",
    details: "Accredited specialization in paid campaign architecture, full-funnel media buying across Meta, TikTok, and Google Ads, and ROAS optimization.",
    type: "Certificate"
  },
  {
    title: "English Course B1",
    institution: "Language Accreditation",
    period: "Certified",
    details: "Good command of both written and spoken English, managing cross-border client accounts, international ad sets, and multilingual campaigns.",
    type: "Certificate"
  }
];

export const CV_SKILLS = [
  "Good communication with customer",
  "Excellent presentation skills",
  "Demonstrated leadership skills",
  "Good for computer skills (Word–Excel)",
  "Information technology",
  "Cross-functional collaboration",
  "Technical support",
  "Microsoft, Mac, and Linux OS"
];

export const CV_RESPONSIBILITIES = [
  "Managed campaign budgets and targeting strategies to improve CPA and lead quality.",
  "Product management and marketing to deliver the product to the best and make high sales for this product.",
  "Interface with cross-functional groups from sales, marketing, and product development departments to provide end-user support and training.",
  "Assisting the customer in solving his problem and providing him with the best service.",
  "Identify technical solutions for hardware and software issues across the organization in collaboration with the IT team, including server upgrades and system migrations.",
  "Conduct system administration for all IT services, which included installing patches, performing updates, and supporting hardware and software implementations."
];
