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
  "Software Engineer at Done (Morocco's first super app), formerly at Pyxicom. Expert in PHP, Laravel, Symfony, PostgreSQL, PostGIS, React.js and Redis. Based in Rabat, Morocco.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayoubsabi.com"),
  title: {
    default: "Ayoub Sabi — PHP & Laravel Software Engineer | Morocco",
    template: "%s | Ayoub Sabi",
  },
  description,
  keywords: [
    "Ayoub Sabi",
    "software engineer",
    "backend developer",
    "web developer",
    "laravel developer",
    "symfony developer",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayoubsabi.com",
    title: "Ayoub Sabi — PHP & Laravel Software Engineer | Morocco",
    description,
    siteName: "Ayoub Sabi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Sabi — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Sabi — PHP & Laravel Software Engineer | Morocco",
    description,
    images: ["/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayoub Sabi",
  jobTitle: "Software Engineer",
  url: "https://ayoubsabi.com",
  email: "ayoubsabi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressCountry: "MA",
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
    name: "Software Engineer",
    skills:
      "PHP, Laravel, Symfony, React.js, PostgreSQL, PostGIS, PgRouting, Redis, Firebase Cloud Messaging, ELK Stack, Typesense",
    occupationLocation: {
      "@type": "Country",
      name: "Morocco",
    },
  },
};

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
