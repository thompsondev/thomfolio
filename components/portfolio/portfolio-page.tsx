import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const linkClassName =
  "rounded-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

type PortfolioPageProps = {
  title: string
  eyebrow?: string
  tagline?: string
  children: ReactNode
  className?: string
}

export function PortfolioPage({
  title,
  eyebrow,
  tagline,
  children,
  className,
}: PortfolioPageProps) {
  return (
    <article className={cn("min-w-0 pb-8 md:pb-32", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-3xl leading-none font-bold tracking-tight text-foreground xs:text-4xl md:text-3xl">
        {title}
      </h1>
      {tagline ? (
        <p className="mt-4 max-w-prose text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
          {tagline}
        </p>
      ) : null}
      <div className="mt-8 min-w-0 text-base leading-8 text-muted-foreground md:mt-7 md:text-lg md:leading-9">
        {children}
      </div>
    </article>
  )
}

export function PortfolioSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  )
}

export function PortfolioList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-primary">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function PortfolioCta({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:")

  return (
    <p className="mt-10">
      <Link
        href={href}
        className={cn(
          linkClassName,
          "inline-flex items-center gap-1.5 font-heading font-semibold"
        )}
        {...(external
          ? { target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
          : {})}
      >
        {children}
      </Link>
    </p>
  )
}

export function PortfolioRelatedLink({
  href,
  label,
  description,
}: {
  href: string
  label: string
  description: string
}) {
  return (
    <li>
      <Link href={href} className={cn(linkClassName, "font-heading font-semibold")}>
        {label}
      </Link>
      <p className="mt-1">{description}</p>
    </li>
  )
}

export { linkClassName }
