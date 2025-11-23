import React from 'react';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', ...props }) => {
  const baseClasses = "font-sans font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-white uppercase tracking-wider";

  // Usando colores definidos: cta-primary (verde) y urgency-red (final)
  const primaryClasses = "bg-cta-primary hover:bg-green-600 shadow-cta-primary/50 animate-pulse-shadow";
  const finalClasses = "bg-urgency-red hover:bg-red-700 shadow-urgency-red/50";

  const buttonClasses = cn(
    baseClasses,
    variant === 'primary' ? primaryClasses : finalClasses,
    className
  );

  if (href) {
    // Filter out button-specific props for anchor tag
    const anchorProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith('on') && key !== 'type' && key !== 'disabled')
    ) as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    
    return (
      <a
        href={href}
        className={buttonClasses}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton;