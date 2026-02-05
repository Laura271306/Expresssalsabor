"use client";

import React from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';

export const BonusParticipationSection = () => {
  return (
    <SectionWrapper className="bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
          <span className="text-2xl mr-2">🎁</span>
          <span className="font-semibold">Bônus Exclusivo</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-yellow-800">
          Complete o Quiz e Receba um Guia Grátis
        </h2>
        <p className="text-xl text-yellow-600 mb-8 leading-relaxed">
          Complete o quiz e receba grátis o guia "5 Erros que Arruinan Suas Receitas" - 
          o mesmo mencionado nos reels. Aprenda com os erros mais comuns e comece a acertar desde o primeiro dia.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-yellow-700">O que você vai receber:</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Checklist dos 5 erros que arruinam suas receitas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dicas de especialistas para cada erro
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Soluções práticas e imediatas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Acesso ao grupo exclusivo de suporte
                </li>
              </ul>
            </div>
            <div>
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-600">
                Este guia é o mesmo que mencionamos nos reels e já ajudou milhares de pessoas a transformarem suas receitas.
              </p>
            </div>
          </div>
        </div>
        
        <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
          Quero meu guia grátis agora
        </Button>
      </div>
    </SectionWrapper>
  );
};