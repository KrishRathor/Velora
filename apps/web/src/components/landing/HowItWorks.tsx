export const UseCases: React.FC = () => {
  const caseStudies = [
    {
      title: "DeFi Arbitrage Alerts",
      description: "Monitor liquidity pool imbalances across Orca, Raydium, and Jupiter, triggering instant alerts to your trading dashboard or API endpoint.",
      tags: ["Trading", "DeFi", "Real-Time"],
    },
    {
      title: "NFT Mint Monitoring",
      description: "Instantly notify your Discord when a specific creator address mints a new NFT, allowing you to react immediately to drops.",
      tags: ["NFTs", "Social", "Events"],
    },
    {
      title: "Token Vesting Schedule",
      description: "Automate sending governance tokens to team members or investors the moment a vesting condition is met on-chain.",
      tags: ["DAO", "Treasury", "Compliance"],
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Endless <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Use Cases</span>
        </h2>
        <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          Start with templates or build your own custom **Solana-powered** flows for any industry.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 bg-gray-950/70"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full text-purple-300 bg-purple-900/50 border border-purple-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};
