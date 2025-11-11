import Section from "./Section";
import BitcoinIcon from "../assets/Bitcoin.png";
import video3d from "../assets/3video.mp4";

const Collaboration = () => {
  return (
    <Section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="relative isolate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,#023321_0%,rgba(2,51,33,0.18)_35%,rgba(0,0,0,0)_70%)] blur-3xl opacity-70" />

        <div className="relative">
          {/* Centered Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight palanquin uppercase">
              <span className="text-emerald-500">CORA AI </span>
              <span className="text-white">POWERS YOUR TRADING</span>
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-white font-medium">
              Tokenize Anytime. Anywhere
            </p>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              Enterprise-grade platform that transforms real-world assets into digital tokens, connecting traditional finance with blockchain technology for enhanced liquidity, regulatory compliance, and institutional security.
            </p>
          </div>

          {/* Content with Features and Video */}
          <div className="relative flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            {/* Copy Block */}
            <div className="flex-1 w-full">
              <div className="max-w-2xl">
                <div className="mt-10 space-y-8">
                  {[
                    {
                      title: "INSTANT ASSET DIGITIZATION",
                      copy:
                        "Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.",
                    },
                    {
                      title: "COMPLIANCE ON AUTOPILOT",
                      copy:
                        "AI-driven KYC/AML that works 24/7. Automatic FATF, SEC, and global regulatory compliance with zero human intervention.",
                    },
                    {
                      title: "FORTRESS-LEVEL COMPLIANCE.",
                      copy:
                        "Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.",
                    },
                  ].map(({ title, copy }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                        <img
                          src={BitcoinIcon}
                          alt="Cora AI feature"
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-[0.08em] text-white">
                          {title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                          {copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full">
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
                <div className="absolute -right-12 top-10 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
                <div className="absolute -left-16 bottom-10 h-32 w-32 rounded-full bg-emerald-500/30 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-black to-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                  <video
                    src={video3d}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-emerald-500/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
