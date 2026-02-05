"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

export const ImagineInYourKitchenSection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Imagine Isso na Sua Cozinha
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Imagina: llegar a casa y tener una deliciosa cena lista en 15 minutos. 
          Ver la cara de felicidad de tu familia. Recuperar tu tiempo. 
          Eso es lo que te espera con Expreso al Sabor.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="font-semibold mb-2">15 Minutos</h3>
            <p className="text-gray-600">Comida pronta na mesa enquanto outros ainda estão preparando</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="font-semibold mb-2">Família Feliz</h3>
            <p className="text-gray-600">Receitas que agradam a todos, desde crianças a adultos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="font-semibold mb-2">Confiança na Cozinha</h3>
            <p className="text-gray-600">Nunca mais se sentir perdido ou frustrado com suas receitas</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-lg text-gray-700 mb-4">
            "A Air Fryer finalmente se torna sua aliada, não mais um adorno na cozinha."
          </p>
          <p className="text-sm text-gray-500">
            - O que centenas de clientes já estão experimentando
          </p>
        </div>
        
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
          Empieza a transformar tu cocina hoy
        </Button>
      </div>
    </SectionWrapper>
  );
};