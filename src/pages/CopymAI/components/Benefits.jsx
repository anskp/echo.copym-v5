import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { Shield, Lock, FileCheck, AlertCircle, ArrowRight } from 'lucide-react';

const FeatureCard = ({ benefit }) => {
  // Map benefit titles to appropriate Lucide icons
  const getIcon = (title) => {
    switch (title) {
      case "The Problem We Solve":
        return AlertCircle;
      case "AI-Powered Tokenization":
        return Shield;
      case "Integrated Marketplace":
        return Lock;
      case "AI Investment Advisor":
        return FileCheck;
      case "Smart Asset Verification":
        return Shield;
      case "Business Model":
        return AlertCircle;
      default:
        return Shield;
    }
  };

  const IconComponent = getIcon(benefit.title);

  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-4 mx-auto">
        <IconComponent className="w-6 h-6 text-green-500" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-4">{benefit.text}</p>
      <button className="inline-flex items-center text-green-400 font-semibold text-sm hover:text-green-300 transition-colors duration-200">
        Explore more <ArrowRight className="ml-1 w-4 h-4" />
      </button>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular">
              <span className="text-white">FEATURES</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              <span className="text-white">Revolutionizing Real-World Asset Investment with </span>
              <span className="text-green-500">AI and Blockchain Technology</span>
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.id}
                benefit={benefit}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
