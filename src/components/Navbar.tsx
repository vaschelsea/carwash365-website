"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "72px",
        background: scrolled
          ? "rgba(248, 250, 255, 0.7)"
          : "rgba(10, 14, 39, 0.3)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(4, 57, 217, 0.06)"
          : "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src={scrolled ? "/images/carwash365_logo.png" : "/images/carwash365_logo_white.png"}
            alt="CarWash365"
            width={160}
            height={40}
            className="hidden md:block h-9 w-auto"
            priority
          />
          <Image
            src="/images/carwash365_logo_icon.png"
            alt="CarWash365"
            width={40}
            height={40}
            className="md:hidden h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[0.9375rem] font-medium transition-colors duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              style={{
                color: scrolled ? "var(--color-text-secondary)" : "rgba(255, 255, 255, 0.85)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? "var(--color-text-primary)" : "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled
                  ? "var(--color-text-secondary)"
                  : "rgba(255, 255, 255, 0.85)";
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.carwash365.com/login"
            className="text-[0.9375rem] font-medium transition-colors duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
            style={{
              color: scrolled ? "var(--color-text-secondary)" : "rgba(255, 255, 255, 0.85)",
            }}
          >
            Log In
          </a>
          <a
            href="https://www.carwash365.com/signup"
            className="inline-flex items-center px-6 py-2.5 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250 hover:-translate-y-0.5 focus:outline-2 focus:outline-primary focus:outline-offset-2"
            style={{
              boxShadow: "0 4px 20px rgba(4, 57, 217, 0.40)",
            }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 focus:outline-2 focus:outline-primary focus:outline-offset-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} color={scrolled ? "#0A0E27" : "#FFFFFF"} />
          ) : (
            <Menu size={24} color={scrolled ? "#0A0E27" : "#FFFFFF"} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: scrolled
                ? "rgba(248, 250, 255, 0.95)"
                : "rgba(10, 14, 39, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-base font-medium text-left py-2 focus:outline-2 focus:outline-primary focus:outline-offset-2"
                  style={{
                    color: scrolled ? "var(--color-text-primary)" : "#FFFFFF",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <hr
                className="my-2"
                style={{
                  borderColor: scrolled
                    ? "rgba(4, 57, 217, 0.08)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
              />
              <a
                href="https://www.carwash365.com/login"
                className="text-base font-medium py-2"
                style={{
                  color: scrolled ? "var(--color-text-secondary)" : "rgba(255,255,255,0.85)",
                }}
              >
                Log In
              </a>
              <a
                href="https://www.carwash365.com/signup"
                className="inline-flex items-center justify-center px-6 py-3 rounded-btn text-[0.9375rem] font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-250"
                style={{
                  boxShadow: "0 4px 20px rgba(4, 57, 217, 0.40)",
                }}
              >
                Get Started
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
