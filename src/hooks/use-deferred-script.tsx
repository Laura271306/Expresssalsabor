import * as React from "react";

/**
 * Carga un script después de una inactividad prolongada o interacción.
 */
export function useDeferredScript(loadScript: () => void) {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    // 1. Cargar después de 5 segundos (mucho más tarde)
    const timeoutId = setTimeout(() => setShouldLoad(true), 5000);

    // 2. Cargar en la primera interacción real (scroll)
    const handleInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  React.useEffect(() => {
    if (shouldLoad) {
      loadScript();
    }
  }, [shouldLoad, loadScript]);
}