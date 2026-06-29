"use client";
import { useRef, type ReactNode, type MouseEvent } from "react";

/** Subtle magnetic pull toward the cursor on hover (skipped for reduced motion). */
export default function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.16;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.26;
    el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className ?? ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
