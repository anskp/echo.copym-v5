import React from 'react';

const LogoCarousel = () => {
  const logos = [
    { src: "/assets/svg/Fireblocks.svg", alt: "Fireblocks" },
    { src: "/assets/svg/Sumsub_idtw6qkLj7_1.svg", alt: "Sumsub" },
    { src: "/assets/blockchains/solana.png", alt: "Solana" },
    { src: "/assets/blockchains/ethereum-eth-logo.svg", alt: "Ethereum" },
  ];

  return (
    <section className="w-full bg-white border-t border-gray-200 overflow-hidden -mt-px">
      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="w-full">
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex items-center gap-8 sm:gap-10 py-3 sm:py-4"
              style={{
                width: "200%",
                animation: "logo-marquee 18s linear infinite",
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <img
                  key={`${logo.alt}-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-7 md:h-8 object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;


