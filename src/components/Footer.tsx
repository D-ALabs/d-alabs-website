export default function Footer() {
	const company = {
		name: "디알랩스 유한회사",
		ceo: "이제석",
		address: "경기도 광주시 남한산성면 남한산성로 536-21(산성빌라 C동 302호)",
		email: "contact@d-alabs.com",
		bizNumber: "547-87-03375",
		mailOrderNumber: "NaN",
		bankAccount: "IBK기업은행 242-143459-04-001 (유)디알랩스",
		phone: "010-9882-9831",
	};

<<<<<<< Updated upstream
	return (
		<footer className="w-full border-t bg-muted/40">
			<div className="mx-auto max-w-6xl px-4 py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand */}
					<div>
						<div className="text-lg font-bold">D-ALabs</div>
						<div className="text-foreground/70 mt-2 text-sm">
							Digital Alchemy for Value Creation
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold mb-3">Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									About Us
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									Services
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									News
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									Community
								</span>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h4 className="font-semibold mb-3">Support</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									Contact Us
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									Sign Up
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									Documentation
								</span>
							</li>
							<li>
								<span className="text-muted-foreground opacity-50 cursor-not-allowed">
									FAQ
								</span>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-semibold mb-3">Contact</h4>
						<div className="space-y-1 text-xs text-muted-foreground">
							<div>{company.email}</div>
							<div>{company.phone}</div>
						</div>
					</div>
				</div>

				{/* Company Info */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs text-muted-foreground/70">
						{/* <CompanyItem label="회사명" value={company.name} />
						<CompanyItem label="대표자명" value={company.ceo} />
						<CompanyItem label="사업자등록번호" value={company.bizNumber} />
						<CompanyItem label="주소" value={company.address} />
						<CompanyItem
							label="통신판매신고번호"
							value={company.mailOrderNumber}
						/>
						<CompanyItem label="입금계좌" value={company.bankAccount} />
						<CompanyItem label="이메일" value={company.email} />
						<CompanyItem label="전화번호" value={company.phone} /> */}
						<span>
							디알랩스 유한회사 | 대표 이제석 | 경기도 광주시 남한산성면
							남한산성로 536-21, 산성빌라 C동 302호 | contact@d-alabs.com |
							사업자등록번호: 547-87-03375 | 통신판매업신고: NaN | 입금계좌:
							IBK기업은행 242-143459-04-001 (유)디알랩스 | 연락처 010-9882-9831
						</span>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
					<div>© {new Date().getFullYear()} D-ALabs. All rights reserved.</div>
					{/* <div>이 페이지의 정보는 테스트 데이터입니다.</div> */}
				</div>
			</div>
		</footer>
	);
}
=======
  return (
    <footer className="w-full border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold">
              <span className="text-metallic">D-A</span>
              <span className="text-primary">Labs</span>
            </div>
            <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
              Digital Alchemy for Value Creation
            </p>
            {/* Services */}
            <div className="mt-5 flex flex-col gap-2">
              <a 
                href="https://signgpt.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                SignGPT.org →
              </a>
              <a 
                href="https://lembic.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                Lembic.ai →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/news">News</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2.5">
              <FooterLink href="/support">Contact Us</FooterLink>
              <FooterLink href="/signup">Sign Up</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-foreground-muted">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{company.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{company.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-10" />

        {/* Company Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs text-foreground-muted/60">
          <CompanyItem label="회사명" value={company.name} />
          <CompanyItem label="대표자명" value={company.ceo} />
          <CompanyItem label="사업자등록번호" value={company.bizNumber} />
          <CompanyItem label="주소" value={company.address} />
          <CompanyItem label="통신판매신고번호" value={company.mailOrderNumber} />
          <CompanyItem label="입금계좌" value={company.bankAccount} />
          <CompanyItem label="이메일" value={company.email} />
          <CompanyItem label="전화번호" value={company.phone} />
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground-muted/50">
          <div>© {new Date().getFullYear()} D-ALabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-foreground-muted hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function CompanyItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="shrink-0 text-foreground-muted/40">{label}:</span>
      <span>{value}</span>
    </div>
  );
}
>>>>>>> Stashed changes
