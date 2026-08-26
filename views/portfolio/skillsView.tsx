import Link from "next/link"

import {
  PortfolioPage,
  linkClassName,
} from "@/components/portfolio/portfolio-page"
import { skills } from "@/lib/portfolio"

const skillGroups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "cloud", label: "Cloud" },
  { key: "ai", label: "AI" },
  { key: "testing", label: "Testing" },
  { key: "product", label: "Product" },
]

export function SkillsView() {
  return (
    <PortfolioPage title="Skills">
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.key}>
            <h2 className="font-heading text-base font-semibold text-foreground">
              {group.label}
            </h2>
            <p className="mt-2">{skills[group.key].join(" · ")}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground md:text-base">
        <Link href="/experience" className={linkClassName}>
          Experience
        </Link>
        {" · "}
        <Link href="/education" className={linkClassName}>
          Education
        </Link>
      </p>
    </PortfolioPage>
  )
}
