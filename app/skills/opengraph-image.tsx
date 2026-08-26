import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Skills",
  description: "Frontend, backend, AI, and delivery tools.",
  path: "/skills",
  labels: ["Resume", "Skills"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
