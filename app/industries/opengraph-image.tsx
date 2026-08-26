import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Open to collaborate",
  description: "Industries and verticals open for partnership.",
  path: "/industries",
  labels: ["Collaborate", "Industries"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
