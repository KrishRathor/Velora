
export default function HowItWorks() {
  const steps = [
    { k: '1', title: 'Choose a trigger', desc: 'Pick a Solana event or webhook to start the flow.' },
    { k: '2', title: 'Add nodes', desc: 'Filter, transform, and connect actions visually.' },
    { k: '3', title: 'Deploy & monitor', desc: 'Ship with retries, logs, and alerts baked-in.' }
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur">
        <h3 className="text-2xl font-semibold text-center">From idea to automation in minutes</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.k} className="rounded-xl bg-[#0f151d] p-5 ring-1 ring-white/10">
              <div className="text-cyan-300 text-sm">Step {s.k}</div>
              <div className="mt-1 text-slate-200 font-medium">{s.title}</div>
              <p className="mt-1 text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

