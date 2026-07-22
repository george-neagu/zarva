import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "ZAR`VA ",
  description: "Aglomerație de gusturi. Selecție cu sens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
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
