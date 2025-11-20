import React from 'react';
import { cn } from '@/lib/utils';

// Define base props common to both
interface BaseCtaProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'final';
}

// Props when rendering as a button (default)
interface ButtonCtaProps extends BaseCtaProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

// Props when rendering as an anchor (link)
interface AnchorCtaProps extends BaseCtaProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
}

type CtaButtonProps = ButtonCtaProps | AnchorCtaProps;

const CtaButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CtaButtonProps>(
  ({ children, className, variant = 'primary', href, ...rest }, ref) => {
    const baseClasses = "font-sans font-bold uppercase transition-all duration-300 ease-in-out text-white text-lg rounded-[100px] px-10 py-5 w-full md:w-auto text-center shadow-lg";

    const primaryClasses = cn(
      "bg-gradient-to-r from-cta-primary to-[#12AE32] hover:brightness-110",
      "animate-pulse-shadow" // Custom pulse animation defined in globals.css
    );

    const finalClasses = "bg-urgency-red hover:bg-red-700";

    const commonClasses = cn(
      baseClasses,
      variant === 'primary' ? primaryClasses : finalClasses,
      className
    );

    if (href) {
      // Render as anchor
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          role="button"
          className={commonClasses}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    // Render as button
    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={commonClasses}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);
CtaButton.displayName = "CtaButton";

export default CtaButton;