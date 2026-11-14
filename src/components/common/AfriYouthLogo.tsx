import React from "react";
import Image from "next/image";

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

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Dancing Adolescent Emblem from transparent newlogo */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <Image
          src={isWhite ? "/images/newlogo-white.png" : "/images/newlogo-transparent.png"}
          alt="AfriYouth Innovation Labs Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain pointer-events-none"
          priority
        />
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
