import React from 'react';
import { Link } from 'react-router-dom';

export default function RWAAssetsSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 mt-4 sm:mt-6 lg:mt-8 lg:mt-12 px-2">
            Tokenize Real Assets
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
        Discover a diverse portfolio of real-world assets tokenized for digital ownership.
            From precious metals to fine art, we're democratizing access to premium investments.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/marketplace"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            style={{
              borderRadius: 57,
              background: "linear-gradient(179.93deg, rgba(35,189,131,0.8) 0.13%, rgba(16,146,97,0.8) 76.14%)"
            }}
          >
            Explore Assets
          </Link>
        </div>

        {/* Asset Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* Gold and Metals Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-left hover:bg-green-50 hover:shadow-md transition-all duration-300 relative">
            {/* ROI Percentage */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              ROI +12.5%
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center">
              <img src="/assets/Images/icons/rwa1.png" alt="Gold and Metals" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Gold and Metals
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Invest in precious metals and commodities. Diversify your portfolio with gold, silver, and other valuable metals through secure digital tokens.
            </p>
          </div>

          {/* Fine Art Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-left hover:bg-blue-50 hover:shadow-md transition-all duration-300 relative">
            {/* ROI Percentage */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
              ROI +8.3%
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center">
              <img src="/assets/Images/icons/rwa2.png" alt="Fine Art" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Fine Art
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Own fractional shares of masterpieces and contemporary art. Access exclusive art collections and benefit from the appreciation of cultural assets.
            </p>
          </div>

          {/* Carbon Credit Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-left hover:bg-green-50 hover:shadow-md transition-all duration-300 relative">
            {/* ROI Percentage */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              ROI +15.7%
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center">
              <img src="/assets/Images/icons/rwa3.png" alt="Carbon Credit" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Carbon Credits
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Support environmental initiatives while earning returns. Invest in verified carbon credit projects and contribute to a sustainable future.
            </p>
          </div>

          {/* Real Estate Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-left hover:bg-blue-50 hover:shadow-md transition-all duration-300 relative">
            {/* ROI Percentage */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
              ROI +9.2%
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center">
              <img src="/assets/Images/icons/rwa4.png" alt="Real Estate" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Real Estate
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Access premium real estate investments globally. From luxury properties to commercial buildings, own fractional shares of high-value assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
