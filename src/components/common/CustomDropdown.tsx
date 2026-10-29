"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  badge?: string;
}

interface CustomDropdownProps {
  id?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  id,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono"
        >
          {label}
        </label>
      )}

      {/* Tactile Skeuomorphic Trigger Button */}
      <button
        id={id}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white border border-gray-300 hover:border-black text-black font-sans text-sm transition-all duration-180 focus:outline-none focus:border-black shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <span className="truncate font-medium text-left">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-1.5 shrink-0 text-gray-500">
          {selectedOption?.badge && (
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200">
              {selectedOption.badge}
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-black" : "text-gray-400"
            }`}
          />
        </div>
      </button>

      {/* Popover Options List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="listbox"
            className="absolute z-50 left-0 right-0 mt-2 p-1.5 bg-white/95 backdrop-blur-xl border border-black/15 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] max-h-64 overflow-y-auto"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-left transition-all duration-150 font-sans ${
                    isSelected
                      ? "bg-black text-white font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="truncate">{opt.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {opt.badge && (
                      <span
                        className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {opt.badge}
                      </span>
                    )}
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

