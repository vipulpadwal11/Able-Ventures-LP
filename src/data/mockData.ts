import { FocusArea, PortfolioCompany, Article } from "@/types";

export const focusAreas: FocusArea[] = [
  {
    id: "financial-security",
    title: "Financial Security",
    description: "Building wealth management, fraud protection, and retirement transition platforms tailored for older adults.",
    problem: "Traditional financial systems ignore cognitive shifts and are riddled with scams, leaving seniors vulnerable to losing lifetime savings.",
    opportunity: "Constructing secure, accessible, AI-assisted interfaces that protect senior wealth while facilitating seamless wealth transfer.",
    metric: "$2.9T",
    metricLabel: "Senior economic footprint in primary markets"
  },
  {
    id: "healthtech",
    title: "Healthtech & Diagnostics",
    description: "Developing digital health platforms, preventive care portals, and virtual clinical companion interfaces.",
    problem: "Healthcare remains reactive, fragmented, and difficult to access, putting pressure on families and care facilities.",
    opportunity: "Pioneering continuous passive diagnostics, remote vitals monitoring, and simple telehealth solutions for active aging.",
    metric: "40%",
    metricLabel: "Reduction in emergency readmissions with preventive monitoring"
  },
  {
    id: "healthy-aging",
    title: "Healthy Aging & Wellness",
    description: "Supporting physical, cognitive, and social technologies that sustain high quality of life.",
    problem: "Loneliness, social isolation, and cognitive decline accelerate physical deterioration and reduce life expectancy.",
    opportunity: "Leveraging wellness apps, localized social hubs, and gamified cognitive tracking systems to promote vital longevity.",
    metric: "10Yr+",
    metricLabel: "Target healthspan expansion in underrepresented regions"
  },
  {
    id: "independent-living",
    title: "Independent Living",
    description: "Innovating smart-home hardware, physical assistive tech, and localization safety systems.",
    problem: "Forced relocation to assisted living facilities is highly expensive, stressful, and reduces longevity.",
    opportunity: "Creating non-invasive fall detection sensors, adaptive home devices, and local community assistance networks.",
    metric: "88%",
    metricLabel: "Of seniors prefer to age in place in their own homes"
  },
  {
    id: "care-infrastructure",
    title: "Care Infrastructure",
    description: "Optimizing caregiver coordination networks, respite care platforms, and institutional tools.",
    problem: "Family caregivers suffer from high burnout, lack of guidance, and massive uncompensated financial loads.",
    opportunity: "Structuring modern marketplace matching, digital respite coordination, and administrative overlays for care homes.",
    metric: "53M+",
    metricLabel: "Unpaid family caregivers in need of coordination support"
  }
];

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: "kintsugi",
    name: "Kintsugi Finance",
    slug: "kintsugi-finance",
    logoLetter: "K",
    description: "Secured wealth preservation and automated fraud protection platform specifically engineered for retirees.",
    industry: "Fintech",
    website: "https://kintsugi.finance",
    stage: "Seed",
    status: "active"
  },
  {
    id: "aegis",
    name: "Aegis Diagnostics",
    slug: "aegis-diagnostics",
    logoLetter: "A",
    description: "Non-invasive passive sensor technology and machine learning models for early detection of neurological anomalies.",
    industry: "Healthtech",
    website: "https://aegisdiagnostics.com",
    stage: "Series A",
    status: "active"
  },
  {
    id: "haven",
    name: "Haven Living",
    slug: "haven-living",
    logoLetter: "H",
    description: "Decentralized community coordination layer and safety systems enabling secure aging-in-place.",
    industry: "Independent Living",
    website: "https://haven.living",
    stage: "Seed",
    status: "active"
  },
  {
    id: "kinship",
    name: "Kinship Systems",
    slug: "kinship-systems",
    logoLetter: "S",
    description: "Enterprise operating software for home-care agencies, optimizing scheduling, routing, and caregiver compliance.",
    industry: "Care Infrastructure",
    website: "https://kinshipsystems.com",
    stage: "Pre-seed",
    status: "stealth"
  }
];

export const articles: Article[] = [
  {
    id: "longevity-economy",
    title: "The Silver Tsunami: Capitalizing on the Multi-Trillion Dollar Longevity Economy",
    slug: "longevity-economy",
    excerpt: "Demographic shifts are creating the largest market transition in history. Why the future of technology lies in designing for our future selves.",
    coverImage: "/images/longevity-economy.jpg",
    content: "The global population is undergoing a structural shift. By 2030, 1 in 6 people worldwide will be aged 60 or over. Traditional venture models look at aging as a problem of decline, focusing heavily on late-stage nursing logistics. At Able Ventures, we see this as an unprecedented building opportunity. The longevity economy represents $2.9 trillion in primary spending power. Founders who build secure, dignified, and empowering solutions for this cohort will capture massive, stable value.",
    publishedAt: "May 28, 2026",
    category: "Market Analysis",
    readingTime: "5 min read"
  },
  {
    id: "senior-fintech",
    title: "Designing for Cognitive Shift: The Next Frontier in Senior Fintech Platforms",
    slug: "senior-fintech",
    excerpt: "How automated fraud screening, family co-ownership permissions, and simple typography safeguard senior wealth.",
    coverImage: "/images/senior-fintech.jpg",
    content: "Financial platforms today are optimized for speed, often ignoring the security parameters required by older demographics. Cognitive transitions can alter risk assessment, making seniors primary targets for malicious actors. Our venture building thesis focuses on developing dual-authorization family protocols, passive behavioral biome metrics for fraud detection, and typography hierarchies that reduce friction and cognitive loads.",
    publishedAt: "June 2, 2026",
    category: "Venture Building",
    readingTime: "7 min read"
  },
  {
    id: "passive-diagnostics",
    title: "Passive Monitoring and Ambient Sensing: Moving from Reactive to Preventive Care",
    slug: "passive-diagnostics",
    excerpt: "Why wearable devices fail senior demographics and how ambient home monitoring changes clinical outcomes.",
    coverImage: "/images/passive-diagnostics.jpg",
    content: "While smartwatch vitals are popular among younger populations, senior compliance for charging and wearing devices remains under 30%. The future of preventive healthtech is ambient. By integrating non-invasive radar, smart toilet diagnostics, and localized floor vibration metrics, we can predict clinical decline or fall patterns days before they occur, drastically reducing hospitalization rates.",
    publishedAt: "June 9, 2026",
    category: "Healthtech",
    readingTime: "6 min read"
  }
];
