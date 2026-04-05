"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Layer 1: Background video — desktop (landscape) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ opacity: 0.7, zIndex: 0 }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Layer 1: Background video — mobile (vertical) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/heroimagevertical.jpg"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        style={{ opacity: 0.7, zIndex: 0 }}
      >
        <source src="/images/herovideovertical.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Dark blue gradient overlay on top of video */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-hero)",
          zIndex: 1,
          mixBlendMode: "multiply",
          opacity: 0.65,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-radial)", zIndex: 2 }}
      />

      {/* Layer 3: Animated gradient orbs */}
      <div
        className="absolute rounded-full animate-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(4, 57, 217, 0.5)",
          top: "10%",
          right: "15%",
          filter: "blur(80px)",
          opacity: 0.4,
          zIndex: 3,
        }}
      />
      <div
        className="absolute rounded-full animate-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(37, 97, 217, 0.3)",
          bottom: "20%",
          left: "10%",
          filter: "blur(80px)",
          opacity: 0.4,
          animationDelay: "-3s",
          zIndex: 3,
        }}
      />
      <div
        className="absolute rounded-full animate-orb"
        style={{
          width: "300px",
          height: "300px",
          background: "rgba(148, 179, 242, 0.25)",
          top: "50%",
          left: "40%",
          filter: "blur(80px)",
          opacity: 0.4,
          animationDelay: "-5s",
          zIndex: 3,
        }}
      />

      {/* Layer 4: Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Overline badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.06em]"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "var(--color-primary-soft)",
            }}
          >
            <Sparkles size={14} />
            Premium Car Wash Membership
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[2.5rem] md:text-[4.5rem] font-[800] leading-[1.05] tracking-[-0.03em] text-white mb-6 md:whitespace-nowrap"
        >
          Your Car, Spotless{" "}
          <span className="text-primary-soft">Every Week</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl leading-relaxed max-w-[48rem] mx-auto mb-10"
          style={{ color: "var(--color-text-on-dark-muted)" }}
        >
          CarWash365 brings professional exterior car washing right to your building.
          <br className="hidden md:block" />
          {" "}Sign up once, park your car, and let us handle the rest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://www.carwash365.com/signup"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250 hover:-translate-y-0.5 relative overflow-hidden focus:outline-2 focus:outline-white focus:outline-offset-2"
            style={{
              boxShadow:
                "0 4px 20px rgba(4, 57, 217, 0.40), 0 0 0 1px rgba(255,255,255,0.1) inset",
            }}
          >
            Start Your Membership
            <ArrowRight size={18} />
          </a>
          <button
            onClick={() => {
              document
                .querySelector("#how-it-works")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-9 py-4 rounded-btn text-[0.9375rem] font-semibold text-white transition-all duration-250 hover:-translate-y-0.5 focus:outline-2 focus:outline-white focus:outline-offset-2"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          style={{ color: "var(--color-text-on-dark-muted)" }}
        >
          <span>✓ Weekly professional wash</span>
          <span>✓ Done in your parking spot</span>
          <span>✓ Cancel anytime</span>
        </motion.div>
      </div>
    </section>
  );
}
