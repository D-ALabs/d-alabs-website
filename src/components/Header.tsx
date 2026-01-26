"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-metallic group-hover:text-foreground transition-colors">D-A</span>
              <span className="text-primary">Labs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about" disabled>About</NavItem>
            <NavItem href="/services" disabled>Services</NavItem>
            <NavItem href="/news" disabled>News</NavItem>
            <NavItem href="/community" disabled>Community</NavItem>
            <NavItem href="/support" disabled>Support</NavItem>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
<<<<<<< Updated upstream
            <span className="btn-primary hidden md:inline-flex opacity-50 cursor-not-allowed bg-muted text-muted-foreground">Sign Up</span>
=======
            <Link 
              href="/signup" 
              className="btn-primary hidden md:inline-flex text-sm"
            >
              Sign Up
            </Link>
            
            {/* Mobile menu button */}
>>>>>>> Stashed changes
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground-muted hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="메뉴 열기"
              aria-expanded={open}
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {open && (
<<<<<<< Updated upstream
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
=======
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <ul className="space-y-1">
              <MobileNavItem href="/" onClick={() => setOpen(false)}>Home</MobileNavItem>
              <MobileNavItem href="/about" onClick={() => setOpen(false)}>About</MobileNavItem>
              <MobileNavItem href="/services" onClick={() => setOpen(false)}>Services</MobileNavItem>
              <MobileNavItem href="/news" onClick={() => setOpen(false)}>News</MobileNavItem>
              <MobileNavItem href="/community" onClick={() => setOpen(false)}>Community</MobileNavItem>
              <MobileNavItem href="/support" onClick={() => setOpen(false)}>Support</MobileNavItem>
              <li className="pt-3">
                <Link 
                  href="/signup" 
                  className="btn-primary w-full justify-center" 
                  onClick={() => setOpen(false)}
                >
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
  
=======
function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
>>>>>>> Stashed changes
  return (
    <li>
      <Link
        href={href}
        className="px-3 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
      >
        {children}
      </Link>
    </li>
  );
}

function MobileNavItem({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block px-3 py-2.5 text-foreground-muted hover:text-foreground hover:bg-muted rounded-lg transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
