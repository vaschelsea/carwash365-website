import { UserPlus, Car, MapPin, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description:
      "Create your account and select your building. Takes about 2 minutes.",
  },
  {
    icon: Car,
    title: "Tell Us About Your Car",
    description:
      "Add your vehicle details — make, model, color, and plate — so our team can find it in the garage.",
  },
  {
    icon: MapPin,
    title: "Share Your Spot",
    description:
      "Let us know where you usually park — garage level, spot number, or general area. That's the last thing you'll ever need to do.",
  },
  {
    icon: Sparkles,
    title: "Walk Out to a Clean Car",
    description:
      "Every week on your building's wash night, your car gets a professional hand wash — right in your parking spot. You don't have to be there, schedule anything, or even think about it.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-[120px]"
      style={{
        background: "#F8FAFF",
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
            How It Works
          </span>
          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 mb-4">
            Four Steps to a Car That&apos;s{" "}
            <span className="text-primary">Always Clean</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] max-w-[38rem] mx-auto">
            No apps. No appointments. Just four quick steps and you&apos;re set
            for good.
          </p>
        </AnimatedSection>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.08}>
              <div
                className="relative p-8 text-center h-full transition-all duration-350 hover:-translate-y-1"
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "20px",
                  boxShadow: "var(--glass-shadow)",
                }}
              >
                {/* Step badge */}
                <div
                  className="absolute -top-2.5 -right-2.5 w-[30px] h-[30px] rounded-full bg-primary text-white text-[13px] font-bold flex items-center justify-center z-10"
                  style={{
                    boxShadow: "0 4px 12px rgba(4, 57, 217, 0.35)",
                  }}
                >
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-[72px] h-[72px] rounded-icon-lg mx-auto mb-5 flex items-center justify-center transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06))",
                    border: "1px solid rgba(4, 57, 217, 0.08)",
                  }}
                >
                  <step.icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-primary"
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.01em] leading-[1.3] text-dark-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-[var(--color-text-secondary)]">
                  {step.description}
                </p>

                {/* Connector line (desktop only, not on last card) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(4, 57, 217, 0.25), rgba(4, 57, 217, 0.05))",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
