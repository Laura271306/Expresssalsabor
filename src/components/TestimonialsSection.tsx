import React from 'react';
import ImageTestimonialCard from './ImageTestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    { 
      src: "/testimonials/whatsapp-chat-3.jpeg", 
      alt: "Testimonio de Mariana: Pollo y patatas deliciosas en Air Fryer." 
    },
    { 
      src: "/testimonials/whatsapp-chat-1.jpeg", 
      alt: "Testimonio de Jordana: Tostadas de pizza muy prácticas y excelentes." 
    },
    { 
      src: "/testimonials/whatsapp-chat-2.jpeg", 
      alt: "Testimonio de Jordana: Receta hecha en 12 minutos, quedó buenísima y ahorró mucho." 
    },
  ];

  return (
    <section className="bg-[#181617] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-left mb-12 text-highlight-gold">
          TESTIMONIOS REALES DE NUESTROS CLIENTES
        </h2>
        
        <p className="font-sans text-xl text-gray-400 text-left mb-10">
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
    </section>
  );
};

export default TestimonialsSection;