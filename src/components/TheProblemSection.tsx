import React from 'react';
import { cn } from '@/lib/utils';
import { XCircle, CheckCircle } from 'lucide-react';

const TheProblemSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-urgency-red">
          ❌ El problema no es tu air fryer.
        </h2>

        {/* Problem Box (Darker background, red border/highlights) */}
        <div className="bg-[#282425] rounded-xl p-8 mb-12 shadow-xl border border-urgency-red/50">
          <h3 className="font-sans text-2xl font-bold mb-6 text-urgency-red flex items-center justify-center">
            <XCircle className="w-6 h-6 mr-3" /> Problemas más comunes:
          </h3>
          <ul className="space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Patatas blandas</span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Carnes sin punto</span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Faltan tiempos y temperaturas</span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Recetas que siempre fallan</span>
            </li>
          </ul>
        </div>

        {/* Truth Box (CTA Primary background) */}
        <div className="bg-cta-primary/20 rounded-xl p-8 shadow-2xl shadow-cta-primary/30 border border-cta-primary">
          <h3 className="font-sans text-2xl font-bold mb-4 text-cta-primary flex items-center justify-center">
            <CheckCircle className="w-6 h-6 mr-3" /> La verdad:
          </h3>
          <p className="font-sans text-xl text-white">
            La air fryer funciona bien, solo necesitas el método correcto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblemSection;