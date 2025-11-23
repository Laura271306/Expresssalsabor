import React from 'react';
import { cn } from '@/lib/utils';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', ...props }) => {
  const baseClasses = "font-sans font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-white";

  const primaryClasses = "bg-green-500 hover:bg-green-600";
  const finalClasses = "bg-urgency-red hover:bg-red-700";

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