import React, { useState, useEffect } from 'react';

interface DeferredContentProps {
  children: React.ReactNode;
  delay?: number; // Delay in ms before loading content
}

const DeferredContent: React.FC<DeferredContentProps> = ({ children, delay = 500 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    
    // Load after delay
    timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    // Load on first interaction (more aggressive)
    const handleInteraction = () => {
      clearTimeout(timeoutId);
      setIsLoaded(true);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('mousemove', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [delay]);

  if (!isLoaded) {
    // Render a minimal placeholder to avoid layout shift if possible
    return <div className="h-20 w-full" />;
  }

  return <>{children}</>;
};

export default DeferredContent;