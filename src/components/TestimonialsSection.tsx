import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

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
    <section className="bg-[#181617] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12 text-highlight-gold">
          TESTIMONIOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-2xl border border-gray-700 transition-transform hover:scale-[1.02]">
              <Quote className="w-8 h-8 text-cta-primary mb-4" />
              <p className="font-sans text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="text-xl font-bold text-white">{testimonial.name}</div>
                <div className="text-yellow-400">{testimonial.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;