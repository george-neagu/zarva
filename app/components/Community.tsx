import Image from "next/image";
import Reveal from "./Reveal";
import { StaggerItem, StaggerReveal } from "./StaggerReveal";

const posts = [
  { image: "/assets/social-1.png", alt: "Pahar cu vin roșu" },
  { image: "/assets/social-2.png", alt: "Selecție de vinuri și struguri" },
  { image: "/assets/social-3.png", alt: "Degustare de vin în magazin" },
] as const;

export default function Community() {
  return (
    <section
      id="comunitate"
      aria-labelledby="community-heading"
      className="relative z-0 scroll-mt-24 bg-[#5f1905] px-6 py-16 text-[#fff1d5] sm:px-10 lg:scroll-mt-[168px] lg:px-16 lg:py-20"
    >
      <Reveal className="mx-auto flex max-w-[1460px] flex-col items-center">
        <div
          className="flex h-[58px] w-[190px] items-center justify-center border-2 border-current text-sm font-bold sm:text-[15px]"
          style={{
            borderRadius: "44% 56% 48% 52% / 56% 44% 56% 44%",
            fontFamily: "var(--font-gotham)",
            transform: "rotate(1deg)",
          }}
        >
          <span style={{ transform: "rotate(-1deg)" }}>COMUNITATE</span>
        </div>

        <h2
          id="community-heading"
          className="mt-12 text-center text-[1.9rem] font-bold tracking-[-0.035em] sm:text-[2.15rem]"
          style={{ fontFamily: "var(--font-travels)" }}
        >
          ZAR’VA de pe net
        </h2>

        <StaggerReveal className="mt-14 grid w-full gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {posts.map((post) => (
            <StaggerItem key={post.image} className="h-full">
            <article className="h-full overflow-hidden rounded-[28px] bg-[#fff1d5] p-5 text-[#5f1905]">
              <header className="flex items-start justify-between pb-5">
                <div>
                  <h3
                    className="text-[1.7rem] font-bold leading-none tracking-[-0.04em]"
                    style={{ fontFamily: "var(--font-travels)" }}
                  >
                    Zarvă
                  </h3>
                  <time
                    dateTime="2026-10-15"
                    className="mt-1 block text-sm font-regular text-[#5f1905] sm:text-base"
                    style={{ fontFamily: "var(--font-gotham)" }}
                  >
                    15 Oct 2026
                  </time>
                </div>

                <span
                  aria-label="Facebook"
                  className="flex size-8 items-end justify-center rounded-full bg-[#2497d4] text-[1.65rem] font-black leading-[1.05] text-white"
                >
                  f
                </span>
              </header>

              <div className="relative aspect-[1.04] overflow-hidden rounded-[20px]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1280px) 450px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <p
                className="min-h-[76px] pt-5 text-sm leading-[1.35] text-[#5f1905] sm:text-base"
                style={{ fontFamily: "var(--font-gotham)", fontWeight: 300 }}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Reveal>
    </section>
  );
}
