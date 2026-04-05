import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const partners = [
  { key: "alfred", file: "logo1.png", alt: "Alfred" },
  { key: "amli", file: "logo2.png", alt: "AMLI Residential" },
  { key: "hayworth", file: "logo3.png", alt: "The Hayworth" },
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
      <div className="max-w-[1060px] mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="rounded-glass px-6 py-6 md:px-8 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: "var(--glass-dark-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--glass-dark-border)",
              boxShadow: "var(--glass-dark-shadow)",
            }}
          >
            <p
              className="text-sm md:text-[0.9375rem] font-medium text-center md:text-left flex-shrink-0"
              style={{ color: "var(--color-text-on-dark-muted)" }}
            >
              Serving{" "}
              <span className="text-white font-semibold">
                40+ apartment communities
              </span>{" "}
              across 7 cities
            </p>

            {/* Desktop: single row — uniform sizing */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              {partners.map((partner) => (
                <div
                  key={partner.key}
                  className={`flex items-center justify-center ${partner.key === "arabella" ? "w-[140px] h-[44px]" : "w-[110px] h-[36px]"}`}
                >
                  <Image
                    src={`/images/partners/${partner.file}`}
                    alt={partner.alt}
                    width={partner.key === "arabella" ? 140 : 110}
                    height={partner.key === "arabella" ? 44 : 36}
                    className="w-full h-full opacity-50 hover:opacity-80 transition-opacity object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: 2x2 grid — uniform sizing */}
            <div className="md:hidden grid grid-cols-2 gap-4 w-full max-w-[280px]">
              {partners.map((partner) => (
                <div
                  key={partner.key}
                  className={`flex items-center justify-center mx-auto ${partner.key === "arabella" ? "w-[130px] h-[34px]" : "w-[110px] h-[28px]"}`}
                >
                  <Image
                    src={`/images/partners/${partner.file}`}
                    alt={partner.alt}
                    width={partner.key === "arabella" ? 130 : 110}
                    height={partner.key === "arabella" ? 34 : 28}
                    className="w-full h-full opacity-50 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
