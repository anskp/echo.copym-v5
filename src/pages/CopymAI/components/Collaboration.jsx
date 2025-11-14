import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "./Section";
import BitcoinIcon from "../assets/Bitcoin.png";
import video3d from "../assets/3video.mp4";

const Collaboration = () => {
  const controls = useAnimation();
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const features = [
    {
      title: "INSTANT ASSET DIGITIZATION",
      copy:
        "Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.",
    },
    {
      title: "COMPLIANCE ON AUTOPILOT",
      copy:
        "AI-driven KYC/AML that works 24/7. Automatic FATF, SEC, and global regulatory compliance with zero human intervention.",
    },
    {
      title: "FORTRESS-LEVEL COMPLIANCE.",
      copy:
        "Transform real estate, commodities, and securities into blockchain tokens in minutes. Native integration with Ethereum, Polygon, Solana, and Avalanche.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="relative isolate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative">
          {/* Centered Header Section */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight dm-sans uppercase"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-emerald-500">CORA AI </span>
              <span className="text-white">POWERS YOUR TRADING</span>
            </motion.h2>
            <motion.p
              className="mt-3 text-lg sm:text-xl text-white font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Tokenize Anytime. Anywhere
            </motion.p>
            <motion.p
              className="mt-5 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Enterprise-grade platform that transforms real-world assets into digital tokens, connecting traditional finance with blockchain technology for enhanced liquidity, regulatory compliance, and institutional security.
            </motion.p>
          </motion.div>

          {/* Content with Features and Video */}
          <div className="relative flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            {/* Copy Block */}
            <div className="flex-1 w-full">
              <div className="max-w-2xl">
                <motion.div
                  ref={ref}
                  className="mt-10 space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {features.map(({ title, copy }) => (
                    <motion.div
                      key={title}
                      variants={itemVariants}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center "
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={BitcoinIcon}
                          alt="Cora AI feature"
                          className="h-8 w-8 object-contain"
                        />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-[0.08em] text-white">
                          {title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                          {copy}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Visual */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
                <motion.div
                  className="absolute -right-12 top-10 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -left-16 bottom-10 h-32 w-32 rounded-full bg-emerald-500/30 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-black to-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                  whileHover={{ scale: 1.02, boxShadow: "0_40px_120px_rgba(21,163,110,0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <video
                    ref={videoRef}
                    src={video3d}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Video failed to load:", e);
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-emerald-500/15" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
