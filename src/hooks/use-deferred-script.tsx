import * as React from "react";

/**
 * Carga un script después de que el navegador esté inactivo o después de una interacción.
 * Esto es útil para scripts de terceros no críticos como analytics/pixels.
 */
export function useDeferredScript(loadScript: () => void) {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    // 1. Cargar después de un breve retraso (inactividad inicial)
    const timeoutId = setTimeout(() => setShouldLoad(true), 3000);

    // 2. Cargar en la primera interacción del usuario (si ocurre antes del timeout)
    const handleInteraction = () => {
      setShouldLoad(true);
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
  }, []);

  React.useEffect(() => {
    if (shouldLoad) {
      loadScript();
    }
  }, [shouldLoad, loadScript]);
}