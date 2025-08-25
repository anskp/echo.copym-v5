import React, { useState, useEffect } from 'react';
import { CheckCircle, ExternalLink, Shield, Zap } from 'lucide-react';

// Audit companies data
const AUDIT_COMPANIES = [
  { name: "OpenZeppelin", logo: "/assets/Images/openzeppelin-logo.png", status: "Audit Complete" },
  { name: "Certik", logo: "/assets/Images/certik-logo.png", status: "Verification Passed" },
  { name: "Hacken", logo: "/assets/Images/hacken-logo.png", status: "Review Complete" },
  { name: "Quantstamp", logo: "/assets/Images/quantstamp-logo.png", status: "Analysis Complete" },
  { name: "Trail of Bits", logo: "/assets/Images/trailofbits-logo.png", status: "Audit Passed" },
  { name: "Consensys", logo: "/assets/Images/consensys-logo.png", status: "Review Complete" }
];

// Blockchain networks data
const BLOCKCHAIN_NETWORKS = [
  { name: "Ethereum", logo: "/assets/blockchains/ethereum-eth-logo.svg" },
  { name: "Polygon", logo: "/assets/blockchains/polygon-matic-logo.svg" },
  { name: "Bitcoin", logo: "/assets/blockchains/bitcoin-btc-logo.svg" },
  { name: "Solana", logo: "/assets/blockchains/solana-sol-logo.svg" },
  { name: "Avalanche", logo: "/assets/blockchains/avalanche-avax-logo.svg" },
  { name: "Optimism", logo: "/assets/blockchains/optimism-ethereum-op-logo.svg" },
  { name: "Binance", logo: "/assets/blockchains/binance.png" },
  { name: "Cardano", logo: "/assets/blockchains/Cardano-Logo.png" }
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, icons, type }) {
  return (
    <>
             {/* Semi-circle glow background */}
       <div className="absolute inset-0 flex justify-center">
         <div
           className="
             w-[1000px] h-[1000px] rounded-full 
             bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_90%)]
             blur-3xl 
             -mt-40 
             pointer-events-none
           "
           style={{ zIndex: 0 }}
         />
       </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const icon = icons[index % icons.length];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="relative">
              <img
                src={icon.logo}
                alt={icon.name}
                width={iconSize}
                height={iconSize}
                className="object-contain cursor-pointer transition-transform hover:scale-110 bg-white rounded-xl shadow-lg p-2"
                style={{ minWidth: iconSize, minHeight: iconSize }}
              />
              {type === 'audit' && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-32 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg text-center`}
            >
              <div className="font-semibold">{icon.name}</div>
              {type === 'audit' && (
                <div className="text-green-400 text-xs mt-1">{icon.status}</div>
              )}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-900 ${
                  tooltipAbove ? "top-full" : "bottom-full"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function AuditSection() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.8, 800);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(28, baseWidth * 0.06)
      : size.width < 768
      ? Math.max(32, baseWidth * 0.07)
      : Math.max(36, baseWidth * 0.08);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 anton-regular">
            <span className="text-gray-900">Security & </span>
            <span className="text-green-600">Audit</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our smart contracts have been audited by the world's most trusted security firms and integrated with leading blockchain networks, ensuring maximum protection and seamless interoperability.
          </p>
        </div>

        {/* Multi-Orbit Semi-Circle */}
        <div className="relative flex flex-col items-center text-center z-10">
          <div
            className="relative"
            style={{ width: baseWidth, height: baseWidth * 0.6 }}
          >
            {/* Inner orbit - Audit companies */}
            <SemiCircleOrbit 
              radius={baseWidth * 0.22} 
              centerX={centerX} 
              centerY={centerY} 
              count={6} 
              iconSize={iconSize} 
              icons={AUDIT_COMPANIES}
              type="audit"
            />
            
            {/* Middle orbit - More audit companies */}
            <SemiCircleOrbit 
              radius={baseWidth * 0.36} 
              centerX={centerX} 
              centerY={centerY} 
              count={8} 
              iconSize={iconSize} 
              icons={AUDIT_COMPANIES}
              type="audit"
            />
            
            {/* Outer orbit - Blockchain networks */}
            <SemiCircleOrbit 
              radius={baseWidth * 0.5} 
              centerX={centerX} 
              centerY={centerY} 
              count={8} 
              iconSize={iconSize} 
              icons={BLOCKCHAIN_NETWORKS}
              type="blockchain"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-2 h-2 text-white" />
            </div>
            <span className="text-sm text-gray-600">Audit Companies</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Blockchain Networks</span>
          </div>
        </div>

                 
        </div>
      </div>
    </section>
  );
}
