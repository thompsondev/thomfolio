import { createPageOgImage } from "@/lib/og-page"
import { getIndustry, industries } from "@/lib/portfolio"
import { ogSize } from "@/lib/og-image"

type Props = {
  params: Promise<{ slug: string }>
}

export const size = ogSize
export const contentType = "image/png"

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export default async function IndustryOpenGraphImage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustry(slug)
  const og = createPageOgImage({
    title: industry?.label ?? "Industry",
    description:
      industry?.tagline ?? "Open to collaborate across industries.",
    path: `/industries/${slug}`,
    labels: ["Industry", "Collaborate"],
  })

  return og.Image()
}
