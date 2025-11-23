import React from 'react';
import { cn } from '@/lib/utils';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María G.",
      text: "Mis hijos ahora piden que cocine con la Air Fryer todos los días. ¡Las recetas son increíbles!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Carlos R.",
      text: "Ahorro 2 horas diarias en la cocina. Las cenas están listas en 15 minutos.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Laura M.",
      text: "Finalmente puedo hacer postres saludables que mis hijos aman. ¡Gracias!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          TESTIMONIOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="mb-4">
                <div className="text-2xl font-bold mb-2">{testimonial.name}</div>
                <div className="text-yellow-400">{testimonial.rating}</div>
              </div>
              <p className="font-sans text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;