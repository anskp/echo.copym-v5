import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { Shield, Lock, FileCheck, AlertCircle, ArrowRight, TrendingUp, Bell, Smartphone, BarChart3, DollarSign } from 'lucide-react';
import { useState } from "react";
import CoraNotification from "./design/coracard1";
import PortfolioBreakdown from "./design/coracard2";
import PortfolioEventsCard from "./design/coracard3";
import StepRectangles from "./design/stackedcora";
import SolCard from "./design/solcard";
import DailyAI from "./design/daily-ai";
import Graph from "./design/graph";

const Benefits = () => {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-black rounded-t-[1rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[1rem] sm:rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-4 sm:mb-6">
              <span className="text-white">AI FEATURES</span>
              <br />
              <span className="text-green-500">OVERVIEW</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl sm:max-w-3xl mx-auto px-4">
              Revolutionizing Real-World Asset Investment with AI and Blockchain Technology
            </p>
          </div>

          {/* Responsive Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
            
            {/* Top Section: "Why is it Moving?" - Responsive full width */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-12 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Why is it Moving?</h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-none lg:max-w-2xl">
                    Get quick, digestible insights into market movements with COPYM-AI's concise breakdown of the factors driving asset changes.
                  </p>
                </div>
                <div className="bg-gray-800/60 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-gray-600/50 w-full sm:w-auto sm:min-w-[200px] lg:min-w-[280px] flex-shrink-0">
                  <div className="scale-50 sm:scale-75 lg:scale-100 transform origin-center">
                    <DailyAI />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle-Left: "Handy Widgets" */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-700/50 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Handy Widgets</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3">
                  Customize your home screen with widgets that display live portfolio data and market trends at a glance.
                </p>
              </div>
              
              {/* SolCard Component - Responsive scaling */}
              <div className="flex justify-center items-center flex-1">
                <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transform origin-center">
                  <SolCard />
                </div>
              </div>
            </div>

            {/* Middle-Center: "Real-Time Alerts" */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3">
                  Stay ahead with custom notifications for price changes, significant events, and end-of-day updates.
                </p>
              </div>
              
              {/* PortfolioEventsCard Component - Responsive scaling */}
              <div className="flex justify-center items-center flex-1">
                <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transform origin-center">
                  <PortfolioEventsCard />
                </div>
              </div>
            </div>

            {/* Middle-Right: "COPYM Direct" */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">COPYM Direct</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  Stay connected with real-time updates and official announcements directly from companies you follow.
                </p>
              </div>
              
              {/* PortfolioBreakdown Component - Responsive scaling */}
              <div className="flex justify-center items-center flex-1">
                <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transform origin-center">
                  <PortfolioBreakdown />
                </div>
              </div>
            </div>

            {/* Bottom-Left: "Insider Moves & Custom Price Alerts" */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-7 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gray-700/50 min-h-[200px] sm:min-h-[250px] lg:min-h-[11rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 h-full">
                <div className="flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">Advanced Alerts</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Stay ahead with custom notifications for price changes, significant events, and end-of-day updates tailored to your portfolio.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transform origin-center">
                    <StepRectangles />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right: "Market Analytics" */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 min-h-[200px] sm:min-h-[250px] lg:min-h-[11rem] flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">Market Analytics</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  Real-time market data visualization with cryptocurrency performance tracking.
                </p>
              </div>
              <div className="flex justify-center items-center flex-1">
                <div className="scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100 transform origin-center">
                  <Graph />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
