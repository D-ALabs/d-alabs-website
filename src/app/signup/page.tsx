export const metadata = {
  title: "Sign Up | D-ALabs",
};

export default function SignupPage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Join D-ALabs</h1>
          <p className="mt-6 text-lg text-foreground/85">
            Start your digital transformation journey with us
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="mx-auto max-w-md px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="mt-2 text-foreground/70">This is a demo form - no actual registration will occur</p>
        </div>

        <form className="grid gap-6 card p-8">
          <div className="grid gap-2">
            <label htmlFor="signup-name" className="text-sm font-medium">Full Name</label>
            <input 
              id="signup-name" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="John Doe" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="signup-email" className="text-sm font-medium">Email Address</label>
            <input 
              id="signup-email" 
              type="email" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="john@company.com" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="signup-company" className="text-sm font-medium">Company (Optional)</label>
            <input 
              id="signup-company" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="Your Company" 
              disabled 
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
            <input 
              id="signup-password" 
              type="password" 
              className="rounded-md border-border border px-3 py-2 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              placeholder="••••••••" 
              disabled 
            />
          </div>
          <button className="btn-primary w-full opacity-60 cursor-not-allowed" disabled>
            Create Account (Demo)
          </button>
          <p className="text-xs text-center text-foreground/60">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </section>
    </>
  );
}


