import Reveal from "./Reveal";

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

        <iframe
          src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25705999"
          title="Postări Facebook ZAR’VĂ"
          width="100%"
          height="1000"
          loading="lazy"
          className="mt-14 block w-full border-0"
        />
      </Reveal>
    </section>
  );
}
