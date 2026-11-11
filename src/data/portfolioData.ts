import { getAssetUrl } from '../utils/assetUrl';

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
  fullName: "Omar Mohamed Elsayed ElBasttawisy",
  title: "Performance Media Buyer | Digital Marketing Specialist",
  shortTitle: "Performance Media Buyer",
  profilePhoto: getAssetUrl("assets/aistudio/1000000631.jpg_9780f390.jpeg"),
  summary: "Performance-focused Media Buyer and Digital Marketer with experience since February 2024 managing paid campaigns across Meta Ads, Google Ads, and TikTok Ads. Experienced in lead generation, campaign optimization, audience targeting, budget allocation, and A/B testing for clients across Egypt, GCC markets, and Europe. Combines paid media execution with a background in sales leadership, ERP systems, and cross-functional collaboration.",
  portfolioStatement: "Scaled 7+ B2B and B2C client accounts across Egypt, GCC markets (Saudi Arabia & UAE), and Europe.",
  email: "omar.bastawissy@gmail.com",
  secondaryEmail: "omarbasstawisy@yahoo.com",
  phone: "+20 111 817 3848",
  phoneDisplay: "0111 817 3848",
  linkedinUrl: "https://www.linkedin.com/in/omar-basstawisy-b3673b31b/",
  whatsappUrl: "https://wa.me/201118173848?text=Hello%20Omar,%20I%20reviewed%20your%20Media%20Buyer%20portfolio%20and%20would%20like%20to%20connect.",
  location: "Giza, Egypt",
  dateOfBirth: "03/28/1996",
  nationality: "Egyptian",
  maritalStatus: "Single",
  cvPdfPath: getAssetUrl("assets/Omar_ElBasstawisy_CV_Media_Buyer.pdf"),
};

export const CORE_METRICS = [
  {
    value: "1.29M+",
    label: "Meta Accounts Reach",
    subtext: "Audited across 50 campaigns with 2.65 frequency",
  },
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
    value: "7+",
    label: "Scaled Brands",
    subtext: "Operating in Egypt, Saudi Arabia, UAE & Europe",
  },
];

export const CLIENT_LOGOS = [
  { name: "IHF", logo: getAssetUrl("logos/ihf_hd.png"), industry: "International Sports", projectId: "ihf" },
  { name: "United Guides Travel", logo: getAssetUrl("logos/ugt_hd.png"), industry: "Inbound Tourism", projectId: "united-guides-travel" },
  { name: "Grand Heights", logo: getAssetUrl("logos/grand_heights_hd.png"), industry: "Luxury Real Estate", projectId: "grand-heights" },
  { name: "IFCG", logo: getAssetUrl("logos/ifcg_hd.png"), industry: "Food Manufacturing (B2B)", projectId: "ifcg" },
  { name: "MasterMind", logo: getAssetUrl("logos/mastermind_hd.png"), industry: "Business Consulting", projectId: "mastermind" },
  { name: "CarDip", logo: getAssetUrl("logos/cardip_hd.png"), industry: "Automotive Customization", projectId: "cardip" },
  { name: "Expo Trust Trade", logo: getAssetUrl("logos/ett_hd.png"), industry: "International Trade & Export", projectId: "expo-trust-trade" },
  { name: "Concrete Surgeons", logo: getAssetUrl("logos/cs_logo.png"), industry: "Construction & Engineering", projectId: "concrete-surgeons" },
];

export const PROJECTS: Project[] = [
  {
    id: "ihf",
    client: "IHF (International Handball Federation)",
    industry: "International Sports Governing Body",
    type: "B2C",
    logo: getAssetUrl("logos/ihf_hd.png"),
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
    proofSlide: getAssetUrl("portfolio_slides/slide_37.png"),
    proofTitle: "IHF Analytics: 98.2M Views & 11.4M Viewers (Slide 37)",
    tags: ["Sports", "Live Streaming", "B2C", "Global"]
  },
  {
    id: "united-guides-travel",
    client: "United Guides Travel (UGT)",
    industry: "Inbound Tourism & Tours",
    type: "B2C",
    logo: getAssetUrl("logos/ugt_hd.png"),
    headlineMetric: "622",
    headlineMetricLabel: "Leads at $2.53 CPL",
    objective: "Acquire high-intent international tourists searching for Egypt travel experiences while maximizing ROAS and minimizing acquisition costs.",
    keyResults: [
      { label: "Verified Leads", value: "622 Leads", context: "$2.53 average Cost Per Lead" },
      { label: "Messaging Leads", value: "188+ Inquiries", context: "$1.93 – $2.85 per engaged conversation" },
      { label: "Campaign Reach", value: "292,399", context: "$2,200.22 total spend" }
    ],
    platforms: ["Meta Ads", "Instagram Ads", "Messenger Funnels"],
    proofSlide: getAssetUrl("portfolio_slides/slide_18.png"),
    proofTitle: "Meta Ads Dashboard: 622 Leads @ $2.53 CPL & Messaging Costs (Slide 18)",
    tags: ["Tourism", "International", "B2C"]
  },
  {
    id: "grand-heights",
    client: "Grand Heights (6th of October)",
    industry: "Luxury Real Estate",
    type: "B2C",
    logo: getAssetUrl("logos/grand_heights_hd.png"),
    headlineMetric: "1.29M+",
    headlineMetricLabel: "Audited Reach (50 Campaigns)",
    objective: "Generate high-intent buyer inquiries for luxury residential compounds in 6th of October City, targeting affluent domestic buyers and GCC expatriates in Saudi Arabia.",
    keyResults: [
      { label: "Audited Meta Reach", value: "1,298,171 Accounts", context: "Frequency 2.65 across 50 campaigns" },
      { label: "Top Ad Set Leads", value: "214 Leads (Form)", context: "90.12 EGP Cost Per Lead (Reach: 141,149)" },
      { label: "High-Ticket Leads", value: "354+ Leads", context: "135 leads @ 193.29 EGP, 73 leads @ 173.86 EGP, 69 leads @ 118.94 EGP" },
      { label: "Qualified Traffic", value: "388+ Page Actions", context: "229 link clicks @ 2.85 EGP, 159 landing views @ 10.24 EGP" }
    ],
    platforms: ["Meta Ads Manager", "Facebook Lead Forms", "Instagram"],
    proofSlide: getAssetUrl("proofs/grand_heights_meta_dashboard.jpeg"),
    proofTitle: "Meta Ads Dashboard: Grand Heights 50 Campaigns & 1,298,171 Reach",
    tags: ["Real Estate", "Luxury", "B2C"]
  },
  {
    id: "ifcg",
    client: "IFCG - Egypt",
    industry: "Food Manufacturing & Distribution",
    type: "B2B",
    logo: getAssetUrl("logos/ifcg_hd.png"),
    headlineMetric: "655K+",
    headlineMetricLabel: "B2B Professionals Reached",
    objective: "Generate commercial distribution inquiries by targeting food wholesalers, retail chains, and foodservice procurement directors across Egypt and MENA.",
    keyResults: [
      { label: "Total Reach", value: "655,556", context: "Across 23 performance campaigns" },
      { label: "Total Spend", value: "177,979.71 EGP", context: "Targeted commercial distribution" },
      { label: "Distributor Leads", value: "34+ Bulk RFQs", context: "High-value commercial partnerships" }
    ],
    platforms: ["Meta Ads", "Instagram B2B", "Audience Network"],
    proofSlide: getAssetUrl("portfolio_slides/slide_17.png"),
    proofTitle: "Meta Ads Dashboard: IFCG 655K Reach & 177K Spend (Slide 17)",
    tags: ["B2B", "FMCG", "Distribution"]
  },
  {
    id: "mastermind",
    client: "MasterMind",
    industry: "Marketing & Business Solutions",
    type: "B2B",
    logo: getAssetUrl("logos/mastermind_hd.png"),
    headlineMetric: "UAE & GCC",
    headlineMetricLabel: "Executive Pipeline",
    objective: "Capture corporate decision-makers and founders seeking strategic marketing solutions across the UAE and Gulf region.",
    keyResults: [
      { label: "Target Market", value: "UAE & GCC", context: "Corporate business decision-makers" },
      { label: "Lead Caliber", value: "C-Level & Founders", context: "Direct corporate inquiries" },
      { label: "Optimization", value: "Audience Segmentation", context: "Continuous creative iteration" }
    ],
    platforms: ["Meta Ads", "LinkedIn", "Instagram"],
    proofSlide: getAssetUrl("portfolio_slides/slide_19.png"),
    proofTitle: "GCC & UAE Campaign Performance Breakdown (Slide 19)",
    tags: ["B2B", "UAE", "GCC"]
  },
  {
    id: "cardip",
    client: "CarDip (Saudi Arabia)",
    industry: "Automotive Customization",
    type: "B2C",
    logo: getAssetUrl("logos/cardip_hd.png"),
    headlineMetric: "2,895+",
    headlineMetricLabel: "Add to Basket Actions",
    objective: "Drive demand for peelable automotive paint and luxury vehicle protection across Saudi Arabia through high-volume Snapchat and TikTok campaigns.",
    keyResults: [
      { label: "Snapchat Conversions", value: "2,895+ Add to Cart", context: "1,575 Ramadan adds ($1.23) + 1,320 Jan ($1.27)" },
      { label: "Snapchat Spend", value: "$5,148.48", context: "Delivering catalog e-commerce orders" },
      { label: "TikTok KSA Sales", value: "142 Purchases", context: "70.85 SAR Cost Per Conversion" }
    ],
    platforms: ["Snapchat Ads", "TikTok Ads Manager", "Meta Ads"],
    proofSlide: getAssetUrl("portfolio_slides/slide_24.png"),
    proofTitle: "Snapchat Ads Manager: $5,148 Spent & 2,895+ Add to Basket (Slide 24)",
    tags: ["Automotive", "Saudi Arabia", "Snapchat", "TikTok"]
  },
  {
    id: "expo-trust-trade",
    client: "Expo Trust Trade (E.T.T)",
    industry: "International Trade & B2B Export",
    type: "B2B",
    logo: getAssetUrl("logos/ett_hd.png"),
    headlineMetric: "177",
    headlineMetricLabel: "B2B Form Leads ($2.55 – $4.96 CPL)",
    objective: "Generate verified commercial trade inquiries and international buyer leads for high-volume agricultural and global export corridors.",
    keyResults: [
      { label: "Campaign Leads 30/6", value: "100 Leads (Form)", context: "$2.55 Cost Per Lead (Reach: 41,585 | Freq: 2.68)" },
      { label: "Campaign Leads 30/3", value: "77 Leads (Form)", context: "$4.96 Cost Per Lead (Reach: 57,732 | Freq: 2.50)" },
      { label: "Total B2B Leads", value: "177 Verified Leads", context: "Combined reach of 99,317 targeted importers" },
      { label: "Daily Budget Control", value: "$20.00 / day", context: "Optimized allocation with 100 Opportunity Score" }
    ],
    platforms: ["Meta Ads Manager", "Facebook Lead Forms", "Instagram B2B"],
    proofSlide: getAssetUrl("proofs/expo_trust_meta_dashboard.jpeg"),
    proofTitle: "Meta Ads Manager: Expo Trust 177 Form Leads at $2.55 CPL",
    tags: ["B2B", "Export", "Trade", "Global"]
  },
  {
    id: "concrete-surgeons",
    client: "Concrete Surgeons (CS)",
    industry: "Specialized Construction & Contracting",
    type: "B2B / B2C",
    logo: getAssetUrl("logos/cs_logo.png"),
    headlineMetric: "33.4K+",
    headlineMetricLabel: "Video ThruPlays @ 0.08 EGP",
    objective: "Generate targeted contractor, civil engineering, and specialized construction inquiries across Egypt and Saudi Arabia with full-funnel video awareness and direct response.",
    keyResults: [
      { label: "KSA Video Awareness", value: "33,429 ThruPlays", context: "0.08 EGP Cost Per ThruPlay (Reach: 95,137 | Freq: 1.52)" },
      { label: "Verified Meta Leads", value: "91 Leads (Form)", context: "34.97 EGP Cost Per Lead (Reach: 59,229 | Freq: 1.43)" },
      { label: "Direct Messaging Leads", value: "650+ Conversations", context: "327 @ 18.35 EGP, 119 @ 19.93 EGP, 114 @ 14.78 EGP" },
      { label: "Profile & Page Visits", value: "448 Visits", context: "0.58 EGP Cost Per Visit (Reach: 11,868)" }
    ],
    platforms: ["Meta Ads Manager", "Facebook Lead Forms", "Instagram"],
    proofSlide: getAssetUrl("proofs/concrete_surgeons_meta_dashboard.jpeg"),
    proofTitle: "Meta Ads Manager: Concrete Surgeons Leads @ 34.97 EGP & 33K ThruPlays",
    tags: ["B2B", "Construction", "Lead Gen"]
  }
];

export const PLATFORM_DASHBOARDS = [
  {
    id: "meta-performance",
    platform: "Meta Ads (Facebook & Instagram)",
    summary: "Audited multi-account execution delivering high-volume qualified leads and reach across luxury real estate (Grand Heights: 1.29M+ reach, 50 campaigns), specialized contracting (Concrete Surgeons: 33K ThruPlays @ 0.08 EGP, 91 leads @ 34.97 EGP), B2B export (Expo Trust: 177 leads @ $2.55 CPL), and inbound tourism (UGT: 622 leads @ $2.53).",
    stats: [
      { label: "Grand Heights Reach", value: "1,298,171 Accounts" },
      { label: "Expo Trust Leads", value: "177 Leads ($2.55 CPL)" },
      { label: "Concrete Surgeons", value: "91 Leads @ 34.97 EGP" },
      { label: "UGT Travel Leads", value: "622 Leads @ $2.53" }
    ],
    proofImage: getAssetUrl("proofs/grand_heights_meta_dashboard.jpeg"),
    proofTitle: "Meta Ads Manager: Grand Heights 50 Campaigns & 1.29M Reach Dashboard"
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
    proofImage: getAssetUrl("portfolio_slides/slide_21.png"),
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
    proofImage: getAssetUrl("portfolio_slides/slide_24.png"),
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
    proofImage: getAssetUrl("portfolio_slides/slide_26.png"),
    proofTitle: "LinkedIn Campaign Manager - B2B Leads Dashboard (Slide 26)"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Media Buyer",
    company: "eMarketing Egypt",
    location: "Dokki, Giza, Egypt",
    period: "Feb 2024 – Present",
    description: "Manage and optimize paid performance campaigns across Meta, Google, and TikTok for lead generation and conversion objectives.",
    achievements: [
      "Manage and optimize paid campaigns across Meta, Google, and TikTok for lead generation and conversion objectives.",
      "Plan campaign structures, select target audiences, allocate budgets, and assess performance against cost-per-acquisition (CPA) and return-on-ad-spend (ROAS) objectives.",
      "Run A/B tests on creative, messaging, and audience segments to identify opportunities to improve campaign efficiency.",
      "Work across 7+ client accounts targeting audiences in Egypt, GCC markets, and Europe; coordinate with internal teams to align campaign activity with client goals.",
      "Monitor campaign results and translate performance findings into optimization recommendations."
    ],
    skills: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Snapchat Ads", "Budget Allocation", "A/B Testing", "ROAS / CPA"]
  },
  {
    id: "exp-2",
    title: "Sales Manager",
    company: "Dar El Maghraby",
    location: "6th of October City, Egypt",
    period: "Mar 2022 – Dec 2023",
    description: "Led commercial sales activities, representative coaching, and key customer relationships.",
    achievements: [
      "Led sales activities and coached representatives to work toward monthly revenue and acquisition targets.",
      "Developed local marketing initiatives and managed key customer relationships to support retention and brand visibility."
    ],
    skills: ["Sales Leadership", "Commercial Strategy", "Client Retention", "Revenue Targets"]
  },
  {
    id: "exp-3",
    title: "ERP Systems Developer",
    company: "TAB Software",
    location: "Heliopolis, Cairo, Egypt",
    period: "Mar 2021 – Dec 2021",
    description: "Developed and maintained ERP application modules and supporting databases for business operations.",
    achievements: [
      "Developed and maintained ERP application modules and supporting databases for business operations.",
      "Troubleshot application issues and improved code functionality and system reliability."
    ],
    skills: ["ERP Systems", "Database Management", "System Reliability", "Code Optimization"]
  },
  {
    id: "exp-4",
    title: "Marketing & Sales Supervisor",
    company: "Touch Media International",
    location: "Heliopolis, Cairo, Egypt",
    period: "2018 – Dec 2019",
    description: "Supervised marketing and sales activities, coordinating lead generation with customer outreach and team targets.",
    achievements: [
      "Supervised marketing and sales activities, coordinating lead generation with customer outreach and team targets."
    ],
    skills: ["Team Supervision", "Campaign Planning", "Lead Generation", "Customer Outreach"]
  },
  {
    id: "exp-5",
    title: "Data Entry Specialist",
    company: "Mejoral (Uber Partner Operations)",
    location: "Maadi, Cairo, Egypt",
    period: "2017",
    description: "High-volume data processing and verification for partner driver onboarding.",
    achievements: [
      "Processed partner driver onboarding documentation and database entries with high accuracy and speed."
    ],
    skills: ["Data Verification", "Database Auditing", "Quality Assurance"]
  },
  {
    id: "exp-6",
    title: "Technical Support Team Leader",
    company: "Mobily Ecco",
    location: "Maadi, Cairo, Egypt",
    period: "2015 – 2017",
    description: "Frontline technical support leadership resolving complex telecommunication and network inquiries.",
    achievements: [
      "Maintained top-tier resolution and CSAT satisfaction ratings across demanding telecom accounts.",
      "Provided tier-2 troubleshooting and coaching for technical support specialists."
    ],
    skills: ["Technical Support", "Team Leadership", "Telecommunications", "Customer Satisfaction"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    title: "Bachelor’s Degree, Information Systems and Management",
    institution: "Thebes Academy, Maadi",
    period: "2016 – 2020",
    details: "Graduation Project: Hospital Management System | Grade: A+ (Honors). Comprehensive curriculum in database architectures, system analysis, algorithms, and management systems.",
    type: "Degree"
  },
  {
    title: "Digital Marketing / Media Buying Diploma",
    institution: "Accredited Media Buying Program",
    period: "Certified",
    details: "Specialization in paid media execution across Meta, TikTok, and Google Ads, conversion tracking, media budgeting, and ROAS optimization.",
    type: "Certificate"
  },
  {
    title: "English Course: B1",
    institution: "Language Accreditation",
    period: "Certified",
    details: "Good command of both written and spoken English, managing cross-border client accounts and multinational campaigns across Egypt, the GCC, and Europe.",
    type: "Certificate"
  }
];

export const CV_SKILLS_CATEGORIZED = [
  {
    category: "Platforms",
    skills: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Snapchat Ads", "LinkedIn Ads"]
  },
  {
    category: "Media Buying",
    skills: ["Paid Media Strategy", "Campaign Setup & Management", "Budget Allocation", "Audience Targeting", "Retargeting", "A/B Testing", "Creative Testing"]
  },
  {
    category: "Performance & Analytics",
    skills: ["Lead Generation", "Customer Acquisition", "Campaign Optimization", "Conversion Analysis", "KPI Monitoring (ROAS, CPA, CPL, CPC, CTR, CPM)"]
  },
  {
    category: "Collaboration & Management",
    skills: ["Client Account Management", "Performance Reporting", "Cross-Functional Teamwork", "Sales & Marketing Alignment"]
  }
];

export const CV_SKILLS = [
  "Meta Ads Manager",
  "Google Ads",
  "TikTok Ads",
  "Snapchat Ads",
  "LinkedIn Ads",
  "Paid Media Strategy",
  "Campaign Setup & Management",
  "Budget Allocation & Scaling",
  "Audience Targeting & Retargeting",
  "A/B & Creative Testing",
  "Lead Generation & Acquisition",
  "KPI Monitoring (ROAS, CPA, CPL)",
  "Cross-Functional Teamwork",
  "Sales & Marketing Alignment"
];

export const CV_RESPONSIBILITIES = [
  "Manage and optimize paid campaigns across Meta, Google, and TikTok for lead generation and conversion objectives.",
  "Plan campaign structures, select target audiences, allocate budgets, and assess performance against CPA and ROAS objectives.",
  "Run systematic A/B tests on creative, messaging, and audience segments to continuously improve campaign efficiency.",
  "Work across 7+ client accounts targeting audiences in Egypt, GCC markets, and Europe; coordinate with internal teams to align campaign activity with client goals.",
  "Monitor campaign results and translate performance findings into optimization recommendations.",
  "Interface with cross-functional groups from sales, marketing, and creative departments to maximize end-to-end commercial conversion."
];
