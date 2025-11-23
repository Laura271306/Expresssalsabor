import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCheck } from 'lucide-react';

interface WhatsappTestimonialCardProps {
  name: string;
  text: string;
  time: string;
  type: 'sent' | 'received'; // Nuevo prop para definir el tipo de mensaje
}

const WhatsappTestimonialCard: React.FC<WhatsappTestimonialCardProps> = ({ name, text, time, type }) => {
  
  const isSent = type === 'sent';

  // Estilos de burbuja
  const sentClasses = "bg-[#DCF8C6] text-dark-bg self-end rounded-xl rounded-tr-none shadow-md";
  const receivedClasses = "bg-white text-dark-bg self-start rounded-xl rounded-tl-none shadow-md";

  return (
    <div className={cn(
      "flex flex-col w-full max-w-xs mx-auto",
      isSent ? "items-end" : "items-start"
    )}>
      {/* Nombre del contacto (solo visible para mensajes recibidos o en grupos) */}
      {!isSent && (
        <p className="text-xs font-bold text-highlight-gold mb-1">{name}</p>
      )}
      
      <div className={cn(
        "p-3 max-w-[90%] relative min-w-[150px]",
        isSent ? sentClasses : receivedClasses
      )}>
        <p className="font-sans text-sm leading-snug pr-10">{text}</p>
        
        {/* Footer con hora y doble checkmark */}
        <div className="absolute bottom-1 right-2 flex items-center space-x-1 text-[10px] text-gray-500">
          <span>{time}</span>
          {isSent && <CheckCheck className="w-3 h-3 text-blue-500" />} {/* Solo el remitente tiene check */}
        </div>
      </div>
    </div>
  );
};

export default WhatsappTestimonialCard;