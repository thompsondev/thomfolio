import Link from "next/link"

import {
  PortfolioCta,
  PortfolioList,
  PortfolioPage,
  PortfolioRelatedLink,
  PortfolioSection,
  linkClassName,
} from "@/components/portfolio/portfolio-page"
import {
  focusAreas,
  getFocusArea,
  industries,
  industryHref,
  portfolioContact,
  type FocusArea,
} from "@/lib/portfolio"

function FocusAreaBody({ area }: { area: FocusArea }) {
  const relatedIndustries = industries.slice(0, 5)

  return (
    <PortfolioPage
      eyebrow="Focus"
      title={area.label}
      tagline={area.tagline}
    >
      <p>{area.summary}</p>

      <PortfolioSection title="What I do here">
        <PortfolioList items={area.whatIDo} />
      </PortfolioSection>

      <PortfolioSection title="Outcomes I care about">
        <PortfolioList items={area.outcomes} />
      </PortfolioSection>

      <PortfolioSection title="Related industries">
        <p>
          I am open to applying this work across industries. A few that fit
          especially well:
        </p>
        <ul className="mt-5 space-y-5">
          {relatedIndustries.map((industry) => (
            <PortfolioRelatedLink
              key={industry.slug}
              href={industryHref(industry.slug)}
              label={industry.label}
              description={industry.tagline}
            />
          ))}
        </ul>
      </PortfolioSection>

      <p className="mt-10">
        Explore{" "}
        <Link href="/work" className={linkClassName}>
          all focus areas
        </Link>
        ,{" "}
        <Link href="/experience" className={linkClassName}>
          experience
        </Link>
        , or{" "}
        <Link href="/industries" className={linkClassName}>
          industries I collaborate with
        </Link>
        .
      </p>

      <PortfolioCta href={portfolioContact.emailHref}>
        Let&apos;s collaborate on {area.label}.
      </PortfolioCta>
    </PortfolioPage>
  )
}

export function FocusAreaView({ slug }: { slug: string }) {
  const area = getFocusArea(slug)
  if (!area) return null
  return <FocusAreaBody area={area} />
}

export function WorkIndexView() {
  return (
    <PortfolioPage
      eyebrow="Work"
      title="Things I build"
      tagline="Software, AI, fintech, SaaS, and e-commerce — with a bias toward simple products that solve real problems."
    >
      <p>
        These are the focus areas I return to most often. Each page goes deeper
        into how I work in that space, the outcomes I aim for, and where
        collaboration fits.
      </p>

      <ul className="mt-8 space-y-6">
        {focusAreas.map((area) => (
          <PortfolioRelatedLink
            key={area.slug}
            href={`/${area.slug}`}
            label={area.label}
            description={area.description}
          />
        ))}
      </ul>

      <PortfolioSection title="Also explore">
        <ul className="space-y-5">
          <PortfolioRelatedLink
            href="/experience"
            label="Experience"
            description="Roles and work history."
          />
          <PortfolioRelatedLink
            href="/education"
            label="Education"
            description="Degrees and study."
          />
          <PortfolioRelatedLink
            href="/skills"
            label="Skills"
            description="Tools and stack."
          />
          <PortfolioRelatedLink
            href="/industries"
            label="Industries"
            description="Verticals open for collaboration."
          />
        </ul>
      </PortfolioSection>
    </PortfolioPage>
  )
}
