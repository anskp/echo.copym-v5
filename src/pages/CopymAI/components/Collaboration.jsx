import { RevolutionCora } from "../assets";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container relative">
        {/* ======= HEADING ======= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dm-sans">
            <span className="text-gray-900">CORA: THE RWA </span>
          
            <span style={{ color: "#15A36E" }}>REVOLUTION</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Tokenize Anytime. Anywhere
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade platform that transforms real-world assets into
            digital tokens, connecting traditional finance with blockchain
            technology for enhanced liquidity, regulatory compliance, and
            institutional security.
          </p>
        </div>

         {/* ======= BACKGROUND SPIRAL ======= */}
         <div className="absolute inset-0 flex justify-start items-center pointer-events-none">
           <img
             src={RevolutionCora}
             alt="CORA Revolution"
             className="w-[95%] md:w-[70%] max-w-none h-auto opacity-90 -ml-44 md:-ml-60 mt-52 md:mt-72"
           />
         </div>

        {/* ======= FEATURE BOXES ======= */}
        <div className="relative z-20 flex flex-col gap-20 md:gap-24 mt-20 md:mt-28 md:pl-16">
  {/* Box 1 - Right aligned */}
  <div className="w-full md:w-[75%] md:ml-80 bg-[rgba(241,241,241,0.8)] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg p-3 backdrop-blur-sm">
    <h3 className="text-lg font-bold text-gray-900 mb-2">
      INSTANT ASSET DIGITIZATION
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Transform real estate, commodities, and securities into blockchain
      tokens in minutes. Native integration with Ethereum, Polygon,
      Solana, and Avalanche.
    </p>
  </div>

  {/* Box 2 - Left aligned */}
  <div className="w-full md:w-[75%] md:ml-64 bg-[rgba(241,241,241,0.8)] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg p-3 backdrop-blur-sm">
    <h3 className="text-lg font-bold text-gray-900 mb-3">
      COMPLIANCE ON AUTOPILOT
    </h3>
    <p className="text-gray-700 leading-relaxed">
      AI-driven KYC/AML that works 24/7. Automatic FATF, SEC, and global
      regulatory compliance with zero human intervention.
    </p>
  </div>

  {/* Box 3 - Right aligned */}
  <div className="w-full md:w-[75%] md:ml-80 bg-[rgba(241,241,241,0.8)] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-lg p-3 backdrop-blur-sm">
    <h3 className="text-lg font-bold text-gray-900 mb-3">
      FORTRESS-LEVEL SECURITY
    </h3>
    <p className="text-gray-700 leading-relaxed">
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
