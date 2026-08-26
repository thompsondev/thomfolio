import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Fintech",
  description: "Payments, applications, and trustworthy financial workflows.",
  path: "/fintech",
  labels: ["Focus", "Fintech"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
