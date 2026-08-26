import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "AI & Automation",
  description: "LLM integrations, automation, and useful AI products.",
  path: "/ai-and-automation",
  labels: ["Focus", "AI"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
