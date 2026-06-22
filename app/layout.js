import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ValueMax Cash & Carry | Pakistan's First Cash & Carry Store — Lahore",
  description: "ValueMax Cash & Carry is Pakistan's first physical cash & carry store in Lahore. Shop 10,000+ products at wholesale prices. A project of Ashraf & Sons Traders. Free delivery on orders above Rs. 5,000.",
  keywords: [
    "ValueMax Cash and Carry",
    "cash and carry Pakistan",
    "wholesale store Lahore",
    "bulk shopping Lahore",
    "Ashraf and Sons Traders",
    "wholesale prices Pakistan",
    "grocery wholesale Lahore",
    "cash carry Lahore",
    "ValueMax store",
    "Pakistan wholesale market",
  ],
  authors: [{ name: "Ashraf & Sons Traders" }],
  creator: "Ashraf & Sons Traders",
  publisher: "ValueMax Cash & Carry",
  metadataBase: new URL("https://valuemaxstore.pk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ValueMax Cash & Carry | Pakistan's First Cash & Carry Store",
    description: "Shop 10,000+ products at wholesale prices. Lahore's first dedicated cash & carry — a project of Ashraf & Sons Traders.",
    url: "https://valuemaxstore.pk",
    siteName: "ValueMax Cash & Carry",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ValueMax Cash & Carry — Pakistan's First Cash & Carry Store in Lahore",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValueMax Cash & Carry | Pakistan's First Cash & Carry Store",
    description: "Shop 10,000+ products at wholesale prices in Lahore. A project of Ashraf & Sons Traders.",
    images: ["/og-image.jpg"],
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
  category: "Shopping & Retail",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E8001C" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore, Punjab, Pakistan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "ValueMax Cash & Carry",
              description: "Pakistan's first physical cash & carry store offering wholesale prices on 10,000+ products in Lahore.",
              url: "https://valuemaxstore.pk",
              logo: "https://valuemaxstore.pk/logo.png",
              image: "https://valuemaxstore.pk/og-image.jpg",
              telephone: "+92-42-111-826-826",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              founder: {
                "@type": "Organization",
                name: "Ashraf & Sons Traders",
              },
              priceRange: "₨₨",
              currenciesAccepted: "PKR",
              paymentAccepted: "Cash, Card",
              openingHours: "Mo-Su 09:00-22:00",
              hasMap: "https://maps.google.com/?q=ValueMax+Cash+Carry+Lahore",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}