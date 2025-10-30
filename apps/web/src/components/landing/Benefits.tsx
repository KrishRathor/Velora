export const Benefits: React.FC = () => {
  const benefitItems = [
    {
      icon: "🚀",
      title: "Blazing Fast Execution",
      description: "Trigger and execute actions almost instantly. Solana's 400ms block times ensure your automations never lag behind the market.",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: "💸",
      title: "Near-Zero Transaction Costs",
      description: "Run thousands of automations without worrying about gas fees. ByteGrid leverages Solana's efficiency for incredibly low costs.",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      icon: "🏗️",
      title: "Limitless Scalability",
      description: "Built for volume. Whether you monitor one wallet or thousands of transactions, ByteGrid scales with the Solana network's massive capacity.",
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Automate on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Solana
          </span>
          ?
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
          Unmatched speed and efficiency are the foundations of truly effective on-chain automation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div
                className={`text-5xl mb-4 p-4 inline-block rounded-lg bg-gradient-to-r ${item.gradient}`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
