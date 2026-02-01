import React from 'react';
import { cn } from '@/lib/utils';
import { trackAddToCart } from '@/utils/facebookPixel';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', onClick, ...props }) => {
  const baseClasses = "font-sans font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-white uppercase tracking-wider inline-flex items-center justify-center text-center";

  const primaryClasses = "bg-cta-primary hover:bg-green-600 shadow-cta-primary/50 animate-pulse-shadow";
  const finalClasses = "bg-urgency-red hover:bg-red-700 shadow-urgency-red/50";

  const buttonClasses = cn(
    baseClasses,
    variant === 'primary' ? primaryClasses : finalClasses,
    className
  );

  const handleCtaAction = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const isAnchor = href?.startsWith('#');

    // Disparamos AddToCart se NÃO for uma âncora interna
    if (href && !isAnchor) {
      // Usando 6.90 USD como valor padrão, conforme a oferta
      trackAddToCart(6.90, 'USD'); 
    } else if (isAnchor) {
      console.log('Navegação interna: Não se registra conversão.');
    }

    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>);
    }

    if (href) {
      if (isAnchor) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Enlaces externos (Checkout)
        const isExternalLink = !href.startsWith('/');
        if (isExternalLink) {
          event.preventDefault();
          setTimeout(() => {
            window.location.href = href;
          }, 50);
        }
      }
    }
  };

  if (href) {
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