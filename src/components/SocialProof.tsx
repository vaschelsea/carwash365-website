import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const partners = [
  { key: "alfred", file: "logo1.png", alt: "Alfred" },
  { key: "amli", file: "logo2.png", alt: "AMLI Residential" },
  { key: "hayworth", file: "logo3.webp", alt: "The Hayworth" },
  { key: "arabella", file: "logo4.png", alt: "Arabella" },
];

export default function SocialProof() {
  return (
    <section
      className="relative py-9 md:py-9"
      style={{
        background: "linear-gradient(180deg, #0A0E27 0%, #111640 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="rounded-glass px-6 py-6 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: "var(--glass-dark-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--glass-dark-border)",
              boxShadow: "var(--glass-dark-shadow)",
            }}
          >
            <p
              className="text-sm md:text-[0.9375rem] font-medium text-center md:text-left"
              style={{ color: "var(--color-text-on-dark-muted)" }}
            >
              Serving{" "}
              <span className="text-white font-semibold">
                40+ apartment communities
              </span>{" "}
              across 7 cities
            </p>

            <div className="flex items-center gap-6 md:gap-8 flex-shrink-0">
              {partners.map((partner) => (
                <Image
                  key={partner.key}
                  src={`/images/partners/${partner.file}`}
                  alt={partner.alt}
                  width={100}
                  height={36}
                  className="h-7 md:h-8 w-auto opacity-50 hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
