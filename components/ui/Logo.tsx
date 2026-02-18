import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // 'dark' means dark text (for light bg), 'light' means white text (for dark bg)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
  // Using the white text variant for dark backgrounds (Navbar/Footer)
  const logoSrc = variant === "light" ? "/boss-2-white.svg" : "/boss-2.svg";

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