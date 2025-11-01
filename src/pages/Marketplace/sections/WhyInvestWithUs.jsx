import React from "react";
import { motion } from "framer-motion";

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
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-6 uppercase dm-sans">
            <span className="text-black">WHY INVEST </span>
            <span className="text-emerald-600">WITH US?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge blockchain technology with traditional investment wisdom to create a secure, transparent, and accessible investment platform.
          </p>
        </motion.div>

        {/* Feature Cards - Exact Design */}
        <div 
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'stretch',
            padding: '40px 20px',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              width: '260px',
              height: '320px',
              borderRadius: '19px',
              border: '1px solid #7DD1B2',
              backgroundColor: '#fff',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              justifyContent: 'space-between'
            }}
            className="w-full max-w-[260px] md:w-[260px] md:h-[320px] mb-6 md:mb-0"
          >
            {/* Gradient Background - Bottom Right Corner */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle at 100% 100%, #ACE0CC 0%, #B2ECD7 20%, transparent 60%)',
              zIndex: 0,
              borderRadius: '16px 16px 16px 16px'
            }} />
            
            {/* Icon */}
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '12px' }}>
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 12L24 20" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28L24 36" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 24H32" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '8px',
              marginTop: 0,
              zIndex: 1,
              position: 'relative',
              lineHeight: '1.3'
            }} className="text-lg md:text-xl">
              Bank Grade Security
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#000',
              lineHeight: '1.5',
              margin: 0,
              zIndex: 1,
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '4px'
            }} className="text-sm md:text-sm">
              Your investments are protected with multi-layer security protocols and institutional-grade custody solutions.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              width: '260px',
              height: '320px',
              borderRadius: '19px',
              border: '1px solid #7DD1B2',
              backgroundColor: '#fff',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              justifyContent: 'space-between'
            }}
            className="w-full max-w-[260px] md:w-[260px] md:h-[320px] mb-6 md:mb-0"
          >
            {/* Gradient Background - Bottom Right Corner */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle at 100% 100%, #ACE0CC 0%, #B2ECD7 20%, transparent 60%)',
              zIndex: 0,
              borderRadius: '16px 16px 16px 16px'
            }} />

            {/* Icon */}
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '12px' }}>
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <path d="M36 36H12V20H36V36Z" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 28H16V24H20V28Z" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 32H24V28H28V32Z" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36 36H32V32H36V36Z" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 16C24 16 24 12 28 12C32 12 32 16 32 16" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 16C24 16 24 20 20 20C16 20 16 16 16 16" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '8px',
              marginTop: 0,
              zIndex: 1,
              position: 'relative',
              lineHeight: '1.3'
            }} className="text-lg md:text-xl">
              Radical Transparency
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#000',
              lineHeight: '1.5',
              margin: 0,
              zIndex: 1,
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '4px'
            }} className="text-sm md:text-sm">
              Every transaction is recorded on an immutable blockchain ledger, providing auditable proof of ownership.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              width: '260px',
              height: '320px',
              borderRadius: '19px',
              border: '1px solid #7DD1B2',
              backgroundColor: '#fff',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              justifyContent: 'space-between'
            }}
            className="w-full max-w-[260px] md:w-[260px] md:h-[320px] mb-6 md:mb-0"
          >
            {/* Gradient Background - Bottom Right Corner */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle at 100% 100%, #ACE0CC 0%, #B2ECD7 20%, transparent 60%)',
              zIndex: 0,
              borderRadius: '16px 16px 16px 16px'
            }} />

            {/* Icon */}
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '12px' }}>
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <path d="M36 12L24 24L12 12" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 24L24 36L36 24" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12H36" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 24H36" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 36H36" stroke="#7DD1B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '8px',
              marginTop: 0,
              zIndex: 1,
              position: 'relative',
              lineHeight: '1.3'
            }} className="text-lg md:text-xl">
              Enhanced Liquidity
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#000',
              lineHeight: '1.5',
              margin: 0,
              zIndex: 1,
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '4px'
            }} className="text-sm md:text-sm">
              Trade your tokenized assets on our secondary market, turning illiquid investments into flexible opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
