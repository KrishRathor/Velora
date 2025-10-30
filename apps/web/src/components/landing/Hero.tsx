
import { Logo } from '../ui/Logo';

export default function Hero() {
  return (
    <header className="relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Logo />
        <div className="flex items-center gap-3">
          <a href="#features" className="text-slate-500 hover:text-slate-200 transition">Features</a>
          <a href="#solana" className="text-slate-500 hover:text-slate-200 transition">Solana</a>
          <a href="#how" className="text-slate-500 hover:text-slate-200 transition">How it works</a>
          <a href="#cta" className="rounded-md border border-white/10 px-3 py-1.5 hover:border-cyan-300/60 hover:text-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition">
            Sign In
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Build automations with <span className="text-cyan-300">Solana actions</span> & triggers
          </h1>
          <p className="mt-4 text-slate-400 md:text-lg">
            Connect on-chain events, APIs, and your stack in a visual workflow builder that ships fast and stays reliable.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#cta"
              className="rounded-lg bg-cyan-400 px-5 py-2.5 text-[#0b0f14] font-medium shadow-[0_0_35px_rgba(34,211,238,0.3)] hover:brightness-110 transition"
            >
              Get started free
            </a>
            <a
              href="#how"
              className="rounded-lg border border-white/10 px-5 py-2.5 text-slate-200 hover:border-cyan-300/60 transition"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10">
            <div className="relative rounded-xl border border-white/10 bg-[#0f151d]/80 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
                <Card title="Solana Trigger" subtitle="Program Log: Swap Executed" accent="from-[#9945FF] to-cyan-300">
                  <Badge>On-chain</Badge>
                </Card>
                <Connector />
                <Card title="Filter" subtitle="Amount > 10 SOL" accent="from-cyan-300 to-[#14F195]">
                  <Badge>Logic</Badge>
                </Card>
                <Connector />
                <Card title="Action" subtitle="Notify Discord + Webhook" accent="from-[#14F195] to-[#9945FF]">
                  <Badge>Action</Badge>
                </Card>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Examples: Listen to token mints, program logs, account changes; trigger webhooks, indexers, alerts, or off-chain jobs.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}

function Card({
  title, subtitle, children, accent
}: { title: string; subtitle: string; children?: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0f151d] p-4">
      <div className={`h-1 w-full rounded bg-gradient-to-r ${accent}`} />
      <div className="mt-3">
        <div className="text-slate-200 font-medium">{title}</div>
        <div className="text-slate-500 text-sm">{subtitle}</div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-0.5 w-10 bg-white/15" />
      <div className="mx-2 h-2 w-2 rounded-full bg-cyan-400" />
      <div className="h-0.5 w-10 bg-white/15" />
    </div>
  );
}

