import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC = () => {
  const navigate = useNavigate()
  const ctaClasses = "px-8 cursor-pointer py-4 text-lg font-semibold text-white transition duration-300 rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50";
  return (
    <header className="relative pt-20 pb-24 bg-gray-950 overflow-hidden">
      {/* Background Gradient Effect - Solana-esque */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[500px] w-[1000px] bg-indigo-500/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white mb-6">
          Automate Everything on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500">
            Solana
          </span>
        </h1>

        <div className="mb-10">
          <SignedIn>
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className={ctaClasses}
            >
              Go to Dashboard
            </button>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className={ctaClasses}>
                Start Automating Your Solana Workflow
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        <div className="mt-20 w-full max-w-4xl mx-auto flex items-center justify-between text-white relative">

          <div className="absolute left-[30%] top-1/2 w-[20%] h-1 bg-gray-700/50"></div>
          <div className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-gray-700/50 rotate-45"></div>

          <div className="absolute right-[30%] top-1/2 w-[20%] h-1 bg-gray-700/50"></div>
          <div className="absolute right-[50%] top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-gray-700/50 rotate-45"></div>


          <div className="w-1/3 p-5 rounded-xl border border-purple-500 bg-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-purple-500/30">
            <p className="text-2xl font-bold mb-1 text-purple-400">1. Trigger</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">SOLANA Event:</span> Wallet A receives 100 SPL Tokens.
            </p>
          </div>
          <div className="w-1/3 mx-4 p-5 rounded-xl border border-indigo-500 bg-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-indigo-500/30 relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600">
              ByteGrid
            </span>
            <p className="text-2xl font-bold mb-1 text-indigo-400">2. Filter</p>
            <p className="text-sm text-gray-300">
              Check if the token is exactly SOL/USDC and value $$ 50.
            </p>
          </div>

          <div className="w-1/3 p-5 rounded-xl border border-cyan-500 bg-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-cyan-500/30">
            <p className="text-2xl font-bold mb-1 text-cyan-400">3. Action</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Send Reminder:</span> Send a success mail.
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};
