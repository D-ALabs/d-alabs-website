"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up from 0 the first time it scrolls into view.
 * Parses a leading number + trailing suffix (e.g. "8", "99.9", "2024").
 */
export default function CountUp({
  value,
  dec = 0,
  className,
}: {
  value: string;
  dec?: number;
  className?: string;
}) {
  const m = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = m ? parseFloat(m[1]) : NaN;
  const suffix = m ? m[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (v: number) => (dec > 0 ? v.toFixed(dec) : String(Math.round(v)));
  const [disp, setDisp] = useState(Number.isNaN(target) ? value : fmt(0));

  useEffect(() => {
    if (Number.isNaN(target)) {
      setDisp(value);
      return;
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisp(fmt(target));
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const dur = 1300;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              setDisp(fmt(target * (1 - Math.pow(1 - t, 3))));
              if (t < 1) raf = requestAnimationFrame(tick);
              else setDisp(fmt(target));
            };
            raf = requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {disp}
      {suffix}
    </span>
  );
}
