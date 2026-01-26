import Link from "next/link";

export const metadata = {
	title: "Support | D-ALabs",
};

export default function SupportPage() {
<<<<<<< Updated upstream
	return (
		<section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
			<div className="max-w-md mx-auto">
				<div className="text-6xl mb-6">🚧</div>
				<h1 className="text-3xl font-bold mb-4">페이지 준비중</h1>
				<p className="text-foreground/70 mb-8">
					Support 페이지는 현재 개발 중입니다.
					<br />
					빠른 시일 내에 서비스를 제공하겠습니다.
				</p>
				<Link href="/" className="btn-primary inline-flex items-center gap-2">
					← 홈으로 돌아가기
				</Link>
			</div>
		</section>
	);
}
=======
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <span className="w-6 h-px bg-primary/50" />
            <span className="tracking-widest uppercase text-xs">Support</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">Support Center</h1>
          <p className="mt-6 text-lg text-foreground-muted">
            디지털 트랜스포메이션의 성공을 위해 함께합니다
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SupportCard 
            icon={<TechIcon />}
            title="기술 지원"
            desc="구현, 문제 해결 및 최적화에 대한 도움을 받으세요"
            action="기술팀 문의"
          />
          <SupportCard 
            icon={<SalesIcon />}
            title="영업 문의"
            desc="서비스에 대해 알아보고 적합한 솔루션을 찾아보세요"
            action="영업팀 상담"
          />
          <SupportCard 
            icon={<PartnerIcon />}
            title="파트너십"
            desc="협업 기회와 전략적 파트너십을 탐색하세요"
            action="파트너십 논의"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-metallic">문의하기</h2>
            <p className="mt-3 text-foreground-muted">메시지를 보내주시면 빠르게 답변드리겠습니다</p>
          </div>

          <form className="card p-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">이름</label>
                <input 
                  id="name" 
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                  placeholder="홍길동" 
                  disabled 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">이메일</label>
                <input 
                  id="email" 
                  type="email" 
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                  placeholder="email@company.com" 
                  disabled 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">제목</label>
              <input 
                id="subject" 
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
                placeholder="어떤 도움이 필요하신가요?" 
                disabled 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">메시지</label>
              <textarea 
                id="message" 
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 min-h-32 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" 
                placeholder="프로젝트나 문의 내용을 자세히 알려주세요..." 
                disabled 
              />
            </div>
            <button className="btn-outline opacity-60 cursor-not-allowed" disabled>
              메시지 보내기 (Demo)
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function SupportCard({ 
  icon,
  title, 
  desc, 
  action 
}: { 
  icon: React.ReactNode;
  title: string; 
  desc: string; 
  action: string;
}) {
  return (
    <div className="card card-hover card-glow p-6 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground-muted">{desc}</p>
      <button className="btn-outline w-full mt-5 opacity-60 cursor-not-allowed" disabled>
        {action}
      </button>
    </div>
  );
}

// Icons
function TechIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function SalesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function PartnerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}
>>>>>>> Stashed changes
