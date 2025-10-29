import { RevolutionCora } from "../assets";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container">
        {/* Main Heading at the top */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 anton-regular">
            <span className="text-gray-900">CORA: THE RWA</span>
            <br />
            <span className="text-green-500">REVOLUTION</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Tokenize Anytime. Anywhere
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Enterprise-grade platform that transforms real-world assets into digital tokens, connecting traditional finance with blockchain technology for enhanced liquidity, regulatory compliance, and institutional security
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side - SVG Graphic */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Vertical dashed line */}
             
              
              {/* SVG Container */}
<div className="relative z-10 pt-0 p-8 -ml-20 md:-ml-60 -mt-16 md:-mt-24">
  <img
    src={RevolutionCora}
    alt="CORA Revolution"
    className="w-[180%] max-w-none h-auto"
  />
</div>

            </div>
          </div>

          {/* Right Side - Feature Boxes */}
          <div className=" space-y-6">
            {/* Feature Box 1 */}
            <div className="w-full max-w-[2187px]  bg-[rgba(241,241,241,0.8)] shadow-[0_4px_4px_0_rgba(77,75,75,0.25)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                INSTANT ASSET DIGITIZATION
              </h3>
              <p className="text-gray-700">
                Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.
              </p>
            </div>

            {/* Feature Box 2 */}
            <div className="w-full max-w-[2187px] bg-[rgba(241,241,241,0.8)] shadow-[0_4px_4px_0_rgba(77,75,75,0.25)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                COMPLIANCE ON AUTOPILOT
              </h3>
              <p className="text-gray-700">
                AI-driven KYC/AML that works 24/7. Automatic FATF, SEC and global regulatory compliance with zero human intervention.
              </p>
            </div>

            {/* Feature Box 3 */}
            <div className="w-full max-w-[2187px] bg-[rgba(241,241,241,0.8)] shadow-[0_4px_4px_0_rgba(77,75,75,0.25)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                FORTRESS-LEVEL SECURITY
              </h3>
              <p className="text-gray-700">
                MPC custody with cross-chain atomic settlements. Enterprise-grade protection for every digital asset transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
