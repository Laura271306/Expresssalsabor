import React from 'react';
import { cn } from '@/lib/utils';
import WhatsappTestimonialCard from './WhatsappTestimonialCard';

const TestimonialsSection: React.FC = () => {
  // Mensajes individuales de prueba social
  const testimonials = [
    { name: "María G.", text: "¡Chicas, tengo que compartir esto! Hice las patatas fritas de la página 45 y quedaron CRUJIENTES. Mi esposo no creía que salieran de la Air Fryer.", time: "10:35 AM" },
    { name: "Carlos R.", text: "Ahorro 2 horas diarias en la cocina. Las cenas están listas en 15 minutos. ¡El recetario es un salvavidas!", time: "11:01 AM" },
    { name: "Laura M.", text: "¡Por fin postres saludables que mis hijos AMAN! El paquete de postres rápidos es oro puro. Gracias por incluirlo.", time: "12:45 PM" },
    { name: "Ana P.", text: "El método CRISP es magia. Mis carnes salen jugosas y doradas, no secas como antes. ¡Recomendado 100%!", time: "1:15 PM" },
    { name: "Roberto V.", text: "La lista de compras inteligente me ahorró tiempo y dinero esta semana. ¡Ya no tiro comida!", time: "2:05 PM" },
    { name: "Sofía M.", text: "El brownie de chocolate en 10 minutos es mi perdición 🤤. Y es saludable. ¡Gracias por el bono!", time: "3:30 PM" },
  ];

  return (
    <section className="bg-[#181617] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12 text-highlight-gold">
          TESTIMONIOS REALES DE NUESTROS CLIENTES
        </h2>
        
        <p className="font-sans text-xl text-gray-400 text-center mb-10">
          Pruebas sociales directas de clientes satisfechos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-2 p-4 bg-[#282425] rounded-xl shadow-2xl border border-gray-700 items-center justify-center">
              <WhatsappTestimonialCard 
                name={testimonial.name}
                text={testimonial.text}
                time={testimonial.time}
                type="sent" // Forzamos el tipo 'sent'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;