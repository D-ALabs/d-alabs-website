export const metadata = {
	title: "Sign Up | D-ALabs",
};

export default function SignupPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-foreground-muted mb-6">
            <span className="w-6 h-px bg-primary/50" />
            <span className="tracking-widest uppercase text-xs">Get Started</span>
            <span className="w-6 h-px bg-primary/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-metallic">Join D-ALabs</h1>
          <p className="mt-6 text-lg text-foreground-muted">
            디지털 트랜스포메이션 여정을 함께 시작하세요
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="mx-auto max-w-md px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground">계정 만들기</h2>
          <p className="mt-2 text-sm text-foreground-muted">데모 폼입니다 - 실제 가입은 진행되지 않습니다</p>
        </div>

        <form className="card p-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="signup-name" className="text-sm font-medium text-foreground">이름</label>
            <input 
              id="signup-name" 
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
              placeholder="홍길동" 
              disabled 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="signup-email" className="text-sm font-medium text-foreground">이메일</label>
            <input 
              id="signup-email" 
              type="email" 
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
              placeholder="email@company.com" 
              disabled 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="signup-company" className="text-sm font-medium text-foreground">회사명 (선택)</label>
            <input 
              id="signup-company" 
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
              placeholder="회사명" 
              disabled 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="signup-password" className="text-sm font-medium text-foreground">비밀번호</label>
            <input 
              id="signup-password" 
              type="password" 
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" 
              placeholder="••••••••" 
              disabled 
            />
          </div>
          <button className="btn-primary w-full opacity-60 cursor-not-allowed" disabled>
            계정 만들기 (Demo)
          </button>
          <p className="text-xs text-center text-foreground-muted/60">
            가입 시 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
          </p>
        </form>

        {/* Alternative */}
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground-muted">
            이미 계정이 있으신가요?{' '}
            <a href="#" className="text-primary hover:underline">로그인</a>
          </p>
        </div>
      </section>
    </>
  );
}
