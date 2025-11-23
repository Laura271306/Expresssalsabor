import React from 'react';
import { cn } from '@/lib/utils';
import { CookingPot } from 'lucide-react';

const AirfryerMagicaSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-6">
            AirFryer Mágica
          </h2>
          <p className="font-sans text-xl text-gray-700 mb-6 leading-relaxed">
            Más de <span className="font-bold text-cta-primary">600 recetas</span> diseñadas específicamente para tu Air Fryer. 
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
          {/* Realistic Image Placeholder: Air Fryer with crispy food */}
          <div className="relative w-full max-w-md">
            <div className="bg-gray-300 h-80 rounded-xl shadow-2xl border-4 border-gray-400 flex items-center justify-center p-8">
              <div className="text-center">
                <CookingPot className="w-16 h-16 text-dark-bg mx-auto mb-4" />
                <h3 className="font-sans text-2xl font-bold text-dark-bg mb-2">Comida Crocante</h3>
                <p className="font-sans text-lg text-gray-700">Placeholder: Foto de Air Fryer con batatas fritas doradas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirfryerMagicaSection;