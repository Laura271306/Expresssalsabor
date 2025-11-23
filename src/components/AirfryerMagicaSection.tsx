import React from 'react';
import { cn } from '@/lib/utils';

const AirfryerMagicaSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-dark-bg mb-6">
            AirFryer Mágica
          </h2>
          <p className="font-sans text-xl text-gray-700 mb-6">
            Más de 600 recetas diseñadas específicamente para tu Air Fryer. 
            Desde desayunos rápidos hasta cenas completas, postres irresistibles 
            y carnes jugosas. Cada receta incluye tiempos exactos y temperaturas 
            optimizadas para resultados perfectos.
          </p>
          <p className="font-sans text-xl text-gray-700">
            Transforma tu Air Fryer en una máquina de cocina profesional y sorprende 
            a tu familia con platos deliciosos y saludables en minutos.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-200 rounded-lg p-8 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">🍟</div>
              <h3 className="font-sans text-2xl font-bold text-dark-bg mb-2">Comida Crocante</h3>
              <p className="font-sans text-lg text-gray-700">Air Fryer en acción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirfryerMagicaSection;