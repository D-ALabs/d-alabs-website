type Props = {
  className?: string;
  size?: number;
  withGlow?: boolean;
};

export default function AlchemicalMark({
  className = "",
  size = 28,
  withGlow = false,
}: Props) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {withGlow && (
        <span
          className="absolute inset-0 rounded-full blur-md opacity-60"
          style={{
            background:
              "radial-gradient(circle, var(--glow-gold) 0%, transparent 70%)",
          }}
        />
      )}
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        className="relative"
      >
        <defs>
          <linearGradient
            id="flask-fill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--primary-light)" />
            <stop offset="50%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary-dark)" />
          </linearGradient>
        </defs>

        {/* Liquid — fills lower body up to the wavy surface line */}
        <path
          fill="url(#flask-fill)"
          d="M 9.46 18 Q 12.5 17, 16 18 T 22.54 18 L 26 24 A 3 3 0 0 1 23 27 H 9 A 3 3 0 0 1 6 24 Z"
        />

        {/* Flask outline — stroked, no fill so the empty top shows page bg */}
        <path
          fill="none"
          stroke="url(#flask-fill)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M 12.5 4 H 19.5 A 1.5 1.5 0 0 1 19.5 7 H 18.5 V 11 L 26 24 A 3 3 0 0 1 23 27 H 9 A 3 3 0 0 1 6 24 L 13.5 11 V 7 H 12.5 A 1.5 1.5 0 0 1 12.5 4 Z"
        />
      </svg>
    </span>
  );
}
