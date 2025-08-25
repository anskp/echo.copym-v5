import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-black/50">
        Unified Access to All Major Blockchains
      </h5>
      
      {/* Rotating Coins Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* First set of coins */}
          {companyLogos.map((logo, i) => (
            <div
              key={`first-${i}`}
              className="flex-shrink-0 mx-2 md:mx-4 animate-rotate-coin"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                {/* Outer ring - thin line layer */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-300 bg-white shadow-lg"></div>
                
                {/* Inner rotating circle with SVG */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    width={32} 
                    height={32} 
                    alt={`Crypto-${i}`}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                </div>
                
                {/* Glossy effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {companyLogos.map((logo, i) => (
            <div
              key={`second-${i}`}
              className="flex-shrink-0 mx-2 md:mx-4 animate-rotate-coin"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                {/* Outer ring - thin line layer */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-300 bg-white shadow-lg"></div>
                
                {/* Inner rotating circle with SVG */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    width={32} 
                    height={32} 
                    alt={`Crypto-${i}`}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                </div>
                
                {/* Glossy effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
