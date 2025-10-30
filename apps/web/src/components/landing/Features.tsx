export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          The Power of Solana, Simplified
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Solana Triggers */}
          <div className="p-8 rounded-xl border border-purple-600/50 bg-gray-950 shadow-2xl">
            <div className="text-4xl mb-4 text-purple-400">⚡</div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Solana Triggers
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Start your automation based on real-time events happening on the **Solana blockchain**.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Wallet Transaction Detected
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Token Balance Change (SPL Tokens)
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Program Instruction Executed
              </li>
            </ul>
          </div>

          {/* Connected Actions */}
          <div className="p-8 rounded-xl border border-indigo-600/50 bg-gray-950 shadow-2xl">
            <div className="text-4xl mb-4 text-indigo-400">🔗</div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Connected Actions
            </h3>
            <p className="text-gray-400 mb-6">
              Execute actions across your favorite Web2 and Web3 services.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Send a Discord/Slack Alert
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Call a Custom Webhook API
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✔</span> Update a Google Sheet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
