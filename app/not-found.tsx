import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#5f1905] px-6 text-[#fff1d5] sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-35%] top-[-48vw] -z-10 aspect-[2/1] bg-[url('/assets/hero.svg')] bg-contain bg-center bg-no-repeat opacity-55 sm:inset-x-[-20%] lg:inset-x-0 lg:top-[-48rem]"
      />

      <Image
        src="/assets/bottle-1.svg"
        alt=""
        width={513}
        height={787}
        className="pointer-events-none absolute -bottom-44 -left-36 -z-10 h-[32rem] w-auto -rotate-12 opacity-20 sm:-left-24 sm:h-[40rem] lg:-bottom-48 lg:left-[3vw] lg:h-[48rem] lg:opacity-35"
      />
      <Image
        src="/assets/bottle-3.svg"
        alt=""
        width={513}
        height={787}
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[34rem] w-auto rotate-12 opacity-20 sm:-right-28 sm:h-[42rem] lg:-bottom-52 lg:right-[2vw] lg:h-[50rem] lg:opacity-35"
      />

      <div className="mx-auto flex w-full max-w-[1460px] flex-col">
        <header className="flex min-h-24 items-center lg:min-h-[168px]">
          <Link
            href="/"
            aria-label="ZAR’VĂ — pagina principală"
            className="transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-current"
          >
            <Image
              src="/assets/logo.svg"
              alt=""
              width={438}
              height={122}
              priority
              className="h-auto w-[108px] sm:w-[132px] lg:w-[150px]"
            />
          </Link>
        </header>

        <section className="flex flex-1 items-center justify-center py-12 text-center lg:pb-36 lg:pt-8">
          <div className="flex max-w-[880px] flex-col items-center">
            <p
              className="text-[clamp(7rem,24vw,15rem)] font-bold leading-[0.68] tracking-[-0.08em] text-[#fff1d5]/10"
              style={{ fontFamily: "var(--font-travels)" }}
              aria-hidden="true"
            >
              404
            </p>
            <p
              className="mt-8 text-xs font-bold uppercase tracking-[0.28em] sm:text-sm"
              style={{ fontFamily: "var(--font-gotham)" }}
            >
              Pagina nu a fost găsită
            </p>
            <h1
              className="mt-5 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-travels)" }}
            >
              Ai nimerit la raftul greșit.
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-[#fff1d5]/75 sm:text-lg"
              style={{ fontFamily: "var(--font-gotham)" }}
            >
              Pagina pe care o cauți nu mai este aici sau poate n-a existat
              niciodată. Gusturile bune sunt totuși la locul lor.
            </p>
            <Link
              href="/"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#fff1d5] px-8 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#fff1d5] hover:text-[#5f1905] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              style={{ fontFamily: "var(--font-gotham)" }}
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
