import React from 'react';
import { motion } from 'framer-motion';
import { 
  GiPalette, 
  GiArrowDunk,
  GiLockedChest, 
  GiRoundStar, 
  GiShield, 
  GiTreasureMap,
  GiCoins,
  GiHouse,
  GiGlobe
} from 'react-icons/gi';
import Silk from '../../../components/Silk';

export default function RWAAssetsSection() {
  return (
    <section className="relative py-16 bg-blue-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Outside Container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anton-regular mb-6">
            Tokenize <span className="text-emerald-600">Real Assets</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
          </p>
        </div>

        <motion.div 
          className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-emerald-500/30 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                     {/* Silk Background */}
           <div className="absolute inset-0 opacity-15">
             <Silk
               speed={2}
               scale={1.5}
               color="#ffffff"
               noiseIntensity={0.8}
               rotation={0.1}
             />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
             {/* Left Side - Content */}
             <div className="space-y-8">
               {/* Premium Badge */}
               <div className="flex items-center gap-4">
                                   <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <GiLockedChest size={28} className="text-white drop-shadow-lg" />
                  </div>
                 <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                   <span className="text-sm font-semibold text-white">Real World Assets</span>
                 </div>
               </div>
               
               {/* Content Description */}
               <div>
                 <p className="text-lg text-white/90 leading-relaxed font-light">
                   Discover a diverse portfolio of real-world assets tokenized for digital ownership. From precious metals to fine art, we're democratizing access to premium investments.
                 </p>
               </div>
               
               {/* Premium CTA */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                 <button className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center gap-3 backdrop-blur-sm border border-white/20">
                   Explore Assets
                   <GiArrowDunk className="ml-2 h-5 w-5" />
                 </button>
                 <div className="flex items-center gap-3 text-white/70">
                   <span className="text-sm">Gold</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Art</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Carbon</span>
                   <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                   <span className="text-sm">Real Estate</span>
                 </div>
               </div>
             </div>
             
             {/* Right Side - Premium Asset Cards */}
             <div className="grid grid-cols-2 gap-6">
               <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                   <GiCoins size={40} className="text-white drop-shadow-lg" />
                 </div>
                 <p className="font-semibold text-white">Gold & Metals</p>
               </div>
               
               <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                   <GiPalette size={40} className="text-white drop-shadow-lg" />
                 </div>
                 <p className="font-semibold text-white">Fine Art</p>
               </div>
               
                                                               <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                   <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                     <GiGlobe size={40} className="text-white drop-shadow-lg" />
                   </div>
                   <p className="font-semibold text-white">Carbon Credits</p>
                 </div>
               
               <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                 <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                   <GiHouse size={40} className="text-white drop-shadow-lg" />
                 </div>
                 <p className="font-semibold text-white">Real Estate</p>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
