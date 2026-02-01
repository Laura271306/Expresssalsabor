export const trackCtaClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    // Tracking a custom event named 'ClickCTA' as requested by the user
    (window as any).fbq('track', 'ClickCTA');
    console.log('Facebook Pixel: Tracking ClickCTA event.');
  }
};

export const trackAddToCart = (value: number = 6.90, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'AddToCart', {
      value: value,
      currency: currency,
      content_name: 'KIT COMPLETO AirFryer',
      content_ids: ['airfryer_magica_kit'],
      num_items: 1,
    });
    console.log(`Facebook Pixel: Tracking AddToCart event with value ${value} ${currency}.`);
  }
};

export const trackPurchase = (value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    });
    console.log(`Facebook Pixel: Tracking Purchase event with value ${value} ${currency}.`);
  }
};