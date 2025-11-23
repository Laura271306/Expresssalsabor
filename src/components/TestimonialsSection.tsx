import React from 'react';
import { cn } from '@/lib/utils';
import WhatsappTestimonialCard from './WhatsappTestimonialCard';

const TestimonialsSection: React.FC = () => {
  // Simulando 3 flujos de conversación
  const chatFlows = [
    [
      { name: "María G.", text: "¡Chicas, tengo que compartir esto! Hice las patatas fritas de la página 45 y quedaron CRUJIENTES. Mi esposo no creía que salieran de la Air Fryer.", time: "10:35 AM", type: 'sent' as const },
      { name: "Ana P.", text: "¡Qué bien! Yo siempre las hacía blandas. ¿Usaste el método CRISP que explican?", time: "10:40 AM", type: 'received' as const },
      { name: "María G.", text: "Sí, el precalentamiento de 5 minutos es la clave. ¡Y el sazonado es perfecto!", time: "10:42 AM", type: 'sent' as const },
    ],
    [
      { name: "Carlos R.", text: "Ahorro 2 horas diarias en la cocina. Las cenas están listas en 15 minutos. ¡El recetario es un salvavidas!", time: "11:01 AM", type: 'sent' as const },
      { name: "Admin", text: "¡Genial, Carlos! Nos alegra mucho que estés aprovechando el tiempo. ¿Cuál es tu receta favorita hasta ahora?", time: "11:05 AM", type: 'received' as const },
      { name: "Carlos R.", text: "Las alitas de pollo con salsa BBQ casera. ¡Saben mejor que en el restaurante!", time: "11:08 AM", type: 'sent' as const },
    ],
    [
      { name: "Laura M.", text: "¡Por fin postres saludables que mis hijos AMAN! El paquete de postres rápidos es oro puro. Gracias por incluirlo.", time: "12:45 PM", type: 'sent' as const },
      { name: "Sofía V.", text: "Yo también lo probé. El brownie de chocolate en 10 minutos es mi perdición 🤤", time: "12:50 PM", type: 'received' as const },
    ],
  ];

  return (
    <section className="bg-[#181617] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12 text-highlight-gold">
          TESTIMONIOS REALES DE NUESTROS CLIENTES
        </h2>
        
        <p className="font-sans text-xl text-gray-400 text-center mb-10">
          Mira cómo están transformando sus comidas en nuestros grupos de chat privados:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chatFlows.map((flow, flowIndex) => (
            <div key={flowIndex} className="flex flex-col gap-4 p-4 bg-[#282425] rounded-xl shadow-2xl border border-gray-700">
              {flow.map((message, messageIndex) => (
                <WhatsappTestimonialCard 
                  key={messageIndex}
                  name={message.name}
                  text={message.text}
                  time={message.time}
                  type={message.type}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;