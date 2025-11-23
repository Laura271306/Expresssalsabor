import React, { useEffect } from 'react';

const PIXEL_ID = '3222655657903008';

const FacebookPixel = () => {
  useEffect(() => {
    // Check if window is defined (client-side rendering)
    if (typeof window === 'undefined') return;

    // Standard Facebook Pixel initialization script
    const script = `
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

    // Create a script element
    const pixelScript = document.createElement('script');
    pixelScript.innerHTML = script;
    pixelScript.async = true;

    // Create a noscript element for users with JavaScript disabled
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"
    />`;

    // Append elements to the body
    document.body.appendChild(pixelScript);
    document.body.appendChild(noscript);

    // Cleanup function (optional for pixel, but good practice)
    return () => {
      document.body.removeChild(pixelScript);
      document.body.removeChild(noscript);
    };
  }, []);

  return null; // This component renders nothing visible
};

export default FacebookPixel;