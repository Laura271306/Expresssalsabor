import React from 'react';
import { cn } from '@/lib/utils';

const TheProblemSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12">
          ❌ El problema no es tu air fryer.
        </h2>

        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h3 className="font-sans text-2xl font-bold mb-6">Problemas más comunes:</h3>
          <ul className="space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span className="font-sans text-xl">Patatas blandas</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span className="font-sans text-xl">Carnes sin punto</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span className="font-sans text-xl">Faltan tiempos y temperaturas</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3">•</span>
              <span className="font-sans text-xl">Recetas que siempre fallan</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-600 rounded-lg p-8">
          <h3 className="font-sans text-2xl font-bold mb-4">La verdad:</h3>
          <p className="font-sans text-xl">
            La air fryer funciona bien, solo necesitas el método correcto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblemSection;