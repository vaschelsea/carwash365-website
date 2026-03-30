import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 md:py-[120px]"
      style={{ background: "var(--gradient-cta-section)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-6 max-w-3xl mx-auto">
            Ready to Stop Thinking About{" "}
            <span className="text-primary-sky">Car Washes?</span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-[38rem] mx-auto mb-10"
            style={{ color: "var(--color-text-on-dark-muted)" }}
          >
            Join hundreds of residents who wake up to a clean car every week.
            Sign up in 2 minutes and let us handle the rest.
          </p>
          <a
            href="https://www.carwash365.com/signup"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250 hover:-translate-y-0.5 mb-6 focus:outline-2 focus:outline-white focus:outline-offset-2"
            style={{
              boxShadow:
                "0 4px 20px rgba(4, 57, 217, 0.40), 0 0 0 1px rgba(255,255,255,0.1) inset",
            }}
          >
            Get Started Now
            <ArrowRight size={20} />
          </a>
          <p className="text-sm" style={{ color: "var(--color-text-on-dark-muted)" }}>
            Questions? Contact us at{" "}
            <a
              href="mailto:support@carwash365.com"
              className="text-white hover:underline font-medium"
            >
              support@carwash365.com
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
