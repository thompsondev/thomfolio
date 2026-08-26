import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "Software & Engineering",
  description: "Production apps, APIs, and scalable frontend systems.",
  path: "/software-and-engineering",
  labels: ["Focus", "Engineering"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
