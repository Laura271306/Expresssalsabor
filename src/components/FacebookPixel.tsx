import React, { useEffect } from 'react';

const PIXEL_ID = '886272914152692';

const FacebookPixel = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Evitar duplicación si ya existe fbq
    if ((window as any).fbq) return;

    // Script estándar de Meta Pixel
    const scriptText = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;

    const pixelScript = document.createElement('script');
    pixelScript.innerHTML = scriptText;
    
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`;

    // Insertar en el HEAD para cumplir con las mejores prácticas
    document.head.appendChild(pixelScript);
    document.head.appendChild(noscript);

    return () => {
      // Limpieza opcional para evitar residuos en navegaciones SPA extremas
      if (document.head.contains(pixelScript)) document.head.removeChild(pixelScript);
      if (document.head.contains(noscript)) document.head.removeChild(noscript);
    };
  }, []);

  return null;
};

export default FacebookPixel;