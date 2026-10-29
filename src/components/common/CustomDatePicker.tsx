"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

interface CustomDatePickerProps {
  id?: string;
  value?: string; // YYYY-MM-DD
  onChange: (date: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  id,
  value,
  onChange,
  placeholder = "Select preferred date",
  label,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize view date from value or today
  const initialDate = value ? new Date(value) : new Date();
  const [viewYear, setViewYear] = useState(
    isNaN(initialDate.getTime()) ? 2026 : initialDate.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    isNaN(initialDate.getTime()) ? 10 : initialDate.getMonth()
  );

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  // Compute days in current month
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();

  const handleSelectDay = (day: number) => {
    const formattedMonth = String(viewMonth + 1).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    const dateStr = `${viewYear}-${formattedMonth}-${formattedDay}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  // Format date display
  const formatDisplay = (val?: string) => {
    if (!val) return "";
    const [y, m, d] = val.split("-").map(Number);
    if (!y || !m || !d) return val;
    return `${d} ${MONTH_NAMES[m - 1]?.slice(0, 3)} ${y}`;
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

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        role="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white border border-gray-300 hover:border-black text-black font-sans text-sm transition-all duration-180 focus:outline-none focus:border-black shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-2.5 truncate">
          <CalendarIcon className="w-4 h-4 text-gray-500 shrink-0" />
          <span className={`truncate font-medium ${value ? "text-black" : "text-gray-400"}`}>
            {value ? formatDisplay(value) : placeholder}
          </span>
        </div>

        {value && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        )}
      </button>

      {/* Animated Calendar Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 left-0 sm:left-auto right-0 mt-2 p-4 w-72 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl border border-black/15 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.14)] select-none font-sans"
          >
            {/* Header: Month / Year with arrows */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="font-bold text-sm text-black">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {DAYS_OF_WEEK.map((d) => (
                <span key={d} className="text-[10px] font-mono font-semibold text-gray-400">
                  {d}
                </span>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* Empty leading cells */}
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8" />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNumber = i + 1;
                const dateKey = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(
                  dayNumber
                ).padStart(2, "0")}`;
                const isSelected = value === dateKey;

                return (
                  <button
                    key={dayNumber}
                    type="button"
                    onClick={() => handleSelectDay(dayNumber)}
                    className={`h-8 w-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-all duration-150 font-medium ${
                      isSelected
                        ? "bg-black text-white font-bold shadow-sm"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {dayNumber}
                  </button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
              <button
                type="button"
                onClick={() => {
                  const now = new Date();
                  const y = now.getFullYear();
                  const m = String(now.getMonth() + 1).padStart(2, "0");
                  const d = String(now.getDate()).padStart(2, "0");
                  onChange(`${y}-${m}-${d}`);
                  setIsOpen(false);
                }}
                className="text-black font-semibold hover:underline"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setIsOpen(false);
                }}
                className="text-gray-400 hover:text-red-600"
              >
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

