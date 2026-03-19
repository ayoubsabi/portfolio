import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const description =
  "Senior Software Engineer specializing in PHP, Laravel, and Symfony with 6+ years of experience. Based in Rabat, Morocco. Expert in geospatial systems, real-time notifications, and high-performance backend architecture.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayoubsabi.com"),
  title: {
    default: "Ayoub Sabi — Senior Software Engineer | PHP, Laravel & Backend | Morocco",
    template: "%s | Ayoub Sabi",
  },
  description,
  keywords: [
    "Ayoub Sabi",
    "software engineer",
    "senior software engineer",
    "backend developer",
    "backend engineer Morocco",
    "web developer",
    "web developer Morocco",
    "full stack developer Morocco",
    "laravel developer",
    "laravel developer Morocco",
    "PHP developer portfolio",
    "Laravel developer portfolio",
    "symfony developer",
    "API developer",
    "geospatial developer",
    "software engineer Rabat",
    "engineer portfolio",
    "PHP",
    "Laravel",
    "Symfony",
    "React.js",
    "JavaScript",
    "PostgreSQL",
    "PostGIS",
    "PgRouting",
    "Redis",
    "MySQL",
    "Bootstrap",
    "Firebase Cloud Messaging",
    "ELK Stack",
    "Typesense",
    "REST APIs",
    "Done",
    "Pyxicom",
    "super app Morocco",
    "Rabat",
    "Morocco",
  ],
  authors: [{ name: "Ayoub Sabi", url: "https://ayoubsabi.com" }],
  creator: "Ayoub Sabi",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayoubsabi.com",
    title: "Ayoub Sabi — Senior Software Engineer | PHP, Laravel & Backend | Morocco",
    description,
    siteName: "Ayoub Sabi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Sabi — Senior Software Engineer | PHP, Laravel & Backend | Morocco",
    description,
    creator: "@ayoubsabi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ayoubsabi.com",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayoub Sabi",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in PHP, Laravel, and Symfony with 6+ years of experience. Based in Rabat, Morocco. Expert in geospatial systems, real-time notifications, and high-performance backend architecture.",
    url: "https://ayoubsabi.com",
    image: "https://ayoubsabi.com/opengraph-image",
    email: "ayoubsabi@gmail.com",
    nationality: "Moroccan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "ayoubsabi@gmail.com",
      contactType: "professional",
    },
    sameAs: [
      "https://www.linkedin.com/in/ayoubsabi/",
      "https://github.com/ayoubsabi",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Done",
      url: "https://done.ma",
      description: "Morocco's first super app",
    },
    alumniOf: [
      {
        "@type": "Organization",
        name: "Pyxicom",
      },
      {
        "@type": "Organization",
        name: "Fondation Med VI pour la Réinsertion des Détenus",
      },
    ],
    knowsAbout: [
      "PHP",
      "Laravel",
      "Symfony",
      "JavaScript",
      "React.js",
      "PostgreSQL",
      "PostGIS",
      "PgRouting",
      "Redis",
      "MySQL",
      "Firebase Cloud Messaging",
      "ELK Stack",
      "Typesense",
      "REST APIs",
      "Web Development",
      "Backend Development",
      "Geospatial Systems",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Engineer",
      skills:
        "PHP, Laravel, Symfony, React.js, PostgreSQL, PostGIS, PgRouting, Redis, Firebase Cloud Messaging, ELK Stack, Typesense",
      occupationLocation: {
        "@type": "Country",
        name: "Morocco",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ayoub Sabi",
    url: "https://ayoubsabi.com",
    description:
      "Portfolio of Ayoub Sabi, Senior Software Engineer specializing in PHP, Laravel, and backend architecture. Based in Rabat, Morocco.",
    author: {
      "@type": "Person",
      name: "Ayoub Sabi",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-bg text-foreground">
        {children}
      </body>
    </html>
  );
}
