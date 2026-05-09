"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	const [open, setOpen] = useState(false);
	
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
			<div className="mx-auto max-w-6xl px-4">
				<nav className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link 
						href="/" 
						className="flex items-center gap-2 group"
					>
						{/* Logo Mark */}
						<div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
							<span className="text-sm font-bold text-white">D</span>
						</div>
						{/* Logo Text */}
						<span className="text-lg font-semibold tracking-tight">
							D-ALabs
						</span>
					</Link>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center gap-1">
						<NavItem href="/">Home</NavItem>
						<NavItem href="#services">Services</NavItem>
						<NavItem href="#about">About</NavItem>
						<NavItem href="/news" disabled>News</NavItem>
						<NavItem href="/community" disabled>Community</NavItem>
					</ul>

					{/* Actions */}
					<div className="flex items-center gap-2">
						<ThemeToggle />
						
						{/* Contact Button - Desktop */}
						<a 
							href="mailto:contact@d-alabs.com"
							className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
						>
							Contact
						</a>
						
						{/* Mobile Menu Button */}
						<button
							className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent transition-colors"
							onClick={() => setOpen((v) => !v)}
							aria-label="Toggle menu"
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
					<div className="md:hidden py-4 border-t border-border/50">
						<ul className="space-y-1">
							<MobileNavItem href="/" onClick={() => setOpen(false)}>
								Home
							</MobileNavItem>
							<MobileNavItem href="#services" onClick={() => setOpen(false)}>
								Services
							</MobileNavItem>
							<MobileNavItem href="#about" onClick={() => setOpen(false)}>
								About
							</MobileNavItem>
							<MobileNavItem href="/news" onClick={() => setOpen(false)} disabled>
								News
							</MobileNavItem>
							<MobileNavItem href="/community" onClick={() => setOpen(false)} disabled>
								Community
							</MobileNavItem>
						</ul>
						
						<div className="mt-4 pt-4 border-t border-border/50">
							<a 
								href="mailto:contact@d-alabs.com"
								className="btn-primary w-full text-sm"
								onClick={() => setOpen(false)}
							>
								Contact Us
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

function NavItem({ 
	href, 
	children, 
	disabled = false 
}: { 
	href: string; 
	children: React.ReactNode; 
	disabled?: boolean;
}) {
	if (disabled) {
		return (
			<li>
				<span className="px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed">
					{children}
				</span>
			</li>
		);
	}

	return (
		<li>
			<Link
				href={href}
				className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
			>
				{children}
			</Link>
		</li>
	);
}

function MobileNavItem({ 
	href, 
	children, 
	onClick,
	disabled = false 
}: { 
	href: string; 
	children: React.ReactNode; 
	onClick?: () => void;
	disabled?: boolean;
}) {
	if (disabled) {
		return (
			<li>
				<span className="block px-3 py-2 text-sm text-muted-foreground/50 cursor-not-allowed">
					{children}
					<span className="ml-2 text-xs">(Coming Soon)</span>
				</span>
			</li>
		);
	}

	return (
		<li>
			<Link
				href={href}
				onClick={onClick}
				className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
			>
				{children}
			</Link>
		</li>
	);
}
