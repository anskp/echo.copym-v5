import Bell from "../assets/Bell.png";
import Bitcoin from "../assets/Bitcoin.png";
import Dashboard from "../assets/Dashboard.png";
import Newspaper from "../assets/Newspaper.png";
import Stockgraph from "../assets/Stockgraph.png";

const Benefits = () => {
  return (
    <section className="relative isolate mt-16 sm:mt-12 md:mt-24 lg:mt-32 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -translate-y-1/3 h-[420px] bg-[radial-gradient(circle_at_top,#0c3e29,transparent_65%)] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 translate-y-1/3 h-[380px] bg-[radial-gradient(circle_at_bottom,#09311f,transparent_60%)] opacity-40 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight palanquin mb-4 uppercase tracking-tight">
            <span className="text-emerald-500">CORA AI</span>{" "}
            <span className="text-white">POWERS YOUR TRADING</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
          </p>
        </div>

        <div className="space-y-6 lg:space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/25 bg-[#050708] p-2 sm:p-4 lg:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-emerald-400">
                    Smart Price Alerts Recap
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                    Set intelligent price alerts with Cora AI&apos;s predictive analysis. Get notified before major price movements with AI-powered insights and automated trading signals.
                  </p>
                </div>
                <div className="shrink-0 flex justify-center md:justify-end">
                  <img
                    src={Bell}
                    alt="Cora AI Smart Alerts"
                    className="w-24 sm:w-28 lg:w-32 xl:w-36 max-w-full drop-shadow-[0_20px_45px_rgba(21,163,110,0.45)]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-emerald-500/10 ring-offset-0" />
            </div>

            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/25 bg-[#050708] p-2 sm:p-4 lg:p-6 shadow-[0_30px_100px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-emerald-400">
                    Daily Market Recap
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                    Start your day with Cora AI&apos;s intelligent market analysis. Get instant insights into what&apos;s driving price movements, key market events, and actionable trading opportunities delivered in simple, digestible summaries.
                  </p>
                </div>
                <div className="shrink-0 flex justify-center md:justify-end">
                  <img
                    src={Dashboard}
                    alt="Cora AI Dashboard"
                    className="w-24 sm:w-28 lg:w-32 xl:w-36 max-w-full drop-shadow-[0_20px_45px_rgba(21,163,110,0.45)]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-emerald-500/10 ring-offset-0" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/25 bg-[#050708] p-2 sm:p-4 lg:p-6 shadow-[0_25px_90px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400">
                  Real Time Alerts
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                  Get instant Cora AI notifications for price alerts, market news, and portfolio updates. Stay informed with intelligent alerts that adapt to your trading patterns and market conditions.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <img
                  src={Newspaper}
                  alt="Real Time Alerts"
                  className="w-24 sm:w-28 lg:w-32 max-w-full drop-shadow-[0_20px_45px_rgba(21,163,110,0.45)]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-emerald-500/10 ring-offset-0" />
            </div>

            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/25 bg-[#050708] p-2 sm:p-4 lg:p-6 shadow-[0_25px_90px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400">
                  AI Portfolio Insights
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                  Get intelligent portfolio breakdowns and diversification recommendations powered by Cora AI. Track your asset allocation across technology, real estate, and digital art with smart rebalancing suggestions.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <img
                  src={Stockgraph}
                  alt="AI Portfolio Insights"
                  className="w-28 sm:w-32 lg:w-36 max-w-full drop-shadow-[0_20px_45px_rgba(21,163,110,0.45)]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-emerald-500/10 ring-offset-0" />
            </div>

            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/25 bg-[#050708] p-2 sm:p-4 lg:p-6 shadow-[0_25px_90px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 md:col-span-2 xl:col-span-1">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400">
                  Crypto Market Intelligence
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                  Cora AI&apos;s advanced charting and market analysis. Track Bitcoin, Ethereum, and BNB performance with AI-powered trend predictions and real-time price alerts.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <img
                  src={Bitcoin}
                  alt="Crypto Market Intelligence"
                  className="w-24 sm:w-28 lg:w-32 max-w-full drop-shadow-[0_20px_45px_rgba(21,163,110,0.45)]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-emerald-500/10 ring-offset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
