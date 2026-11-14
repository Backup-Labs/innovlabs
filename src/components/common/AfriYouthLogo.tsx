import React from "react";

interface AfriYouthLogoProps {
  variant?: "gradient" | "white" | "dark";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
}

export const AfriYouthLogo: React.FC<AfriYouthLogoProps> = ({
  variant = "gradient",
  showText = true,
  size = "md",
  className = "",
  showTagline = false,
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const isWhite = variant === "white";
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Dancing Adolescent Emblem */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="afriYouthGrad" x1="10" y1="5" x2="95" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C723DF" />
              <stop offset="55%" stopColor="#0301FF" />
              <stop offset="100%" stopColor="#0200A7" />
            </linearGradient>
          </defs>

          {/* 3 Radiant Rays */}
          <rect
            x="20"
            y="14"
            width="6"
            height="13"
            rx="3"
            transform="rotate(-35 23 20.5)"
            fill={isWhite ? "#FFFFFF" : isDark ? "#0D0624" : "url(#afriYouthGrad)"}
          />
          <rect
            x="47"
            y="7"
            width="6"
            height="14"
            rx="3"
            fill={isWhite ? "#FFFFFF" : isDark ? "#0D0624" : "url(#afriYouthGrad)"}
          />
          <rect
            x="74"
            y="14"
            width="6"
            height="13"
            rx="3"
            transform="rotate(35 77 20.5)"
            fill={isWhite ? "#FFFFFF" : isDark ? "#0D0624" : "url(#afriYouthGrad)"}
          />

          {/* Head Circle */}
          <circle
            cx="50"
            cy="36"
            r="11"
            fill={isWhite ? "#FFFFFF" : isDark ? "#0D0624" : "url(#afriYouthGrad)"}
          />

          {/* Dancing Adolescent Torso with Raised Celebration Arm */}
          <path
            d="M 43 51 C 47 52 53 52 57 51 C 65 54 73 60 76 69 C 78 79 73 92 65 103 C 60 110 54 116 49 119 C 47 120 45 119 46 116 C 50 104 51 94 49 84 C 47 75 41 70 32 67 C 23 64 16 57 18 51 C 20 45 28 47 34 54 C 37 57 40 56 43 51 Z"
            fill={isWhite ? "#FFFFFF" : isDark ? "#0D0624" : "url(#afriYouthGrad)"}
            transform="matrix(0.8 0 0 0.8 10 9)"
          />
        </svg>
      </div>

      {/* Typography: AfriYouth Innovation Labs */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span
              className={`font-sans font-bold tracking-tight text-[19px] sm:text-[21px] ${
                isWhite ? "!text-white text-[#FFFFFF]" : "text-[#0D0624]"
              }`}
            >
              Afri<span className={isWhite ? "!text-white text-[#FFFFFF]" : "text-[#0301FF]"}>Youth</span>
            </span>
          </div>
          {showTagline && (
            <span
              className={`text-[9.5px] sm:text-[10px] tracking-tight font-medium mt-1 font-sans ${
                isWhite ? "!text-white/80" : "text-gray-500"
              }`}
            >
              Fueling Innovators for Sustainable Development
            </span>
          )}
        </div>
      )}
    </div>
  );
};
