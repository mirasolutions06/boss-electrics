import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  asChild = false,
  ...props
}) => {

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 tracking-wide";

  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/10 hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-brand-100 text-navy-900 hover:bg-brand-200 hover:shadow-md",
    outline: "border-2 border-slate-200 bg-white hover:border-navy-900 hover:text-navy-900 text-slate-700",
    ghost: "hover:bg-slate-100 hover:text-navy-900 text-slate-600",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};