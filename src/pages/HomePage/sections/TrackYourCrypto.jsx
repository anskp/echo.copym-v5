import React from 'react';
import { Apple, Play, Star, Smartphone, Download, QrCode } from 'lucide-react';

export default function TrackYourCrypto() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Track your Crypto. <span className="text-green-600">Anywhere.</span>
            </h2>
            <p className="text-xl text-gray-700">
              Available on all your devices. Seamlessly sync your portfolio across mobile, desktop, and web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm">
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </button>
              <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm">
                <Play className="w-5 h-5" />
                <span>Google Play</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.8/5 from 50K+ reviews</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-8">
              <div className="relative">
                <Smartphone className="w-32 h-32 text-green-600" />
                <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-2">
                  <Download className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <QrCode className="w-24 h-24 text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
