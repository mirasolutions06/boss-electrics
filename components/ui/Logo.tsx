import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // 'dark' means dark text (for light bg), 'light' means white text (for dark bg)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  const textColor = variant === "dark" ? "text-slate-900" : "text-white";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        {/* The Bolt */}
        <Zap className="h-8 w-8 text-brand-500 fill-brand-500" strokeWidth={0} />
      </div>
      <div className="flex flex-col justify-center leading-none select-none">
        <span className={`text-2xl font-black tracking-tighter ${textColor} uppercase`}>BOSS</span>
        <span className={`text-[0.65rem] font-bold tracking-[0.15em] ${textColor} uppercase -mt-0.5 ml-0.5`}>Electrics</span>
      </div>
    </div>
  );
};