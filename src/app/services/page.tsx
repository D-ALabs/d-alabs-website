export const metadata = {
  title: "Services | D-ALabs",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-6 text-lg text-foreground/85">
            Digital alchemy solutions designed to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            title="AI Consulting" 
            desc="Strategic AI implementation from proof-of-concept to production deployment"
            features={["Strategy Development", "PoC Implementation", "Model Training", "Production Scaling"]}
          />
          <ServiceCard 
            title="Data Platform" 
            desc="End-to-end data solutions for collection, processing, and visualization"
            features={["Data Pipeline", "Analytics Dashboard", "Real-time Processing", "Data Governance"]}
          />
          <ServiceCard 
            title="Cloud Architecture" 
            desc="Scalable infrastructure designed for modern applications"
            features={["System Design", "Migration Strategy", "Performance Optimization", "Security Implementation"]}
          />
          <ServiceCard 
            title="Product Development" 
            desc="Full-stack web and mobile application development"
            features={["UI/UX Design", "Frontend Development", "Backend APIs", "Mobile Apps"]}
          />
          <ServiceCard 
            title="Growth Acceleration" 
            desc="Experiment-driven growth and optimization strategies"
            features={["A/B Testing", "Growth Analytics", "Conversion Optimization", "User Research"]}
          />
          <ServiceCard 
            title="Training & Workshops" 
            desc="Digital capability enhancement programs for teams"
            features={["Technical Training", "Workshop Facilitation", "Mentoring", "Best Practices"]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-foreground/70">Let's discuss how our services can help your business grow</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/support" className="btn-primary">Contact Us</a>
          <a href="/about" className="btn-outline">Learn More About Us</a>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, desc, features }: { title: string; desc: string; features: string[] }) {
  return (
    <div className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-3 text-foreground/75">{desc}</div>
      <ul className="mt-4 space-y-1 text-sm text-foreground/60">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}


