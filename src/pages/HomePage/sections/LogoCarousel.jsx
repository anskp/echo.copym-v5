import React from 'react';

const LogoCarousel = () => {
  const logos = [
    { src: "/assets/svg/Fireblocks.svg", alt: "Fireblocks" },
    { src: "/assets/svg/Sumsub_idtw6qkLj7_1.svg", alt: "Sumsub" },
    { src: "/assets/blockchains/solana.png", alt: "Solana" },
    { src: "/assets/blockchains/ethereum-eth-logo.svg", alt: "Ethereum" },
  ];

  // Duplicate logos multiple times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white border-t border-gray-200 overflow-hidden -mt-px">
      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
      <div className="w-full">
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex items-center py-3 sm:py-4"
              style={{
                width: "400%",
                animation: "logo-marquee 20s linear infinite",
              }}
            >
              {duplicatedLogos.map((logo, idx) => (
                <div key={`${logo.alt}-${idx}`} className="flex-shrink-0 px-8 sm:px-10">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-7 md:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Green Separator Line */}
        <div className="w-full h-1 bg-[#15a36e]"></div>
      </div>
    </section>
  );
};

export default LogoCarousel;
