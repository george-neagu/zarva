import Image from "next/image";
import Reveal from "./Reveal";
import SideArtwork from "./SideArtwork";

const productGroups = [
  ["Vin roșu, alb & rose", "Whisky", "Cognac"],
  ["Bere", "Băuturi răcoritoare", "Tutun, țigări de foi, trabucuri & accesorii"],
  ["Gustări delicioase: croissant, sandwich, hot-dog, cheesecake și multe alte bunătăți"],
] as const;

export default function Products() {
  return (
    <section
      id="produse"
      aria-labelledby="products-heading"
      className="relative z-10 isolate min-h-[860px] scroll-mt-24 overflow-visible bg-[#5f1905] px-6 py-16 text-[#fff1d5] sm:px-10 lg:scroll-mt-[168px] lg:px-16 lg:py-20"
    >
      <SideArtwork
        src="/assets/bottle-2.svg"
        width={795}
        height={654}
        direction="right"
        className="pointer-events-none absolute right-0 top-10 -z-10 hidden w-[560px] xl:block 2xl:w-[530px]"
        style={{ marginRight: "-20%" }}
      />
      <SideArtwork
        src="/assets/bottle-1.svg"
        width={513}
        height={787}
        direction="left"
        className="pointer-events-none absolute -bottom-64 -left-32 -z-10 hidden w-[260px] lg:block xl:-left-24 xl:w-[300px]"
      />

      <Reveal className="relative z-10 mx-auto max-w-[1080px]">
        <div
          className="flex h-[58px] w-[190px] items-center justify-center border-2 border-current text-sm font-bold sm:text-[15px]"
          style={{
            borderRadius: "44% 56% 48% 52% / 56% 44% 56% 44%",
            fontFamily: "var(--font-gotham)",
            transform: "rotate(1deg)",
          }}
        >
          <span style={{ transform: "rotate(-1deg)" }}>PRODUSE</span>
        </div>

        <div className="mt-10 max-w-[800px] bg-[#5f1905]">
          <h2
            id="products-heading"
            className="text-xl font-bold leading-[1.45] sm:text-[1.35rem]"
            style={{ fontFamily: "var(--font-gotham)" }}
          >
            La ZAR’VĂ, te așteptăm cu masa pusă. Pentru că nu suntem un simplu
            magazin, ci un concept unic pentru tabieturile și gusturile tale.
          </h2>

          <p
            className="mt-7 text-base leading-[1.55] sm:text-[1.1rem]"
            style={{ fontFamily: "var(--font-gotham)" }}
          >
            La noi găsești vinuri, bere, cafea sub toate formele și pentru toate
            preferințele, tutun de cea mai bună calitate, gustări calde și
            băuturi răcoritoare. Jumătate magazin, jumătate snack bar. Chiar în
            inima Oborului.
          </p>

          <p
            className="mt-7 border-b border-current pb-3 text-base font-bold sm:text-[1.1rem]"
            style={{ fontFamily: "var(--font-gotham)" }}
          >
            Vino în magazin și descoperă selecția ZAR’VĂ:
          </p>
        </div>

        <div
          className="mt-8 grid max-w-[960px] gap-7 bg-[#5f1905] text-base font-bold leading-[1.7] sm:grid-cols-2 sm:text-[1.05rem] lg:grid-cols-3 lg:gap-12"
          style={{ fontFamily: "var(--font-travels)" }}
        >
          {productGroups.map((group, groupIndex) => (
            <ul key={groupIndex} className="space-y-1.5">
              {group.map((product) => (
                <li key={product} className="flex gap-2.5">
                  <span aria-hidden="true">•</span>
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p
          className="mt-10 max-w-[920px] rounded-sm bg-[#5f1905] text-base leading-[1.5] sm:text-[1.05rem] lg:max-w-[740px]"
          style={{ fontFamily: "var(--font-gotham)" }}
        >
          Dacă nu ai timp să ne faci o vizită în magazin, poți comanda produsele
          preferate direct din aplicațiile de livrare. Noi ne vom asigura că
          toate comenzile vor ajunge în siguranță la adresa ta.
        </p>

        <ul
          aria-label="Parteneri de livrare"
          className="mt-6 flex items-center gap-3 bg-[#5f1905] rounded-md"
        >
          <li
            aria-label="Wolt"
            className="size-16 overflow-hidden rounded-full"
          >
            <Image src="/assets/wolt" alt="" width={64} height={64} className="size-full object-cover" />
          </li>
          <li
            aria-label="Glovo"
            className="size-16 overflow-hidden rounded-full"
          >
            <Image src="/assets/glovo" alt="" width={64} height={64} className="size-full object-cover" />
          </li>
          <li
            aria-label="Bolt Food"
            className="size-16 overflow-hidden rounded-full"
          >
            <Image src="/assets/bolt" alt="" width={64} height={64} className="size-full object-cover" />
          </li>
          <li
            aria-label="Bringo"
            className="size-16 overflow-hidden rounded-full"
          >
            <Image src="/assets/bringo" alt="" width={64} height={64} className="size-full object-cover" />
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
