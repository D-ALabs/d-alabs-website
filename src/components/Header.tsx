"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              D-ALabs
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about" disabled>About</NavItem>
            <NavItem href="/services" disabled>Services</NavItem>
            <NavItem href="/news" disabled>News</NavItem>
            <NavItem href="/community" disabled>Community</NavItem>
            <NavItem href="/support" disabled>Support</NavItem>
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="btn-primary hidden md:inline-flex opacity-50 cursor-not-allowed bg-muted text-muted-foreground">Sign Up</span>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md border-border border px-3 py-2 text-sm hover:bg-accent transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              Menu
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden py-2">
            <ul className="grid gap-y-2 text-sm">
              <NavItem href="/" onClick={() => setOpen(false)}>Home</NavItem>
              <NavItem href="/about" onClick={() => setOpen(false)} disabled>About</NavItem>
              <NavItem href="/services" onClick={() => setOpen(false)} disabled>Services</NavItem>
              <NavItem href="/news" onClick={() => setOpen(false)} disabled>News</NavItem>
              <NavItem href="/community" onClick={() => setOpen(false)} disabled>Community</NavItem>
              <NavItem href="/support" onClick={() => setOpen(false)} disabled>Support</NavItem>
              <li>
                <span className="btn-primary w-full inline-flex opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                  Sign Up
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ href, children, onClick, disabled = false }: { href: string; children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  if (disabled) {
    return (
      <li>
        <span className="text-muted-foreground cursor-not-allowed opacity-50">
          {children}
        </span>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}


