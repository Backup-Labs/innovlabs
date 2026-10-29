import React from "react";

interface PartnerLogoProps {
  id: string;
  name: string;
  className?: string;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ id, name, className = "" }) => {
  switch (id) {
    case "African Union Youth Division":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* African Union Emblem */}
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <circle cx="50" cy="50" r="46" stroke="#007A3D" strokeWidth="4" />
            <circle cx="50" cy="50" r="38" fill="#F4F4F6" stroke="#DAAA00" strokeWidth="2" />
            {/* Africa continent shape representation */}
            <path
              d="M48 24 C54 24 58 28 62 33 C66 38 68 44 65 52 C62 58 58 64 54 72 C51 77 48 78 46 73 C42 66 37 58 35 50 C33 42 36 34 40 28 Z"
              fill="#007A3D"
            />
            <circle cx="50" cy="50" r="4" fill="#DAAA00" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs uppercase tracking-wider text-black font-sans leading-tight">
              African Union
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Youth Division</span>
          </div>
        </div>
      );

    case "UNECA Innovation & Tech Hub":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* UNECA Emblem */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <circle cx="50" cy="50" r="45" stroke="#009EDB" strokeWidth="4" />
            <ellipse cx="50" cy="50" rx="42" ry="20" stroke="#009EDB" strokeWidth="2" />
            <ellipse cx="50" cy="50" rx="20" ry="42" stroke="#009EDB" strokeWidth="2" />
            <circle cx="50" cy="50" r="14" fill="#009EDB" />
            <path d="M46 44 L54 44 L54 56 L46 56 Z" fill="white" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs uppercase tracking-wider text-black font-sans leading-tight">
              UN ECA
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Innovation & Tech</span>
          </div>
        </div>
      );

    case "UNDP Regional Bureau for Africa":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* UNDP Iconic Vertical Mark */}
          <svg width="32" height="36" viewBox="0 0 60 70" fill="none" className="shrink-0">
            <rect x="0" y="0" width="26" height="70" fill="#006EB5" rx="3" />
            <rect x="34" y="16" width="26" height="54" fill="#E62238" rx="3" />
            <text x="5" y="44" fill="white" fontFamily="sans-serif" fontSize="18" fontWeight="bold">UN</text>
            <text x="38" y="52" fill="white" fontFamily="sans-serif" fontSize="18" fontWeight="bold">DP</text>
          </svg>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-[#006EB5] font-sans leading-none">
              UNDP
            </span>
            <span className="text-[10px] text-gray-600 font-mono tracking-tight mt-0.5">
              Regional Bureau Africa
            </span>
          </div>
        </div>
      );

    case "East African Community Secretariat":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* EAC Sunburst Circle Emblem */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <circle cx="50" cy="50" r="46" fill="#FDB913" stroke="#005A9C" strokeWidth="4" />
            <circle cx="50" cy="50" r="32" fill="#00A859" />
            <circle cx="50" cy="50" r="18" fill="#FFFFFF" />
            <polygon points="50,38 53,46 62,47 55,52 57,60 50,55 43,60 45,52 38,47 47,46" fill="#D32F2F" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs uppercase tracking-wider text-black font-sans leading-tight">
              EAC Secretariat
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">One People, One Destiny</span>
          </div>
        </div>
      );

    case "University of Nairobi Innovation Center":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* UoN Torch & Book Crest */}
          <svg width="32" height="36" viewBox="0 0 80 90" fill="none" className="shrink-0">
            <path d="M10 15 C10 15, 40 5, 70 15 C70 50, 60 75, 40 85 C20 75, 10 50, 10 15 Z" fill="#0B4F35" />
            <path d="M22 26 L40 38 L58 26 L40 52 Z" fill="#C59B27" />
            <circle cx="40" cy="22" r="5" fill="#C59B27" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Univ. of Nairobi
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Innovation Hub</span>
          </div>
        </div>
      );

    case "University of Rwanda Centre for Excellence":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* UR Academic Sun Logo */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <circle cx="50" cy="50" r="45" fill="#005B94" />
            <circle cx="50" cy="50" r="30" fill="#EAAA00" />
            <path d="M30 65 L50 40 L70 65 Z" fill="#FFFFFF" />
            <rect x="42" y="30" width="16" height="8" rx="2" fill="#FFFFFF" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Univ. of Rwanda
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Centre of Excellence</span>
          </div>
        </div>
      );

    case "Ashesi University Design Lab":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* Ashesi Compass Emblem */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <rect x="10" y="10" width="80" height="80" rx="18" fill="#8B0000" />
            <path d="M50 22 L65 50 L50 78 L35 50 Z" fill="#DAA520" />
            <circle cx="50" cy="50" r="6" fill="#8B0000" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Ashesi University
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Design Lab</span>
          </div>
        </div>
      );

    case "Wits School of Governance":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* Wits University Shield */}
          <svg width="32" height="36" viewBox="0 0 80 90" fill="none" className="shrink-0">
            <path d="M12 12 H68 V52 C68 68, 40 82, 40 82 C40 82, 12 68, 12 52 Z" fill="#002D62" />
            <path d="M22 26 H58 V42 H22 Z" fill="#EAAA00" />
            <circle cx="40" cy="62" r="7" fill="#FFFFFF" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Wits University
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">School of Governance</span>
          </div>
        </div>
      );

    case "Mastercard Foundation Youth Hub":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* Mastercard Interlocking Circles */}
          <svg width="42" height="28" viewBox="0 0 68 44" fill="none" className="shrink-0">
            <circle cx="22" cy="22" r="20" fill="#EB001B" />
            <circle cx="46" cy="22" r="20" fill="#F79E1B" fillOpacity="0.9" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Mastercard Fdn
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Youth Futures</span>
          </div>
        </div>
      );

    case "Rockefeller Foundation Africa":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* Rockefeller Geometric R */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <rect width="100" height="100" rx="16" fill="#002F6C" />
            <path d="M28 25 H55 C66 25 74 33 74 42 C74 52 66 58 55 58 H42 V75 H28 Z" fill="#00A3E0" />
            <path d="M52 58 L72 75 H56 L40 60 Z" fill="#FFFFFF" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Rockefeller Fdn
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Catalytic Africa</span>
          </div>
        </div>
      );

    case "Tony Elumelu Foundation Network":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* TEF Red Square Badge */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <rect width="100" height="100" rx="14" fill="#E31B23" />
            <text x="50" y="65" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="36" fontWeight="900">
              TEF
            </text>
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Tony Elumelu Fdn
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Entrepreneurship</span>
          </div>
        </div>
      );

    case "Open Society Foundations Africa":
      return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
          {/* OSF Frame Logo */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="shrink-0">
            <rect x="12" y="12" width="76" height="76" rx="8" stroke="#1A252C" strokeWidth="8" fill="none" />
            <circle cx="50" cy="50" r="22" fill="#E63946" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-black font-sans leading-tight">
              Open Society Fdn
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tight">Africa Initiative</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold text-xs">
            {name.slice(0, 2).toUpperCase()}
          </div>
          <span className="font-bold text-xs text-black font-sans">{name}</span>
        </div>
      );
  }
};

