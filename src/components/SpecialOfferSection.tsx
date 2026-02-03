import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Gift, Check } from 'lucide-react';

const SpecialOfferSection: React.FC = () => {
  const valueStack = [
    { item: "Recetario Airfryer Mágica (+600 Recetas)", value: "$39.00" },
    { item: "Guía de Compras Inteligentes (Bono 1)", value: "$15.00" },
    { item: "Tabla de Tiempos y Temperaturas (Bono 2)", value: "$10.00" },
    { item: "Paquete de Bônus Exclusivos (Bono 3, 4, 5, 6, 7)", value: "$3.50" },
  ];

  const totalValue = 67.50; 
  const finalPrice = 6.90;
  const discountPercentage = 90; // Calculado como 89.77%, arredondado para 90%

  return (
    <section id="link-ancoragem" className="bg-dark-bg text-white py-20 px-6 border-t border-highlight-gold/20">
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-highlight-gold text-left">
          OFERTA ESPECIAL
        </h2>
        <p className="font-sans text-lg font-bold mb-8 text-urgency-red text-left">
          ▲ SOLO HOY - OFERTA LIMITADA A 12 VAGAS
        </p>

        {/* Main Offer Card (Light interior) */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-[0_0_40px_rgba(0,170,84,0.3)] border-4 border-cta-primary text-dark-bg text-center">
          
          {/* Image Placeholder */}
          <img 
            src="/images/kit-mockup-main.jpeg" 
            alt="Mockup del Kit Completo AirFryer" 
            className="w-full h-48 object-cover rounded-lg mb-6"
            loading="lazy"
          />

          <h3 className="font-serif text-2xl font-bold mb-4 text-dark-bg text-left">
            Valor Total del Kit Completo: <span className="line-through text-gray-500">${totalValue.toFixed(2)}</span>
          </h3>

          {/* Detailed Value Stack */}
          <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300 text-left">
            {valueStack.map((item, index) => (
              <div key={index} className="flex justify-between font-sans text-base text-gray-700 py-1 border-b border-gray-200 last:border-b-0">
                <span>{item.item}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          
          {/* Price Highlight */}
          <div className="mb-6 p-4 bg-cta-primary/10 rounded-lg border border-cta-primary">
            <p className="font-sans text-xl mb-2 text-dark-bg">
              <span className="line-through text-gray-500">Valor total: ${totalValue.toFixed(2)}</span>
            </p>
            <p className="font-sans text-3xl text-urgency-red font-bold">
              🔥 Hoy solo: ${finalPrice.toFixed(2)}
            </p>
          </div>
          
          {/* 90% Destacado */}
          <p className="font-sans text-8xl font-extrabold text-urgency-red mb-2 leading-none">
            {discountPercentage}%
          </p>
          <p className="font-sans text-2xl font-bold text-cta-primary mb-6">
            DE DESCUENTO
          </p>

          <CtaButton href="https://pay.hotmart.com/I102633587P?off=y7ekz10e&checkoutMode=10" className="text-xl px-8 py-4 mb-2 mx-auto">
            SÍ, QUIERO MIS RECETAS AHORA
          </CtaButton>
          <p className="text-[12px] text-gray-600 text-center font-sans font-bold mb-4">
            Si no te facilita la vida, no te quedes con esto.
          </p>

          <p className="font-sans text-sm text-gray-600 mb-6">
            {discountPercentage}% de descuento – acceso inmediato con pago único
          </p>
          
          {/* Guarantee Box */}
          <div className="bg-gray-900 p-4 rounded-lg text-white border border-highlight-gold/50 text-left">
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 text-highlight-gold flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-lg">Garantía de 7 Días</h4>
                <p className="font-sans text-sm">
                  Pruébalo durante 7 días sin riesgo. Si no te convence el contenido, te devolvemos tu dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary CTA */}
        <p className="font-sans text-lg text-gray-400 mb-4 text-left">
          ¿Aún no estás seguro? Mira lo que dicen nuestros clientes satisfechos 👇
        </p>
        <div className="text-left">
          <CtaButton href="https://pay.hotmart.com/I102633587P?off=y7ekz10e&checkoutMode=10" className="text-xl px-8 py-4 bg-cta-primary hover:bg-green-600 shadow-cta-primary/50">
            ACCEDER AHORA - {discountPercentage}% OFF
          </CtaButton>
          <p className="text-[12px] text-gray-500 font-sans mt-2">
            El riesgo no es tuyo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;