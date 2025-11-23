import React from 'react';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', ...props }) => {
  const baseClasses = "font-sans font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-white uppercase tracking-wider inline-flex items-center justify-center text-center";

  // Usando colores definidos: cta-primary (verde) y urgency-red (final)
  // La animación de pulso se aplica solo al primary
  const primaryClasses = "bg-cta-primary hover:bg-green-600 shadow-cta-primary/50 animate-pulse-shadow";
  const finalClasses = "bg-urgency-red hover:bg-red-700 shadow-urgency-red/50";

  const buttonClasses = cn(
    baseClasses,
    variant === 'primary' ? primaryClasses : finalClasses,
    className
  );

  if (href) {
    // Extraemos TODAS las props específicas de botón para evitar el error de TS al pasarlas a <a>
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
    
    // Usamos 'a' tag para navegación. Usamos 'as unknown' para resolver la incompatibilidad de tipos de eventos (e.g., onCopy) entre HTMLButtonElement y HTMLAnchorElement.
    return (
      <a
        href={href}
        className={buttonClasses}
        {...((anchorProps as unknown) as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default CtaButton;