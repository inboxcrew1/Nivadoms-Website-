'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] transition-all duration-300 relative select-none disabled:opacity-50 disabled:cursor-not-allowed text-center min-h-[44px]';
  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2.5 min-h-[40px]',
    md: 'text-xs px-5 sm:px-6 py-3 sm:py-3.5 min-h-[44px]',
    lg: 'text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px]',
  };
  const variantStyles = {
    primary: 'bg-champagne text-charcoal font-semibold hover:bg-gold-warm hover:shadow-[0_0_25px_rgba(217,160,91,0.4)] active:scale-[0.98]',
    secondary: 'bg-charcoal-300 text-ivory border border-champagne/30 hover:border-champagne hover:bg-charcoal-200 hover:text-champagne active:scale-[0.98]',
    outline: 'bg-transparent text-ivory border border-champagne/40 hover:border-champagne hover:text-champagne hover:bg-champagne/5 active:scale-[0.98]',
    ghost: 'bg-transparent text-ivory/80 hover:text-champagne hover:bg-white/5',
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  const combined = baseStyles + ' ' + sizeStyles[size] + ' ' + variantStyles[variant] + ' ' + widthStyle + ' ' + className;

  if (href) {
    return (
      <Link href={href} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combined}>
      {children}
    </button>
  );
};
