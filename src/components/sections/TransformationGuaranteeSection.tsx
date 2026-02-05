"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

export const TransformationGuaranteeSection = () => {
  return (
    <SectionWrapper className="bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
          <span className="text-2xl mr-2">🛡️</span>
          <span className="font-semibold">Riesgo Cero</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-green-800">
          Garantía de Transformación
        </h2>
        <p className="text-xl text-green-600 mb-8 leading-relaxed">
          Garantía de 7 días: Si no transformas tu cocina, devolvemos 100%. 
          No tienes nada que perder, solo tiempo y sabor que ganar. 
          Es como tener un chef a tu lado mientras cocinas.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold mb-2">Devolución Total</h3>
            <p className="text-gray-600">Se não funcionar, devolvemos 100% do seu dinheiro</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold mb-2">Suporte Direto</h3>
            <p className="text-gray-600">Acesso ao nosso time de especialistas via WhatsApp</p>
          </div>
        </div>
        
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
          Experimente sem risco
        </Button>
      </div>
    </SectionWrapper>
  );
};