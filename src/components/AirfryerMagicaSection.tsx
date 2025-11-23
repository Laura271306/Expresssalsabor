import React from 'react';
import { cn } from '@/lib/utils';
import { CookingPot, Check } from 'lucide-react';

const AirfryerMagicaSection: React.FC = () => {
  const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start mb-3">
      <Check className="w-6 h-6 mr-3 text-cta-primary flex-shrink-0 mt-1" />
      <span className="font-sans text-lg text-gray-700 leading-snug">{children}</span>
    </li>
  );

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-6">
            AIRFRYER MÁGICA
          </h2>
          <h3 className="font-sans text-2xl font-bold text-dark-bg mb-6">
            +600 Recetas Fáciles, Rápidas y 100% Saludables
          </h3>
          
          <p className="font-sans text-xl text-gray-700 mb-6 leading-relaxed">
            El recetario digital definitivo para aprovechar al máximo tu freidora de aire y sorprender a tu familia con resultados profesionales en minutos.
          </p>

          <ul className="list-none p-0">
            <CheckItem>
              <span className="font-bold text-cta-primary">+600 recetas sin gluten y sin aceite</span> – desde desayunos rápidos hasta cenas completas y sobremesas deliciosas, para todos los gustos y edades.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Instrucciones paso a paso con fotos y horarios exactos</span> – sigue fácilmente cada preparación sin complicaciones.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Valores nutricionales calculados</span> – cuida tu salud sin renunciar al sabor.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Lista de compras inteligente</span> – sabe exactamente qué comprar y en qué cantidad.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Menú de 1 mes programado</span> – comida planificada para todo el mes, sin estrés.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Compatible con cualquier modelo de Airfryer</span> – no importa cuál tengas, ¡funciona igual!
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Entrega inmediata</span> – recibe el material al instante y empieza a cocinar hoy mismo.
            </CheckItem>
          </ul>
        </div>
        
        {/* Image (40% desktop) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Realistic Image Placeholder: Air Fryer with crispy food */}
            <div className="bg-gray-300 h-[500px] rounded-xl shadow-2xl border-4 border-gray-400 flex items-center justify-center p-8">
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