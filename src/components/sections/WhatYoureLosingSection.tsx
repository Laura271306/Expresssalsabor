"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

export const WhatYoureLosingSection = () => {
  return (
    <SectionWrapper className="bg-red-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-800">
          O Que Você Está Perdendo Realmente
        </h2>
        <p className="text-xl text-red-600 mb-8 leading-relaxed">
          Cansada de perder horas en la cocina para terminar comiendo pollo seco y sin sabor? 
          ¡Para todo! El problema no es tu Air Fryer, es cómo la usas. El error #1 es no saber 
          los tiempos exactos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-semibold mb-2 text-red-700">Horas Perdidas</h3>
            <p className="text-gray-600">Tempo que você nunca recuperará tentando receitas que não funcionam</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold mb-2 text-red-700">Dinheiro Desperdiciado</h3>
            <p className="text-gray-600">Ingredientes estragados e dinheiro gasto com delivery</p>
          </div>
        </div>
        
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
          Recupere seu tempo e sabor
        </Button>
      </div>
    </SectionWrapper>
  );
};