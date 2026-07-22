import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Community from "./components/Community";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://zar-va.ro/#store",
  name: "ZAR’VĂ",
  description:
    "Magazin și snack bar cu băuturi, cafea, tutun și gustări proaspete în Piața Obor.",
  url: "https://zar-va.ro",
  email: "contact@zar-va.ro",
  image: "https://zar-va.ro/assets/social-2.png",
  logo: "https://zar-va.ro/assets/logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Ziduri Moși 4, Piața Obor, etajul 1",
    addressLocality: "București",
    addressRegion: "Sector 2",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.4493106,
    longitude: 26.1282806,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "17:00",
    },
  ],
} as const;

export default function Home() {
  return (
    <main id="acasa" className="min-h-screen overflow-hidden bg-[#5f1905]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Community />
      <Gallery />
      <Contact />
      <BackToTop />
    </main>
  );
}
