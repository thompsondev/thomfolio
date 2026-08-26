import type { Metadata } from "next"

import { GalleryView } from "@/views"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual collection of moments from Opeyemi Thompson's life and work.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: "/gallery",
    title: "Gallery | Thoughtful",
    description:
      "A visual collection of moments from Opeyemi Thompson's life and work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Thoughtful",
    description:
      "A visual collection of moments from Opeyemi Thompson's life and work.",
    creator: "@Thoughtful",
  },
}

export default function GalleryPage() {
  return <GalleryView />
}
