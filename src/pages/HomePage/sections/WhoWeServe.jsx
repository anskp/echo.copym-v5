import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 3D Bank Building Icon - Large dominant visual
function BankBuilding() {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const greenColor = new THREE.Color(0x15a36e);
  const silverColor = new THREE.Color(0xc0c0c0);

  return (
    <group ref={groupRef}>
      {/* Foundation blocks - silver */}
      {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
        <Box key={`base-${i}`} args={[0.4, 0.2, 0.4]} position={[x, -0.6, 0]}>
          <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
        </Box>
      ))}
      
      {/* Smaller foundation blocks */}
      {[-1, 0, 1].map((x, i) => (
        <Box key={`small-${i}`} args={[0.3, 0.15, 0.3]} position={[x, -0.5, 0]}>
          <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
        </Box>
      ))}

      {/* Green cubes on foundation */}
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <Box key={`cube-${i}`} args={[0.25, 0.25, 0.25]} position={[x, -0.3, 0]}>
          <meshPhysicalMaterial 
            color={greenColor} 
            transparent 
            opacity={0.6} 
            metalness={0.5} 
            roughness={0.3}
          />
        </Box>
      ))}

      {/* Main building structure - temple-like with columns */}
      {/* Base platform */}
      <Box args={[2.5, 0.3, 1.5]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
      </Box>

      {/* Columns */}
      {[-0.8, -0.3, 0.3, 0.8].map((x, i) => (
        <Cylinder key={`col-${i}`} args={[0.08, 0.08, 0.8]} position={[x, 0.3, 0]}>
          <meshPhysicalMaterial 
            color={greenColor} 
            transparent 
            opacity={0.7} 
            metalness={0.6} 
            roughness={0.3}
          />
        </Cylinder>
      ))}

      {/* Roof/top structure */}
      <Box args={[2.2, 0.2, 1.2]} position={[0, 0.6, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Box>
    </group>
  );
}

// 3D Coin + Blocks Icon for Investors
function CoinBlocks() {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const greenColor = new THREE.Color(0x15a36e);
  const silverColor = new THREE.Color(0xc0c0c0);

  return (
    <group ref={groupRef}>
      {/* Foundation platform - silver */}
      <Box args={[1.5, 0.2, 1.5]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
      </Box>

      {/* Foundation blocks - silver */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <Box key={`base-${i}`} args={[0.3, 0.15, 0.3]} position={[x, -0.4, 0]}>
          <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
        </Box>
      ))}

      {/* Green blocks around coin */}
      {[-0.5, 0.5].map((x, i) => (
        <Box key={`block-${i}`} args={[0.3, 0.3, 0.3]} position={[x, -0.2, 0]}>
          <meshPhysicalMaterial 
            color={greenColor} 
            transparent 
            opacity={0.6} 
            metalness={0.5} 
            roughness={0.3}
          />
        </Box>
      ))}

      {/* Main coin - large green cylinder */}
      <Cylinder args={[0.5, 0.5, 0.15]} position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.7} 
          metalness={0.7} 
          roughness={0.2}
        />
      </Cylinder>

      {/* Additional green blocks */}
      <Box args={[0.25, 0.25, 0.25]} position={[-0.4, 0.3, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Box>
      <Box args={[0.25, 0.25, 0.25]} position={[0.4, 0.3, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Box>
    </group>
  );
}

// 3D Globe/Sphere + Blocks Icon for Partners
function GlobeBlocks() {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const greenColor = new THREE.Color(0x15a36e);
  const silverColor = new THREE.Color(0xc0c0c0);

  return (
    <group ref={groupRef}>
      {/* Foundation pedestal - silver */}
      <Cylinder args={[0.4, 0.5, 0.3]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Foundation blocks - silver */}
      {[-0.5, 0, 0.5].map((x, i) => (
        <Box key={`base-${i}`} args={[0.3, 0.15, 0.3]} position={[x, -0.4, 0]}>
          <meshStandardMaterial color={silverColor} metalness={0.8} roughness={0.2} />
        </Box>
      ))}

      {/* Green blocks around sphere */}
      {[-0.4, 0.4].map((x, i) => (
        <Box key={`block-${i}`} args={[0.3, 0.3, 0.3]} position={[x, -0.2, 0]}>
          <meshPhysicalMaterial 
            color={greenColor} 
            transparent 
            opacity={0.6} 
            metalness={0.5} 
            roughness={0.3}
          />
        </Box>
      ))}

      {/* Main globe/sphere */}
      <Sphere args={[0.6, 32, 32]} position={[0, 0.2, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Sphere>

      {/* Additional green blocks */}
      <Box args={[0.25, 0.25, 0.25]} position={[-0.3, 0.5, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Box>
      <Box args={[0.25, 0.25, 0.25]} position={[0.3, 0.5, 0]}>
        <meshPhysicalMaterial 
          color={greenColor} 
          transparent 
          opacity={0.6} 
          metalness={0.5} 
          roughness={0.3}
        />
      </Box>
    </group>
  );
}

// 3D Icon Wrapper Component
const Icon3D = ({ children, height = 200 }) => {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ height }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        {children}
      </Canvas>
    </div>
  );
};

const WhoWeServe = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-black">WHO WE </span>
            <span className="text-[#15a36e]">SERVE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Built for the next generation of asset markets
          </p>
        </motion.div>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Card - Large (tall + wide) - Asset Owners & Institutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:row-span-2 bg-black p-6 sm:p-8 lg:p-10 border border-gray-800 min-h-[520px]"
          >
            {/* Large 3D Building Icon - Dominant Visual */}
            <div className="mb-6 sm:mb-8 h-64 sm:h-80 lg:h-[420px] flex items-center justify-center">
              <Icon3D height={420}>
                <BankBuilding />
              </Icon3D>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Asset Owners & Institutions
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Launch tokenized products with institutional-grade compliance.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Real estate, private credit, funds, commodities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  White-label portals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Reporting and secondary liquidity
                </span>
              </li>
            </ul>

            {/* Learn More Button */}
            <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-7 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Learn More
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <svg
                  className="w-4 h-4 group-hover:translate-x-[2px] transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Top-Right Card - Investors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-1 bg-black p-6 sm:p-8 border border-gray-800 min-h-[260px]"
          >
              {/* 3D Coin + Blocks Icon */}
              <div className="mb-6 sm:mb-8 h-48 sm:h-56 lg:h-64 flex items-center justify-center">
                <Icon3D height={256}>
                  <CoinBlocks />
                </Icon3D>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Investors
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Access curated RWA opportunities worldwide.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Fractional tickets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Zero-gas trades
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Dashboards & automated reinvestment
                  </span>
                </li>
              </ul>

              {/* Learn More Button */}
              <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-7 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Learn More
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  <svg
                    className="w-4 h-4 group-hover:translate-x-[2px] transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
          </motion.div>

          {/* Bottom-Right Card - Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-1 bg-black p-6 sm:p-8 border border-gray-800 min-h-[260px]"
          >
              {/* 3D Sphere + Blocks Icon */}
              <div className="mb-6 sm:mb-8 h-48 sm:h-56 lg:h-64 flex items-center justify-center">
                <Icon3D height={256}>
                  <GlobeBlocks />
                </Icon3D>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Partners
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Connect custodians, oracles and ESG data to real assets on-chain.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Custody integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Compliance providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Node operators
                  </span>
                </li>
              </ul>

              {/* Learn More Button */}
              <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-7 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Learn More
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  <svg
                    className="w-4 h-4 group-hover:translate-x-[2px] transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
