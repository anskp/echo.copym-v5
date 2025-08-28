const DailyAI = () => {
  return (
    <svg width="320" height="60" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="320" height="60" rx="30" fill="#1a0033" stroke="#4a1b7c" strokeWidth="2"/>

      {/* Inner Card */}
      <rect x="10" y="10" width="300" height="40" rx="25" fill="#14002d" stroke="#2a184f" strokeWidth="1"/>

      {/* Currency Icons */}
      <circle cx="25" cy="25" r="12" fill="#2a184f" />
      <text x="25" y="30" fontSize="12" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle" fontWeight="bold">€</text>
      <circle cx="25" cy="25" r="10" fill="none" stroke="white" strokeWidth="1"/>
      <circle cx="25" cy="25" r="8" fill="#2a184f" />
      <text x="25" y="29" fontSize="10" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle">$</text>

      {/* Text */}
      <text x="50" y="30" fontSize="14" fontFamily="Segoe UI, sans-serif" fill="white" fontWeight="600">Daily recap</text>

      {/* Progress Bar - With more space and shifted left */}
      <line x1="55" y1="40" x2="235" y2="40" stroke="#4a184f" strokeWidth="3" />
      <circle cx="55" cy="40" r="4" fill="white" />

      {/* Play Button */}
      <circle cx="280" cy="30" r="15" fill="#2a184f" />
      <path d="M275 25 L285 30 L275 35 Z" fill="white" />
    </svg>
  );
};

export default DailyAI;