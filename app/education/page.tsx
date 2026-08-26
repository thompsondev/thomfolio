import type { Metadata } from "next"

import { EducationView } from "@/views/portfolio"
import { siteConfig } from "@/lib/seo"

const title = "Education"
const description = "Education and certifications from Thompson Opeyemi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/education" },
  openGraph: {
    type: "website",
    url: "/education",
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

export default function EducationPage() {
  return <EducationView />
}
