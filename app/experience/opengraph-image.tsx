import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Experience",
  description: "Roles and work across fintech, AI, and SaaS.",
  path: "/experience",
  labels: ["Resume", "Work"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
