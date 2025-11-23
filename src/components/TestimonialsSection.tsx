import React from 'react';
import { cn } from '@/lib/utils';
import WhatsappTestimonialCard from './WhatsappTestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María G.",
      text: "Mis hijos ahora piden que cocine con la Air Fryer todos los días. ¡Las recetas son increíbles!",
      time: "10:35 AM"
    },
    {
      name: "Carlos R.",
      text: "Ahorro 2 horas diarias en la cocina. Las cenas están listas en 15 minutos. ¡El método CRISP funciona!",
      time: "11:01 AM"
    },
    {
      name: "Laura M.",
      text: "Finalmente puedo hacer postres saludables que mis hijos aman. ¡Gracias! El recetario es muy completo.",
      time: "12:45 PM"
    }
  ];

  return (
    <section className="bg-[#181617] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12 text-highlight-gold">
          TESTIMONIOS DE CLIENTES
        </h2>
        
        <p className="font-sans text-xl text-gray-400 text-center mb-10">
          Mira lo que dicen nuestros clientes satisfechos en sus grupos de chat:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <WhatsappTestimonialCard 
                name={testimonial.name}
                text={testimonial.text}
                time={testimonial.time}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;