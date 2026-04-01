"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How does the wash schedule work?",
    a: "Each building has a designated wash night. Our team comes after hours and washes every member\u2019s car in their spot. You don\u2019t need to schedule anything or be present.",
  },
  {
    q: "What if I\u2019m not parked in my usual spot?",
    a: "Update your spot anytime in your account. If we can\u2019t find your car, we\u2019ll notify you and catch you next week.",
  },
  {
    q: "Do I need to leave my keys?",
    a: "Never. We wash the exterior only. For plans with interior service, we\u2019ll coordinate access separately. Your keys always stay with you.",
  },
  {
    q: "What products do you use? Are they safe for my paint?",
    a: "Premium, pH-balanced, paint-safe products. Our waterless system lifts dirt without scratching \u2014 gentler than any drive-through.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no fees. Cancel, pause, or switch plans anytime from your dashboard.",
  },
  {
    q: "Is CarWash365 available at my building?",
    a: "We\u2019re active across Houston, Austin, and expanding into several new markets. Check availability during signup or email us at support@carwash365.com.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-16 md:py-[100px]"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.06em] mb-5"
            style={{
              background: "rgba(4, 57, 217, 0.08)",
              border: "1px solid rgba(4, 57, 217, 0.12)",
              color: "var(--color-primary)",
            }}
          >
            FAQ
          </span>
          <h2 className="text-[1.75rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 md:whitespace-nowrap">
            Got Questions?{" "}
            <br className="md:hidden" />
            <span className="text-primary">We&apos;ve Got Answers.</span>
          </h2>
        </AnimatedSection>

        <div>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div
                className="border-b"
                style={{
                  borderColor: "var(--color-border-light)",
                  padding: "28px 0",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex justify-between items-center gap-4 text-left text-lg font-semibold text-dark-900 hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-2 focus:outline-primary focus:outline-offset-2"
                >
                  {faq.q}
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className={
                        openIndex === i
                          ? "text-primary"
                          : "text-[var(--color-text-muted)]"
                      }
                    />
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-base leading-[1.7] text-[var(--color-text-secondary)] pt-4 max-w-[38rem]">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
