import { createPageOgImage } from "@/lib/og-page"

const og = createPageOgImage({
  title: "SaaS & Digital Products",
  description: "Products businesses return to for daily operations.",
  path: "/saas-and-digital-products",
  labels: ["Focus", "SaaS"],
})

export const alt = og.alt
export const size = og.size
export const contentType = og.contentType
export default og.Image
