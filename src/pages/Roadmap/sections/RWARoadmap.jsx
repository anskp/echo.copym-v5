import React from 'react';
import { motion } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedIcon from '@mui/icons-material/Verified';
import TokenIcon from '@mui/icons-material/Token';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function RWARoadmap() {
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

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-emerald-500"></div>
      
      <div className="space-y-6 sm:space-y-8">
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
              <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 sm:border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
              
              {/* Card */}
              <motion.div
                className={`ml-8 sm:ml-16 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${item.borderColor} bg-gradient-to-br ${item.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <IconComponent sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Step Badge */}
                    <div className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-md mb-2 sm:mb-3`}>
                      {item.step}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{item.title}</h3>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 sm:mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${item.color}`}
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