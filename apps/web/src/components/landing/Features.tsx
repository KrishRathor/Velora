
import { Icon } from '../ui/Icon';

const icons = {
  bolt: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  nodes: 'M6 12h12M12 6v12M4 8l4-4M16 20l4-4M4 16l4 4M16 4l4 4',
  shield: 'M12 3l8 4v6a10 10 0 01-8 8 10 10 0 01-8-8V7l8-4z',
  plug: 'M7 7l10 10M7 17l10-10M5 12h14'
};

export default function Features() {
  const items = [
    { title: 'Visual workflows', desc: 'Drag, connect, and deploy flows in minutes with a clean canvas and robust nodes.', icon: icons.nodes },
    { title: 'Solana native', desc: 'Listen to program logs, account changes, token mints, or slots and react instantly.', icon: icons.bolt },
    { title: 'Integrations', desc: 'Webhooks, REST, Discord, Slack, Postgres, Redis, and custom actions from code.', icon: icons.plug },
    { title: 'Reliability', desc: 'Replay, idempotency, and retries so on-chain volatility never breaks your flows.', icon: icons.shield }
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-200">Everything to ship automations</h2>
        <p className="mt-3 text-slate-400">Build production flows with confidence—observability, versioning, and secure credentials included.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-[#0f151d] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.20)] transition">
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Icon path={f.icon} className="text-cyan-300" />
              </div>
              <div>
                <div className="text-slate-200 font-medium">{f.title}</div>
                <p className="mt-1 text-slate-500">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

