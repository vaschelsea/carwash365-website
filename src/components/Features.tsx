"use client";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  BellRing,
  ShieldCheck,
  Clock,
  Smartphone,
  Leaf,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: CalendarCheck,
    title: "One Wash Night. Zero Effort.",
    description:
      "Your building has a set wash night. Just park and we handle the rest.",
  },
  {
    icon: BellRing,
    title: "You'll Always Know When It's Done",
    description:
      "Reminders before. Confirmation after. That's it.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Products. Trained Hands.",
    description:
      "Paint-safe, eco-friendly products. Trained technicians. Consistent results.",
  },
  {
    icon: Clock,
    title: "Get Your Weekends Back",
    description:
      "We come to you while you sleep, work, or do anything else.",
  },
  {
    icon: Smartphone,
    title: "Manage Everything From Your Phone",
    description:
      "Vehicle info, wash history, billing — all in one dashboard.",
  },
  {
    icon: Leaf,
    title: "Clean Car, Clean Conscience",
    description:
      "Waterless system built for garages and the environment.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-16 md:py-[120px]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
        backgroundImage: "var(--gradient-mesh)",
      }}
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
            Features
          </span>
          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 mb-4 md:whitespace-nowrap">
            The Car Wash You Never Have to{" "}
            <span className="text-primary">Think About</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] max-w-[38rem] mx-auto">
            Everything is handled. Here&apos;s why residents love it.
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -4,
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                }}
                className="p-9 h-full"
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "20px",
                  boxShadow: "var(--glass-shadow)",
                  transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--glass-bg-hover)";
                  el.style.borderColor = "rgba(4, 57, 217, 0.15)";
                  el.style.boxShadow = "0 16px 48px rgba(4, 57, 217, 0.10)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--glass-bg)";
                  el.style.borderColor = "var(--glass-border)";
                  el.style.boxShadow = "var(--glass-shadow)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-icon mb-5 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06))",
                    border: "1px solid rgba(4, 57, 217, 0.08)",
                  }}
                >
                  <feature.icon
                    size={26}
                    strokeWidth={1.8}
                    className="text-primary"
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.01em] leading-[1.3] text-dark-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
