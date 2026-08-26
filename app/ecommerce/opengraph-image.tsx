import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "E-commerce",
  description: "Catalogs, enrichment, and commerce systems at scale.",
  path: "/ecommerce",
  labels: ["Focus", "Commerce"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
