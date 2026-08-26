import type { Metadata } from "next"

import { IndustriesIndexView } from "@/views/portfolio"
import { collaborate } from "@/lib/portfolio"
import { siteConfig } from "@/lib/seo"

const title = collaborate.headline
const description = collaborate.intro

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    url: "/industries",
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

export default function IndustriesPage() {
  return <IndustriesIndexView />
}
