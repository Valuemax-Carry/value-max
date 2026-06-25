import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app-shell/Navbar";
import Footer from "@/components/app-shell/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ValueMax Cash & Carry | Pakistan's Cash & Carry Store — Rawalpindi",
    template: "%s | ValueMax Cash & Carry",
  },
  description:
    "ValueMax Cash & Carry is Pakistan's physical cash & carry store in Rawalpindi. Shop 10,000+ products at wholesale prices. A project of Ashraf & Sons Traders. Free delivery on orders above Rs. 5,000.",
  keywords: [
    "ValueMax Cash and Carry",
    "cash and carry Pakistan",
    "wholesale store Rawalpindi",
    "bulk shopping Rawalpindi",
    "Ashraf and Sons Traders",
    "wholesale prices Pakistan",
    "grocery wholesale Rawalpindi",
    "cash carry Rawalpindi",
    "ValueMax store",
    "Pakistan wholesale market",
    "superstore Rawalpindi",
    "grocery store Rawalpindi",
    "retail wholesale Pakistan",
    "daily essentials Rawalpindi",
    "cheap grocery Rawalpindi",
    "Chak Beli Khan store",
  ],
  authors: [{ name: "Ashraf & Sons Traders" }],
  creator: "Ashraf & Sons Traders",
  publisher: "ValueMax Cash & Carry",
  metadataBase: new URL("https://valuemax.com.pk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ValueMax Cash & Carry | Pakistan's Cash & Carry Store",
    description:
      "Shop 10,000+ products at wholesale prices. Rawalpindi's dedicated cash & carry — a project of Ashraf & Sons Traders.",
    url: "https://valuemax.com.pk",
    siteName: "ValueMax Cash & Carry",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ValueMax Cash & Carry — Pakistan's Cash & Carry Store in Rawalpindi",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValueMax Cash & Carry | Pakistan's Cash & Carry Store",
    description:
      "Shop 10,000+ products at wholesale prices in Rawalpindi. A project of Ashraf & Sons Traders.",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
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
        <meta name="geo.placename" content="Rawalpindi, Punjab, Pakistan" />
        <meta name="geo.position" content="33.2370092;72.9091385" />
        <meta name="ICBM" content="33.2370092, 72.9091385" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "ValueMax Cash & Carry",
              description:
                "Pakistan's physical cash & carry store offering wholesale prices on 10,000+ products in Rawalpindi.",
              url: "https://valuemax.com.pk",
              logo: "https://valuemax.com.pk/logo.png",
              image: "https://valuemax.com.pk/og-image.jpg",
              telephone: "+92-42-111-826-826",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Islam Plaza, Main Bazar, Chak Beli Khan, Postal Code 47600, Tehsil & District Rawalpindi",
                addressLocality: "Rawalpindi",
                addressRegion: "Punjab",
                postalCode: "47600",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.2370092,
                longitude: 72.9091385,
              },
              founder: {
                "@type": "Organization",
                name: "Ashraf & Sons Traders",
              },
              priceRange: "₨₨",
              currenciesAccepted: "PKR",
              paymentAccepted: "Cash, Card",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "22:00",
                },
              ],
              hasMap: "https://www.google.com/maps/place/Chak+beli+bazar/@33.2370092,71.755574,9z/data=!4m7!3m6!1s0x392077ba00684321:0x425a0d26eeccc5bc!8m2!3d33.2370092!4d72.9091385!15sCiVNYWluIEJhemFyLCBDaGFrIEJlbGkgS2hhbiBSYXdhbHBpbmRpkgEGbWFya2V04AEA!16s%2Fg%2F11lc9z4z8m",
              sameAs: [
                "https://instagram.com/cashandcarry.pk",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "320",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}