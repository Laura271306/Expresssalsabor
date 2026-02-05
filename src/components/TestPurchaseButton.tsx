import React from 'react';
import { trackPurchase } from '@/utils/facebookPixel';
import { Button } from '@/components/ui/button';

const TestPurchaseButton: React.FC = () => {
  const handleTestPurchase = () => {
    // Dispara o evento Purchase com um valor de exemplo (5.90 USD)
    trackPurchase(5.90, 'USD');
    alert('Evento Purchase (5.90 USD) disparado. Verifique o console e o Facebook Pixel Helper.');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleTestPurchase} 
        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
      >
        TESTAR PURCHASE PIXEL
      </Button>
    </div>
  );
};

export default TestPurchaseButton;