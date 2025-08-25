import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BadgeIcon from '@mui/icons-material/Badge';
import DiamondIcon from '@mui/icons-material/Diamond';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function InvestorRoadmap() {
  const roadmapRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const roadmapData = [
    {
      id: 1,
      step: "Step 1",
      title: "Platform Access",
      description: "Secure login and access to the investment platform",
      icon: RocketLaunchIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      id: 2,
      step: "Step 2", 
      title: "KYC/AML Verification",
      description: "Complete KYC/AML verification for investment access",
      icon: BadgeIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      step: "Step 3",
      title: "Token Purchase", 
      description: "Purchase RWA tokens through the marketplace",
      icon: DiamondIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      id: 4,
      step: "Step 4",
      title: "Trading Tools",
      description: "Access advanced trading tools and analytics",
      icon: AnalyticsIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      step: "Step 5",
      title: "P2P Trading",
      description: "Engage in peer-to-peer token trading",
      icon: HandshakeIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      id: 6,
      step: "Step 6",
      title: "Portfolio Management",
      description: "Monitor portfolio performance and market trends",
      icon: TrendingUpIcon,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    }
  ];

  useEffect(() => {
    setActiveSection(0);
  }, []);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-emerald-500"></div>
      
      <div className="space-y-8">
        {roadmapData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-white border-4 border-green-500 rounded-full shadow-lg z-10"></div>
              
              {/* Card */}
              <motion.div
                className={`ml-16 p-6 rounded-2xl border-2 ${item.borderColor} bg-gradient-to-br ${item.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <IconComponent sx={{ fontSize: 24 }} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Step Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-md mb-3`}>
                      {item.step}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${((index + 1) / roadmapData.length) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}