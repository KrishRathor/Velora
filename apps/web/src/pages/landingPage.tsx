import { useEffect } from "react";
import CTA from "../components/landing/CTA";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import SolanaShowcase from "../components/landing/SolanaShowcase";

export const Landing = () => {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <HowItWorks />
      <SolanaShowcase />
      <CTA />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-ink-dim">
          © {new Date().getFullYear()} FluxForge. All rights reserved.
        </div>
      </footer>
    </main>
  );
}


export const LandingPage = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <div className="min-h-screen bg-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial" />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'var(--tw-bg-grid)' }} />
    </div>
  );
}


