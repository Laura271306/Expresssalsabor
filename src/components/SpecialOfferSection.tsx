import React from 'react';
import CtaButton from './CtaButton';
import { ShieldCheck, Zap, Star } from 'lucide-react';
import { CHECKOUT_LINK } from '@/lib/constants';

const SpecialOfferSection: React.FC = () => {
  return (
    <section id="link-ancoragem" className="bg-white py-20 px-6 scroll-mt-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cta-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-dark-bg text-4xl md:text-6xl font-bold mb-4">
            TU NUEVA VIDA COMIENZA AQUÍ
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-highlight-gold text-highlight-gold" />)}
            <span className="ml-3 font-sans font-bold text-gray-500">(2,340+ Alumnos satisfechos)</span>
          </div>
        </div>

        <div className="bg-dark-bg rounded-3xl p-8 md:p-12 shadow-2xl relative border-4 border-highlight-gold">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-urgency-red text-white px-8 py-2 rounded-full font-bold text-lg animate-bounce">
            ¡ULTIMOS CUPOS DISPONIBLES!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-sans text-white text-2xl font-bold mb-6">LO QUE TE LLEVAS HOY:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                  <span>📗 Ebook Airfryer Mágica (+600 Recetas)</span>
                  <span className="text-white font-bold">$47</span>
                </li>
                <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                  <span>🎁 Bono: Guía de Compras Inteligentes</span>
                  <span className="text-cta-primary font-bold">GRATIS</span>
                </li>
                <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                  <span>🎁 Bono: Tabla de Tiempos y Temperaturas</span>
                  <span className="text-cta-primary font-bold">GRATIS</span>
                </li>
                <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                  <span>🎁 Bono: Menús Semanales Express</span>
                  <span className="text-cta-primary font-bold">GRATIS</span>
                </li>
              </ul>
              
              <div className="text-center md:text-left">
                <p className="text-gray-500 line-through text-xl">Precio Regular: $97 USD</p>
                <p className="text-highlight-gold text-5xl md:text-6xl font-black mt-2">
                  $6.90 <span className="text-xl font-normal">USD</span>
                </p>
                <p className="text-gray-400 text-sm mt-2 font-bold italic">* Pago único, acceso inmediato.</p>
              </div>
            </div>

            <div className="space-y-6">
              <CtaButton href={CHECKOUT_LINK} variant="final" className="w-full text-2xl py-8">
                SÍ, QUIERO EL ACCESO TOTAL
              </CtaButton>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <ShieldCheck className="w-6 h-6 mr-3 text-highlight-gold" />
                  Garantía incondicional de 7 días.
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Zap className="w-6 h-6 mr-3 text-orange-500" />
                  Acceso vía Hotmart (Plataforma 100% segura)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;