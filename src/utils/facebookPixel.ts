export const trackCtaClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    // Tracking a custom event named 'ClickCTA' as requested by the user
    (window as any).fbq('track', 'ClickCTA');
    console.log('Facebook Pixel: Tracking ClickCTA event.');
  }
};