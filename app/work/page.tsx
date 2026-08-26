import type { Metadata } from "next"

import { WorkIndexView } from "@/views/portfolio"
import { siteConfig } from "@/lib/seo"

const title = "Work"
const description =
  "Software & engineering, AI & automation, fintech, SaaS, and e-commerce — focus areas from Thompson Opeyemi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
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

export default function WorkPage() {
  return <WorkIndexView />
}
