export const metadata = {
  title: "Community | D-ALabs",
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Join Our Community</h1>
          <p className="mt-6 text-lg text-foreground/85">
            Connect, learn, and grow with fellow digital alchemists
          </p>
        </div>
      </section>

      {/* Community Features */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <CommunityCard 
            title="Discussion Forum" 
            desc="Share knowledge, ask questions, and collaborate on digital transformation projects"
            status="Coming Soon"
            members="500+"
          />
          <CommunityCard 
            title="Meetups & Events" 
            desc="Join our regular meetups, workshops, and networking events both online and offline"
            status="Active"
            members="200+"
          />
          <CommunityCard 
            title="Learning Resources" 
            desc="Access curated learning materials, case studies, and best practices from our experts"
            status="Beta"
            members="150+"
          />
          <CommunityCard 
            title="Open Source" 
            desc="Contribute to our open-source projects and help build the future of digital alchemy"
            status="Active"
            members="75+"
          />
        </div>
      </section>

      {/* Join CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Connect?</h2>
        <p className="mt-4 text-foreground/70">Join thousands of innovators shaping the digital future</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/signup" className="btn-primary">Join Community</a>
          <a href="/news" className="btn-outline">Read Latest News</a>
        </div>
      </section>
    </>
  );
}

function CommunityCard({ 
  title, 
  desc, 
  status, 
  members 
}: { 
  title: string; 
  desc: string; 
  status: string; 
  members: string; 
}) {
  return (
    <div className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="text-xl font-semibold">{title}</div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'Active' ? 'bg-green-100 text-green-700' :
          status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {status}
        </span>
      </div>
      <div className="mt-3 text-foreground/75">{desc}</div>
      <div className="mt-4 text-sm text-foreground/60">{members} members</div>
    </div>
  );
}


