"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric parts, prefix, and suffix
    // e.g. "$4.2M" -> prefix: "$", num: 4.2, suffix: "M"
    // "48,500+" -> prefix: "", num: 48500, suffix: "+"
    // "91%" -> prefix: "", num: 91, suffix: "%"
    // "26 Nations" -> prefix: "", num: 26, suffix: " Nations"
    const match = value.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const target = parseFloat(rawNumberStr);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const hasComma = match[2].includes(",");
    const decimalPlaces = rawNumberStr.includes(".")
      ? rawNumberStr.split(".")[1].length
      : 0;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease-out expo easing
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * easeProgress;

      let formattedNum =
        decimalPlaces > 0
          ? current.toFixed(decimalPlaces)
          : Math.floor(current).toString();

      if (hasComma) {
        const parts = formattedNum.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formattedNum = parts.join(".");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

