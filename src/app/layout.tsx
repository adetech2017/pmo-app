import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pmo.lagosstate.gov.ng'),
  title: {
    default: "PMO - Lagos State Parastatals Monitoring Office",
    template: "%s | PMO Lagos",
  },
  description: "Lagos State Parastatals Monitoring Office ensures that state agencies and government-owned companies operate in line with administrative and financial guidelines. Visit us for governance, audits, and parastatals monitoring.",
  keywords: ["PMO", "Lagos State", "Parastatals", "Monitoring", "Governance", "Audit", "Public Administration", "THEME", "Performance Monitoring"],
  authors: [
    {
      name: "Lagos State Parastatals Monitoring Office",
      url: "https://pmo.lagosstate.gov.ng",
    },
  ],
  creator: "Lagos State PMO",
  publisher: "Lagos State Government",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pmo.lagosstate.gov.ng",
    title: "PMO - Lagos State Parastatals Monitoring Office",
    description: "Ensuring effective governance and performance monitoring of Lagos State parastatals.",
    siteName: "PMO Lagos",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PMO Lagos State",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PMO - Lagos State Parastatals Monitoring Office",
    description: "Ensuring effective governance and performance monitoring of Lagos State parastatals.",
    images: ["/images/og-image.jpg"],
    creator: "@PMOLagos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pmo.lagosstate.gov.ng",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PMO Lagos",
  },
  category: "Government",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lagos State Parastatals Monitoring Office',
    alternateName: 'PMO Lagos',
    url: 'https://pmo.lagosstate.gov.ng',
    logo: 'https://pmo.lagosstate.gov.ng/images/logo.jpeg',
    description:
      'Lagos State Parastatals Monitoring Office ensures that state agencies and government-owned companies operate in line with administrative and financial guidelines.',
    sameAs: [
      'https://twitter.com/PMOLagos',
      'https://linkedin.com/company/pmo-lagos',
      'https://facebook.com/PMOLagos',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Parastatals House',
      addressLocality: 'Ikeja',
      addressRegion: 'Lagos State',
      postalCode: '100211',
      addressCountry: 'NG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+234-1-XXXX-XXXX',
        email: 'info@pmo.gov.ng',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
