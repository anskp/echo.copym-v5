import React from 'react';

const investorGroups = [
  { name: 'Institutional', value: 45, color: '#3B82F6' },
  { name: 'Retail', value: 30, color: '#10B981' },
  { name: 'Accredited', value: 25, color: '#F59E0B' }
];

export default function IssuerSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header - Original */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'palanquin, sans-serif' }}>
            <span className="text-[#15a36e]">TOKENIZE</span> REAL ASSETS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl mx-auto" style={{ fontFamily: 'palanquin, sans-serif' }}>
            Digitizing real assets on blockchain
          </p>
        </div>

        {/* Grid Layout - Same as WhoWeServe: lg:grid-cols-7 with 3 left, 4 right split */}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-3 sm:gap-4 lg:gap-x-4 lg:gap-y-4">

          {/* Left Card - Full Height (3 columns, 2 rows) */}
          <div className="lg:col-span-3 lg:row-span-2 bg-black p-6 sm:p-8 flex flex-col justify-between">
            {/* Image at top */}
            <div className="flex justify-center mb-6 sm:mb-8 flex-1 items-center">
              <img
                src="/assets/Images/3cubes.png"
                alt="Tokenization"
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>

            {/* Text at bottom */}
            <div className="text-left">
              <h3
                className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                We can Tokenize any assets
              </h3>
              <p
                className="text-white/80 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Transform any real-world asset into digital tokens with our secure blockchain platform
              </p>
            </div>
          </div>

          {/* Top Right Card (4 columns, 1 row) */}
          <div className="lg:col-span-4 lg:row-span-1 bg-black p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {/* Text on left */}
            <div className="flex-1 text-left">
              <h3
                className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                One simple token management interface
              </h3>

              {/* Payment fields */}
              <div className="space-y-3">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white/70 text-sm">Payment Amount</span>
                  <span className="text-[#15a36e] font-semibold text-sm">123 USDC</span>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-white/70 text-sm">Transfers</span>
                  <span className="text-[#15a36e] font-semibold text-sm">123 USDC</span>
                </div>
              </div>
            </div>

            {/* Image on right */}
            <div className="flex justify-end items-center">
              <img
                src="/assets/Images/coin.png"
                alt="Token Management"
                className="w-32 sm:w-40 md:w-48 h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Right Card (4 columns, 1 row) */}
          <div className="lg:col-span-4 lg:row-span-1 bg-black p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {/* Image on left */}
            <div className="flex justify-start items-center flex-shrink-0">
              <img
                src="/assets/Images/globe.png"
                alt="Global Distribution"
                className="w-40 sm:w-48 md:w-56 h-auto object-contain"
              />
            </div>

            {/* Text on right */}
            <div className="flex-1 text-left">
              <h3
                className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                We can Tokenize any assets
              </h3>
              <p
                className="text-white/80 text-sm sm:text-base leading-relaxed mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Transform any real-world asset into digital tokens with our secure blockchain platform
              </p>

              {/* Investor groups */}
              <div className="space-y-2">
                {investorGroups.map((group) => (
                  <div key={group.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: group.color }}
                      ></div>
                      <span className="text-white text-sm">{group.name}</span>
                    </div>
                    <span className="text-[#15a36e] font-semibold text-sm">{group.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}