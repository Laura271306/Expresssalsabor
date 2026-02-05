"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

const AirFryerTruthSection = () => {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          ¿Tu Air Fryer te está decepcionando?
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          No es tu culpa. La mayoría falla porque no conoce los tiempos exactos. 
          El resultado siempre es el mismo: carne seca, dura y postres crudos por dentro.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">❌</div>
            <h3 className="font-semibold mb-2">Antes</h3>
            <p className="text-gray-600">Carne seca, postres crudos, frustración</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold mb-2">Después</h3>
            <p className="text-gray-600">Carnes jugosas, postres perfectos, confianza</p>
          </div>
        </div>
        
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Descubre por qué tu Air Fryer no está funcionando como debería
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default AirFryerTruthSection;