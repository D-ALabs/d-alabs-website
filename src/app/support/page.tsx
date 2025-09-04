export const metadata = {
  title: "Support | D-ALabs",
};

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Support Center</h1>
          <p className="mt-6 text-lg text-foreground/85">
            We're here to help you succeed with digital transformation
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SupportCard 
            title="Technical Support"
            desc="Get help with implementation, troubleshooting, and optimization"
            action="Contact Technical Team"
          />
          <SupportCard 
            title="Sales Inquiry"
            desc="Learn about our services and find the right solution for your needs"
            action="Talk to Sales"
          />
          <SupportCard 
            title="Partnership"
            desc="Explore collaboration opportunities and strategic partnerships"
            action="Discuss Partnership"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-3 text-foreground/70">Send us a message and we'll get back to you</p>
        </div>

        <form className="grid gap-6 card p-8">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input 
              id="name" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="John Doe" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input 
              id="email" 
              type="email" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="john@company.com" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <input 
              id="subject" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="How can we help?" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              className="rounded-md border-border border px-3 py-2 bg-background min-h-32 focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="Tell us about your project or inquiry..." 
              disabled 
            />
          </div>
          <button className="btn-outline w-fit opacity-60 cursor-not-allowed" disabled>
            Send Message (Demo)
          </button>
        </form>
      </section>
    </>
  );
}

function SupportCard({ title, desc, action }: { title: string; desc: string; action: string }) {
  return (
    <div className="card p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-3 text-foreground/75">{desc}</div>
      <button className="btn-outline mt-4 w-full" disabled>
        {action}
      </button>
    </div>
  );
}


