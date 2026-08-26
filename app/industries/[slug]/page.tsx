import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { IndustryView } from "@/views/portfolio"
import { getIndustry, industries } from "@/lib/portfolio"
import { siteConfig } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) {
    return { title: "Industry" }
  }

  return {
    title: industry.label,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      type: "website",
      url: `/industries/${industry.slug}`,
      title: `${industry.label} | ${siteConfig.name}`,
      description: industry.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.label} | ${siteConfig.name}`,
      description: industry.description,
      creator: siteConfig.creator.handle,
    },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  if (!getIndustry(slug)) notFound()
  return <IndustryView slug={slug} />
}
