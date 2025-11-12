import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  return (
    <section className="relative w-full bg-white py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-8 lg:mb-10"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <span className="text-black">OWN. </span>
          <span className="text-[#15a36e]">EARN</span>
          <span className="text-black">. EXPLORE. </span>
          <span className="text-[#15a36e]">TRADE</span>
          <span className="text-black">.</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {/* Card 1 - Own a piece of big Investment (Top Left - Larger) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[29px] border-2 border-[#e4e4e4] shadow-[4px_4px_4px_-1px_rgba(216,198,198,0.25)] overflow-hidden"
            style={{ minHeight: '320px' }}
          >
            {/* Decorative Gradient Header */}
            <div className="absolute top-0 left-0 right-0 h-[140px] rounded-t-[30px] bg-gradient-to-b from-white to-[#f9f9f9] z-10 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Stack Image - Candlestick Charts */}
                <img
                  src="/assets/Images/icons/Stack2.png"
                  alt="Trading charts"
                  className="absolute inset-0 w-full h-full object-contain object-center z-20"
                  style={{ padding: '10px' }}
                />
                {/* SVG Decorative Background - Circular Pattern */}
                <svg
                  width="100%"
                  height="140"
                  viewBox="0 0 874 179"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 z-10"
                  preserveAspectRatio="none"
                >
                <mask
                  id="mask0_784_936"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={874}
                  height={179}
                >
                  <path
                    d="M0 30C0 13.4315 13.4315 0 30 0H844C860.569 0 874 13.4315 874 30V179H0V30Z"
                    fill="url(#paint0_linear_784_936)"
                  />
                </mask>
                <g mask="url(#mask0_784_936)">
                  <circle cx={452} cy={90} r={477} fill="url(#paint1_radial_784_936)" />
                  <circle cx="462.422" cy="71.6544" r="422.953" fill="url(#paint2_radial_784_936)" />
                  <circle cx="443.077" cy="89.9984" r="448.241" fill="url(#paint3_radial_784_936)" />
                  <circle cx="443.579" cy="90.4965" r="406.095" fill="url(#paint4_radial_784_936)" />
                  <circle cx="462.403" cy="109.339" r="428.903" fill="url(#paint5_radial_784_936)" />
                  <circle cx="462.92" cy="109.836" r="388.74" fill="url(#paint6_radial_784_936)" />
                  <circle cx="462.414" cy="109.339" r="346.594" fill="url(#paint7_radial_784_936)" />
                  <circle cx="451.489" cy="109.337" r="291.059" fill="url(#paint8_radial_784_936)" />
                  <circle cx="451.499" cy="109.339" r="240.483" fill="url(#paint9_radial_784_936)" />
                  <ellipse
                    cx="451.009"
                    cy="109.338"
                    rx="167.595"
                    ry="168.09"
                    fill="url(#paint10_radial_784_936)"
                  />
                  <circle cx="451.514" cy="109.337" r="102.639" fill="url(#paint11_radial_784_936)" />
                  <ellipse
                    cx="451.265"
                    cy="109.258"
                    rx="65.9208"
                    ry="65.1801"
                    fill="url(#paint12_radial_784_936)"
                  />
                  <ellipse
                    cx="451.995"
                    cy="108.518"
                    rx="29.6273"
                    ry="28.8866"
                    fill="url(#paint13_radial_784_936)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_784_936"
                    x1={437}
                    y1={0}
                    x2={437}
                    y2={179}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#F9F9F9" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(452 90) rotate(90) scale(477)"
                  >
                    <stop offset="0.677885" stopColor="white" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(462.422 71.6544) rotate(90) scale(422.953)"
                  >
                    <stop offset="0.677885" stopColor="white" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(443.077 89.9984) rotate(90) scale(448.241)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(443.579 90.4965) rotate(90) scale(406.095)"
                  >
                    <stop offset="0.677885" stopColor="white" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint5_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(462.403 109.339) rotate(90) scale(428.903)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(462.92 109.836) rotate(90) scale(388.74)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint7_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(462.414 109.339) rotate(90) scale(346.594)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint8_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.489 109.337) rotate(90) scale(291.059)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint9_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.499 109.339) rotate(90) scale(240.483)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint10_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.009 109.338) rotate(90) scale(168.09 167.595)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint11_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.514 109.337) rotate(90) scale(102.639)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint12_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.265 109.258) rotate(90) scale(65.1801 65.9208)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                  <radialGradient
                    id="paint13_radial_784_936"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.995 108.518) rotate(90) scale(28.8866 29.6273)"
                  >
                    <stop offset="0.677885" stopColor="#FFFBFB" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </radialGradient>
                </defs>
              </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 pt-[160px] px-4 sm:px-5 pb-4 sm:pb-5">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Own a piece of big Investment
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-black leading-relaxed">
                Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small
                amounts and own a piece of high-value assets you actually care about.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Trade anytime, anywhere (Top Right - Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[29px] border-2 border-[#e4e4e4] shadow-[4px_4px_4px_-1px_rgba(216,198,198,0.25)] overflow-hidden"
            style={{ minHeight: '320px' }}
          >
            {/* Decorative Gradient Header */}
            <div className="absolute top-0 left-0 right-0 h-[140px] rounded-t-[30px] bg-gradient-to-b from-white to-[#f9f9f9] z-10 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Stack Image - Dollar Sign Coins */}
                <img
                  src="/assets/Images/icons/Stack1.png"
                  alt="Investment coins"
                  className="absolute inset-0 w-full h-full object-contain object-center z-20"
                  style={{ padding: '10px' }}
                />
                {/* SVG Decorative Background - Vertical Lines Pattern */}
                <svg
                width="100%"
                height="140"
                viewBox="0 0 521 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-10"
                preserveAspectRatio="none"
              >
                <mask
                  id="mask0_784_952"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={521}
                  height={179}
                >
                  <path
                    d="M0 30C0 13.4315 13.4315 0 30 0H491C507.569 0 521 13.4315 521 30V179H0V30Z"
                    fill="url(#paint0_linear_784_952)"
                  />
                </mask>
                <g mask="url(#mask0_784_952)">
                  <rect x="-6.25" y={-157} width="36.7622" height={647} fill="url(#paint1_radial_784_952)" />
                  <rect x="30.5234" y={-157} width="36.2215" height={647} fill="url(#paint2_radial_784_952)" />
                  <rect x="66.7344" y={-157} width="36.7622" height={647} fill="url(#paint3_radial_784_952)" />
                  <rect x="103.508" y={-157} width="36.7622" height={647} fill="url(#paint4_radial_784_952)" />
                  <rect x="140.258" y={-157} width="36.7622" height={647} fill="url(#paint5_radial_784_952)" />
                  <rect x="177.023" y={-157} width="36.2215" height={647} fill="url(#paint6_radial_784_952)" />
                  <rect x="213.242" y={-157} width="36.7622" height={647} fill="url(#paint7_radial_784_952)" />
                  <rect x="249.992" y={-157} width="36.7622" height={647} fill="url(#paint8_radial_784_952)" />
                  <rect x="286.766" y={-157} width="36.7622" height={647} fill="url(#paint9_radial_784_952)" />
                  <rect x="323.516" y={-157} width="36.2215" height={647} fill="url(#paint10_radial_784_952)" />
                  <rect x="359.75" y={-157} width="36.7622" height={647} fill="url(#paint11_radial_784_952)" />
                  <rect x="396.5" y={-157} width="36.7622" height={647} fill="url(#paint12_radial_784_952)" />
                  <rect x="433.266" y={-157} width="36.7622" height={647} fill="url(#paint13_radial_784_952)" />
                  <rect x="470.023" y={-157} width="36.2215" height={647} fill="url(#paint14_radial_784_952)" />
                  <rect x="506.234" y={-157} width="36.7622" height={647} fill="url(#paint15_radial_784_952)" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_784_952"
                    x1="260.5"
                    y1={0}
                    x2="260.5"
                    y2={179}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#F9F9F9" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.1311 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(48.6342 166.5) rotate(90) scale(323.5 18.1108)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(85.1155 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(121.889 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint5_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(158.639 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(195.134 166.5) rotate(90) scale(323.5 18.1108)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint7_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(231.623 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint8_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(268.373 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint9_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(305.147 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint10_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(341.626 166.5) rotate(90) scale(323.5 18.1108)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint11_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(378.131 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint12_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(414.881 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint13_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(451.647 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint14_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(488.134 166.5) rotate(90) scale(323.5 18.1108)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint15_radial_784_952"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(524.615 166.5) rotate(90) scale(323.5 18.3811)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 pt-[160px] px-4 sm:px-5 pb-4 sm:pb-5">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Trade anytime, anywhere
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-black leading-relaxed">
                Want out ? Sell instantly. Want in ? Buy in seconds. With your built-in wallet, you can manage
                and trade smoothly—just like sending money to a friend.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Earn without a hassle (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[29px] border-2 border-[#e4e4e4] shadow-[4px_4px_4px_-1px_rgba(216,198,198,0.25)] overflow-hidden"
            style={{ minHeight: '320px' }}
          >
            {/* Decorative Gradient Header */}
            <div className="absolute top-0 left-0 right-0 h-[140px] rounded-t-[30px] bg-gradient-to-b from-white to-[#f9f9f9] z-10 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Stack Image - Growth Graph */}
                <img
                  src="/assets/Images/icons/Stack3.png"
                  alt="Growth graph"
                  className="absolute inset-0 w-full h-full object-contain object-center z-20"
                  style={{ padding: '10px' }}
                />
                {/* SVG Decorative Background - Concentric Squares Pattern */}
                <svg
                width="100%"
                height="140"
                viewBox="0 0 714 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-10"
                preserveAspectRatio="none"
              >
                <mask
                  id="mask0_784_981"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={714}
                  height={179}
                >
                  <path
                    d="M0 30C0 13.4315 13.4315 0 30 0H684C700.569 0 714 13.4315 714 30V179H0V30Z"
                    fill="url(#paint0_linear_784_981)"
                  />
                </mask>
                <g mask="url(#mask0_784_981)">
                  <path d="M0 -313H714V492H0V-313Z" fill="url(#paint1_radial_784_981)" />
                  <path d="M27.0391 -283H688.966V464H27.0391V-283Z" fill="url(#paint2_radial_784_981)" />
                  <path d="M56.0703 -248H656.912V429H56.0703V-248Z" fill="url(#paint3_radial_784_981)" />
                  <path d="M102.141 -198H611.855V377H102.141V-198Z" fill="url(#paint4_radial_784_981)" />
                  <path d="M135.188 -160H578.809V339H135.188V-160Z" fill="url(#paint5_radial_784_981)" />
                  <path d="M178.258 -118H537.761V297H178.258V-118Z" fill="url(#paint6_radial_784_981)" />
                  <path d="M230.32 -56H483.675V235H230.32V-56Z" fill="url(#paint7_radial_784_981)" />
                  <path d="M275.383 -4H438.611V183H275.383V-4Z" fill="url(#paint8_radial_784_981)" />
                  <path d="M312.438 39H403.565V143H312.438V39Z" fill="url(#paint9_radial_784_981)" />
                  <path d="M340.477 71H374.524V110H340.477V71Z" fill="url(#paint10_radial_784_981)" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_784_981"
                    x1={357}
                    y1={0}
                    x2={357}
                    y2={179}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#F9F9F9" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(357 89.5) rotate(90) scale(449.352 398.556)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(358.003 90.5) rotate(90) scale(416.976 369.488)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(356.491 90.5) rotate(90) scale(377.902 335.39)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(356.998 89.5) rotate(90) scale(320.966 284.523)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint5_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(356.998 89.5) rotate(90) scale(278.542 247.63)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(358.01 89.5) rotate(90) scale(231.653 200.675)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint7_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(356.998 89.5) rotate(90) scale(162.437 141.423)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint8_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(356.997 89.5) rotate(90) scale(104.384 91.1144)"
                  >
                    <stop offset="0.677885" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint9_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(358.001 91) rotate(90) scale(58.0529 50.8675)"
                  >
                    <stop offset="0.430738" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                  <radialGradient
                    id="paint10_radial_784_981"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(357.5 90.5) rotate(90) scale(21.7698 19.0055)"
                  >
                    <stop offset="0.430738" stopColor="#F8F8F8" />
                    <stop offset={1} stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 pt-[160px] px-4 sm:px-5 pb-4 sm:pb-5">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Earn without a hassle
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-black leading-relaxed">
                Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing
                in steady returns—without the stress of paperwork or management.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Explore a world of assets (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[29px] border-2 border-[#e4e4e4] shadow-[4px_4px_4px_-1px_rgba(216,198,198,0.25)] overflow-hidden"
            style={{ minHeight: '320px' }}
          >
            {/* Decorative Gradient Header */}
            <div className="absolute top-0 left-0 right-0 h-[140px] rounded-t-[30px] bg-gradient-to-b from-white to-[#f9f9f9] z-10 overflow-hidden">
              <div className="relative w-full h-full">
                {/* Stack Image - Globe with Assets */}
                <img
                  src="/assets/Images/icons/Stack4.png"
                  alt="Global assets"
                  className="absolute inset-0 w-full h-full object-contain object-center z-20"
                  style={{ padding: '10px' }}
                />
                {/* SVG Decorative Background - Horizontal Lines Pattern */}
                <svg
                width="100%"
                height="140"
                viewBox="0 0 689 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-10"
                preserveAspectRatio="none"
              >
                <mask
                  id="mask0_784_995"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={689}
                  height={179}
                >
                  <path
                    d="M0 30C0 13.4315 13.4315 0 30 0H659C675.569 0 689 13.4315 689 30V179H0V30Z"
                    fill="url(#paint0_linear_784_995)"
                  />
                </mask>
                <g mask="url(#mask0_784_995)">
                  <path
                    d="M728.617 -23V14.3891H-14.4996V-23H728.617Z"
                    fill="url(#paint1_linear_784_995)"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M728.617 14.3867V51.7758H-14.4996V14.3867H728.617Z"
                    fill="url(#paint2_linear_784_995)"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M728.617 51.7734V88.6127H-14.4996V51.7734H728.617Z"
                    fill="url(#paint3_linear_784_995)"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M728.617 88.6108V126H-14.4996V88.6108H728.617Z"
                    fill="url(#paint4_linear_784_995)"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M728.617 125.998V163.387H-14.4996V125.998H728.617Z"
                    fill="url(#paint5_linear_784_995)"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M728.617 163.385V200.774H-14.4996V163.385H728.617Z"
                    fill="url(#paint6_linear_784_995)"
                    fillOpacity="0.7"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_784_995"
                    x1="344.5"
                    y1={0}
                    x2="344.5"
                    y2={179}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="#F9F9F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_784_995"
                    x1="357.059"
                    y1="14.3891"
                    x2="357.055"
                    y2="-22.216"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_784_995"
                    x1="357.059"
                    y1="51.7758"
                    x2="357.055"
                    y2="15.1707"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_784_995"
                    x1="357.059"
                    y1="88.6127"
                    x2="357.055"
                    y2="52.5459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_784_995"
                    x1="357.059"
                    y1={126}
                    x2="357.055"
                    y2="89.3948"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_784_995"
                    x1="357.059"
                    y1="163.387"
                    x2="357.055"
                    y2="126.782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_784_995"
                    x1="357.059"
                    y1="200.774"
                    x2="357.055"
                    y2="164.169"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.634371" stopColor="white" />
                    <stop offset={1} stopColor="#F6F6F6" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 pt-[160px] px-4 sm:px-5 pb-4 sm:pb-5">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">
                Explore a world of assets
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-black leading-relaxed">
                From property and gold to private equity and art—our AI picks out smart opportunities so you
                don't have to dig through endless research.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

