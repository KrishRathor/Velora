export function Logo({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-md shadow-[0_0_40px_rgba(34,211,238,0.15)] bg-gradient-to-br from-[#9945FF] to-[#14F195]"
        style={{ width: size, height: size }}
      />
      <span className="text-slate-200 font-semibold tracking-tight">FluxForge</span>
    </div>
  );
}

