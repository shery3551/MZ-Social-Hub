import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 40 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Stylized M */}
        <path
          d="M20 75V25L45 55L70 25V75"
          stroke="url(#logoGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(-5, 50, 50)"
          className="animate-pulse"
        />
        
        {/* Stylized Z - integrated with M */}
        <path
          d="M30 30H70L30 70H70"
          stroke="url(#logoGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
          transform="translate(5, 5) rotate(-5, 50, 50)"
        />

        {/* Network/Signal Element */}
        <circle cx="85" cy="20" r="4" fill="#EC4899" />
        <path
          d="M75 30C80 25 85 25 90 30"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M70 35C80 25 90 25 100 35"
          stroke="#EC4899"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Spark/Lightning */}
        <path
          d="M15 15L25 25M10 25L20 20"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-black tracking-tighter italic transform -skew-x-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        MZ SOCIAL HUB
      </span>
    </div>
  );
};
