import Link from "next/link"

import {
  PortfolioPage,
  PortfolioList,
  linkClassName,
} from "@/components/portfolio/portfolio-page"
import { experience } from "@/lib/portfolio"

export function ExperienceView() {
  return (
    <PortfolioPage title="Experience">
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={item.id}>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              {item.role}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              {item.org}
              <span aria-hidden="true"> · </span>
              {item.location}
              <span aria-hidden="true"> · </span>
              {item.period}
            </p>
            <div className="mt-4">
              <PortfolioList items={item.highlights} />
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-12 text-sm text-muted-foreground md:text-base">
        <Link href="/education" className={linkClassName}>
          Education
        </Link>
        {" · "}
        <Link href="/skills" className={linkClassName}>
          Skills
        </Link>
      </p>
    </PortfolioPage>
  )
}
