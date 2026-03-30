import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="py-14 md:py-14"
      style={{ background: "#0A0E27" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Left: Logo + Powered by */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/carwash365_logo_white.png"
              alt="CarWash365"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="text-xs" style={{ color: "var(--color-text-on-dark-muted)" }}>
              Powered by TeamLynQ
            </p>
          </div>

          {/* Right: Nav + Legal links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-white focus:outline-2 focus:outline-primary focus:outline-offset-2"
                style={{ color: "var(--color-text-on-dark-muted)" }}
              >
                {link.label}
              </a>
            ))}
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-white focus:outline-2 focus:outline-primary focus:outline-offset-2"
                style={{ color: "var(--color-text-on-dark-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "rgba(255, 255, 255, 0.06)" }}
        />

        {/* Row 2 */}
        <p
          className="text-center text-sm"
          style={{ color: "var(--color-text-on-dark-muted)" }}
        >
          &copy; 2026 CarWash365. All rights reserved. A MultiFamily Amenity
          Services Group Company.
        </p>
      </div>
    </footer>
  );
}
