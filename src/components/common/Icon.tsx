import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = "", ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = (LucideIcons as any)[name] || LucideIcons.Sparkles;
  return <Component size={size} className={className} aria-hidden="true" {...props} />;
};
