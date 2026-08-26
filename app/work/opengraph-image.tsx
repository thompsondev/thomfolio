import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Work",
  description: "Focus areas across software, AI, fintech, SaaS, and commerce.",
  path: "/work",
  labels: ["Portfolio", "Work"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
