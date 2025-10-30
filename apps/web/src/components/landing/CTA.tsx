export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <h3 className="text-3xl font-semibold">Automate your Solana workflows today</h3>
        <p className="mt-2 text-slate-400">
          Start free. Connect a trigger, add an action, and deploy your first automation in minutes.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/signup"
            className="rounded-lg bg-cyan-400 px-6 py-3 text-[#0b0f14] font-medium shadow-[0_0_35px_rgba(34,211,238,0.3)] hover:brightness-110 transition"
          >
            Create account
          </a>
          <a
            href="/docs"
            className="rounded-lg border border-white/10 px-6 py-3 text-slate-200 hover:border-cyan-300/60 transition"
          >
            Read docs
          </a>
        </div>
      </div>
    </section>
  );
}

