import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCheck } from 'lucide-react';

interface WhatsappTestimonialCardProps {
  name: string;
  text: string;
  time: string;
  type: 'sent' | 'received'; // Mantengo 'type' para flexibilidad, pero forzaremos 'sent' en la sección
}

const WhatsappTestimonialCard: React.FC<WhatsappTestimonialCardProps> = ({ name, text, time, type }) => {
  
  // En este contexto de prueba social, asumimos que el cliente está enviando el mensaje (sent)
  const isSent = true; 

  // Estilos de burbuja
  const sentClasses = "bg-[#DCF8C6] text-dark-bg self-end rounded-xl rounded-tr-none shadow-md";

  return (
    <div className={cn(
      "flex flex-col w-full max-w-xs mx-auto items-end" // Siempre alineado a la derecha
    )}>
      {/* En este formato, el nombre del remitente no se muestra en la burbuja enviada, solo el contenido */}
      
      <div className={cn(
        "p-3 max-w-[90%] relative min-w-[150px]",
        sentClasses
      )}>
        <p className="font-sans text-sm leading-snug pr-10">{text}</p>
        
        {/* Footer con hora y doble checkmark */}
        <div className="absolute bottom-1 right-2 flex items-center space-x-1 text-[10px] text-gray-500">
          <span>{time}</span>
          <CheckCheck className="w-3 h-3 text-blue-500" /> {/* Doble check azul para 'leído' */}
        </div>
      </div>
      {/* Nombre del cliente debajo o al lado para identificar quién lo envió */}
      <p className="text-xs font-bold text-gray-400 mt-1 mr-2">{name}</p>
    </div>
  );
};

export default WhatsappTestimonialCard;