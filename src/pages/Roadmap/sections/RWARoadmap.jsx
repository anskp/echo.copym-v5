import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedIcon from '@mui/icons-material/Verified';
import TokenIcon from '@mui/icons-material/Token';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function RWARoadmap() {
  const roadmapRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const roadmapData = [
    {
      id: 1,
      step: "Step 1",
      title: "Platform Registration",
      description: "Secure login and access to the tokenization platform",
      icon: LockIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      step: "Step 2", 
      title: "KYC/AML Verification",
      description: "Complete KYC/AML verification process",
      icon: VerifiedIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      step: "Step 3",
      title: "Asset Tokenization", 
      description: "Convert real-world assets into digital tokens",
      icon: TokenIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: 4,
      step: "Step 4",
      title: "Network Selection",
      description: "Choose the optimal blockchain network",
      icon: LanguageIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: 5,
      step: "Step 5",
      title: "Token Standards",
      description: "Select appropriate token standards (ERC-20, ERC-721, etc.)",
      icon: AssignmentIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: 6,
      step: "Step 6",
      title: "Marketplace Listing",
      description: "List tokens on the marketplace for trading",
      icon: TrendingUpIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    }
  ];

  useEffect(() => {
    setActiveSection(0);
  }, []);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-emerald-500"></div>
      
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
              <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
              
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