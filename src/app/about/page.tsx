import Link from "next/link";

export const metadata = {
	title: "About | D-ALabs",
};

export default function AboutPage() {
<<<<<<< Updated upstream
	return (
		<section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
			<div className="max-w-md mx-auto">
				<div className="text-6xl mb-6">🚧</div>
				<h1 className="text-3xl font-bold mb-4">페이지 준비중</h1>
				<p className="text-foreground/70 mb-8">
					About 페이지는 현재 개발 중입니다.
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
            <span className="tracking-widest uppercase text-xs">About Us</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">
            Digital Alchemist Labs
          </h1>
          <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            기술을 가치로 전환하는 디지털 연금술.
            <br />
            혁신, 실험, 그리고 실행을 통해 변화를 만들어갑니다.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-foreground-muted text-lg leading-relaxed">
          <p>
            D-ALabs는 데이터 사이언스, 인공지능, 클라우드 컴퓨팅, 그리고 창의성을 결합하여
            도전을 기회로 전환합니다. 우리는 디지털 트랜스포메이션과 인간 중심 솔루션을 통한
            지속 가능한 성장을 믿습니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <ValueCard 
            title="Mission" 
            desc="디지털 연금술을 통해 긍정적인 변화를 창출합니다"
            icon={<MissionIcon />}
          />
          <ValueCard 
            title="Vision" 
            desc="가장 신뢰받는 디지털 혁신 파트너가 됩니다"
            icon={<VisionIcon />}
          />
          <ValueCard 
            title="Values" 
            desc="인간 중심, 실험 정신, 지속 가능한 임팩트"
            icon={<ValuesIcon />}
          />
          <ValueCard 
            title="Culture" 
            desc="개방성, 자율성, 탁월함의 추구"
            icon={<CultureIcon />}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-metallic">운영 중인 서비스</h2>
            <p className="mt-2 text-foreground-muted">D-ALabs가 만들어가는 프로덕트</p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2">
            <a 
              href="https://signgpt.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card card-hover card-glow p-6 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  SignGPT
                </span>
                <svg className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-foreground-muted">signgpt.org</p>
            </a>
            
            <a 
              href="https://lembic.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card card-hover card-glow p-6 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Lembic
                </span>
                <svg className="w-4 h-4 text-foreground-muted group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-foreground-muted">lembic.ai</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-metallic">
          함께 변화를 만들어갈 준비가 되셨나요?
        </h2>
        <p className="mt-4 text-foreground-muted">
          우리와 함께 가치를 창출하는 방법을 알아보세요
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services" className="btn-primary px-6 py-3">서비스 살펴보기</a>
          <a href="/support" className="btn-outline px-6 py-3">문의하기</a>
        </div>
      </section>
    </>
  );
}

function ValueCard({ 
  title, 
  desc, 
  icon 
}: { 
  title: string; 
  desc: string; 
  icon: React.ReactNode;
}) {
  return (
    <div className="card card-hover p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-foreground-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// Icons
function MissionIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ValuesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function CultureIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}
>>>>>>> Stashed changes
