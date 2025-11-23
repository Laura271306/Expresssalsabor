import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';

const SpecialOfferSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-dark-bg to-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8">
          🎁 OFERTA ESPECIAL – SOLO HOY
        </h2>

        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h3 className="font-sans text-2xl font-bold mb-6">Contenido del kit completo:</h3>
          <ul className="space-y-4 text-left mb-8">
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="font-sans text-lg">Libro digital con más de 600 recetas</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="font-sans text-lg">Acceso inmediato a todo el contenido</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="font-sans text-lg">Todos los bonos exclusivos</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3">✓</span>
              <span className="font-sans text-lg">Actualizaciones de por vida</span>
            </li>
          </ul>

          <div className="mb-8">
            <p className="font-sans text-xl mb-2">
              <span className="line-through text-gray-400">$97</span>
              <span className="text-green-500 text-3xl font-bold ml-4">$9.90</span>
            </p>
            <p className="font-sans text-xl text-green-500 font-bold">
              🟢 95% de descuento SOLO HOY
            </p>
          </div>

          <CtaButton className="text-xl px-8 py-4 mb-6">
            OBTENER ACCESO INMEDIATO
          </CtaButton>

          <p className="font-sans text-lg">
            Garantía de 7 días: Si no quedas satisfecho, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;