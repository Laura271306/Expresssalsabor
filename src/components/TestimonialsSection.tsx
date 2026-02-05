import React from 'react';
import { cn } from '@/lib/utils';
import ImageTestimonialCard from './ImageTestimonialCard';
import SectionWrapper from './SectionWrapper';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    { 
      src: "/testimonials/chat-mariana-frango.jpg", 
      alt: "Testimonio de Mariana: Pollo y patatas deliciosas en Air Fryer." 
    },
    { 
      src: "/testimonials/chat-jordana-pizza.jpg", 
      alt: "Testimonio de Jordana: Tostadas de pizza muy prácticas y excelentes." 
    },
    { 
      src: "/testimonials/chat-jordana-vegetais.jpg", 
      alt: "Testimonio de Jordana: Receta hecha en 12 minutos, quedó buenísima y ahorró mucho." 
    },
  ];

  return (
    <SectionWrapper bgColor="dark-bg-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-left mb-12 text-highlight-gold">
          LO QUE NUESTROS CLIENTES DICEN
        </h2>
        
        <p className="font-sans text-xl text-gray-300 text-left mb-10">
          Comentarios reales de personas que están transformando su cocina:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ImageTestimonialCard 
              key={index}
              src={testimonial.src}
              alt={testimonial.alt}
            />
          ))}
        </div>

        {/* Depoimento adicional em texto */}
        <div className="mt-12 bg-[#282425] rounded-2xl p-8 border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-gray-300 italic leading-relaxed mb-4">
                "Llevo 3 semanas usando el método y no puedo creer lo fácil que es. Mis hijos ahora piden que cocine en casa en lugar de pedir pizza. Ahorré más de 80€ este mes y la comida está deliciosa. Lo mejor es que no paso más de 20 minutos en la cocina."
              </p>
              <p className="font-sans text-white font-bold">— Carlos M., Madrid</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;