"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps a grid/list; when it scrolls into view, its direct children animate in
 * with a staggered delay (CSS `.stagger.in > *:nth-child(n)`).
 */
export default function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stagger ${className}${shown ? " in" : ""}`}>
      {children}
    </div>
  );
}
