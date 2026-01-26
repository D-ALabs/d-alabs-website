export default function Home() {
<<<<<<< Updated upstream
	return (
		<>
			{/* Hero Section */}
			<section className="brand-gradient animate-gradient">
				<div className="mx-auto max-w-6xl px-4 py-20 sm:py-32">
					<div className="text-center">
						<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
							Digital Alchemy for
							<span className="block gradient-text">Value Creation</span>
						</h1>
						<p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl opacity-90">
							We transform data, AI, and cloud technologies into meaningful
							solutions that turn challenges into opportunities.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
							<span className="inline-flex items-center justify-center rounded-md text-base px-8 py-3 font-medium opacity-50 cursor-not-allowed bg-primary/20 border border-primary/30">
								Explore Services
							</span>
							<span className="inline-flex items-center justify-center rounded-md text-base px-8 py-3 font-medium opacity-50 cursor-not-allowed border-2 border-current">
								Learn About Us
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="mx-auto max-w-6xl px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">What We Do</h2>
					<p className="mt-3 text-foreground/70">
						Digital alchemy through experimentation and execution
					</p>
				</div>
				<div className="flex justify-center">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
						<FeatureCard
							title="Sign GPT"
							desc="AI solution connecting sign language and the world"
						/>
					</div>
				</div>
			</section>

			{/* Navigation Cards */}
			<section className="mx-auto max-w-6xl px-4 py-16 bg-muted/20">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold">Explore D-ALabs</h2>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card
						title="About Us"
						desc="Our philosophy, vision, and mission"
						href="/about"
						disabled
					/>
					<Card
						title="Services"
						desc="Digital alchemy products and solutions"
						href="/services"
						disabled
					/>
					<Card
						title="News"
						desc="Latest updates and press releases"
						href="/news"
						disabled
					/>
					<Card
						title="Community"
						desc="Growing together with our community"
						href="/community"
						disabled
					/>
					<Card
						title="Support"
						desc="Customer support and inquiries"
						href="/support"
						disabled
					/>
					<Card
						title="Sign Up"
						desc="Join our platform and start your journey"
						href="/signup"
						disabled
					/>
				</div>
			</section>
		</>
	);
}

function Card({
	title,
	desc,
	href,
	disabled = false,
}: {
	title: string;
	desc: string;
	href: string;
	disabled?: boolean;
}) {
	if (disabled) {
		return (
			<div className="card p-6 opacity-50 cursor-not-allowed">
				<div className="text-lg font-semibold text-muted-foreground">
					{title}
				</div>
				<div className="mt-2 text-sm text-muted-foreground">{desc}</div>
				<div className="mt-3 text-xs text-muted-foreground">준비중</div>
			</div>
		);
	}

	return (
		<a
			href={href}
			className="card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
			<div className="text-lg font-semibold">{title}</div>
			<div className="mt-2 text-sm text-foreground/75">{desc}</div>
		</a>
	);
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="card p-6 text-center">
			<div className="text-xl font-semibold">{title}</div>
			<div className="mt-2 text-foreground/75">{desc}</div>
		</div>
	);
=======
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Subtle geometric accent */}
        <div className="absolute inset-0 hex-pattern opacity-50" />
        
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-36">
          <div className="text-center">
            {/* Subtle tagline */}
            <div className="inline-flex items-center gap-2 text-sm text-foreground-muted mb-6">
              <span className="w-8 h-px bg-primary/50" />
              <span className="tracking-widest uppercase text-xs">Digital Alchemist Labs</span>
              <span className="w-8 h-px bg-primary/50" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-metallic">Transforming Ideas</span>
              <br />
              <span className="text-gold">Into Digital Value</span>
            </h1>
            
            <p className="mt-8 mx-auto max-w-2xl text-lg text-foreground-muted leading-relaxed">
              데이터, AI, 클라우드 기술을 결합하여 비즈니스의 잠재력을 실현합니다.
              <br className="hidden sm:block" />
              복잡한 문제를 가치 있는 솔루션으로 변환하는 디지털 연금술.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-primary text-base px-8 py-3">
                서비스 살펴보기
              </a>
              <a href="/about" className="btn-outline text-base px-8 py-3">
                회사 소개
              </a>
            </div>

            {/* Services operated */}
            <div className="mt-16 pt-10 border-t border-border">
              <p className="text-xs text-foreground-muted/60 uppercase tracking-wider mb-4">운영 중인 서비스</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a 
                  href="https://signgpt.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-metallic hover:text-primary transition-colors font-medium tracking-wide"
                >
                  SignGPT.org
                </a>
                <span className="w-1 h-1 rounded-full bg-border-light hidden sm:block" />
                <a 
                  href="https://lembic.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-metallic hover:text-primary transition-colors font-medium tracking-wide"
                >
                  Lembic.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-metallic">Core Expertise</h2>
            <p className="mt-3 text-foreground-muted">실험과 실행을 통한 디지털 연금술</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<AIIcon />}
              title="AI Strategy" 
              desc="PoC에서 프로덕션까지, 비즈니스에 맞는 AI 솔루션 설계 및 구현" 
            />
            <FeatureCard 
              icon={<DataIcon />}
              title="Data Platform" 
              desc="데이터 수집, 처리, 시각화를 위한 엔드투엔드 플랫폼 구축" 
            />
            <FeatureCard 
              icon={<CloudIcon />}
              title="Cloud Architecture" 
              desc="확장 가능하고 안정적인 클라우드 인프라 설계" 
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-metallic">Explore</h2>
          <p className="mt-3 text-foreground-muted">D-ALabs의 다양한 영역을 살펴보세요</p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <NavCard 
            title="About" 
            desc="철학, 비전, 그리고 미션" 
            href="/about" 
          />
          <NavCard 
            title="Services" 
            desc="디지털 연금술 프로덕트와 솔루션" 
            href="/services" 
          />
          <NavCard 
            title="News" 
            desc="최신 업데이트와 소식" 
            href="/news" 
          />
          <NavCard 
            title="Community" 
            desc="커뮤니티와 함께 성장" 
            href="/community" 
          />
          <NavCard 
            title="Support" 
            desc="고객 지원 및 문의" 
            href="/support" 
          />
          <NavCard 
            title="Sign Up" 
            desc="플랫폼에 가입하고 시작하기" 
            href="/signup" 
            highlight 
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gradient-subtle">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-metallic">
            함께 가치를 만들어갈 준비가 되셨나요?
          </h2>
          <p className="mt-4 text-foreground-muted">
            프로젝트에 대해 이야기해 보세요. 최적의 솔루션을 제안해 드립니다.
          </p>
          <div className="mt-8">
            <a href="/support" className="btn-primary px-8 py-3">
              문의하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function NavCard({
  title,
  desc,
  href,
  highlight = false,
}: {
  title: string;
  desc: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <a 
      href={href} 
      className={`card card-hover card-glow p-6 group ${highlight ? 'border-primary/30' : ''}`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-lg font-semibold ${highlight ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
          {title}
        </span>
        <svg className="w-4 h-4 text-foreground-muted group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="mt-2 text-sm text-foreground-muted">{desc}</p>
    </a>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card card-hover p-6 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{desc}</p>
    </div>
  );
>>>>>>> Stashed changes
}

// Icons
function AIIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}
