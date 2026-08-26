import Link from "next/link"

import {
  PortfolioPage,
  linkClassName,
} from "@/components/portfolio/portfolio-page"
import { education } from "@/lib/portfolio"

export function EducationView() {
  return (
    <PortfolioPage title="Education">
      <ol className="space-y-8">
        {education.map((item) => (
          <li key={item.id}>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              {item.credential}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              {item.school}
              <span aria-hidden="true"> · </span>
              {item.period}
              {item.status === "Current" ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <span className="text-primary">Current</span>
                </>
              ) : null}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-sm text-muted-foreground md:text-base">
        <Link href="/experience" className={linkClassName}>
          Experience
        </Link>
        {" · "}
        <Link href="/skills" className={linkClassName}>
          Skills
        </Link>
      </p>
    </PortfolioPage>
  )
}
