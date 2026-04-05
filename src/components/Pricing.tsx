"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tiers = [
  {
    name: "Basic Exterior",
    price: "$79.95",
    valueLine:
      "That's less than $20 per wash — done by hand, in your parking spot, while you sleep.",
    features: [
      "Weekly exterior hand wash, performed after hours in your spot",
      "Eco-friendly, minimal-water cleaning system",
      "Wheels cleaned and tires dressed",
      "Exterior windows cleaned",
      "Trim cleaned",
    ],
    featured: false,
  },
  {
    name: "Exterior Plus",
    price: "$109.95",
    valueLine:
      "Everything in Basic, plus monthly interior care to keep the inside fresh too.",
    features: [
      "Everything in Basic Exterior",
      "Monthly interior vacuum",
      "Monthly interior wipe-down (dash, console, door panels)",
      "Interior window cleaning",
    ],
    featured: true,
  },
  {
    name: "Concierge Detail",
    price: "$159.95",
    valueLine:
      "The full treatment. Inside and out, all month long. Premium care for people who want the best.",
    features: [
      "Weekly exterior wash with bug removal",
      "Trim conditioning",
      "Monthly spray wax",
      "Bi-weekly interior refresh: full vacuum, dash & console wipe-down, door jamb wipe, interior glass cleaning",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-16 md:py-[120px]"
      style={{ background: "var(--gradient-light-section)", backgroundImage: "var(--gradient-mesh)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.06em] mb-5"
            style={{
              background: "rgba(4, 57, 217, 0.08)",
              border: "1px solid rgba(4, 57, 217, 0.12)",
              color: "var(--color-primary)",
            }}
          >
            Pricing
          </span>
          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 mb-4">
            Simple Pricing.
            <br className="md:hidden" />
            <span className="text-primary"> No Surprises.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] max-w-[38rem] mx-auto">
            Every plan includes a weekly professional wash.
            <br />
            Pick the plan that fits your car.
          </p>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-7 items-stretch mb-12 max-w-[85%] mx-auto md:max-w-none">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -4,
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                }}
                className="relative flex flex-col h-full"
                style={{
                  background: tier.featured
                    ? "rgba(255, 255, 255, 0.75)"
                    : "var(--glass-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: tier.featured
                    ? "1px solid rgba(4, 57, 217, 0.25)"
                    : "1px solid var(--glass-border)",
                  borderRadius: "24px",
                  padding: "40px 36px",
                  boxShadow: tier.featured
                    ? "0 8px 32px rgba(4, 57, 217, 0.12), 0 0 0 1px rgba(4, 57, 217, 0.08)"
                    : "var(--glass-shadow)",
                  transform: tier.featured ? "scale(1.03)" : undefined,
                }}
              >
                {/* Most Popular tag */}
                {tier.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.06em] text-white bg-primary whitespace-nowrap"
                    style={{
                      boxShadow: "0 4px 16px rgba(4, 57, 217, 0.4)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold tracking-[-0.01em] text-dark-900 mb-4">
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <span className="text-[2.25rem] md:text-[3rem] font-[800] tracking-[-0.02em] leading-[1.1] text-dark-900">
                    {tier.price}
                  </span>
                  <span className="text-base text-[var(--color-text-muted)]">
                    /month
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-6 italic">
                  {tier.valueLine}
                </p>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.9375rem] leading-[1.7] text-[var(--color-text-secondary)]"
                    >
                      <Check
                        size={18}
                        strokeWidth={2.5}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA below cards */}
        <AnimatedSection delay={0.32} className="text-center">
          <a
            href="https://www.carwash365.com/signup"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250 hover:-translate-y-0.5 mb-6 focus:outline-2 focus:outline-primary focus:outline-offset-2"
            style={{
              boxShadow:
                "0 4px 20px rgba(4, 57, 217, 0.40), 0 0 0 1px rgba(255,255,255,0.1) inset",
            }}
          >
            Start Your Membership
            <ArrowRight size={18} />
          </a>
          <p className="text-xs text-[var(--color-text-muted)] mb-6">
            Secure payment via Stripe · Cancel anytime · No contracts
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Not sure which plan? <strong className="text-dark-900">Start with Basic</strong> — upgrade anytime.
          </p>
          <p className="text-xs font-medium text-primary">
            Limited availability per building.
            <br />
            Check if your property is active.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
