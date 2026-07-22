import Image from "next/image";
import Reveal from "./Reveal";
import SideArtwork from "./SideArtwork";

const iconClass = "mx-auto mb-4 size-10";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#5f1905] px-6 py-16 text-[#fff1d5] sm:px-10 lg:scroll-mt-[168px] lg:px-16 lg:py-20"
    >
      <SideArtwork
        src="/assets/contact-blob.svg"
        width={1431}
        height={1083}
        direction="left"
        className="pointer-events-none absolute top-36 -z-10 hidden w-[900px] xl:block"
        style={{ left: "calc(50% - 960px)" }}
      />
      <SideArtwork
        src="/assets/bottle-3.svg"
        width={654}
        height={842}
        direction="right"
        className="pointer-events-none absolute top-8 -z-10 hidden w-[554px] xl:block"
        style={{ right: "calc(66% - 1344px)" }}
      />

      <Reveal className="mx-auto flex max-w-[1340px] flex-col items-center">
        <div
          className="flex h-[58px] w-[190px] items-center justify-center border-2 border-current text-sm font-bold sm:text-[15px]"
          style={{
            borderRadius: "44% 56% 48% 52% / 56% 44% 56% 44%",
            fontFamily: "var(--font-gotham)",
            transform: "rotate(1deg)",
          }}
        >
          <span style={{ transform: "rotate(-1deg)" }}>CONTACT</span>
        </div>

        <h2
          id="contact-heading"
          className="mt-9 text-center text-[1.9rem] font-bold tracking-[-0.035em] sm:text-[2.25rem]"
          style={{ fontFamily: "var(--font-travels)" }}
        >
          Facem ZAR’VĂ în Obor!
        </h2>

        <div
          className="mt-14 grid w-full gap-10 text-center text-base font-bold leading-[1.45] md:grid-cols-3 lg:mt-16 lg:text-[1.05rem]"
          style={{ fontFamily: "var(--font-gotham)" }}
        >
          <address className="not-italic xl:text-[#5f1905]">
            <svg className={iconClass} viewBox="0 0 48 60" fill="none" aria-hidden="true">
              <path d="M24 57S5 35 5 22a19 19 0 1 1 38 0c0 13-19 35-19 35Z" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            Adresa: Piața Obor, Etajul 1
            <br />
            Str. Ziduri Moși, Nr. 4, Sector 2
            <br />
            București
          </address>

          <div>
            <svg className={iconClass} viewBox="0 0 60 60" fill="none" aria-hidden="true">
              <circle cx="30" cy="30" r="24" stroke="currentColor" strokeWidth="2.5" />
              <path d="M30 15v16l10 7M30 8v5M30 47v5M8 30h5M47 30h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <p>
              Program:
              <br />
              Luni-Vineri 07:00-19:00
              <br />
              Sâmbătă 7:00-18:00
              <br />
              Duminică 7:00-17:00
            </p>
          </div>

          <address className="not-italic">
            <svg className={iconClass} viewBox="0 0 60 60" fill="none" aria-hidden="true">
              <path d="M18 9c2-2 6-1 7 2l4 10c1 2 0 4-2 5l-4 3c4 8 9 13 17 17l3-4c1-2 3-3 5-2l10 4c3 1 4 5 2 7l-4 5c-3 4-9 5-14 3C24 52 8 36 1 18c-2-5-1-11 3-14l5-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 1) scale(.85)" />
            </svg>
            <a href="mailto:contact@zar-va.ro" className="hover:underline">
              contact@zar-va.ro
            </a>
            <br />
            <a href="tel:07xxxxxxxx" className="hover:underline">
              07xxxxxxxx
            </a>
          </address>
        </div>

        <div
          className="mt-14 w-full overflow-hidden rounded-[24px] border-8 border-[#fff1d5] bg-[#ece9e2] lg:mt-16"
        >
          <iframe
            title="Locația Zar'vă — Strada Ziduri Moși 4, București"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.212651962816!2d26.128280612443557!3d44.44931057095481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8ce325a8053%3A0xb41ef569083ba3b!2sStrada%20Ziduri%20Mo%C8%99i%204%2C%20077085%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1784734715095!5m2!1sen!2sro"
            width="1340"
            height="360"
            className="block h-[280px] w-full border-0 sm:h-[320px] lg:h-[360px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <hr className="mt-15 w-full border-0 border-t border-[#fff1d5]/80 " />

        <div className="mt-10 flex w-full flex-col items-center justify-between gap-8 sm:flex-row lg:mt-12">
          <a href="#acasa" aria-label="Zar'vă — înapoi sus">
            <Image
              src="/assets/logo.svg"
              alt="Zar'vă"
              width={438}
              height={122}
              className="h-auto w-[106px] sm:w-[134px] lg:w-[163px]"
            />
          </a>

          <ul aria-label="Rețele sociale" className="flex items-center gap-3">
            <li>
              <Image src="/assets/tiktok.svg" alt="TikTok" width={59} height={59} className="size-[23px] sm:size-[28px]" />
            </li>
            <li>
              <Image src="/assets/instagram.svg" alt="Instagram" width={59} height={59} className="size-[23px] sm:size-[28px]" />
            </li>
            <li>
              <Image src="/assets/facebook.svg" alt="Facebook" width={59} height={59} className="size-[23px] sm:size-[28px]" />
            </li>
          </ul>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-center gap-6 lg:mt-20 lg:flex-row lg:gap-10">
          <Image
            src="/assets/anpc.svg"
            alt="ANPC — Soluționarea alternativă a litigiilor"
            width={600}
            height={149}
            className="h-auto w-full max-w-[288px]"
          />
          <Image
            src="/assets/age-disclaimer.svg"
            alt="18+ — Nu vindem băuturi alcoolice și tutun persoanelor sub 18 ani"
            width={515}
            height={149}
            className="h-auto w-full max-w-[247px]"
          />
        </div>
      </Reveal>
    </section>
  );
}
