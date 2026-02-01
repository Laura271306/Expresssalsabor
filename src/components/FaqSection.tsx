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
    question: "¿Por qué pagar por esto si hay recetas gratis en YouTube?",
    answer: "En internet pierdes horas buscando y el 70% de las recetas fallan o no dan el tiempo exacto para tu modelo. Aquí tienes un método probado paso a paso para no tirar comida ni dinero a la basura.",
  },
  {
    question: "¿Es un pago mensual o una suscripción?",
    answer: "No. Es un pago único de $6,90. Lo compras hoy y tienes acceso de por vida, incluyendo todas las actualizaciones futuras sin pagar ni un centavo más.",
  },
  {
    question: "¿Necesito saber de tecnología para usar el recetario?",
    answer: "Para nada. Es un PDF interactivo diseñado para ser usado desde el móvil. Abrir el archivo es tan fácil como abrir un mensaje de WhatsApp.",
  },
  {
    question: "¿Las recetas sirven para dietas saludables?",
    answer: "Sí. El enfoque principal es sabor con salud. Todas las recetas están diseñadas para reducir hasta un 80% el uso de aceites y grasas comparado con la cocina tradicional.",
  },
  {
    question: "¿Funciona si mi Air Fryer es de una marca específica (Ninja, Philips, etc.)?",
    answer: "Totalmente. El manual ha sido testeado en las marcas más populares del mercado. Las técnicas de calor circular funcionan igual en cualquier modelo de cesta o bandeja.",
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
            <AccordionTrigger className="font-bold text-dark-bg hover:no-underline text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;