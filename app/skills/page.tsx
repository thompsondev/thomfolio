import type { Metadata } from "next"

import { SkillsView } from "@/views/portfolio"
import { siteConfig } from "@/lib/seo"

const title = "Skills"
const description = "Tools and skills from Thompson Opeyemi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/skills" },
  openGraph: {
    type: "website",
    url: "/skills",
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

export default function SkillsPage() {
  return <SkillsView />
}
