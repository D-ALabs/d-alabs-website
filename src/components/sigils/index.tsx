import React from "react";

const r4 = (n: number) => Math.round(n * 10000) / 10000;

export function GreatSigil({ size = 560 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-200 -200 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      style={{ color: "var(--gold)" }}
    >
      <defs>
        <radialGradient id="sigil-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--gold)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sigil-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="0" cy="0" r="200" fill="url(#sigil-glow)" />

      <g className="spin-slow">
        <circle cx="0" cy="0" r="180" strokeWidth="0.4" opacity="0.7" />
        <circle cx="0" cy="0" r="178" strokeWidth="0.4" opacity="0.5" />
        {Array.from({ length: 72 }).map((_, i) => (
          <line
            key={`tk-${i}`}
            x1="0"
            y1="-180"
            x2="0"
            y2={i % 6 === 0 ? -172 : -176}
            strokeWidth="0.5"
            opacity={i % 6 === 0 ? 0.9 : 0.45}
            transform={`rotate(${i * 5})`}
          />
        ))}
        <path id="ring-text-outer" d="M 0 -160 A 160 160 0 1 1 -0.01 -160 Z" fill="none" />
        <text fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="3" opacity="0.6">
          <textPath href="#ring-text-outer" startOffset="0">
            · SOLVE · ET · COAGULA · IGNIS · AQUA · TERRA · AER · MERCURIUS · SULFUR · SAL · QUINTA · ESSENTIA ·
          </textPath>
        </text>
      </g>

      <g className="spin-rev">
        <circle cx="0" cy="0" r="150" strokeWidth="0.5" opacity="0.7" />
        {[
          { a: 0, sym: "sulfur" },
          { a: 90, sym: "mercury" },
          { a: 180, sym: "salt" },
          { a: 270, sym: "azoth" },
        ].map((m, i) => (
          <g key={`card-${i}`} transform={`rotate(${m.a})`}>
            <circle cx="0" cy="-150" r="10" fill="var(--bg)" strokeWidth="0.6" />
            <g transform="translate(0, -150)">
              {m.sym === "sulfur" && (
                <g strokeWidth="0.7">
                  <path d="M -3 -4 L 3 -4 M 0 -4 L 0 1 M -2.5 1 A 2.5 2.5 0 1 0 2.5 1 A 2.5 2.5 0 1 0 -2.5 1 M -2 4 L 2 4" />
                </g>
              )}
              {m.sym === "mercury" && (
                <g strokeWidth="0.7">
                  <circle cx="0" cy="0" r="2.5" />
                  <path d="M -2 -3 A 2 2 0 0 1 2 -3 M 0 2.5 L 0 5 M -1.5 4 L 1.5 4" />
                </g>
              )}
              {m.sym === "salt" && (
                <g strokeWidth="0.7">
                  <circle cx="0" cy="0" r="3.5" />
                  <line x1="-3.5" y1="0" x2="3.5" y2="0" />
                </g>
              )}
              {m.sym === "azoth" && (
                <g strokeWidth="0.7">
                  <path d="M 0 -4 L 3.5 2 L -3.5 2 Z" />
                  <line x1="-3.5" y1="-1" x2="3.5" y2="-1" />
                </g>
              )}
            </g>
          </g>
        ))}
        {[45, 135, 225, 315].map((a) => (
          <g key={`d-${a}`} transform={`rotate(${a})`}>
            <circle cx="0" cy="-150" r="2" fill="currentColor" opacity="0.7" />
          </g>
        ))}
      </g>

      <g className="spin-slow">
        <circle cx="0" cy="0" r="115" strokeWidth="0.5" opacity="0.7" />
        <rect x="-81" y="-81" width="162" height="162" strokeWidth="0.5" opacity="0.65" />
        {[0, 45, 90, 135].map((a) => (
          <ellipse
            key={`outer-orb-${a}`}
            cx="0"
            cy="0"
            rx="96"
            ry="32"
            strokeWidth="0.5"
            opacity="0.55"
            transform={`rotate(${a})`}
          />
        ))}
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <circle
            key={`outer-e-${a}`}
            cx={r4(Math.sin((a * Math.PI) / 180) * 96)}
            cy={r4(-Math.cos((a * Math.PI) / 180) * 96)}
            r="2.6"
            fill="currentColor"
            opacity="0.85"
          />
        ))}
      </g>

      <g className="spin-fast" style={{ opacity: 0.85 }}>
        <circle cx="0" cy="0" r="70" strokeWidth="0.5" opacity="0.6" />
        <circle cx="0" cy="0" r="62" strokeWidth="0.5" opacity="0.75" />
        <circle cx="0" cy="0" r="48" strokeWidth="0.4" opacity="0.55" strokeDasharray="2 4" />
        {[0, 72, 144, 216, 288].map((a) => (
          <circle
            key={`bohr-${a}`}
            cx={r4(Math.sin((a * Math.PI) / 180) * 62)}
            cy={r4(-Math.cos((a * Math.PI) / 180) * 62)}
            r="2.6"
            fill="currentColor"
          />
        ))}
        {[36, 156, 276].map((a) => (
          <circle
            key={`bohr-in-${a}`}
            cx={r4(Math.sin((a * Math.PI) / 180) * 48)}
            cy={r4(-Math.cos((a * Math.PI) / 180) * 48)}
            r="1.8"
            fill="currentColor"
            opacity="0.7"
          />
        ))}
      </g>

      <g>
        <circle cx="0" cy="0" r="36" fill="url(#sigil-center)" stroke="none" />
        <circle cx="0" cy="0" r="28" strokeWidth="0.5" opacity="0.7" />
        <g className="spin-fast">
          <ellipse cx="0" cy="0" rx="24" ry="9" strokeWidth="0.6" opacity="0.8" />
          <ellipse cx="0" cy="0" rx="24" ry="9" strokeWidth="0.6" opacity="0.8" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="24" ry="9" strokeWidth="0.6" opacity="0.8" transform="rotate(120)" />
        </g>
        <circle cx="0" cy="0" r="3" fill="currentColor" />
        <circle cx="0" cy="0" r="6" strokeWidth="0.4" opacity="0.7" />
      </g>

      <g className="pulse" style={{ opacity: 0.4 }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line
            key={`ray-${a}`}
            x1="0"
            y1="-32"
            x2="0"
            y2="-110"
            strokeWidth="0.3"
            transform={`rotate(${a})`}
          />
        ))}
      </g>
    </svg>
  );
}

export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-20 -20 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--gold)" }}
    >
      <circle cx="0" cy="0" r="17" strokeWidth="0.6" opacity="0.55" />
      <circle cx="0" cy="0" r="15" strokeWidth="0.35" opacity="0.4" />
      {[0, 90, 180, 270].map((a) => (
        <line key={a} x1="0" y1="-17" x2="0" y2="-14.5" strokeWidth="0.55" opacity="0.75" transform={`rotate(${a})`} />
      ))}
      {[45, 135, 225, 315].map((a) => (
        <circle key={a} cx="0" cy="-16" r="0.7" fill="currentColor" opacity="0.65" transform={`rotate(${a})`} />
      ))}
      <path d="M -11 10 L -1.8 -5 L -1.8 -10 L 1.8 -10 L 1.8 -5 L 11 10 Z" />
      <line x1="-3.6" y1="-10" x2="3.6" y2="-10" strokeWidth="1.6" />
      <line x1="-7" y1="4" x2="7" y2="4" strokeWidth="0.9" opacity="0.6" />
      <circle cx="0" cy="7" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function SulfurSigil({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="0" cy="0" r="26" strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="-20" x2="0" y2="-12" />
      <line x1="-7" y1="-16" x2="7" y2="-16" />
      <line x1="0" y1="-12" x2="0" y2="-2" />
      <circle cx="0" cy="5" r="7" />
      <line x1="-5" y1="14" x2="5" y2="14" />
    </svg>
  );
}

export function SaltSigil({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="0" cy="0" r="26" strokeWidth="0.5" opacity="0.5" />
      <circle cx="0" cy="0" r="14" />
      <line x1="-14" y1="0" x2="14" y2="0" />
      <circle cx="0" cy="0" r="2" fill="currentColor" />
    </svg>
  );
}

export function MercurySigil({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="0" cy="0" r="26" strokeWidth="0.5" opacity="0.5" />
      <path d="M -9 -16 A 9 9 0 0 1 9 -16" />
      <circle cx="0" cy="-3" r="8" />
      <line x1="0" y1="5" x2="0" y2="14" />
      <line x1="-6" y1="10" x2="6" y2="10" />
    </svg>
  );
}

export function StageGlyph({ stage }: { stage: 1 | 2 | 3 | 4 }) {
  const common = {
    width: 56,
    height: 56,
    viewBox: "-30 -30 60 60",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
  } as const;
  if (stage === 1) {
    return (
      <svg {...common}>
        <circle cx="0" cy="0" r="24" strokeWidth="0.6" opacity="0.5" />
        <circle cx="0" cy="0" r="14" fill="currentColor" />
        <circle cx="0" cy="0" r="20" strokeDasharray="2 4" opacity="0.7" />
      </svg>
    );
  }
  if (stage === 2) {
    return (
      <svg {...common}>
        <circle cx="0" cy="0" r="24" strokeWidth="0.6" opacity="0.5" />
        <path d="M -10 -12 A 14 14 0 1 0 -10 12 A 10 10 0 1 1 -10 -12 Z" fill="currentColor" />
      </svg>
    );
  }
  if (stage === 3) {
    return (
      <svg {...common}>
        <circle cx="0" cy="0" r="24" strokeWidth="0.6" opacity="0.5" />
        <circle cx="0" cy="0" r="9" />
        <circle cx="0" cy="0" r="2.5" fill="currentColor" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="0" y1="-13" x2="0" y2="-19" transform={`rotate(${a})`} />
        ))}
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="0" cy="0" r="24" strokeWidth="0.6" opacity="0.5" />
      <path d="M 0 -16 L 14 8 L -14 8 Z" fill="currentColor" />
      <circle cx="0" cy="0" r="5" fill="var(--bg)" />
    </svg>
  );
}

export function OrnamentLine({ width = 200 }: { width?: number }) {
  return (
    <svg
      width={width}
      height="24"
      viewBox={`0 0 ${width} 24`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={{ color: "var(--gold)" }}
    >
      <line x1="0" y1="12" x2={width / 2 - 16} y2="12" opacity="0.5" />
      <line x1={width / 2 + 16} y1="12" x2={width} y2="12" opacity="0.5" />
      <circle cx={width / 2} cy="12" r="4" />
      <circle cx={width / 2} cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
      <line x1="1" y1="7" x2="12" y2="7" />
      <polyline points="7,2 12,7 7,12" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M 13 9.5 A 6 6 0 1 1 6.5 3 A 4.5 4.5 0 0 0 13 9.5 Z" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="8" cy="8" r="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="8" y1="2" x2="8" y2="3.5" transform={`rotate(${a} 8 8)`} />
      ))}
    </svg>
  );
}

export function ProductSigil({ kind }: { kind: "sign" | "lembic" }) {
  if (kind === "sign") {
    return (
      <svg
        width="140"
        height="140"
        viewBox="-50 -50 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        style={{ color: "var(--gold)" }}
      >
        <circle cx="0" cy="0" r="46" opacity="0.5" />
        <circle cx="0" cy="0" r="36" opacity="0.7" />
        <path d="M -28 0 Q -14 -16 0 0 T 28 0" strokeWidth="1" />
        <path d="M -22 -12 Q -11 -24 0 -12 T 22 -12" strokeWidth="0.7" opacity="0.7" />
        <path d="M -22 12 Q -11 0 0 12 T 22 12" strokeWidth="0.7" opacity="0.7" />
        <circle cx="0" cy="0" r="3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      width="140"
      height="140"
      viewBox="-50 -50 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={{ color: "var(--gold)" }}
    >
      <circle cx="0" cy="0" r="46" opacity="0.5" />
      <path d="M -18 25 L -18 10 A 18 18 0 0 1 18 10 L 18 25 Z" strokeWidth="1" />
      <path d="M -8 -8 L -8 10 M 8 -8 L 8 10" strokeWidth="0.7" />
      <path d="M -8 -8 L -2 -20 L 2 -20 L 8 -8" strokeWidth="0.7" />
      <path d="M -2 -20 L -2 -28 L -22 -28" strokeWidth="0.7" />
      <circle cx="-22" cy="-23" r="1.2" fill="currentColor" />
      <circle cx="-22" cy="-18" r="0.8" fill="currentColor" opacity="0.6" />
      {[-8, 0, 8].map((x) => (
        <path key={x} d={`M ${x} 32 Q ${x + 2} 28 ${x} 24 T ${x - 1} 18`} strokeWidth="0.6" opacity="0.6" />
      ))}
    </svg>
  );
}
