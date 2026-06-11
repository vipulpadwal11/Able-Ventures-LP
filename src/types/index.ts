export interface FocusArea {
  id: string;
  title: string;
  description: string;
  opportunity: string;
  problem: string;
  metric: string;
  metricLabel: string;
}

export interface PortfolioCompany {
  id: string;
  name: string;
  slug: string;
  logoLetter: string; // Dynamic character logo for concept companies
  description: string;
  industry: string;
  website: string;
  stage: string;
  status: "active" | "exited" | "stealth";
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  publishedAt: string;
  category: string;
  readingTime: string;
}
