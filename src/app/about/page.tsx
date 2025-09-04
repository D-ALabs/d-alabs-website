export const metadata = {
  title: "About | D-ALabs",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">About D-ALabs</h1>
          <p className="mt-6 text-lg text-foreground/85">
            Digital Alchemist Labs transforms technology into value through innovation, experimentation, and execution.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/80 text-lg leading-relaxed">
            D-ALabs combines data science, artificial intelligence, cloud computing, and creativity to turn 
            challenges into opportunities. We believe in sustainable growth through digital transformation 
            and human-centered solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Item title="Mission" desc="Create positive change through digital alchemy" />
          <Item title="Vision" desc="Become the most trusted digital innovation partner" />
          <Item title="Values" desc="Human-centered, experimentation, sustainable impact" />
          <Item title="Culture" desc="Openness, autonomy, and pursuit of excellence" />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Ready to Transform?</h3>
          <p className="mt-3 text-foreground/70">Let's explore how we can create value together</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/services" className="btn-primary">View Our Services</a>
            <a href="/support" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-foreground/75">{desc}</div>
    </div>
  );
}


