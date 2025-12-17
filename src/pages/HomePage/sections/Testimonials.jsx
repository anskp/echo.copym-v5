import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Revolutionary approach to real-world asset tokenization. The compliance automation saved us months of work.",
    name: "David Kim",
    title: "Head of Digital Assets",
    company: "Golman Sachs",
    image: "/assets/Images/team/Face4.png",
  },
  {
    quote: "AI-driven portfolio optimization increased our returns by 31% while reducing risk exposure significantly.",
    name: "James Mitchell",
    title: "Chief Fund Manager",
    company: "Black Rock",
    image: "/assets/Images/team/Face2.png",
  },
  {
    quote: "Cora AI has transformed our daily market analysis. The intelligent insights and predictive alerts have increased our trading accuracy by 23% while saving us hours of research time.",
    name: "Sarah Jhonson",
    title: "Chief Investment Officer",
    company: "Global Asset Management",
    image: "/assets/Images/team/Face1.png",
  },
  {
    quote: "Cora AI's smart price alerts and portfolio insights are game-changing. The AI-powered recommendations help us make data-driven decisions across multiple blockchain networks seamlessly.",
    name: "Michael Chen",
    title: "Blockchain Director",
    company: "TechVentures Capital",
    image: "/assets/Images/team/Face2.png",
  },
  {
    quote: "Cora AI's real-time market intelligence and crypto analytics give us a significant competitive advantage. The daily market recaps and trend predictions are incredibly accurate.",
    name: "Dr. Emily Rodriguez",
    title: "Head of DeFi Strategy",
    company: "CryptoBridge Fund",
    image: "/assets/Images/team/Face3.png",
  },
];

/** Helper component rendering a single testimonial card */
function TestimonialCard({ testimonial }) {
  return (
    <motion.div 
      className="relative flex-shrink-0 overflow-hidden w-[240px] h-[260px] sm:w-[260px] sm:h-[280px] md:w-[280px] md:h-[300px]"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Rectangle */}
      <div 
        className="absolute inset-0 bg-white rounded-[28px]"
        style={{
          border: '1px solid #ECECEC'
        }}
      ></div>
      
      {/* Radial Gradient Ellipse - Positioned at right bottom corner within card */}
      <div 
        className="absolute overflow-hidden"
        style={{
          bottom: '0',
          right: '0',
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle at 100% 100%, #E5FFF5 0%, #FFFFFF 100%)',
          borderRadius: '0 0 28px 0'
        }}
      ></div>
      
      {/* Header Section - Profile Picture and Name/Title/Company */}
      <div 
        className="absolute flex items-start gap-3"
        style={{
          top: '20px',
          left: '20px',
          right: '20px',
          zIndex: 5
        }}
      >
        {/* Profile Image */}
        <div 
          className="flex-shrink-0 rounded-full overflow-hidden w-12 h-12 sm:w-14 sm:h-14"
          style={{
            width: '56px',
            height: '56px'
          }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover rounded-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '50%'
            }}
          />
        </div>
        
        {/* Name, Title, Company - Left Aligned */}
        <div className="flex-1 flex flex-col items-start">
          {/* Name */}
          <h4 
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: '24px',
              color: '#000',
              margin: 0,
              padding: 0,
              marginBottom: '2px'
            }}
          >
            {testimonial.name}
          </h4>
          
          {/* Title */}
          <p 
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              lineHeight: '20px',
              color: '#000',
              margin: 0,
              padding: 0,
              marginBottom: '2px'
            }}
          >
            {testimonial.title}
          </p>
          
          {/* Company */}
          <p 
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              lineHeight: '20px',
              color: '#15A36E',
              margin: 0,
              padding: 0
            }}
          >
            {testimonial.company}
          </p>
        </div>
      </div>
      
      {/* Quote Text - Below Header */}
      <div 
        className="absolute"
        style={{
          top: '100px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          paddingRight: '8px'
        }}
      >
        <p 
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(13px, 1.6vw, 16px)',
            lineHeight: '22px',
            color: '#000',
            margin: 0,
            padding: 0
          }}
        >
          {testimonial.quote}
        </p>
      </div>
    </motion.div>
  );
}

/** Infinite scrolling row component for train-like movement */
function InfiniteScrollingRow({ items, duration = 50 }) {
  // Duplicate items 6× to ensure seamless infinite scroll like a train
  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-6 sm:gap-8 md:gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mb-8 sm:mb-10 md:mb-12">
        <div className="text-left px-4">
          <div className="relative w-fit mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]">TRUSTED BY INDUSTRY </span>
              <span className="text-black">LEADERS</span>
            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            See what top financial professionals are saying about our AI-powered RWA tokenization platform
          </p>
        </div>
      </div>
      
      {/* Infinite Scrolling Testimonials */}
      <InfiniteScrollingRow items={testimonials} duration={50} />
    </section>
  );
}
