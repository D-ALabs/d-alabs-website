import React from "react";

/* ===========================================================================
   D-ALabs — modern monochrome motifs.
   Everything draws in `currentColor` so it inherits the ink/accent of context
   (light paper, dark navy, or inverted on dark panels). No gold, no alchemy.
=========================================================================== */

const r4 = (n: number) => Math.round(n * 10000) / 10000;

/* ---------------------------------------------------------------------------
   FlaskMotif — refined "Labs" centerpiece: a clean lab flask with a calm
   liquid line, a few slow bubbles, soft orbit rings and floating nodes.
--------------------------------------------------------------------------- */
export function FlaskMotif({ size = 376 }: { size?: number }) {
  return (
    <div
      className="sigil-wrap"
      style={{ width: size, maxWidth: "100%", aspectRatio: "0.94 / 1", position: "relative", color: "var(--accent)" }}
      aria-hidden="true"
    >
      {/* soft glow */}
      <div
        className="pulse"
        style={{
          position: "absolute",
          inset: "-10%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 46%, var(--accent-soft), transparent 62%)",
        }}
      />
      {/* orbit rings */}
      <svg
        viewBox="0 0 400 400"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="200" cy="200" r="146" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 9" />
        {[
          { a: 18, r: 190, s: 3 },
          { a: 150, r: 190, s: 2.2 },
          { a: 262, r: 146, s: 2.6 },
        ].map((n, i) => (
          <circle
            key={i}
            cx={r4(200 + Math.sin((n.a * Math.PI) / 180) * n.r)}
            cy={r4(200 - Math.cos((n.a * Math.PI) / 180) * n.r)}
            r={n.s}
            fill="currentColor"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* expanding rings */}
      <span className="ring-pulse" />
      <span className="ring-pulse" style={{ animationDelay: "2.4s" }} />

      {/* floating nodes */}
      <span className="float-node" style={{ top: "8%", left: "6%", width: 9, height: 9, animation: "floatY 6s ease-in-out infinite" }} />
      <span className="float-node" style={{ top: "16%", right: "4%", width: 6, height: 6, animation: "floatY2 7.5s ease-in-out infinite" }} />
      <span className="float-node" style={{ bottom: "15%", left: "3%", width: 5, height: 5, animation: "floatY2 8s ease-in-out 0.6s infinite" }} />
      <span className="float-node" style={{ bottom: "10%", right: "5%", width: 8, height: 8, animation: "floatY 7s ease-in-out 1.2s infinite" }} />

      {/* the real flask image + rising bubbles inside the liquid */}
      <div className="flask-stack float">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flask.png" alt="" className="flask-img" />
        <svg
          className="flask-bubbles"
          viewBox="0 0 970 1033"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="dalLiquid">
              <polygon points="307,596 663,596 701,672 727,723 777,827 812,899 780,946 210,946 158,899 193,827 243,723 269,672" />
            </clipPath>
          </defs>
          <g clipPath="url(#dalLiquid)">
            {/* rippling liquid surface (two waves at different speeds) */}
            <path fill="#16202E" d="M-260,632 q60,-20 120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 L1300,1140 L-260,1140 Z">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="-240 0" dur="7s" repeatCount="indefinite" />
            </path>
            <path fill="#16202E" opacity="0.45" d="M-260,640 q60,18 120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 L1300,1140 L-260,1140 Z">
              <animateTransform attributeName="transform" type="translate" from="-240 0" to="0 0" dur="5.5s" repeatCount="indefinite" />
            </path>
            {/* surface line tracing the crest */}
            <path fill="none" stroke="#EFEBE0" strokeWidth="5" strokeOpacity="0.55" strokeLinecap="round" d="M-260,632 q60,-20 120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0 t120,0">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="-240 0" dur="7s" repeatCount="indefinite" />
            </path>
            <circle cx="424" cy="880" r="11" fill="#EFEBE0">
              <animate attributeName="cy" values="905;694" dur="3.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.85;0.85;0" dur="3.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="548" cy="900" r="8" fill="#EFEBE0">
              <animate attributeName="cy" values="915;706" dur="4.2s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="4.2s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="476" cy="860" r="6" fill="#EFEBE0">
              <animate attributeName="cy" values="884;700" dur="3.6s" begin="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3.6s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="566" cy="872" r="5" fill="#EFEBE0">
              <animate attributeName="cy" values="892;716" dur="4.6s" begin="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.75;0.75;0" dur="4.6s" begin="2.2s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   GreatSigil — modern abstract orbit, used as a large decorative motif.
--------------------------------------------------------------------------- */
export function GreatSigil({ size = 560 }: { size?: number }) {
  const node = (a: number, r: number, s: number, o = 0.7) => (
    <circle
      key={`${a}-${r}`}
      cx={r4(Math.sin((a * Math.PI) / 180) * r)}
      cy={r4(-Math.cos((a * Math.PI) / 180) * r)}
      r={s}
      fill="currentColor"
      opacity={o}
    />
  );
  return (
    <svg
      viewBox="-200 -200 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      style={{ width: size, maxWidth: "100%", height: "auto", display: "block" }}
    >
      <circle cx="0" cy="0" r="178" strokeOpacity="0.12" />
      <circle cx="0" cy="0" r="132" strokeOpacity="0.1" strokeDasharray="2 10" />
      <g>
        <circle cx="0" cy="0" r="96" strokeOpacity="0.14" />
        {[0, 60, 120, 180, 240, 300].map((a) => node(a, 96, 3))}
      </g>
      <g>
        <ellipse cx="0" cy="0" rx="60" ry="150" strokeOpacity="0.08" />
        <ellipse cx="0" cy="0" rx="150" ry="60" strokeOpacity="0.08" />
        {[18, 150, 262].map((a) => node(a, 178, 2.6, 0.55))}
      </g>
      <g>
        <circle cx="0" cy="0" r="46" strokeOpacity="0.18" />
        {[36, 156, 276].map((a) => node(a, 46, 2.2))}
      </g>
      <circle cx="0" cy="0" r="4" fill="currentColor" />
      <circle cx="0" cy="0" r="11" strokeOpacity="0.4" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   BrandMark — minimal flask glyph for the wordmark.
--------------------------------------------------------------------------- */
export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent)" }}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="27" height="27" rx="8" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />
      <path d="M13 9 L13 15 L8.5 23 Q7.7 24.5 9.4 24.5 L22.6 24.5 Q24.3 24.5 23.5 23 L19 15 L19 9" />
      <line x1="11.4" y1="9" x2="20.6" y2="9" strokeWidth="2" />
      <path d="M10 20 L22 20" strokeOpacity="0.55" strokeWidth="1.3" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Discipline glyphs — kept under their former export names so existing
   imports keep working, but redrawn as modern AI / Data / Cloud marks.
   SulfurSigil → AI · SaltSigil → Data · MercurySigil → Cloud
--------------------------------------------------------------------------- */
export function SulfurSigil({ size = 60 }: { size?: number }) {
  // AI — node with branching links
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="1.8" fill="currentColor" stroke="none" />
      {[
        [24, 8], [38, 16], [38, 32], [24, 40], [10, 32], [10, 16],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="24" y1="24" x2={x} y2={y} strokeOpacity="0.5" />
          <circle cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

export function SaltSigil({ size = 60 }: { size?: number }) {
  // Data — stacked layers
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 7 L41 15 L24 23 L7 15 Z" />
      <path d="M7 24 L24 32 L41 24" strokeOpacity="0.7" />
      <path d="M7 33 L24 41 L41 33" strokeOpacity="0.45" />
    </svg>
  );
}

export function MercurySigil({ size = 60 }: { size?: number }) {
  // Cloud — connective network
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 32 a7 7 0 0 1 0.6 -13.9 a9 9 0 0 1 17.2 -1.6 a6.5 6.5 0 0 1 1.2 12.9 Z" strokeOpacity="0.85" />
      <circle cx="17" cy="25" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24" cy="22" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="31" cy="25" r="1.7" fill="currentColor" stroke="none" />
      <path d="M17 25 L24 22 L31 25" strokeOpacity="0.45" strokeWidth="1.2" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   ProductSigil — modern marks for the product/work cards.
--------------------------------------------------------------------------- */
export function ProductSigil({ kind }: { kind: "sign" | "lembic" }) {
  if (kind === "sign") {
    // Sign language / motion — flowing waveform
    return (
      <svg width="120" height="96" viewBox="0 0 120 96" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{ color: "var(--accent)" }} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M16 48 Q31 ${20 + i * 7} 46 48 T 76 48 T 106 48`}
            strokeOpacity={0.85 - i * 0.25}
          />
        ))}
        {[16, 46, 76, 106].map((x) => (
          <circle key={x} cx={x} cy="48" r="2.2" fill="currentColor" stroke="none" opacity="0.7" />
        ))}
      </svg>
    );
  }
  // Lembic — generative layers fanning from one source
  return (
    <svg width="120" height="96" viewBox="0 0 120 96" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }} aria-hidden="true">
      <circle cx="30" cy="48" r="5" />
      <circle cx="30" cy="48" r="1.8" fill="currentColor" stroke="none" />
      {[26, 40, 56].map((y, i) => (
        <g key={i}>
          <path d={`M36 48 Q66 ${y} 92 ${y}`} strokeOpacity="0.6" />
          <rect x="92" y={y - 7} width="16" height="14" rx="3" strokeOpacity={0.85 - i * 0.18} />
        </g>
      ))}
      <path d="M36 48 Q66 70 92 70" strokeOpacity="0.6" />
      <rect x="92" y="63" width="16" height="14" rx="3" strokeOpacity="0.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   StageGlyph — minimal numbered-step marks (kept for compatibility).
--------------------------------------------------------------------------- */
export function StageGlyph({ stage }: { stage: 1 | 2 | 3 | 4 }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (stage === 1) return (
    <svg {...common}><circle cx="20" cy="20" r="13" strokeOpacity="0.4" /><circle cx="20" cy="20" r="4.5" fill="currentColor" stroke="none" /></svg>
  );
  if (stage === 2) return (
    <svg {...common}><circle cx="20" cy="20" r="13" strokeOpacity="0.4" /><path d="M20 9 a11 11 0 0 1 0 22 Z" fill="currentColor" stroke="none" /></svg>
  );
  if (stage === 3) return (
    <svg {...common}><circle cx="20" cy="20" r="13" strokeOpacity="0.4" /><circle cx="20" cy="20" r="6" /><circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" /></svg>
  );
  return (
    <svg {...common}><circle cx="20" cy="20" r="13" strokeOpacity="0.4" /><path d="M13 20 L18 25 L27 14" /></svg>
  );
}

/* ---------------------------------------------------------------------------
   OrnamentLine — clean hairline divider with a center node.
--------------------------------------------------------------------------- */
export function OrnamentLine({ width = 120 }: { width?: number }) {
  return (
    <svg width={width} height="16" viewBox={`0 0 ${width} 16`} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <line x1="0" y1="8" x2={width / 2 - 9} y2="8" strokeOpacity="0.4" />
      <line x1={width / 2 + 9} y1="8" x2={width} y2="8" strokeOpacity="0.4" />
      <circle cx={width / 2} cy="8" r="3" strokeOpacity="0.7" />
      <circle cx={width / 2} cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Icons
--------------------------------------------------------------------------- */
export function ArrowIcon({ size = 15 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="1.5" y1="7" x2="12" y2="7" />
      <polyline points="7,2 12,7 7,12" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 9.5 A6 6 0 1 1 6.5 3 A4.5 4.5 0 0 0 13 9.5 Z" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="8" y1="1.8" x2="8" y2="3.4" transform={`rotate(${a} 8 8)`} />
      ))}
    </svg>
  );
}
