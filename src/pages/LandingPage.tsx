import React from 'react';
import { Check, Clock, Smartphone, ShieldCheck, Gift } from 'lucide-react';
import CtaButton from '../components/CtaButton';
import { CHECKOUT_LINK } from '../lib/constants';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Headline */}
      <section className="bg-dark-bg text-white py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Tu Air Fryer no está rota. Solo estabas cocinando sin la guía correcta.
          </h1>
          <p className="font-sans text-lg text-gray-300">
            600+ recetas, fáciles, probadas en Air Fryer, para personas reales.
          </p>
        </div>
      </section>

      {/* Price */}
      <section className="bg-cta-primary py-8 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="font-sans text-2xl font-bold text-white">
            Solo USD 6.90
          </p>
          <p className="font-sans text-sm text-white/80 mt-1">
            Menos que una comida rápida
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6">
            ¿Te identificas con esto?
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-urgency-red/10 rounded-full flex items-center justify-center text-urgency-red">
                <Clock className="w-5 h-5" />
              </div>
              <p className="font-sans text-gray-700">No sabes qué cocinar hoy</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-urgency-red/10 rounded-full flex items-center justify-center text-urgency-red">
                <Smartphone className="w-5 h-5" />
              </div>
              <p className="font-sans text-gray-700">Perdes horas buscando en Google</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-urgency-red/10 rounded-full flex items-center justify-center text-urgency-red">
                <Gift className="w-5 h-5" />
              </div>
              <p className="font-sans text-gray-700">Tu Air Fryer acumula polvo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-12 px-6 bg-light-bg">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-urgency-red">
              <h3 className="font-sans font-bold text-urgency-red mb-2">Antes</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-urgency-red">•</span>
                  <span className="font-sans">Confusión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-urgency-red">•</span>
                  <span className="font-sans">Improvisar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-urgency-red">•</span>
                  <span className="font-sans">Comida aburrida</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-cta-primary">
              <h3 className="font-sans font-bold text-cta-primary mb-2">Después</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cta-primary">•</span>
                  <span className="font-sans">Todo listo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta-primary">•</span>
                  <span className="font-sans">Rápido y fácil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cta-primary">•</span>
                  <span className="font-sans">Comida deliciosa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Benefits */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            Es un SISTEMA completo, no solo recetas
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">+600 recetas Air Fryer</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Recetas sin glúten y sin aceite</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Doces y sobremesas express</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Lista de compras inteligente</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Calendario de 30 días</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Guía de errores comunes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objection */}
      <section className="py-12 px-6 bg-light-bg">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-4 text-center">
            ¿Buscar en Google no es más fácil?
          </h2>
          <p className="font-sans text-gray-700 mb-6 text-center">
            En Google pierdes horas, frustras y la mayoría de las recetas no funcionan en tu Air Fryer.
          </p>
          <div className="bg-white p-4 rounded-lg border border-urgency-red">
            <p className="font-sans text-urgency-bold text-center">
              Con nuestro sistema, todo está en un solo lugar y funciona siempre.
            </p>
          </div>
        </div>
      </section>

      {/* Ease of Use */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            Muy fácil de usar
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Acceso inmediato en celular</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">No necesitas instalar nada</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <p className="font-sans text-gray-700">Funciona en tablet y computadora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-12 px-6 bg-light-bg">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            Compra segura
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-cta-primary" />
              <span className="font-sans text-gray-700">Hotmart</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-cta-primary" />
              <span className="font-sans text-gray-700">Plataforma segura</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-cta-primary" />
              <span className="font-sans text-gray-700">Garantía 7 días</span>
            </div>
          </div>
          <p className="font-sans text-gray-700 text-center">
            Si no te gusta, pides reembolso y te devolvemos el 100%
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-cta-primary">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-sans text-2xl font-bold text-white mb-6">
            ¿Listo para transformar tu Air Fryer?
          </h2>
          <CtaButton href={CHECKOUT_LINK} className="w-full text-lg py-4 mb-4">
            Quiero mi acceso ahora
          </CtaButton>
          <p className="font-sans text-white/90 text-sm">
            Acceder ahora por USD 6.90
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 px-6 bg-dark-bg text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-sans text-xl font-bold mb-4">
            No lo pienses demasiado
          </h2>
          <p className="font-sans text-gray-300 mb-4">
            Es menos que una comida rápida y te ahorra horas de frustración.
          </p>
          <p className="font-sans text-highlight-gold font-bold">
            Si no te gusta, pides reembolso. Sin preguntas.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <CtaButton href={CHECKOUT_LINK} className="w-full text-lg py-4 bg-urgency-red hover:bg-red-700">
            Sí, quiero mi acceso ahora
          </CtaButton>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;