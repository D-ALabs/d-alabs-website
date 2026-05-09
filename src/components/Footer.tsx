export default function Footer() {
  const company = {
    name: "디알랩스 유한회사",
    ceo: "이제석",
    address: "경기도 하남시 위례대로 190 (학암동 661), 1140호",
    email: "contact@d-alabs.com",
    bizNumber: "547-87-03375",
    mailOrderNumber: "NaN",
    bankAccount: "IBK기업은행 242-143459-04-001 (유)디알랩스",
    phone: "010-9882-9831",
  };

  const services = [
    { name: "SignGPT", href: "https://signgpt.org", desc: "Sign Language AI" },
    { name: "Lembic AI", href: "https://lembic.ai", desc: "Content Creation" },
  ];

  return (
    <footer className="w-full border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-sm font-bold text-white">D</span>
              </div>
              <span className="text-lg font-semibold">D-ALabs</span>
            </div>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
              Digital Alchemist Labs
              <br />
              Transforming data and technology into value.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    <span>{service.name}</span>
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <span className="text-xs text-foreground/40">
                    {service.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <span className="text-foreground/40 cursor-not-allowed">
                  News (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-foreground/40 cursor-not-allowed">
                  Community (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-foreground/40">{company.phone}</li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="text-xs text-foreground/40 leading-relaxed">
            <span>
              {company.name} | 대표 {company.ceo} | 경기도 광주시 남한산성면
              남한산성로 536-21, 산성빌라 C동 302호 | {company.email} |
              사업자등록번호: {company.bizNumber} | 통신판매업신고:{" "}
              {company.mailOrderNumber} | 입금계좌:
              {company.bankAccount} | 연락처 {company.phone}
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} D-ALabs. All rights reserved.
          </p>
          <a
            href="https://lembic.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground/30 hover:text-primary transition-colors"
          >
            Made with Lembic.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
