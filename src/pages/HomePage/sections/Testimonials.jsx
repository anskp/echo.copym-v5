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
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: '320px',
        height: '340px'
      }}
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
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle at 100% 100%, #E5FFF5 0%, #FFFFFF 100%)',
          borderRadius: '0 0 28px 0'
        }}
      ></div>
      
      {/* Header Section - Profile Picture and Name/Title/Company */}
      <div 
        className="absolute flex items-start gap-3"
        style={{
          top: '24px',
          left: '24px',
          right: '24px',
          zIndex: 5
        }}
      >
        {/* Profile Image */}
        <div 
          className="flex-shrink-0 rounded-full overflow-hidden"
          style={{
            width: '64px',
            height: '64px'
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
              fontFamily: 'Palanquin, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#000',
              margin: 0,
              padding: 0,
              marginBottom: '3px'
            }}
          >
            {testimonial.name}
          </h4>
          
          {/* Title */}
          <p 
            style={{
              fontFamily: 'Palanquin, sans-serif',
              fontSize: '16px',
              lineHeight: '22px',
              color: '#000',
              margin: 0,
              padding: 0,
              marginBottom: '3px'
            }}
          >
            {testimonial.title}
          </p>
          
          {/* Company */}
          <p 
            style={{
              fontFamily: 'Palanquin, sans-serif',
              fontSize: '16px',
              lineHeight: '22px',
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
          top: '110px',
          left: '24px',
          right: '24px',
          bottom: '24px',
          paddingRight: '8px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Palanquin, sans-serif',
            fontSize: '18px',
            lineHeight: '28px',
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
        className="flex gap-6"
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
    <section className="relative py-20">
      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dm-sans ">
            <span className="text-gray-900">Trusted by Industry </span>
            <span className="text-emerald-600">Leaders</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            See what top financial professionals are saying about our AI-powered RWA tokenization platform
          </p>
        </div>
      </div>
      
      {/* Infinite Scrolling Testimonials */}
      <InfiniteScrollingRow items={testimonials} duration={50} />
    </section>
  );
}
