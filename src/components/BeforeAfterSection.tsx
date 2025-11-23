import React from 'react';
import { cn } from '@/lib/utils';

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          ANTES Y DESPUÉS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Antes */}
          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-8">
            <h3 className="font-sans text-2xl font-bold text-red-700 mb-6 text-center">
              🔻 Antes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="font-sans text-lg">Recetas blandas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="font-sans text-lg">Resultados impredecibles</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">•</span>
                <span className="font-sans text-lg">Mucha frustración</span>
              </li>
            </ul>
          </div>

          {/* Después */}
          <div className="bg-green-100 border-2 border-green-300 rounded-lg p-8">
            <h3 className="font-sans text-2xl font-bold text-green-700 mb-6 text-center">
              🔺 Después
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="font-sans text-lg">Crocancia perfecta</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="font-sans text-lg">10–15 minutos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span className="font-sans text-lg">Resultados garantizados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;