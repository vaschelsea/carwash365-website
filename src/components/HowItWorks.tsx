import { UserPlus, Car, MapPin, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account and select your building.",
  },
  {
    icon: Car,
    title: "Tell Us About Your Car",
    description: "Add your vehicle details so our team can find it.",
  },
  {
    icon: MapPin,
    title: "Share Your Spot",
    description: "Tell us where you park. That\u2019s the last thing you do.",
  },
  {
    icon: Sparkles,
    title: "Walk Out to a Clean Car",
    description: "Every week, your car gets a hand wash in your spot.",
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

        {/* Step cards — desktop: horizontal with connectors */}
        <div className="hidden lg:flex items-stretch justify-between gap-10">
          {steps.map((step, i) => (
            <AnimatedSection
              key={step.title}
              delay={i * 0.08}
              className="flex items-stretch flex-1 min-w-0"
            >
              <div className="flex items-stretch w-full">
                {/* Card */}
                <div
                  className="relative p-6 text-center flex-1 transition-all duration-350 hover:-translate-y-1"
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
                    className="w-[64px] h-[64px] rounded-icon-lg mx-auto mb-4 flex items-center justify-center transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06))",
                      border: "1px solid rgba(4, 57, 217, 0.08)",
                    }}
                  >
                    <step.icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.01em] leading-[1.3] text-dark-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-[1.6] text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>

                {/* Connector line between cards */}
                {i < steps.length - 1 && (
                  <div className="flex items-center w-10 flex-shrink-0 -mx-5 relative z-0">
                    {/* Line */}
                    <div
                      className="w-full h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(4, 57, 217, 0.35), rgba(4, 57, 217, 0.15))",
                      }}
                    />
                    {/* Dot at start */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full"
                      style={{ background: "rgba(4, 57, 217, 0.4)" }}
                    />
                    {/* Dot at end */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full"
                      style={{ background: "rgba(4, 57, 217, 0.2)" }}
                    />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Step cards — tablet: 2x2 grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.08}>
              <div
                className="relative p-6 text-center h-full transition-all duration-350 hover:-translate-y-1"
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "20px",
                  boxShadow: "var(--glass-shadow)",
                }}
              >
                <div
                  className="absolute -top-2.5 -right-2.5 w-[30px] h-[30px] rounded-full bg-primary text-white text-[13px] font-bold flex items-center justify-center z-10"
                  style={{
                    boxShadow: "0 4px 12px rgba(4, 57, 217, 0.35)",
                  }}
                >
                  {i + 1}
                </div>
                <div
                  className="w-[64px] h-[64px] rounded-icon-lg mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06))",
                    border: "1px solid rgba(4, 57, 217, 0.08)",
                  }}
                >
                  <step.icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] leading-[1.3] text-dark-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.6] text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Step cards — mobile: vertical with connector lines */}
        <div className="md:hidden flex flex-col items-center">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.08} className="w-full">
              <div
                className="relative p-5 text-center transition-all duration-350"
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

                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className="w-[52px] h-[52px] rounded-icon-lg flex-shrink-0 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06))",
                      border: "1px solid rgba(4, 57, 217, 0.08)",
                    }}
                  >
                    <step.icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold tracking-[-0.01em] leading-[1.3] text-dark-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-[1.5] text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-[2px] h-6"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(4, 57, 217, 0.35), rgba(4, 57, 217, 0.1))",
                      }}
                    />
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ background: "rgba(4, 57, 217, 0.3)" }}
                    />
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
