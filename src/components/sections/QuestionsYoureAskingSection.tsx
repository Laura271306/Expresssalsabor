"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuestionsYoureAskingSection = () => {
  const faqs = [
    {
      question: "¿Y si mi Air Fryer es de otra marca?",
      answer: "Funciona con cualquier modelo. Nuestros tiempos e temperaturas foram testados em 15 marcas diferentes."
    },
    {
      question: "¿Realmente funciona para principiantes?",
      answer: "Si sabes usar WhatsApp, puedes usar este método. Ninguém precisa ser chef para ter sucesso."
    },
    {
      question: "¿Cuánto tiempo necesito dedicar?",
      answer: "10-15 minutos por receta, sem preparação complexa. O tempo de cozinha é mínimo."
    }
  ];

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Perguntas que Você Está Fazendo
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Más preguntas? Contacta nosotras directamente
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default QuestionsYoureAskingSection;