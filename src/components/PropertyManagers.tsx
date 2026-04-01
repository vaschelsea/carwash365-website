import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const valueProps = [
  {
    bold: "Zero cost to ownership.",
    text: "We're fully managed and fully insured. No vendor coordination, no staff involvement, no budget impact.",
  },
  {
    bold: "Standardized across your portfolio.",
    text: "Same pricing, same service model, same SOPs — whether you have 3 properties or 30.",
  },
  {
    bold: "Drives resident retention.",
    text: "High-frequency, recurring engagement that residents talk about. It's the kind of amenity that shows up in renewal conversations.",
  },
  {
    bold: "Portfolio-level reporting.",
    text: "Track adoption, engagement, and performance across every asset from a single dashboard.",
  },
];

export default function PropertyManagers() {
  return (
    <section
      id="property-managers"
      className="relative py-16 md:py-[120px]"
      style={{
        background: "#F8FAFF",
        backgroundImage:
          "radial-gradient(at 80% 30%, rgba(4, 75, 217, 0.12) 0%, transparent 50%), radial-gradient(at 20% 70%, rgba(37, 97, 217, 0.08) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <span
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.06em] mb-5"
              style={{
                background: "rgba(4, 57, 217, 0.08)",
                border: "1px solid rgba(4, 57, 217, 0.12)",
                color: "var(--color-primary)",
              }}
            >
              For Property Managers
            </span>
            <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 mb-4">
              Bring CarWash365
              <br />
              <span className="text-primary">to Your Property</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Your residents want premium. Your team is stretched thin. CarWash365
              is the rare amenity that makes both groups happy — with zero work
              from your side.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mb-12">
            <div
              className="p-8 md:p-10"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {valueProps.map((vp, i) => (
                  <div key={i}>
                    <p className="text-[0.9375rem] font-semibold text-dark-900 mb-1">
                      {vp.bold}
                    </p>
                    <p className="text-sm leading-[1.7] text-[var(--color-text-secondary)]">
                      {vp.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="text-center">
            <a
              href="https://www.carwash365.com/signup"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250 hover:-translate-y-0.5 mb-4 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              style={{
                boxShadow:
                  "0 4px 20px rgba(4, 57, 217, 0.40), 0 0 0 1px rgba(255,255,255,0.1) inset",
              }}
            >
              Partner With Us
              <ArrowRight size={18} />
            </a>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Or email us at{" "}
              <a
                href="mailto:partnerships@carwash365.com"
                className="text-primary hover:underline font-medium"
              >
                partnerships@carwash365.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
