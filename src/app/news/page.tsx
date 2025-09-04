export const metadata = {
  title: "News | D-ALabs",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Latest News</h1>
          <p className="mt-6 text-lg text-foreground/85">
            Stay updated with D-ALabs announcements and industry insights
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          <NewsCard 
            category="Press Release"
            title="D-ALabs Launches AI-Powered Experimentation Platform"
            excerpt="Revolutionary platform combines machine learning with rapid experimentation capabilities to accelerate digital transformation."
            date="September 1, 2025"
            featured
          />
          <NewsCard 
            category="Announcement"
            title="Community Beta Program Now Live"
            excerpt="Join our exclusive beta community to get early access to new features and shape the future of digital alchemy."
            date="August 15, 2025"
          />
          <NewsCard 
            category="Event"
            title="Digital Alchemy Summit 2025"
            excerpt="Join industry leaders and innovators for a day of insights on the future of digital transformation."
            date="July 30, 2025"
          />
          <NewsCard 
            category="Insight"
            title="The Future of AI-Driven Business Strategy"
            excerpt="How artificial intelligence is reshaping strategic decision-making in modern enterprises."
            date="July 15, 2025"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Stay Connected</h3>
          <p className="mt-3 text-foreground/70">Subscribe to our newsletter for the latest updates</p>
          <a href="/signup" className="btn-primary mt-6 inline-flex">Subscribe Now</a>
        </div>
      </section>
    </>
  );
}

function NewsCard({ 
  category, 
  title, 
  excerpt, 
  date, 
  featured = false 
}: { 
  category: string; 
  title: string; 
  excerpt: string; 
  date: string; 
  featured?: boolean; 
}) {
  return (
    <article className={`card p-6 hover:shadow-lg transition-all ${featured ? 'border-primary/20 bg-accent' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-xs font-medium text-primary uppercase tracking-wide">{category}</div>
          <h3 className="mt-2 text-xl font-semibold leading-tight">{title}</h3>
          <p className="mt-3 text-foreground/75">{excerpt}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-foreground/60">{date}</div>
    </article>
  );
}


