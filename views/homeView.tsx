"use client"

import Image from "next/image"
import Link from "next/link"
import { type ReactNode, useState } from "react"
import {
  PiArrowUpRightBold,
  PiArticleFill,
  PiBrainFill,
  PiBracketsCurlyDuotone,
  PiCloudFill,
  PiCurrencyDollarFill,
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
  PiShoppingCartSimpleFill,
  PiXLogoFill,
} from "react-icons/pi"
import type { IconType } from "react-icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import links from "@/json/links.json"
import { industries, industryHref, portfolioPreviewRoutes } from "@/lib/portfolio"
import { localOpenGraphImageSrc } from "@/lib/og-path"
import { cn } from "@/lib/utils"

const linkClassName =
  "rounded-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

const productIcons: Record<string, IconType> = {
  software: PiBracketsCurlyDuotone,
  ai: PiBrainFill,
  fintech: PiCurrencyDollarFill,
  saas: PiCloudFill,
  ecommerce: PiShoppingCartSimpleFill,
}

type PreviewLinkProps = {
  href: string
  label: string
  description: string
  icon: IconType
  children?: ReactNode
  external?: boolean
  className?: string
  logoSrc?: string
}

const passthroughImageLoader = ({ src }: { src: string }) => src
const loadedPreviews = new Set<string>()
const localPreviewRoutes = new Set<string>(portfolioPreviewRoutes)

const SitePreview = ({
  href,
  label,
  icon: Icon,
  logoSrc,
}: Pick<PreviewLinkProps, "href" | "label" | "icon" | "logoSrc">) => {
  const isWebsite = href.startsWith("http")
  const isLocalPage = localPreviewRoutes.has(href)
  const previewSrc = isWebsite
    ? `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url`
    : isLocalPage
      ? localOpenGraphImageSrc(href)
      : ""
  const [loaded, setLoaded] = useState(() => loadedPreviews.has(previewSrc))

  const finishLoading = () => {
    loadedPreviews.add(previewSrc)
    setLoaded(true)
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
      {(isWebsite || isLocalPage) && !loaded ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-muted motion-safe:animate-pulse"
        >
          <div className="h-6 bg-background/70" />
          <div className="space-y-2.5 p-3">
            <div className="h-4 w-2/3 rounded-full bg-foreground/10" />
            <div className="h-3 w-full rounded-full bg-foreground/8" />
            <div className="h-3 w-4/5 rounded-full bg-foreground/8" />
            <div className="mt-4 h-8 w-24 rounded-lg bg-primary/10" />
          </div>
        </div>
      ) : null}

      {isWebsite ? (
        <Image
          loader={passthroughImageLoader}
          unoptimized
          fill
          src={previewSrc}
          alt={`Preview of ${label}`}
          sizes="15rem"
          className={cn(
            "object-cover object-top transition-opacity duration-500 ease-out",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={finishLoading}
          onError={finishLoading}
        />
      ) : isLocalPage ? (
        <Image
          fill
          src={previewSrc}
          alt={`Preview of ${label}`}
          sizes="15rem"
          className={cn(
            "object-cover object-top transition-opacity duration-500 ease-out",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={finishLoading}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-linear-to-br from-primary/15 via-card to-muted">
          <Icon aria-hidden="true" className="size-10 text-primary" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-3 py-2 backdrop-blur-xl dark:bg-background/82">
        <div className="flex min-w-0 items-center gap-2">
          {logoSrc ? (
            <span
              aria-hidden="true"
              className="h-3.5 w-10 shrink-0 bg-size-[auto_100%] bg-left bg-no-repeat"
              style={{ backgroundImage: `url(${logoSrc})` }}
            />
          ) : (
            <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
          )}
          <span className="truncate font-heading text-xs font-semibold text-foreground">
            {label}
          </span>
        </div>
        <PiArrowUpRightBold
          aria-hidden="true"
          className="size-3.5 shrink-0 text-muted-foreground"
        />
      </div>
    </div>
  )
}

const PreviewLink = ({
  href,
  label,
  icon: Icon,
  children,
  external = false,
  className = "",
  logoSrc,
}: PreviewLinkProps) => (
  <HoverCard openDelay={120} closeDelay={100}>
    <HoverCardTrigger asChild>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(linkClassName, className)}
      >
        {children ?? label}
      </Link>
    </HoverCardTrigger>
    <HoverCardContent
      side="top"
      className="w-64 overflow-hidden border-0 p-1.5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)] ring-0 backdrop-blur-2xl dark:bg-card/90"
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`Open ${label}`}
        className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <SitePreview href={href} label={label} icon={Icon} logoSrc={logoSrc} />
      </Link>
    </HoverCardContent>
  </HoverCard>
)

const SocialTextLink = ({
  href,
  label,
  icon,
  description,
}: {
  href: string
  label: string
  icon: IconType
  description: string
}) => {
  if (!href.trim()) {
    return <span className="font-medium text-foreground">{label}</span>
  }

  return (
    <PreviewLink
      href={href}
      label={label}
      description={description}
      icon={icon}
      external={href.startsWith("http")}
    />
  )
}

const HomeView = () => {
  const softwareProduct = links.products.find(
    (product) => product.key === "software"
  )

  return (
    <article className="min-w-0 pb-8 md:pb-32">
      <h1 className="font-heading text-3xl leading-none font-bold tracking-tight xs:text-4xl md:text-3xl">
        Thompson Opeyemi
      </h1>

      <div className="mt-8 min-w-0 text-base leading-8 text-muted-foreground md:mt-7 md:text-lg md:leading-9">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklch, var(--foreground) 70%, transparent) 0 0.65px, transparent 0.85px), radial-gradient(circle, color-mix(in oklch, var(--foreground) 45%, transparent) 0 0.55px, transparent 0.8px)",
            backgroundPosition: "0 0, 1px 2px",
            backgroundSize: "3px 3px, 5px 5px",
          }}
          className="relative float-right mb-4 ml-5 size-32 overflow-hidden rounded-full border border-foreground/20 bg-background shadow-xl shadow-background/40 [shape-outside:circle()] xs:ml-7 xs:size-36 md:mb-6 md:size-44"
        >
          <Image
            src="/images/logo.png"
            alt="Thompson Opeyemi"
            fill
            priority
            sizes="(min-width: 768px) 11rem, (min-width: 360px) 9rem, 8rem"
            className="scale-[1.6] object-contain"
          />
        </div>

        <p>
          I&apos;m a software engineer, product builder, and problem solver
          building products that turn complicated ideas into simple, useful
          experiences. I work across software engineering, AI, fintech, SaaS,
          and automation, combining technical thinking with product intuition to
          take ideas from &ldquo;what if?&rdquo; to something people can
          actually use.
        </p>

        <p className="clear-none mt-5">
          Over the years, I&apos;ve worked on products across fintech, financial
          services, SaaS, AI, e-commerce, infrastructure, and automation. Some
          of the things I&apos;ve built or contributed to include platforms
          processing 1,000+ monthly applications, AI products used by 100+
          users, products generating $50k+ in revenue, and e-commerce systems
          involving 10,000+ products.
        </p>

        <p className="clear-both mt-5">
          I enjoy building from the ground up. That could mean designing a
          frontend with React and Next.js, architecting APIs with Node.js and
          NestJS, working with PostgreSQL or MongoDB, integrating payment and
          financial services, connecting AI models to real products, or
          automating a process that previously required hours of manual work.
        </p>

        <p className="mt-5">
          A big part of my work is also experimentation. I like taking an idea,
          building the smallest useful version of it, putting it in front of
          people, learning what breaks, and making it better. Some of these
          experiments become products; others become lessons that influence what
          I build next.
        </p>

        <p className="mt-5">
          You can explore some of my{" "}
          {softwareProduct ? (
            <PreviewLink
              href={softwareProduct.href}
              label={softwareProduct.label}
              description={softwareProduct.description}
              icon={productIcons.software}
              className="inline-flex items-center gap-1 align-baseline"
            >
              <PiBracketsCurlyDuotone
                aria-hidden="true"
                className="size-[1em] shrink-0 text-primary"
              />
              Software &amp; Engineering
            </PreviewLink>
          ) : (
            "Software & Engineering"
          )}{" "}
          work, experiments, product ideas, and technical projects here.
          I&apos;m particularly interested in the intersection of software, AI,
          fintech, automation, and products that solve real problems.
        </p>

        <p className="mt-5">
          My toolbox includes React, Next.js, TypeScript, JavaScript, Node.js,
          NestJS, PostgreSQL, MongoDB, AWS, Docker, REST APIs, AI/LLM APIs, and
          modern web technologies. I&apos;m comfortable moving between the
          interface, backend, infrastructure, and product layer when the problem
          requires it. See my{" "}
          <PreviewLink
            href="/experience"
            label="Experience"
            description="Roles and work across fintech, AI, and SaaS."
            icon={PiBracketsCurlyDuotone}
          >
            experience
          </PreviewLink>{" "}
          for a fuller picture.
        </p>

        <p className="mt-5">
          I also enjoy sharing what I&apos;m learning along the way — from
          engineering lessons and product decisions to things I&apos;ve
          discovered while building. You can find my thoughts on{" "}
          <SocialTextLink
            href={links.social.linkedinHref}
            label="LinkedIn"
            icon={PiLinkedinLogoFill}
            description="Engineering lessons, product decisions, and updates from what I’m building."
          />
          ,{" "}
          <SocialTextLink
            href={links.social.xHref}
            label="X"
            icon={PiXLogoFill}
            description="Short updates and thoughts along the way."
          />
          , and{" "}
          <SocialTextLink
            href={links.social.mediumHref}
            label="Medium"
            icon={PiArticleFill}
            description="Longer notes on engineering, products, and lessons from building."
          />
          , and follow the projects I&apos;m building on{" "}
          <PreviewLink
            href={links.code.profileHref}
            label="GitHub"
            description="Follow the code and projects as they develop."
            icon={PiGithubLogoFill}
            external
          >
            GitHub
          </PreviewLink>
          .
        </p>

        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Things I build
        </h2>

        <ul className="mt-5 space-y-5">
          {links.products.map((product) => {
            const ProductIcon = productIcons[product.key]

            return (
              <li key={product.key}>
                <p>
                  <PreviewLink
                    href={product.href}
                    label={product.label}
                    description={product.description}
                    icon={ProductIcon}
                    className="inline-flex items-center gap-1.5 align-baseline font-heading font-semibold text-foreground"
                  >
                    <ProductIcon
                      aria-hidden="true"
                      className="size-[1em] shrink-0 text-primary"
                    />
                    {product.label}
                  </PreviewLink>
                </p>
                <p className="mt-1">{product.description}</p>
              </li>
            )
          })}
        </ul>

        <p className="mt-5">
          Explore{" "}
          <PreviewLink
            href="/work"
            label="Work"
            description="Focus areas across software, AI, fintech, SaaS, and commerce."
            icon={PiBracketsCurlyDuotone}
          >
            all focus areas
          </PreviewLink>
          .
        </p>

        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          The things I&apos;m building
        </h2>

        <p className="mt-5">I&apos;m always experimenting with new ideas.</p>

        <p className="mt-5">
          Some become products.
          <br />
          Some become open-source projects.
          <br />
          Some stay experiments.
        </p>

        <p className="mt-5">
          <span className="font-heading font-semibold text-foreground">
            Noviq
          </span>{" "}
          is one of the ideas I&apos;m currently exploring — an AI-powered
          system designed to discover businesses, understand what they sell,
          identify relevant decision-makers, and help generate personalised
          marketing content around their products.
        </p>

        <p className="mt-5">
          The goal is simple: use software and AI to remove the repetitive work
          between discovering an opportunity and creating something valuable for
          that business.
        </p>

        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Open to collaborate
        </h2>

        <p className="mt-5">
          I am open to collaborating with teams and founders across industries —
          especially where software, AI, automation, or product craft can remove
          real friction. Browse{" "}
          <PreviewLink
            href="/industries"
            label="Industries"
            description="Verticals I am open to collaborating with."
            icon={PiCloudFill}
          >
            industries
          </PreviewLink>{" "}
          or jump into one:
        </p>

        <ul className="mt-5 space-y-3">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <PreviewLink
                href={industryHref(industry.slug)}
                label={industry.label}
                description={industry.description}
                icon={PiCloudFill}
                className="font-heading font-semibold text-foreground"
              >
                {industry.label}
              </PreviewLink>
              <span className="text-muted-foreground">
                {" "}
                — {industry.tagline}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          My approach
        </h2>

        <p className="mt-5">I like simple things.</p>

        <p className="mt-5">
          Simple interfaces.
          <br />
          Clear APIs.
          <br />
          Good documentation.
          <br />
          Useful abstractions.
          <br />
          Fast products.
          <br />
          Systems that don&apos;t need a 30-minute explanation before someone
          can use them.
        </p>

        <p className="mt-5">
          But simplicity isn&apos;t about making things basic.
        </p>

        <p className="mt-5">
          It&apos;s about understanding the complexity underneath well enough
          that the person using the product doesn&apos;t have to carry it.
        </p>

        <p className="mt-5">
          That&apos;s the kind of software I want to build.
        </p>

        <h2 className="mt-10 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Find me
        </h2>

        <p className="mt-5">
          You can follow what I&apos;m building and learning on:
        </p>

        <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <PreviewLink
            href={links.code.profileHref}
            label="GitHub"
            description="Follow the code and projects as they develop."
            icon={PiGithubLogoFill}
            external
            className="inline-flex items-center gap-1"
          >
            <PiGithubLogoFill
              aria-hidden="true"
              className="size-[1em] shrink-0 text-primary"
            />
            GitHub
          </PreviewLink>
          <span aria-hidden="true">·</span>
          <SocialTextLink
            href={links.social.linkedinHref}
            label="LinkedIn"
            icon={PiLinkedinLogoFill}
            description="Engineering lessons, product decisions, and updates from what I’m building."
          />
          <span aria-hidden="true">·</span>
          <SocialTextLink
            href={links.social.xHref}
            label="X"
            icon={PiXLogoFill}
            description="Short updates and thoughts along the way."
          />
          <span aria-hidden="true">·</span>
          <SocialTextLink
            href={links.social.mediumHref}
            label="Medium"
            icon={PiArticleFill}
            description="Longer notes on engineering, products, and lessons from building."
          />
        </p>

        <p className="mt-5">
          If you&apos;re building something ambitious, solving an interesting
          problem, or simply want to talk about software, AI, products, or
          startups:
        </p>

        <p className="mt-5">
          <PreviewLink
            href={links.contact.href}
            label="Let's talk"
            description="Start a conversation about software, AI, products, or startups."
            icon={PiEnvelopeSimpleFill}
            className="inline-flex items-center gap-1.5 font-heading font-semibold"
          >
            <PiEnvelopeSimpleFill
              aria-hidden="true"
              className="size-[1em] shrink-0 text-primary"
            />
            Let&apos;s talk.
          </PreviewLink>
        </p>

        <p className="mt-8 text-sm leading-7 md:text-base">
          <Link href="/privacy" className={linkClassName}>
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/terms" className={linkClassName}>
            Terms of Service
          </Link>
        </p>
      </div>
    </article>
  )
}

export default HomeView
