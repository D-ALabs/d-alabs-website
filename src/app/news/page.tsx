import Link from "next/link";

export const metadata = {
	title: "News | D-ALabs",
};

export default function NewsPage() {
<<<<<<< Updated upstream
	return (
		<section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
			<div className="max-w-md mx-auto">
				<div className="text-6xl mb-6">🚧</div>
				<h1 className="text-3xl font-bold mb-4">페이지 준비중</h1>
				<p className="text-foreground/70 mb-8">
					News 페이지는 현재 개발 중입니다.
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
            <span className="tracking-widest uppercase text-xs">News</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">Latest Updates</h1>
          <p className="mt-6 text-lg text-foreground-muted">
            D-ALabs의 최신 소식과 인사이트
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-6">
          <NewsCard 
            category="Press Release"
            title="D-ALabs AI 기반 실험 플랫폼 런칭"
            excerpt="머신러닝과 신속한 실험 역량을 결합한 혁신적인 플랫폼으로 디지털 트랜스포메이션을 가속화합니다."
            date="2025년 9월 1일"
            featured
          />
          <NewsCard 
            category="Announcement"
            title="커뮤니티 베타 프로그램 오픈"
            excerpt="새로운 기능에 대한 얼리 액세스와 디지털 연금술의 미래를 함께 만들어갈 베타 커뮤니티에 참여하세요."
            date="2025년 8월 15일"
          />
          <NewsCard 
            category="Event"
            title="Digital Alchemy Summit 2025"
            excerpt="디지털 트랜스포메이션의 미래에 대한 인사이트를 나누는 업계 리더들과 혁신가들의 만남."
            date="2025년 7월 30일"
          />
          <NewsCard 
            category="Insight"
            title="AI 기반 비즈니스 전략의 미래"
            excerpt="인공지능이 현대 기업의 전략적 의사결정을 어떻게 변화시키고 있는지 살펴봅니다."
            date="2025년 7월 15일"
          />
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-metallic">Stay Connected</h3>
          <p className="mt-3 text-foreground-muted">뉴스레터를 구독하고 최신 업데이트를 받아보세요</p>
          <a href="/signup" className="btn-primary mt-6 inline-flex">구독하기</a>
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
    <article className={`card card-hover p-6 ${featured ? 'border-primary/20' : ''}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">{category}</span>
        {featured && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Featured</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
      <p className="mt-3 text-foreground-muted">{excerpt}</p>
      <div className="mt-4 text-sm text-foreground-muted/60">{date}</div>
    </article>
  );
}
>>>>>>> Stashed changes
