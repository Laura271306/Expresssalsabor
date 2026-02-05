import React from 'react';
import { cn } from '@/lib/utils';

const UrgencyBanner: React.FC = () => {
  return (
    <div className="bg-urgency-red text-white text-center font-sans font-bold text-lg py-4 px-6">
      ⚡️ OFERTA LIMITADA – ÚLTIMAS PLAZAS DISPONIBLES
    </div>
  );
};

export default UrgencyBanner;