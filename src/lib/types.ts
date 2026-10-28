export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  mission: string;
  vision: string;
  positioning: string;
  brandPillars: Array<{
    title: string;
    description: string;
  }>;
  areasOfWork: Array<{
    id: string;
    name: string;
    summary: string;
    icon: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    headquarters: string;
    officeHours: string;
  };
  socials: Array<{
    platform: string;
    url: string;
  }>;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface AudiencePortal {
  id: string;
  label: string;
  subtext: string;
  href: string;
  ctaText: string;
}

export interface NavigationConfig {
  mainNav: NavItem[];
  primaryCta: {
    label: string;
    href: string;
  };
  audiencePortals: AudiencePortal[];
  footer: {
    organizationSummary: string;
    links: Array<{
      title: string;
      items: Array<{ label: string; href: string }>;
    }>;
    copyright: string;
    subLinks: Array<{ label: string; href: string }>;
  };
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  area: string;
  tagline: string;
  description: string;
  duration: string;
  cohortSize: string;
  status: string;
  eligibility: string[];
  howToParticipate: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  curriculumHighlights: string[];
  outcomes: string;
  featured: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  slug: string;
  type: string; // Fellowship, Grant, Challenge, Call for Papers, Residency
  audience: string;
  status: "open" | "closed" | "rolling";
  deadline: string;
  startDate: string;
  location: string;
  benefit: string;
  summary: string;
  description: string;
  eligibility: string;
  featured: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  clientTypes: string[];
  typicalDuration: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface ImpactData {
  summary: string;
  metrics: Metric[];
  pillars: Array<{
    title: string;
    metric: string;
    description: string;
  }>;
  geographicReach: Array<{
    region: string;
    countries: string[];
  }>;
  methodology: {
    title: string;
    description: string;
    frameworks: string[];
  };
}

export interface Story {
  id: string;
  title: string;
  tag: string;
  author: string;
  role: string;
  quote: string;
  summary: string;
  metrics: string;
  location: string;
  image: string;
}

export interface PartnerGroup {
  category: string;
  description: string;
  partners: Array<{
    name: string;
    type: string;
    logoText: string;
  }>;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  format: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  downloadUrl: string;
  tags: string[];
}

export interface AboutData {
  mission: string;
  vision: string;
  integratedApproach: {
    title: string;
    subtitle: string;
    description: string;
    pillars: Array<{
      id: string;
      title: string;
      description: string;
      input: string;
      output: string;
    }>;
  };
  team: {
    intro: string;
    leadership: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
    }>;
    advisoryCouncil: Array<{
      name: string;
      role: string;
      affiliation: string;
    }>;
  };
}
