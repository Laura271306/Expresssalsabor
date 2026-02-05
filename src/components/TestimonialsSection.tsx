import React from 'react';
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
          TESTIMONIOS REALES DE NUESTROS CLIENTES
        </h2>
        
        <p className="font-sans text-xl text-gray-300 text-left mb-10">
          Mira los resultados que están obteniendo con el recetario:
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
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;