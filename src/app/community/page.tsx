export const metadata = {
	title: "Community | D-ALabs",
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <span className="w-6 h-px bg-primary/50" />
            <span className="tracking-widest uppercase text-xs">Community</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">Join Our Community</h1>
          <p className="mt-6 text-lg text-foreground-muted">
            디지털 연금술사들과 함께 연결하고, 배우고, 성장하세요
          </p>
        </div>
      </section>

      {/* Community Features */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <CommunityCard 
            icon={<ForumIcon />}
            title="Discussion Forum" 
            desc="지식을 공유하고, 질문하고, 디지털 트랜스포메이션 프로젝트에서 협업하세요"
            status="Coming Soon"
            members="500+"
          />
          <CommunityCard 
            icon={<EventIcon />}
            title="Meetups & Events" 
            desc="온라인과 오프라인에서 진행되는 정기 밋업, 워크숍, 네트워킹 이벤트에 참여하세요"
            status="Active"
            members="200+"
          />
          <CommunityCard 
            icon={<LearnIcon />}
            title="Learning Resources" 
            desc="전문가들이 큐레이션한 학습 자료, 케이스 스터디, 베스트 프랙티스를 이용하세요"
            status="Beta"
            members="150+"
          />
          <CommunityCard 
            icon={<OpenSourceIcon />}
            title="Open Source" 
            desc="오픈소스 프로젝트에 기여하고 디지털 연금술의 미래를 함께 만들어가세요"
            status="Active"
            members="75+"
          />
        </div>
      </section>

      {/* Join CTA */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-metallic">함께 연결할 준비가 되셨나요?</h2>
          <p className="mt-4 text-foreground-muted">디지털 미래를 만들어가는 혁신가들과 함께하세요</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary px-6 py-3">커뮤니티 가입</a>
            <a href="/news" className="btn-outline px-6 py-3">최신 소식 보기</a>
          </div>
        </div>
      </section>
    </>
  );
}

function CommunityCard({ 
  icon,
  title, 
  desc, 
  status, 
  members 
}: { 
  icon: React.ReactNode;
  title: string; 
  desc: string; 
  status: string; 
  members: string; 
}) {
  const statusStyles = {
    'Active': 'bg-accent/10 text-accent-secondary',
    'Beta': 'bg-primary/10 text-primary',
    'Coming Soon': 'bg-foreground-muted/10 text-foreground-muted',
  };

  return (
    <div className="card card-hover card-glow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full ${statusStyles[status as keyof typeof statusStyles] || statusStyles['Coming Soon']}`}>
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground-muted">{desc}</p>
      <div className="mt-4 text-sm text-foreground-muted/60">{members} members</div>
    </div>
  );
}

// Icons
function ForumIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function LearnIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function OpenSourceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}
