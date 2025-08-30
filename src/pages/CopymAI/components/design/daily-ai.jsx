const DailyAI = () => {
  return (
    <svg width="320" height="60" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="320" height="60" rx="30" fill="#1a0033" stroke="#4a1b7c" strokeWidth="2"/>

      {/* Inner Card */}
      <rect x="10" y="10" width="300" height="40" rx="25" fill="#14002d" stroke="#2a184f" strokeWidth="1"/>

      {/* Left Icon - White 'S' in dark purple circle */}
      <circle cx="30" cy="30" r="15" fill="#2a184f" />
      <text x="30" y="35" fontSize="16" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle" fontWeight="bold">S</text>
      <circle cx="30" cy="30" r="13" fill="none" stroke="white" strokeWidth="1"/>

      {/* Text - Better positioned */}
      <text x="55" y="28" fontSize="14" fontFamily="Segoe UI, sans-serif" fill="white" fontWeight="600">Daily recap</text>

      {/* Progress Bar - Better positioned below text */}
      <line x1="55" y1="42" x2="240" y2="42" stroke="#4a184f" strokeWidth="3" />
      <circle cx="60" cy="42" r="4" fill="white" />

      {/* Play Button - Better positioned and sized */}
      <circle cx="285" cy="30" r="16" fill="#2a184f" />
      <path d="M278 24 L290 30 L278 36 Z" fill="white" />
    </svg>
  );
};

export default DailyAI;