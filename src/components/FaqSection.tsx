import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Realmente funciona en cualquier modelo?",
    answer: "Absolutamente. Los tiempos y temperaturas están optimizados para los rangos estándar de todas las marcas (de 3L a 7L).",
  },
  {
    question: "¿Tengo que comprar ingredientes caros?",
    answer: "No. El 95% de las recetas usan lo que ya tienes en tu despensa o encuentras en el súper de la esquina.",
  },
  {
    question: "¿Cómo recibo el acceso?",
    answer: "Inmediato. Al confirmar el pago, recibes un email con el acceso de por vida al PDF interactivo.",
  },
  {
    question: "¿Y si no me gusta?",
    answer: "Tienes 7 días de garantía total. Si sientes que no es para ti, te devolvemos el 100% sin preguntas.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light">
      <h2 className="font-sans font-bold text-dark-bg text-3xl md:text-4xl mb-12 text-center md:text-left">
        Preguntas Frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4 bg-white rounded-lg border border-gray-200 px-4">
            <AccordionTrigger className="font-bold text-dark-bg hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;