export const trackCtaClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    // Tracking a custom event named 'ClickCTA' as requested by the user
    (window as any).fbq('track', 'ClickCTA');
    console.log('Facebook Pixel: Tracking ClickCTA event.');
  }
};

export const trackViewContent = (contentName?: string, contentIds?: string[]) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: contentName || 'Airfryer Magica Sales Page',
      content_ids: contentIds || ['airfryer_magica_kit'],
      content_type: 'product_group',
    });
    console.log('Facebook Pixel: Tracking ViewContent event.');
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