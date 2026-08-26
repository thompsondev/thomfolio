const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://Thoughtful.com"

export const siteConfig = {
  name: "Thoughtful",
  title: "Thoughtful | Thompson Opeyemi",
  description:
    "Portfolio of Thompson Opeyemi — software engineer and product builder working across software engineering, AI, fintech, SaaS, and e-commerce.",
  url: siteUrl,
  locale: "en_NG",
  creator: {
    name: "Thompson Opeyemi",
    handle: "@holy1thompson",
    email: "topeyemi33@gmail.com",
  },
  keywords: [
    "Thoughtful",
    "Thompson Opeyemi",
    "Opeyemi Thompson",
    "software engineer",
    "product builder",
    "fintech",
    "AI",
    "SaaS",
    "ecommerce",
    "automation",
    "Nigeria",
  ],
  social: {
    github: "https://github.com/thompsondev",
    instagram: "https://www.instagram.com/holy1thompson",
    x: "https://x.com/holy1thompson",
    linkedin: "https://www.linkedin.com/in/opeyemi-thompson",
  },
} as const

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.creator.name,
      alternateName: ["Opeyemi Thompson", siteConfig.name],
      url: siteConfig.url,
      image: `${siteConfig.url}/images/logo.png`,
      email: `mailto:${siteConfig.creator.email}`,
      jobTitle: "Software Engineer & Product Builder",
      sameAs: Object.values(siteConfig.social),
      knowsAbout: [
        "Software engineering",
        "Product development",
        "Artificial intelligence",
        "Fintech",
        "SaaS",
        "Ecommerce",
        "Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-NG",
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en-NG",
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
}
