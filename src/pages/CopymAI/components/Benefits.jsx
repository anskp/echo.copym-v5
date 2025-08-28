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

const Benefits = () => {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-6">
              <span className="text-white">AI FEATURES</span>
              <br />
              <span className="text-green-500">OVERVIEW</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              Revolutionizing Real-World Asset Investment with AI and Blockchain Technology
            </p>
          </div>

          {/* Perfect Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-4">
            
            {/* Top Section: "Why is it Moving?" - Spans full width */}
            <div className="col-span-12 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Why is it Moving?</h3>
                <p className="text-gray-300 text-base max-w-2xl">
                  Get quick, digestible insights into market movements with COPYM-AI's concise breakdown of the factors driving asset changes.
                </p>
              </div>
              <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/50 min-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🍎</span>
                  </div>
                  <span className="text-green-400 font-semibold text-sm">is up +3.63%</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Apple shares are trading higher after the company announced its Vision Pro headset will be available in the US Feb 2.
                </p>
                <div className="flex gap-1 mt-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Middle-Left: "Handy Widgets" */}
            <div className="col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 h-auto">
              <h3 className="text-xl font-bold text-white mb-2">Handy Widgets</h3>
              <p className="text-gray-300 text-sm mb-3">
                Customize your home screen with widgets that display live portfolio data and market trends at a glance.
              </p>
              
              {/* SolCard Component */}
              <div className="scale-75 transform -m-4">
                <SolCard />
              </div>
            </div>

            {/* Middle-Center (Top): "Real-Time Alerts" */}
            <div className="col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
              <p className="text-gray-300 text-sm mb-3">
                Stay ahead with custom notifications for price changes, significant events, and end-of-day updates tailored to your portfolio.
              </p>
              
              {/* Stacked Cards Component */}
              <div className="scale-75 transform -m-6">
                <StepRectangles />
              </div>
            </div>

            {/* Middle-Right: "COPYM Direct" */}
            <div className="col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">COPYM Direct</h3>
              <p className="text-gray-300 text-sm mb-4">
                Stay connected with real-time updates and official announcements directly from companies you follow.
              </p>
              
              {/* Mobile Interface Mockup */}
              <div className="bg-gray-800/60 rounded-xl p-3 border border-gray-600/50">
                <div className="text-white font-bold mb-2 text-sm">> DIRECT</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">00</span>
                    </div>
                    <span className="text-gray-300 text-xs">Financial statement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📄</span>
                    </div>
                    <span className="text-gray-300 text-xs">Press releases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📰</span>
                    </div>
                    <span className="text-gray-300 text-xs">Company updates</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Card: "Insider Moves" & "Custom Price Alerts" */}
            <div className="col-span-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Real-Time Alerts</h3>
                  <p className="text-gray-300 text-sm">
                   Stay ahead with custom notifications for price changes, significant events, and end-of-day updates tailored to your portfolio.                  </p>
                </div>
                <div className="scale-75 transform -m-6">
                <StepRectangles />
              </div>
              </div>
            </div>

            {/* Bottom-Center: Visual for "Custom Price Alerts" */}
            <div className="col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              {/* ADBE Card */}
              <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-xl p-3 border border-gray-600/50 mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold text-sm">ADBE</span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 font-semibold text-xs">+0.90</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="text-white font-bold text-lg mb-1">$455.60</div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-xs">Adobe Inc.</span>
                  <div className="flex items-center gap-1">
                    <button className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">+</span>
                    </button>
                    <Bell className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Price Alert Notification */}
              <div className="bg-green-500/20 rounded-lg p-2 border border-green-500/30 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Δ</span>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">Price alert</div>
                </div>
                <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
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
