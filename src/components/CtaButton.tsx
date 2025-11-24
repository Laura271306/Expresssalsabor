import React from 'react';
import { cn } from '@/lib/utils';
import { trackInitiateCheckout } from '@/utils/facebookPixel';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', onClick, ...props }) => {
  const baseClasses = "font-sans font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-white uppercase tracking-wider inline-flex items-center justify-center text-center";

  // Usando cores definidas: cta-primary (verde) e urgency-red (final)
  // A animação de pulso se aplica apenas ao primary
  const primaryClasses = "bg-cta-primary hover:bg-green-600 shadow-cta-primary/50 animate-pulse-shadow";
  const finalClasses = "bg-urgency-red hover:bg-red-700 shadow-urgency-red/50";

  const buttonClasses = cn(
    baseClasses,
    variant === 'primary' ? primaryClasses : finalClasses,
    className
  );

  const handleCtaAction = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // 1. Track the CTA click for Facebook Pixel as InitiateCheckout
    trackInitiateCheckout();

    // 2. Handle internal scrolling if applicable
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // 3. Execute original onClick if provided
    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (href) {
    // If it's an anchor tag (<a>)
    const { 
      type, 
      disabled, 
      form, 
      formAction, 
      formEncType, 
      formMethod, 
      formNoValidate, 
      formTarget, 
      name, 
      value, 
      ...anchorProps 
    } = props;

    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={handleCtaAction}
        {...((anchorProps as unknown) as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={handleCtaAction}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default CtaButton;