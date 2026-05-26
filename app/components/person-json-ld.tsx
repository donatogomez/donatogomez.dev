import {
  defaultContactEmail,
  seoCopy,
  siteName,
  siteUrl,
  socialLinks,
} from "../lib/site";

export function PersonJsonLd() {
  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || defaultContactEmail;
  const imageUrl = `${siteUrl}/avatar.png`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteName,
        url: siteUrl,
        image: imageUrl,
        email: `mailto:${email}`,
        jobTitle: seoCopy.en.jobTitle,
        description: seoCopy.en.description,
        inLanguage: ["es", "en"],
        knowsAbout: [
          "Swift",
          "SwiftUI",
          "iOS Development",
          "Swift 6",
          "Clean Architecture",
          "Native Apple Apps",
        ],
        sameAs: [
          socialLinks.linkedin,
          socialLinks.github,
          socialLinks.medium,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: seoCopy.en.description,
        inLanguage: ["es", "en"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seoCopy.es.title,
        description: seoCopy.es.description,
        inLanguage: "es",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/?lang=en#webpage`,
        url: `${siteUrl}/?lang=en`,
        name: seoCopy.en.title,
        description: seoCopy.en.description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
