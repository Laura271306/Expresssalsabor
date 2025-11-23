import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCheck } from 'lucide-react';

interface WhatsappTestimonialCardProps {
  name: string;
  text: string;
  time: string;
}

const WhatsappTestimonialCard: React.FC<WhatsappTestimonialCardProps> = ({ name, text, time }) => {
  // Estilo de burbuja de WhatsApp (verde claro)
  const senderClasses = "bg-[#DCF8C6] text-dark-bg self-end rounded-xl rounded-tr-none shadow-md";
  
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto">
      {/* Nombre del contacto (simulando que es un chat grupal o un contacto guardado) */}
      <p className="text-xs font-bold text-highlight-gold mb-1 self-start">{name}</p>
      
      <div className={cn(
        "p-3 max-w-[90%] relative min-w-[150px]",
        senderClasses
      )}>
        <p className="font-sans text-sm leading-snug pr-10">{text}</p>
        
        {/* Footer con hora y doble checkmark */}
        <div className="absolute bottom-1 right-2 flex items-center space-x-1 text-[10px] text-gray-500">
          <span>{time}</span>
          <CheckCheck className="w-3 h-3 text-blue-500" /> {/* Doble check azul para 'leído' */}
        </div>
      </div>
    </div>
  );
};

export default WhatsappTestimonialCard;