import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { id: 1, text: "¡Mi vida cambió! Dejé de pedir delivery y ahora mi familia ama mis cenas.", rating: "4.9/5" },
  { id: 2, text: "El método C.R.I.S.P. es un salvavidas. Resultados crujientes siempre.", rating: "5/5" },
  { id: 3, text: "Ahorré $150 en el primer mes solo con la guía de compras.", rating: "4.8/5" },
  { id: 4, text: "Recetas súper fáciles, incluso para alguien que nunca cocinó.", rating: "5/5" },
  { id: 5, text: "La tabla de tiempos es oro puro. Nunca más quemé nada.", rating: "4.9/5" },
  { id: 6, text: "Cenas profesionales en 15 minutos, ¡es increíble!", rating: "5/5" },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
    {/* Placeholder for visual review/image */}
    <div className="h-32 bg-gray-100 mb-4 flex items-center justify-center text-xs text-gray-500 rounded">
      [Cliente {testimonial.id} review visual]
    </div>
    <p className="text-dark-bg italic text-sm mb-3">
      "{testimonial.text}"
    </p>
    <div className="text-right text-xs font-bold text-highlight-gold">
      {testimonial.rating} ⭐
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark-bg-2" border>
      <h2 className="font-serif text-highlight-gold text-4xl md:text-5xl mb-10 text-center">
        🏅 Testimonios
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Custom arrow styling based on prompt requirements */}
        <CarouselPrevious className="text-gray-400 border-gray-400 hover:bg-white/10 hover:text-white" />
        <CarouselNext className="text-gray-400 border-gray-400 hover:bg-white/10 hover:text-white" />
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;