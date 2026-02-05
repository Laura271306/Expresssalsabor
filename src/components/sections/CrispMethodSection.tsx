"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

const CrispMethodSection = () => {
  const steps = [
    { title: "C", description: "Calentamiento exacto" },
    { title: "R", description: "Reparto uniforme" },
    { title: "I", description: "Intensidad controlada" },
    { title: "S", description: "Secado perfecto" },
    { title: "P", description: "Punto ideal" }
  ];

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          El Método C.R.I.S.P. que los Chefs Usan
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Con Expreso al Sabor, dominas la técnica. Aprende a preparar carnes increíblemente 
          jugosas y doradas en su punto exacto. Y no solo eso. Imagina hacer postres gourmet 
          en 12 minutos o comidas completas para toda tu familia sin ensuciar mil ollas.
        </p>
        
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">{step.title}</div>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">
            🎯 El secreto está en los <span className="text-blue-600">tiempos exactos</span>
          </p>
          <p className="text-blue-700">
            Cada receta incluye tiempos y temperaturas perfectamente calculados
          </p>
        </div>
        
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Aprende el método que los chefs usan en casa
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default CrispMethodSection;