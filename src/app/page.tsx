export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Digital Alchemy for
              <span className="block">
                Value Creation
              </span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-foreground/85">
              We transform data, AI, and cloud technologies into meaningful solutions that turn challenges into opportunities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-primary text-base px-8 py-3">Explore Services</a>
              <a href="/about" className="btn-outline text-base px-8 py-3">Learn About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <p className="mt-3 text-foreground/70">Digital alchemy through experimentation and execution</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            title="AI Strategy" 
            desc="From proof-of-concept to production-ready AI solutions" 
          />
          <FeatureCard 
            title="Data Platform" 
            desc="End-to-end data collection, processing, and visualization" 
          />
          <FeatureCard 
            title="Cloud Architecture" 
            desc="Scalable infrastructure designed for growth" 
          />
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 bg-muted/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explore D-ALabs</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="About Us" desc="Our philosophy, vision, and mission" href="/about" />
          <Card title="Services" desc="Digital alchemy products and solutions" href="/services" />
          <Card title="News" desc="Latest updates and press releases" href="/news" />
          <Card title="Community" desc="Growing together with our community" href="/community" />
          <Card title="Support" desc="Customer support and inquiries" href="/support" />
          <Card title="Sign Up" desc="Join our platform and start your journey" href="/signup" />
        </div>
      </section>
    </>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a href={href} className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
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
