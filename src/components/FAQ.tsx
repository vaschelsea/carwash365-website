"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How does the wash schedule work?",
    a: "Each building has a designated wash night (for example, every Thursday evening). Our team comes to the garage after hours and washes every member's car in their parking spot. You don't need to schedule anything or be present.",
  },
  {
    q: "What if I'm not parked in my usual spot?",
    a: "No problem. You can update your parking location anytime through your account. If we can't find your car on wash night, we'll send you a notification so we can catch you the following week.",
  },
  {
    q: "Do I need to leave my keys?",
    a: "Never. We only wash the exterior of your car (unless you're on a plan with interior service, in which case we'll coordinate access with you). Your keys stay with you at all times.",
  },
  {
    q: "What products do you use? Are they safe for my paint?",
    a: "We use premium, pH-balanced, paint-safe products designed for hand washing. Our waterless and minimal-water system is specifically formulated to lift dirt without scratching — it's actually gentler than a drive-through car wash.",
  },
  {
    q: "What if it rains on wash night?",
    a: "Since most of our properties have covered garages, rain typically doesn't affect service. If your car is parked outdoors and weather is an issue, we'll notify you and make it up the following week.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or cancellation fees. You can cancel, pause, or change your plan anytime from your account dashboard.",
  },
  {
    q: "Can I add a second vehicle?",
    a: "Absolutely. You can add multiple vehicles to your account. Each vehicle gets its own membership and wash service.",
  },
  {
    q: "Is CarWash365 available at my building?",
    a: "We're currently active in select buildings across Houston, Austin, and several other major markets, with new properties launching regularly. Enter your building during signup to check availability, or reach out to us at support@carwash365.com.",
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
