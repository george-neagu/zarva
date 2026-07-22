import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="despre-noi"
      aria-labelledby="about-heading"
      className="flex scroll-mt-24 flex-col items-center bg-[#fff1d5] px-6 py-16 text-center text-[#5f1905] sm:px-10 lg:scroll-mt-[168px] lg:px-16 lg:py-20"
    >
      <Reveal early className="flex w-full flex-col items-center">
      <div
        className="flex h-[58px] w-[190px] shrink-0 items-center justify-center border-2 border-[#5f1905] text-sm font-bold sm:text-[15px]"
        style={{
          borderRadius: "44% 56% 48% 52% / 56% 44% 56% 44%",
          fontFamily: "var(--font-gotham)",
          transform: "rotate(1deg)",
        }}
      >
        <span style={{ transform: "rotate(-1deg)" }}>DESPRE NOI</span>
      </div>

      <h2
        id="about-heading"
        className="mt-8 text-[1.8rem] font-bold leading-tight tracking-[-0.035em] sm:text-[2.15rem] lg:mt-[29px] lg:text-[2.35rem]"
        style={{ fontFamily: "var(--font-travels)" }}
      >
        ZAR’VĂ îți respectă tabieturile.
      </h2>

      <p
        className="mt-6 max-w-[1080px] text-base font-bold leading-[1.4] sm:text-[1.05rem] lg:mt-[28px] lg:text-[1.12rem]"
        style={{ fontFamily: "var(--font-gotham)" }}
      >
        Un loc al abundenței de gusturi și al energiei bune. ZAR’VĂ este un
        magazin de băuturi, gustări proaspete, cafea și tutun - toate aduse
        într-un singur punct, în inima celei mai vibrante comunități a
        Bucureștiului: Piața Obor.
      </p>

      <p
        className="mt-12 max-w-[1160px] text-base leading-[1.35] sm:text-[1.05rem] lg:mt-[62px] lg:text-[1.12rem]"
        style={{ fontFamily: "var(--font-gotham)" }}
      >
        Pentru că în Obor oamenii se mișcă și respiră în același ritm. Aici,
        oamenii se găsesc și se înțeleg unii pe alții.
        <br />
        La fel face și ZAR’VĂ.
      </p>
      </Reveal>
    </section>
  );
}
