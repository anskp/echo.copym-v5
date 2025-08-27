import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Zap,
  ArrowRight
} from "lucide-react";

export default function WhyInvestWithUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern - Same as Hero Section */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Fluid Blob Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
            <span className="text-gray-900">WHY INVEST </span>
            <span className="text-green-600">WITH US?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge blockchain technology with traditional investment wisdom to create a secure, transparent, and accessible investment platform.
          </p>
        </motion.div>

        {/* Feature Cards - Inspired by CurvedSectionDivider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-teal-500 flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Security</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your investments are protected with multi-layer security protocols and institutional-grade custody solutions.
            </p>
            <button className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors duration-200">
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center mb-4 mx-auto">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Radical Transparency</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Every transaction is recorded on an immutable blockchain ledger, providing auditable proof of ownership.
            </p>
            <button className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors duration-200">
              View Details <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-blue-500 to-green-500 flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Liquidity</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Trade your tokenized assets on our secondary market, turning illiquid investments into flexible opportunities.
            </p>
            <button className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors duration-200">
              Start Trading <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
