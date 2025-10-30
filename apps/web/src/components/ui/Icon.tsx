export function Icon({ path, className = '' }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 stroke-current ${className}`} fill="none" strokeWidth={1.8}>
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

