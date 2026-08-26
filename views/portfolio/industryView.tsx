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
  collaborate,
  focusAreas,
  getIndustry,
  industries,
  industryHref,
  portfolioContact,
  type Industry,
} from "@/lib/portfolio"

function IndustryBody({ industry }: { industry: Industry }) {
  return (
    <PortfolioPage
      eyebrow="Industry"
      title={industry.label}
      tagline={industry.tagline}
    >
      <p>{industry.summary}</p>

      <PortfolioSection title="How I can help">
        <PortfolioList items={industry.howIHelp} />
      </PortfolioSection>

      <PortfolioSection title="Relevant focus areas">
        <ul className="space-y-5">
          {focusAreas.map((area) => (
            <PortfolioRelatedLink
              key={area.slug}
              href={`/${area.slug}`}
              label={area.label}
              description={area.tagline}
            />
          ))}
        </ul>
      </PortfolioSection>

      <p className="mt-10">
        See{" "}
        <Link href="/industries" className={linkClassName}>
          all industries
        </Link>{" "}
        or{" "}
        <Link href="/experience" className={linkClassName}>
          experience
        </Link>
        .
      </p>

      <PortfolioCta href={portfolioContact.emailHref}>
        Let&apos;s talk about {industry.label}.
      </PortfolioCta>
    </PortfolioPage>
  )
}

export function IndustryView({ slug }: { slug: string }) {
  const industry = getIndustry(slug)
  if (!industry) return null
  return <IndustryBody industry={industry} />
}

export function IndustriesIndexView() {
  return (
    <PortfolioPage
      eyebrow="Collaborate"
      title={collaborate.headline}
      tagline={collaborate.intro}
    >
      <p>
        Industry experience helps, but curiosity and clear product thinking
        transfer. If your domain is not listed exactly, reach out anyway —
        especially when the work sits at the intersection of software, AI,
        automation, and real operations.
      </p>

      <ul className="mt-8 space-y-6">
        {industries.map((industry) => (
          <PortfolioRelatedLink
            key={industry.slug}
            href={industryHref(industry.slug)}
            label={industry.label}
            description={industry.description}
          />
        ))}
      </ul>

      <p className="mt-10">{collaborate.cta}</p>

      <PortfolioCta href={portfolioContact.emailHref}>
        Get in touch
      </PortfolioCta>
    </PortfolioPage>
  )
}
