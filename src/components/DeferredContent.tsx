import React, { useState, useEffect } from 'react';

interface DeferredContentProps {
  children: React.ReactNode;
  delay?: number;
}

const DeferredContent: React.FC<DeferredContentProps> = ({ children, delay = 2500 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Usar requestIdleCallback si está disponible para no bloquear el hilo principal
    const loadContent = () => setIsLoaded(true);
    
    let timeoutId: ReturnType<typeof setTimeout>;

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        timeoutId = setTimeout(loadContent, delay);
      });
    } else {
      timeoutId = setTimeout(loadContent, delay);
    }

    const handleInteraction = () => {
      clearTimeout(timeoutId);
      loadContent();
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [delay]);

  if (!isLoaded) {
    // Marcador de posición que mantiene el espacio para evitar CLS masivo
    return <div className="w-full bg-dark-bg" style={{ height: '100vh' }} />;
  }

  return <>{children}</>;
};

export default DeferredContent;