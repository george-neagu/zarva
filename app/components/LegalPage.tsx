import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro: ReactNode;
  children: ReactNode;
};

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#5f1905]/20 pt-8">
      <h2
        className="text-xl font-bold tracking-[-0.025em] text-[#5f1905] sm:text-2xl"
        style={{ fontFamily: "var(--font-travels)" }}
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#fff1d5] text-[#5f1905]">
      <header className="bg-[#5f1905] text-[#fff1d5]">
        <nav
          aria-label="Navigație pagină juridică"
          className="mx-auto flex min-h-24 max-w-[1180px] items-center justify-between px-6 sm:px-10 lg:min-h-32"
        >
          <Link
            href="/"
            aria-label="ZAR’VĂ — pagina principală"
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/assets/logo.svg"
              alt="ZAR’VĂ"
              width={438}
              height={122}
              priority
              className="h-auto w-[118px] sm:w-[142px]"
            />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-current px-5 py-3 text-sm font-bold transition-colors hover:bg-[#fff1d5] hover:text-[#5f1905] focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ fontFamily: "var(--font-gotham)" }}
          >
            Înapoi la site
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-[920px] px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
        <p
          className="text-sm font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "var(--font-gotham)" }}
        >
          {eyebrow}
        </p>
        <h1
          className="mt-4 max-w-[780px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-travels)" }}
        >
          {title}
        </h1>
        <p className="mt-5 text-sm opacity-70">Ultima actualizare: {updatedAt}</p>

        <div className="mt-10 text-lg leading-8 sm:text-xl">{intro}</div>

        <div className="mt-12 space-y-10 text-base leading-7">{children}</div>
      </article>

      <footer
        className="border-t border-[#5f1905]/20 px-6 py-8 text-sm sm:px-10"
        style={{ fontFamily: "var(--font-gotham)" }}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ZAR’VĂ. Toate drepturile rezervate.</p>
          <nav aria-label="Alte informații juridice">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <Link className="underline underline-offset-4" href="/termeni-si-conditii">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/politica-de-cookies">
                  Politica de cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
