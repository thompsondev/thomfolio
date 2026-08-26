import type { Metadata } from "next"

import { RantsView } from "@/views"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

export const metadata: Metadata = {
  title: "Rants",
  description:
    "Thoughts, questions, and unfinished conclusions from Opeyemi Thompson.",
  alternates: { canonical: "/rants" },
  openGraph: {
    type: "website",
    url: "/rants",
    title: "Rants | Thoughtful",
    description:
      "Thoughts, questions, and unfinished conclusions from Opeyemi Thompson.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rants | Thoughtful",
    description:
      "Thoughts, questions, and unfinished conclusions from Opeyemi Thompson.",
    creator: "@Thoughtful",
  },
}

export default function RantsPage() {
  return <RantsView />
}
