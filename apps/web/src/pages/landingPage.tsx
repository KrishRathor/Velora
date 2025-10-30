import { Benefits } from "../components/landing/Benefits";
import { Features } from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { UseCases } from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <UseCases />
        <Footer />
      </main>
    </div>
  );
};

