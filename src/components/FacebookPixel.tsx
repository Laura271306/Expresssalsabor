import React, { useCallback } from 'react';
import { useDeferredScript } from '@/hooks/use-deferred-script';

const PIXEL_ID = '886272914152692';

const FacebookPixel = () => {
  const loadPixel = useCallback(() => {
    if (typeof window === 'undefined' || (window as any).fbq) return;

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
    pixelScript.async = true;
    
    document.head.appendChild(pixelScript);
  }, []);

  useDeferredScript(loadPixel);

  return null;
};

export default FacebookPixel;