export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="brand-gradient animate-gradient">
				<div className="mx-auto max-w-6xl px-4 py-20 sm:py-32">
					<div className="text-center">
						<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
							Digital Alchemy for
							<span className="block gradient-text">Value Creation</span>
						</h1>
						<p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl opacity-90">
							We transform data, AI, and cloud technologies into meaningful
							solutions that turn challenges into opportunities.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
							<span className="inline-flex items-center justify-center rounded-md text-base px-8 py-3 font-medium opacity-50 cursor-not-allowed bg-primary/20 border border-primary/30">
								Explore Services
							</span>
							<span className="inline-flex items-center justify-center rounded-md text-base px-8 py-3 font-medium opacity-50 cursor-not-allowed border-2 border-current">
								Learn About Us
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="mx-auto max-w-6xl px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">What We Do</h2>
					<p className="mt-3 text-foreground/70">
						Digital alchemy through experimentation and execution
					</p>
				</div>
				<div className="flex justify-center">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
						<FeatureCard
							title="Sign GPT"
							desc="AI solution connecting sign language and the world"
						/>
					</div>
				</div>
			</section>

			{/* Navigation Cards */}
			<section className="mx-auto max-w-6xl px-4 py-16 bg-muted/20">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">Explore D-ALabs</h2>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card
						title="About Us"
						desc="Our philosophy, vision, and mission"
						href="/about"
						disabled
					/>
					<Card
						title="Services"
						desc="Digital alchemy products and solutions"
						href="/services"
						disabled
					/>
					<Card
						title="News"
						desc="Latest updates and press releases"
						href="/news"
						disabled
					/>
					<Card
						title="Community"
						desc="Growing together with our community"
						href="/community"
						disabled
					/>
					<Card
						title="Support"
						desc="Customer support and inquiries"
						href="/support"
						disabled
					/>
					<Card
						title="Sign Up"
						desc="Join our platform and start your journey"
						href="/signup"
						disabled
					/>
				</div>
			</section>
		</>
	);
}

function Card({
	title,
	desc,
	href,
	disabled = false,
}: {
	title: string;
	desc: string;
	href: string;
	disabled?: boolean;
}) {
	if (disabled) {
		return (
			<div className="card p-6 opacity-50 cursor-not-allowed">
				<div className="text-lg font-semibold text-muted-foreground">
					{title}
				</div>
				<div className="mt-2 text-sm text-muted-foreground">{desc}</div>
				<div className="mt-3 text-xs text-muted-foreground">준비중</div>
			</div>
		);
	}

	return (
		<a
			href={href}
			className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
			<div className="text-lg font-semibold">{title}</div>
			<div className="mt-2 text-sm text-foreground/75">{desc}</div>
		</a>
	);
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="card p-6 text-center">
			<div className="text-xl font-semibold">{title}</div>
			<div className="mt-2 text-foreground/75">{desc}</div>
		</div>
	);
}
