import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "¿Sirve para 3,5 L / 5,5 L?",
    answer: "Sí, el kit funciona perfectamente para todos los tamaños. Cada receta incluye ajustes específicos.",
  },
  {
    question: "¿Ingredientes caros?",
    answer: "No, usamos solo ingredientes de supermercado comunes y económicos. El promedio es $2-3 USD por porción.",
  },
  {
    question: "¿Opciones fit/sin gluten?",
    answer: "Sí, 150+ recetas son aptas para dietas especiales. Incluye etiquetado para cada opción.",
  },
  {
    question: "¿Cuánto tardo en organizarme?",
    answer: "Máximo 5 minutos. El acceso es instantáneo y tienes guías paso a paso para empezar hoy mismo.",
  },
  {
    question: "¿Formato y acceso?",
    answer: "Formato digital PDF. Acceso de por vida, sin renovación.",
  },
  {
    question: "¿Reembolso?",
    answer: "Garantía 100% de 14 días. Si no estás satisfecho, devolvemos tu dinero sin preguntas.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light">
      <h2 className="font-sans font-bold text-dark-bg text-3xl md:text-4xl mb-8 md:mb-12 text-left">
        Preguntas Frecuentes
      </h2>

      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className={cn(
              "mb-4 rounded-xl border border-gray-300 bg-white shadow-lg", // Increased border and shadow for sophistication
              "data-[state=open]:bg-[#F9F9F9] data-[state=open]:border-highlight-gold/50 transition-all duration-200" // Subtle change on open
            )}
          >
            <AccordionTrigger className="font-sans text-dark-bg text-lg p-4 hover:no-underline [&>svg]:text-cta-primary font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0 text-dark-bg text-base leading-relaxed border-t border-gray-200">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;