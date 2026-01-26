import Link from "next/link";

export const metadata = {
	title: "Services | D-ALabs",
};

export default function ServicesPage() {
<<<<<<< Updated upstream
	return (
		<section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
			<div className="max-w-md mx-auto">
				<div className="text-6xl mb-6">🚧</div>
				<h1 className="text-3xl font-bold mb-4">페이지 준비중</h1>
				<p className="text-foreground/70 mb-8">
					Services 페이지는 현재 개발 중입니다.
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
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <span className="w-6 h-px bg-primary/50" />
            <span className="tracking-widest uppercase text-xs">Services</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">
            Our Expertise
          </h1>
          <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
            비즈니스 변화를 위한 디지털 연금술 솔루션
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            icon={<AIIcon />}
            title="AI Consulting" 
            desc="PoC에서 프로덕션 배포까지, 전략적 AI 구현"
            features={["전략 수립", "PoC 구현", "모델 트레이닝", "프로덕션 스케일링"]}
          />
          <ServiceCard 
            icon={<DataIcon />}
            title="Data Platform" 
            desc="데이터 수집, 처리, 시각화를 위한 엔드투엔드 솔루션"
            features={["데이터 파이프라인", "분석 대시보드", "실시간 처리", "데이터 거버넌스"]}
          />
          <ServiceCard 
            icon={<CloudIcon />}
            title="Cloud Architecture" 
            desc="모던 애플리케이션을 위한 확장 가능한 인프라"
            features={["시스템 설계", "마이그레이션 전략", "성능 최적화", "보안 구현"]}
          />
          <ServiceCard 
            icon={<ProductIcon />}
            title="Product Development" 
            desc="풀스택 웹 및 모바일 애플리케이션 개발"
            features={["UI/UX 디자인", "프론트엔드 개발", "백엔드 API", "모바일 앱"]}
          />
          <ServiceCard 
            icon={<GrowthIcon />}
            title="Growth Acceleration" 
            desc="실험 기반 성장 및 최적화 전략"
            features={["A/B 테스팅", "그로스 분석", "전환율 최적화", "사용자 리서치"]}
          />
          <ServiceCard 
            icon={<TrainingIcon />}
            title="Training & Workshops" 
            desc="팀을 위한 디지털 역량 강화 프로그램"
            features={["기술 교육", "워크숍 진행", "멘토링", "베스트 프랙티스"]}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-metallic">How We Work</h2>
            <p className="mt-2 text-foreground-muted">체계적인 접근으로 가치를 창출합니다</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessStep number="01" title="Discovery" desc="비즈니스 이해와 요구사항 분석" />
            <ProcessStep number="02" title="Strategy" desc="최적의 솔루션 설계" />
            <ProcessStep number="03" title="Execute" desc="애자일 방식의 구현" />
            <ProcessStep number="04" title="Iterate" desc="지속적인 개선과 최적화" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-metallic">
          프로젝트를 시작할 준비가 되셨나요?
        </h2>
        <p className="mt-4 text-foreground-muted">
          비즈니스 성장을 위한 최적의 솔루션을 함께 찾아드립니다
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/support" className="btn-primary px-8 py-3">문의하기</a>
          <a href="/about" className="btn-outline px-8 py-3">회사 소개</a>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ 
  icon,
  title, 
  desc, 
  features 
}: { 
  icon: React.ReactNode;
  title: string; 
  desc: string; 
  features: string[];
}) {
  return (
    <div className="card card-hover card-glow p-6">
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground-muted">{desc}</p>
      <ul className="mt-5 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-foreground-muted">
            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ 
  number, 
  title, 
  desc 
}: { 
  number: string; 
  title: string; 
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary/30 mb-2">{number}</div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-foreground-muted">{desc}</p>
    </div>
  );
}

// Icons
function AIIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}
>>>>>>> Stashed changes
