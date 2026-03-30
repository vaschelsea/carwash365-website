export default function HeroCar() {
  return (
    <div className="relative w-full max-w-md mx-auto mt-12 md:mt-16">
      {/* Sparkle particles */}
      <div
        className="absolute top-4 right-16 w-2 h-2 bg-white animate-sparkle"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      />
      <div
        className="absolute top-12 left-20 w-1.5 h-1.5 bg-white animate-sparkle"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-20 right-24 w-2.5 h-2.5 bg-white animate-sparkle"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          animationDelay: "2s",
        }}
      />

      {/* Car SVG with float animation */}
      <div
        className="animate-float"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(4, 57, 217, 0.3))",
        }}
      >
        <svg
          viewBox="0 0 480 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-hidden="true"
        >
          {/* Car body */}
          <path
            d="M90 140 L120 80 L200 55 L340 55 L390 80 L420 140 Z"
            fill="url(#carBodyGrad)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Car roof / cabin */}
          <path
            d="M150 80 L180 50 L310 50 L350 80 Z"
            fill="url(#carRoofGrad)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          {/* Windshield */}
          <path
            d="M155 78 L182 52 L230 52 L220 78 Z"
            fill="rgba(148, 179, 242, 0.4)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          {/* Rear window */}
          <path
            d="M290 78 L305 52 L345 52 L345 78 Z"
            fill="rgba(148, 179, 242, 0.35)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          {/* Side windows */}
          <path
            d="M225 78 L235 52 L300 52 L285 78 Z"
            fill="rgba(148, 179, 242, 0.3)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
          {/* Lower body panel */}
          <rect
            x="80"
            y="130"
            width="350"
            height="25"
            rx="8"
            fill="url(#carLowerGrad)"
          />
          {/* Headlights */}
          <ellipse cx="100" cy="125" rx="14" ry="10" fill="rgba(255,255,255,0.9)" />
          <ellipse cx="100" cy="125" rx="8" ry="6" fill="rgba(148, 179, 242, 0.8)" />
          {/* Taillights */}
          <ellipse cx="415" cy="125" rx="12" ry="8" fill="rgba(220, 80, 80, 0.8)" />
          <ellipse cx="415" cy="125" rx="7" ry="5" fill="rgba(255, 120, 120, 0.6)" />
          {/* Front wheel */}
          <circle cx="155" cy="155" r="28" fill="#1a1a2e" />
          <circle cx="155" cy="155" r="22" fill="#2a2a3e" />
          <circle cx="155" cy="155" r="12" fill="#3a3a4e" />
          <circle cx="155" cy="155" r="6" fill="#4a4a5e" />
          {/* Rear wheel */}
          <circle cx="360" cy="155" r="28" fill="#1a1a2e" />
          <circle cx="360" cy="155" r="22" fill="#2a2a3e" />
          <circle cx="360" cy="155" r="12" fill="#3a3a4e" />
          <circle cx="360" cy="155" r="6" fill="#4a4a5e" />
          {/* Body highlight line */}
          <path
            d="M95 120 Q240 105 420 120"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            fill="none"
          />
          {/* Door line */}
          <line
            x1="250"
            y1="78"
            x2="255"
            y2="138"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          {/* Glow underneath */}
          <ellipse
            cx="250"
            cy="190"
            rx="160"
            ry="15"
            fill="url(#glowGrad)"
          />

          <defs>
            <linearGradient
              id="carBodyGrad"
              x1="90"
              y1="60"
              x2="420"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2561D9" />
              <stop offset="50%" stopColor="#0439D9" />
              <stop offset="100%" stopColor="#0330B8" />
            </linearGradient>
            <linearGradient
              id="carRoofGrad"
              x1="150"
              y1="45"
              x2="350"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1A2050" />
              <stop offset="100%" stopColor="#111640" />
            </linearGradient>
            <linearGradient
              id="carLowerGrad"
              x1="80"
              y1="130"
              x2="430"
              y2="155"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0330B8" />
              <stop offset="100%" stopColor="#0439D9" />
            </linearGradient>
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(4, 57, 217, 0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
