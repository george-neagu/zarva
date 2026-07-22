import Image from "next/image";
import Reveal from "./Reveal";
import { StaggerItem, StaggerReveal } from "./StaggerReveal";

const galleryImages = [
  { src: "/assets/social-4", alt: "Vin roșu turnat într-un pahar" },
  { src: "/assets/social-5", alt: "Vin servit la masă" },
  { src: "/assets/social-6", alt: "Degustare de vin în magazin" },
  { src: "/assets/social-1", alt: "Pahar și sticlă de vin roșu" },
  { src: "/assets/social-7", alt: "Vin turnat în mai multe pahare" },
  { src: "/assets/social-3", alt: "Pahar cu vin într-o atmosferă caldă" },
] as const;

export default function Gallery() {
  return (
    <section
      id="galerie-foto"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 bg-[#fff1d5] px-6 py-16 text-[#5f1905] sm:px-10 lg:scroll-mt-[168px] lg:px-16 lg:py-20"
    >
      <Reveal className="mx-auto flex max-w-[1460px] flex-col items-center">
        <h2
          id="gallery-heading"
          className="flex h-[58px] w-[190px] items-center justify-center border-2 border-current text-sm font-bold sm:text-[15px]"
          style={{
            borderRadius: "44% 56% 48% 52% / 56% 44% 56% 44%",
            fontFamily: "var(--font-gotham)",
            transform: "rotate(1deg)",
          }}
        >
          <span style={{ transform: "rotate(-1deg)" }}>GALERIE FOTO</span>
        </h2>

        <StaggerReveal className="mt-14 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {galleryImages.map((image) => (
            <StaggerItem key={image.src}>
            <figure
              className="relative aspect-[1.19] overflow-hidden rounded-[24px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 92vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.025]"
              />
            </figure>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Reveal>
    </section>
  );
}
