import React, { useEffect } from 'react';
import { 
  ethereum, 
  polygon, 
  bitcoin, 
  solana, 
  avalanche, 
  optimism, 
  near, 
  stellar,
  copymColoredIcon
} from '../../CopymAI/assets';

// Import new PNG images for right spiral
import hIcon from '/assets/svg/h.png';
import icIcon from '/assets/svg/ic.png';
import zIcon from '/assets/svg/z.png';
import cervikIcon from '/assets/svg/cervik.png';
import audit0Icon from '/assets/svg/audit0.png';

// Import curve assets
import curve1 from '../../CopymAI/assets/collaboration/curve-1.svg';
import curve2 from '../../CopymAI/assets/collaboration/curve-2.svg';

// Global CSS for rotation animation (injected once)
const spinStyles = `
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

// Inject CSS only once globally
let cssInjected = false;
const injectCSS = () => {
  if (!cssInjected) {
    const style = document.createElement('style');
    style.id = 'blockchain-spiral-styles';
    style.textContent = spinStyles;
    document.head.appendChild(style);
    cssInjected = true;
    console.log('CSS injected successfully for blockchain spiral rotation');
  }
};

const BlockchainSpiral = ({ 
  centralLogo = copymColoredIcon, 
  centralLogoSize = 64, 
  blockchainLogos = [], 
  containerSize = "w-[22rem]", 
  scale = "scale-75 md:scale-100",
  showConnectingLines = true 
}) => {
  // Inject CSS only once
  useEffect(() => {
    injectCSS();
    
    // Also add CSS directly to ensure it works
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Default blockchain logos if none provided
  const defaultBlockchainLogos = [
    { id: "0", title: "Ethereum", icon: ethereum, width: 26, height: 36 },
    { id: "1", title: "Polygon", icon: polygon, width: 34, height: 36 },
    { id: "2", title: "Bitcoin", icon: bitcoin, width: 36, height: 28 },
    { id: "3", title: "Solana", icon: solana, width: 34, height: 35 },
    { id: "4", title: "Avalanche", icon: avalanche, width: 34, height: 34 },
    { id: "5", title: "Optimism", icon: optimism, width: 34, height: 34 },
    { id: "6", title: "Near", icon: near, width: 26, height: 34 },
    { id: "7", title: "Stellar", icon: stellar, width: 38, height: 32 },
  ];

  const logos = blockchainLogos.length > 0 ? blockchainLogos : defaultBlockchainLogos;

        return (
          <div
      className={`relative left-1/2 flex ${containerSize} aspect-square rounded-full -translate-x-1/2 ${scale}`}
      role="img"
      aria-label="Blockchain integration spiral with rotating blockchain logos"
    >
            {/* Static Border Container */}
      <div className="absolute inset-0 border-2 border-black rounded-full"></div>
      
      {/* Rotating Content Container */}
      <div className="relative w-full h-full" style={{
        animation: 'spin-slow 20s linear infinite',
        transformOrigin: 'center'
      }}>
        {/* Central Logo Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-60 aspect-square border border-black rounded-full">
          <div className="flex items-center justify-center w-full h-full">
            {centralLogo ? (
              <img
                src={centralLogo}
                width={centralLogoSize}
                height={centralLogoSize}
                alt="Copym Central Logo"
                className="pointer-events-none select-none"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn('Failed to load central logo:', centralLogo);
                }}
              />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">LOGO</span>
                </div>
              )}
          </div>
            </div>

                  {/* Blockchain Logos Around the Circle */}
          <ul role="list" aria-label="Blockchain network logos">
            {logos.map((logo, i) => {
              // Use custom angle if provided, otherwise fall back to default 45° spacing
              const rotationAngle = logo.angle !== undefined ? logo.angle : i * 45;
              return (
                <li
                  key={logo.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <div
                    className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] animate-pulse"
                    style={{ transform: `rotate(-${rotationAngle}deg)` }}
                  >
                    <img
                      src={logo.icon}
                      alt={`${logo.title} blockchain logo`}
                      width={logo.width || 24}
                      height={logo.height || 24}
                      className="m-auto pointer-events-none select-none"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.warn('Failed to load blockchain logo:', logo.title, logo.icon);
                      }}
                    />
            </div>
                </li>
        );
      })}
          </ul>
        </div>

      {/* Curved Lines (Same as CopymAI page) */}
      {showConnectingLines && (
        <>
          {/* Left Curve - Show for both true and left-only */}
          {(showConnectingLines === true || showConnectingLines === "left-only") && (
            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-6 pointer-events-none select-none xl:block">
              <img 
                src={curve1} 
                width={522} 
                height={182} 
                alt="Decorative left curve" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn('Failed to load left curve');
                }}
              />
            </div>
          )}

          {/* Right Curve - Only show for true, not for left-only */}
          {showConnectingLines === true && (
            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-8 ml-6 pointer-events-none select-none xl:block">
              <img 
                src={curve2} 
                width={162} 
                height={76} 
                alt="Decorative right curve"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn('Failed to load right curve');
                }}
              />
            </div>
          )}
        </>
      )}
          </div>
        );
};

export default function AuditSection() {
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
            <span className="text-emerald-600">Audit</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our smart contracts have been audited by the world's most trusted security firms and integrated with leading blockchain networks, ensuring maximum protection and seamless interoperability.
          </p>
        </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 items-center">
                        {/* Left Grid - Blockchain Spiral */}
            <div className="flex justify-center lg:justify-start mt-28">
              <BlockchainSpiral 
                containerSize="w-[22rem]"
                scale="scale-90"
                showConnectingLines="left-only"
              />
            </div>

            {/* Right Grid - Blockchain Spiral */}
            <div className="flex justify-center lg:justify-end -mt-20">
              <BlockchainSpiral 
                containerSize="w-[25rem]"
                scale="scale-90"
                showConnectingLines={true}
                blockchainLogos={[
                  { id: "0", title: "H", icon: hIcon, width: 52, height: 52, angle: 0 },
                  { id: "1", title: "IC", icon: icIcon, width: 52, height: 52, angle: 72 },
                  { id: "2", title: "Z", icon: zIcon, width: 52, height: 52, angle: 144 },
                  { id: "3", title: "Cervik", icon: cervikIcon, width: 52, height: 52, angle: 216 },
                  { id: "4", title: "Audit0", icon: audit0Icon, width: 52, height: 52, angle: 288 }
                ]}
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          </div>
        </div>
      </div>
    </section>
  );
}
