import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Every Thursday morning I walk out and my car is just… done. I forgot what it was like to even think about it. Honestly feels like concierge service, not a car wash.",
    name: "Sarah M.",
    location: "Resident, The Hayworth — Houston",
  },
  {
    quote:
      "I used to spend my Saturday mornings at a car wash. Now I spend them doing literally anything else. Best $80 I spend every month.",
    name: "James R.",
    location: "Resident, AMLI Downtown — Austin",
  },
  {
    quote:
      "Residents won't stop talking about it. We launched at three properties and it's already the most-mentioned amenity in our surveys — and it doesn't cost us a dime.",
    name: "Regional Property Manager",
    location: "Portfolio Operator — Texas",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-16 md:py-[120px]"
      style={{ background: "var(--gradient-cta-section)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.06em] mb-5"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "var(--color-primary-soft)",
            }}
          >
            Testimonials
          </span>
          <h2 className="text-[1.75rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4">
            Hundreds of Residents.{" "}
            <br className="hidden md:block" />
            <span className="text-primary-sky">
              One Fewer Thing to Worry About.
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div
                className="p-9 h-full flex flex-col"
                style={{
                  background: "var(--glass-dark-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid var(--glass-dark-border)",
                  borderRadius: "20px",
                  boxShadow: "var(--glass-dark-shadow)",
                }}
              >
                <Quote
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary-soft mb-4 opacity-60"
                />
                <blockquote className="text-[0.9375rem] leading-[1.7] text-white/90 mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-[0.9375rem] font-semibold text-white">
                    — {t.name}
                  </p>
                  <p className="text-sm text-white/50">{t.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
