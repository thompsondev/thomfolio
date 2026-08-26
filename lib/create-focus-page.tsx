import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FocusAreaView } from "@/views/portfolio"
import { getFocusArea } from "@/lib/portfolio"
import { siteConfig } from "@/lib/seo"

export function createFocusAreaPage(slug: string) {
  const area = getFocusArea(slug)

  const metadata: Metadata = {
    title: area?.label ?? "Focus",
    description: area?.description ?? siteConfig.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: "website",
      url: `/${slug}`,
      title: `${area?.label ?? "Focus"} | ${siteConfig.name}`,
      description: area?.description ?? siteConfig.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${area?.label ?? "Focus"} | ${siteConfig.name}`,
      description: area?.description ?? siteConfig.description,
      creator: siteConfig.creator.handle,
    },
  }

  function Page() {
    if (!getFocusArea(slug)) notFound()
    return <FocusAreaView slug={slug} />
  }

  return { metadata, Page }
}
