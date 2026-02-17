import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // 'dark' means dark text (for light bg), 'light' means white text (for dark bg)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  // New designed logo - white text + blue lightning bolt on transparent bg
  // Works on both dark navbar and dark footer backgrounds
  const logoSrc = "/logo-new.svg";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Boss Electrics Logo"
        className="h-14 w-auto"
      />
    </div>
  );
};