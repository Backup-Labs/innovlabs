import siteData from "@/content/site.json";
import navigationData from "@/content/navigation.json";
import programsData from "@/content/programs.json";
import opportunitiesData from "@/content/opportunities.json";
import servicesData from "@/content/services.json";
import impactData from "@/content/impact.json";
import storiesData from "@/content/stories.json";
import partnersData from "@/content/partners.json";
import aboutData from "@/content/about.json";
import resourcesData from "@/content/resources.json";

import type {
  SiteConfig,
  NavigationConfig,
  Program,
  Opportunity,
  Service,
  ImpactData,
  Story,
  PartnerGroup,
  AboutData,
  Resource,
} from "./types";

export const site: SiteConfig = siteData as SiteConfig;
export const navigation: NavigationConfig = navigationData as NavigationConfig;
export const programs: Program[] = programsData as Program[];
export const opportunities: Opportunity[] = opportunitiesData as Opportunity[];
export const services: Service[] = servicesData as Service[];
export const impact: ImpactData = impactData as ImpactData;
export const stories: Story[] = storiesData as Story[];
export const partners: PartnerGroup[] = partnersData as PartnerGroup[];
export const about: AboutData = aboutData as AboutData;
export const resources: Resource[] = resourcesData as Resource[];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return opportunities.find((o) => o.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

