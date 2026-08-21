import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const description = t('description');
  const title = t('title');

  return {
    metadataBase: new URL("https://ayoubsabi.com"),
    title: {
      default: title,
      template: "%s | Ayoub Sabi",
    },
    description,
    keywords: [
      "Ayoub Sabi", "software engineer", "senior software engineer", "backend developer",
      "backend engineer Morocco", "web developer", "web developer Morocco",
      "full stack developer Morocco", "laravel developer", "laravel developer Morocco",
      "PHP developer portfolio", "Laravel developer portfolio", "symfony developer",
      "API developer", "geospatial developer", "software engineer Rabat",
      "engineer portfolio", "PHP", "Laravel", "Symfony", "React.js", "JavaScript",
      "PostgreSQL", "PostGIS", "PgRouting", "Redis", "MySQL", "Bootstrap",
      "Firebase Cloud Messaging", "ELK Stack", "Typesense", "REST APIs", "Done",
      "Pyxicom", "super app Morocco", "Rabat", "Morocco",
    ],
    authors: [{ name: "Ayoub Sabi", url: "https://ayoubsabi.com" }],
    creator: "Ayoub Sabi",
    category: "Technology",
    openGraph: {
      type: "website",
      locale: locale === 'fr' ? "fr_FR" : "en_US",
      url: "https://ayoubsabi.com",
      title,
      description,
      siteName: "Ayoub Sabi",
    },
    twitter: {
      card: "summary_large_image",
      title,
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
      canonical: `https://ayoubsabi.com/${locale}`,
      languages: {
        en: "https://ayoubsabi.com/en",
        fr: "https://ayoubsabi.com/fr",
        "x-default": "https://ayoubsabi.com/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const description = t('description');

  const baseUrl = `https://ayoubsabi.com/${locale}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      dateCreated: "2024-01-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      mainEntity: {
        "@type": "Person",
        name: "Ayoub Sabi",
        jobTitle: locale === 'fr' ? "Ingénieur Logiciel Senior" : "Senior Software Engineer",
        description,
        url: baseUrl,
        image: "https://avatars.githubusercontent.com/u/53861360",
        email: "ayoubsabi@gmail.com",
        nationality: locale === 'fr' ? "Marocain" : "Moroccan",
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
          description: locale === 'fr' ? "Première super application du Maroc" : "Morocco's first super app",
        },
        alumniOf: [
          {
            "@type": "Organization",
            name: "Pyxicom",
            url: "https://pyxicom.com",
          },
          {
            "@type": "Organization",
            name: "Fondation Med VI pour la Réinsertion des Détenus",
          },
        ],
        knowsAbout: [
          "PHP", "Laravel", "Symfony", "JavaScript", "React.js", "PostgreSQL",
          "PostGIS", "PgRouting", "Redis", "MySQL", "Firebase Cloud Messaging",
          "ELK Stack", "Typesense", "REST APIs", "Web Development",
          "Backend Development", "Geospatial Systems",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: locale === 'fr' ? "Ingénieur Logiciel Senior" : "Senior Software Engineer",
          skills:
            "PHP, Laravel, Symfony, React.js, PostgreSQL, PostGIS, PgRouting, Redis, Firebase Cloud Messaging, ELK Stack, Typesense",
          occupationLocation: {
            "@type": "Country",
            name: locale === 'fr' ? "Maroc" : "Morocco",
          },
        },
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ayoub Sabi",
      url: baseUrl,
      description: locale === 'fr' ? "Portfolio d'Ayoub Sabi" : "Portfolio of Ayoub Sabi",
      author: {
        "@type": "Person",
        name: "Ayoub Sabi",
      },
    },
  ];

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-bg text-foreground">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
