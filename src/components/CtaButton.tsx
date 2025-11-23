import React from 'react';
import { cn } from '@/lib/utils';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'final';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, href, variant = 'primary', onClick, ...props }) => {
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

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Ejecutar el onClick original si existe
    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (href) {
    // Si es un anclaje local, usamos un <a> con el manejador de clic personalizado.
    if (href.startsWith('#')) {
      // Extraemos props específicas de botón para evitar el error de TS al pasarlas a <a>
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
          onClick={handleAnchorClick}
          {...((anchorProps as unknown) as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // Si es un enlace externo o una ruta completa, se comporta como un <a> normal.
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
        {...((anchorProps as unknown) as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default CtaButton;