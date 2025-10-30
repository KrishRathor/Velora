export default function SolanaShowcase() {
  const triggers = ['Program logs', 'Account changes', 'Token mints', 'New slots', 'Price feed delta'];
  const actions = ['Webhook', 'Discord', 'Slack', 'HTTP/REST', 'DB write'];

  return (
    <section id="solana" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0f151d] p-6">
          <h4 className="text-slate-200 font-semibold">Solana triggers</h4>
          <ul className="mt-3 space-y-2">
            {triggers.map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#14F195]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0f151d] p-6">
          <h4 className="text-slate-200 font-semibold">Actions</h4>
          <ul className="mt-3 space-y-2">
            {actions.map((a) => (
              <li key={a} className="flex items-center gap-2 text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#9945FF]/10 to-[#14F195]/10 p-6">
        <div className="text-slate-200 font-medium">Example</div>
        <p className="mt-1 text-slate-500">
          When a swap occurs on a target program, filter by amount and send a Discord alert with enriched metadata.
        </p>
        <div className="mt-4 text-xs text-slate-500">
          Tip: Add retries and idempotency keys to keep alerts consistent during network turbulence.
        </div>
      </div>
    </section>
  );
}

