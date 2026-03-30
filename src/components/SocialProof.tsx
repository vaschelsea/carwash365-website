import AnimatedSection from "./AnimatedSection";

const partners = ["Alfred", "AMLI Residential", "The Hayworth", "Arabella"];

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
              Trusted at{" "}
              <span className="text-white font-semibold">40+ properties</span>{" "}
              across Houston, Austin, Charlotte, Miami, Nashville, Denver &amp;
              Dallas
            </p>

            <div className="flex items-center gap-6 md:gap-8 flex-shrink-0">
              {partners.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "rgba(255, 255, 255, 0.5)",
                    minWidth: "80px",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
