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
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/news">News</NavItem>
            <NavItem href="/community">Community</NavItem>
            <NavItem href="/support">Support</NavItem>
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/signup" className="btn-primary hidden md:inline-flex">Sign Up</Link>
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
              <NavItem href="/about" onClick={() => setOpen(false)}>About</NavItem>
              <NavItem href="/services" onClick={() => setOpen(false)}>Services</NavItem>
              <NavItem href="/news" onClick={() => setOpen(false)}>News</NavItem>
              <NavItem href="/community" onClick={() => setOpen(false)}>Community</NavItem>
              <NavItem href="/support" onClick={() => setOpen(false)}>Support</NavItem>
              <li>
                <Link href="/signup" className="btn-primary w-full inline-flex" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
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


