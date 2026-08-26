import type { Metadata } from "next"

import { ExperienceView } from "@/views/portfolio"
import { siteConfig } from "@/lib/seo"

const title = "Experience"
const description = "Roles and work from Thompson Opeyemi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "website",
    url: "/experience",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    creator: siteConfig.creator.handle,
  },
}

export default function ExperiencePage() {
  return <ExperienceView />
}
