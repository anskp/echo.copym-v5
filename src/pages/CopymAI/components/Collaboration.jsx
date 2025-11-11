import { RevolutionCora } from "../assets";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses className="bg-black text-white">
      <div className="container relative">
        {/* ======= HEADING ======= */}
        <div className="text-center mb-16 relative z-30">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dm-sans">
            <span className="text-white">CORA: THE RWA </span>
          
            <span style={{ color: "#15A36E" }}>REVOLUTION</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 dm-sans">
            Tokenize Anytime. Anywhere
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed dm-sans">
            Enterprise-grade platform that transforms real-world assets into
            digital tokens, connecting traditional finance with blockchain
            technology for enhanced liquidity, regulatory compliance, and
            institutional security.
          </p>
        </div>

         {/* ======= BACKGROUND SPIRAL (behind boxes as before) ======= */}
         <div className="absolute inset-0 flex justify-start items-center pointer-events-none z-0">
          <img
            src={RevolutionCora}
            alt="CORA Revolution"
            className="w-[95%] md:w-[70%] max-w-none h-auto opacity-90 -ml-44 md:-ml-60 mt-52 md:mt-72"
          />
        </div>

        {/* ======= FEATURE BOXES (above spiral) ======= */}
        <div className="relative z-20 flex flex-col gap-16 md:gap-20 mt-16 md:mt-24 md:pl-8">
  {/* Box 1 - Right aligned */}
  <div className="w-full md:w-[75%] md:ml-72 bg-[rgba(20,20,20,0.85)] shadow-[0_4px_12px_rgba(0,0,0,0.45)] rounded-lg p-3 backdrop-blur-sm border border-white/5">
    <h3 className="text-lg font-bold text-white mb-2 dm-sans">
      INSTANT ASSET DIGITIZATION
    </h3>
    <p className="text-gray-300 leading-relaxed dm-sans">
      Transform real estate, commodities, and securities into blockchain
      tokens in minutes. Native integration with Ethereum, Polygon,
      Solana, and Avalanche.
    </p>
  </div>

  {/* Box 2 - Left aligned */}
  <div className="w-full md:w-[75%] md:ml-56 bg-[rgba(20,20,20,0.85)] shadow-[0_4px_12px_rgba(0,0,0,0.45)] rounded-lg p-3 backdrop-blur-sm relative border border-white/5">
   
    <h3 className="text-lg font-bold text-white mb-3 dm-sans">
      COMPLIANCE ON AUTOPILOT
    </h3>
    <p className="text-gray-300 leading-relaxed dm-sans">
      AI-driven KYC/AML that works 24/7. Automatic FATF, SEC, and global
      regulatory compliance with zero human intervention.
    </p>
  </div>

  {/* Box 3 - Right aligned */}
  <div className="w-full md:w-[75%] md:ml-72 bg-[rgba(20,20,20,0.85)] shadow-[0_4px_12px_rgba(0,0,0,0.45)] rounded-lg p-3 backdrop-blur-sm border border-white/5">
    <h3 className="text-lg font-bold text-white mb-3 dm-sans">
      FORTRESS-LEVEL SECURITY
    </h3>
    <p className="text-gray-300 leading-relaxed dm-sans">
      MPC custody with cross-chain atomic settlements. Enterprise-grade
      protection for every digital asset transaction.
    </p>
  </div>
</div>

      </div>
    </Section>
  );
};

export default Collaboration;
