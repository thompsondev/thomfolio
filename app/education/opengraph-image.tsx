import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Education",
  description: "Degrees and study from Thompson Opeyemi.",
  path: "/education",
  labels: ["Resume", "Education"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
