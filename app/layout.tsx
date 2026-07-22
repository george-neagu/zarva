import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";

const siteUrl = "https://zar-va.ro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ZAR’VĂ Obor | Băuturi, cafea, tutun și gustări",
  description:
    "ZAR’VĂ este magazinul și snack barul din Piața Obor unde găsești vinuri, bere, cafea, tutun, băuturi răcoritoare și gustări proaspete.",
  applicationName: "ZAR’VĂ",
  authors: [{ name: "ZAR’VĂ", url: siteUrl }],
  creator: "ZAR’VĂ",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "ZAR’VĂ",
    "magazin Piața Obor",
    "băuturi Obor",
    "vinuri București",
    "cafea Obor",
    "gustări Obor",
    "snack bar București",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: "ZAR’VĂ",
    title: "ZAR’VĂ Obor | Aglomerație de gusturi. Selecție cu sens.",
    description:
      "Băuturi, cafea, tutun și gustări proaspete, toate într-un singur loc în Piața Obor, București.",
    images: [
      {
        url: "/assets/social-2.png",
        width: 6403,
        height: 2511,
        alt: "Selecție de vinuri ZAR’VĂ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAR’VĂ Obor | Aglomerație de gusturi",
    description:
      "Băuturi, cafea, tutun și gustări proaspete în Piața Obor, București.",
    images: ["/assets/social-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jdk3jav.css" />
      </head>

      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
