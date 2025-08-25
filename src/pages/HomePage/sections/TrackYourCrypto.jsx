import React from 'react';
import { Apple, Play, Star, Download, QrCode, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrackYourCrypto() {
  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Hologram Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-cyan-400/30 rounded-3xl blur-xl transform scale-110 -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-300/20 via-blue-400/15 to-cyan-300/20 rounded-3xl blur-lg transform scale-105 rotate-3"></div>
              
              {/* Main Phone Mockup */}
              <div className="relative">
                <img 
                  src="/assets/Images/newmock1.png" 
                  alt="Copym App Interface" 
                  className="w-96 lg:w-[500px] xl:w-[600px] h-auto drop-shadow-2xl relative z-10"
                />
                {/* Download Badge */}
                <div className="absolute -bottom-6 -right-6 bg-green-500 rounded-full p-4 shadow-xl hover:bg-green-600 transition-colors duration-300 z-20">
                  <Download className="w-7 h-7 text-white" />
                </div>
              </div>
              
              {/* QR Code Card */}
              <div className="absolute -top-10 -right-10 bg-white p-5 rounded-xl shadow-2xl border border-gray-100 z-20">
                <QrCode className="w-20 h-20 text-gray-900" />
                <p className="text-sm text-gray-600 mt-3 text-center font-medium">Scan to download</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Marketing Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Track your Assets. <span className="text-green-600">Anywhere.</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stay connected to your portfolio across all your devices. Copym is available on iOS, Android, Windows, and Mac, so you can track every move, get insights, and stay ahead — wherever you are.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-6">
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* Marketplace Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Rating and Trust */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Rated 4.5 in app stores</span>
              </div>
              <div className="text-gray-600 font-medium">
                Trusted by 5 Million+ users
              </div>
            </div>
            
            {/* Platform Availability */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Apple className="w-4 h-4" />
                <span>iOS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
