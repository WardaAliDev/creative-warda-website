import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Petit_Formal_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const script = Petit_Formal_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}. Marketing for Local Service Businesses`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name}. Marketing for Local Service Businesses`,
    description: SITE.shortDescription,
    url: SITE.url,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}. Marketing for Local Service Businesses`,
    description: SITE.shortDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        areaServed: SITE.countries.map((name) => ({ "@type": "Country", name })),
        knowsAbout: [
          "Local SEO",
          "Google Business Profile Optimisation",
          "Website Design",
          "Marketing Automation",
          "Paid Advertising",
          "Social Media Management",
          "HVAC Marketing",
          "Electrician Marketing",
          "Plumber Marketing",
          "Marketing for Therapists and Counselors",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.shortDescription,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-GB",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        priceRange: "$$",
        currenciesAccepted: "GBP, USD",
        areaServed: SITE.countries.map((name) => ({ "@type": "Country", name })),
      },
    ],
  };

  return (
    <html lang="en" className={`${lora.variable} ${jakarta.variable} ${script.variable}`}>
      <body className="font-body bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
