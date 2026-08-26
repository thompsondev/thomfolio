import portfolio from "@/json/portfolio.json"
import links from "@/json/links.json"

export type FocusArea = (typeof portfolio.focusAreas)[number]
export type Industry = (typeof portfolio.industries)[number]
export type ExperienceItem = (typeof portfolio.experience)[number]
export type EducationItem = (typeof portfolio.education)[number]
export type ProjectItem = (typeof portfolio.projects)[number]

export const focusAreas = portfolio.focusAreas
export const industries = portfolio.industries
export const experience = portfolio.experience
export const education = portfolio.education
export const projects = portfolio.projects
export const skills = portfolio.skills
export const collaborate = portfolio.collaborate

export function getFocusArea(slug: string) {
  return focusAreas.find((area) => area.slug === slug)
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug)
}

export function industryHref(slug: string) {
  return `/industries/${slug}`
}

/** Keep PreviewLink hover cards working for portfolio routes. */
export const portfolioPreviewRoutes = [
  "/",
  "/gallery",
  "/keeps",
  "/privacy",
  "/rants",
  "/terms",
  "/work",
  "/experience",
  "/education",
  "/skills",
  "/industries",
  ...focusAreas.map((area) => `/${area.slug}`),
  ...industries.map((industry) => `/industries/${industry.slug}`),
] as const

/** Contact + brand helpers used across portfolio CTAs. */
export const portfolioContact = {
  emailHref: links.contact.href,
  brandHref: links.brand.href,
}
