import Link from "next/link";

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
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-muted-foreground hover:text-primary transition-colors">
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/news"
									className="text-muted-foreground hover:text-primary transition-colors">
									News
								</Link>
							</li>
							<li>
								<Link
									href="/community"
									className="text-muted-foreground hover:text-primary transition-colors">
									Community
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h4 className="font-semibold mb-3">Support</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/support"
									className="text-muted-foreground hover:text-primary transition-colors">
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/signup"
									className="text-muted-foreground hover:text-primary transition-colors">
									Sign Up
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									Documentation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors">
									FAQ
								</a>
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

function CompanyItem({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex gap-2">
			<span className="shrink-0">{label}:</span>
			<span>{value}</span>
		</div>
	);
}
