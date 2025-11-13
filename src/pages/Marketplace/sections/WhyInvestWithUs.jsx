import React from "react";
import { motion } from "framer-motion";

export default function WhyInvestWithUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 relative"
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
            flexWrap: 'wrap',
            position: 'relative'
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
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '20px', marginTop: '0' }}>
              <img 
                src="/assets/Images/icons/Marketplace2.png" 
                alt="Bank Grade Security"
                className="w-12 h-12 object-contain"
                style={{ width: '48px', height: '48px' }}
              />
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
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '20px', marginTop: '0' }}>
              <img 
                src="/assets/Images/icons/Marketplace3.png" 
                alt="Radical Transparency"
                className="w-12 h-12 object-contain"
                style={{ width: '48px', height: '48px' }}
              />
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
            <div style={{ zIndex: 1, position: 'relative', marginBottom: '20px', marginTop: '0' }}>
              <img 
                src="/assets/Images/icons/Marketplace1.png" 
                alt="Enhanced Liquidity"
                className="w-12 h-12 object-contain"
                style={{ width: '48px', height: '48px' }}
              />
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
