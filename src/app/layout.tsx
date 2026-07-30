import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://ankafitness.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anka Fitness | Sakarya Erenler Premium Fitness Salonu",
    template: "%s | Anka Fitness",
  },
  description:
    "Anka Fitness — Sakarya Erenler'de premium fitness salonu. Modern ekipman, uzman eğitmenler, esnek üyelik paketleri. Adres: Şht. İlhan Aras Cd. No:60. Tel: 0505 667 37 98",
  keywords: [
    "Anka Fitness",
    "Sakarya spor salonu",
    "Erenler fitness",
    "gym Sakarya",
    "üyelik paketleri",
    "fitness antrenör",
  ],
  authors: [{ name: "Anka Fitness" }],
  creator: "Anka Fitness",
  publisher: "Anka Fitness",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Anka Fitness",
    title: "Anka Fitness | Sakarya Erenler Premium Fitness Salonu",
    description:
      "Premium ekipman, uzman eğitmenler ve sonuç odaklı antrenman. Erenler, Sakarya.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Anka Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anka Fitness | Sakarya Erenler",
    description:
      "Premium fitness deneyimi. Üyelik, eğitmenler ve konum bilgisi için ziyaret edin.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "Anka Fitness",
    description:
      "Sakarya Erenler'de premium fitness salonu. Modern ekipman ve uzman eğitmenler.",
    telephone: "+905056673798",
    url: siteUrl,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şht. İlhan Aras Cd. No:60 kat.1",
      addressLocality: "Erenler",
      addressRegion: "Sakarya",
      postalCode: "54200",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: ["https://instagram.com/anka.fitnesss"],
  };

  return (
    <html lang="tr" className={`${syne.variable} ${outfit.variable} h-full`}>
      <body className="noise min-h-full bg-bg font-body text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
