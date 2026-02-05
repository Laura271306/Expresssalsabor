import React from 'react';
import UrgencyBanner from '@/components/UrgencyBanner';
import CtaButton from '@/components/CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Banner de urgência */}
      <UrgencyBanner />
      
      {/* Seção principal - Mobile-first */}
      <section className="bg-dark-bg text-white py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          {/* Headline forte e curta */}
          <h1 className="font-sans text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Tu Air Fryer no está rota. Solo estabas cocinando sin la guía correcta.
          </h1>
          
          {/* Subheadline */}
          <p className="font-sans text-lg mb-6 text-gray-300">
            600+ recetas fáciles y probadas en Air Fryer para personas reales.
          </p>
          
          {/* Preço visível cedo */}
          <div className="bg-cta-primary/20 rounded-xl p-4 mb-6 border border-cta-primary">
            <p className="font-sans text-3xl font-bold text-urgency-red mb-2">
              USD 6,90
            </p>
            <p className="font-sans text-sm text-gray-300">
              Menos que una comida rápida. Más que un cambio en tu vida.
            </p>
          </div>
          
          {/* CTA principal */}
          <CtaButton href={CHECKOUT_LINK} className="w-full text-lg py-4 mb-4">
            Quiero mi acceso ahora
          </CtaButton>
          <p className="text-xs text-gray-400">
            Acceso inmediato. Garantía de 7 días.
          </p>
        </div>
      </section>
      
      {/* Identificação com a dor */}
      <section className="bg-light-bg py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            ¿Te sientes identificado?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-sans text-gray-700">
                <span className="font-bold text-urgency-red">•</span> Llegas a casa cansado y no sabes qué cocinar
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-sans text-gray-700">
                <span className="font-bold text-urgency-red">•</span> Pasas horas buscando recetas en Google que nunca funcionan
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-sans text-gray-700">
                <span className="font-bold text-urgency-red">•</span> Tu Air Fryer está acumulando polvo porque no sabes usarla
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transformação (antes x depois) */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            Tu vida antes y después
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-urgency-red/10 p-4 rounded-lg border border-urgency-red">
              <h3 className="font-sans font-bold text-urgency-red mb-2">Antes</h3>
              <p className="font-sans text-sm text-gray-700">
                Confusión, improvisación, comida poco saludable y frustración.
              </p>
            </div>
            <div className="bg-cta-primary/10 p-4 rounded-lg border border-cta-primary">
              <h3 className="font-sans font-bold text-cta-primary mb-2">Después</h3>
              <p className="font-sans text-sm text-gray-700">
                Todo listo, rápido, fácil y delicioso. ¡En solo 10-15 minutos!
              </p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} className="w-full">
            Quiero el después, no el antes
          </CtaButton>
        </div>
      </section>
      
      {/* Posicionamento como SISTEMA */}
      <section className="bg-dark-bg text-white py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold mb-6 text-center">
            No es solo un libro de recetas. Es un SISTEMA completo.
          </h2>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">+600 recetas Air Fryer probadas</span>
            </li>
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">Recetas sin glúten y sin aceite</span>
            </li>
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">Recetas de doces y sobremesas</span>
            </li>
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">Lista de compras inteligente</span>
            </li>
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">Calendario de cocina para 30 días</span>
            </li>
            <li className="flex items-center">
              <span className="text-highlight-gold mr-2">✓</span>
              <span className="font-sans">Guía de errores comunes de Air Fryer</span>
            </li>
          </ul>
          
          <CtaButton href={CHECKOUT_LINK} className="w-full bg-highlight-gold hover:bg-yellow-600 text-dark-bg">
            Quiero el sistema completo
          </CtaButton>
        </div>
      </section>
      
      {/* Quebra de objeções */}
      <section className="bg-light-bg py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            ¿Buscar en Google no es más fácil?
          </h2>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
            <p className="font-sans text-gray-700 mb-3">
              En Google pierdes horas buscando, comparando y filtrando recetas que rara vez funcionan en tu Air Fryer.
            </p>
            <p className="font-sans font-bold text-cta-primary">
              Con Expreso al Sabor, tienes todo en un solo lugar. Sin complicaciones.
            </p>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} className="w-full">
            Es más fácil con el sistema
          </CtaButton>
        </div>
      </section>
      
      {/* Facilidade de uso */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold text-dark-bg mb-6 text-center">
            ¿Cómo funciona?
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mr-3 flex-shrink-0">
                1
              </div>
              <p className="font-sans text-gray-700">Accedes inmediatamente después de pagar</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mr-3 flex-shrink-0">
                2
              </div>
              <p className="font-sans text-gray-700">Funciona en celular, tablet y computadora</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mr-3 flex-shrink-0">
                3
              </div>
              <p className="font-sans text-gray-700">No necesitas instalar nada</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} className="w-full">
            Quiero probar ahora
          </CtaButton>
        </div>
      </section>
      
      {/* Segurança */}
      <section className="bg-dark-bg text-white py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-xl font-bold mb-6 text-center">
            Compra con total seguridad
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mr-3 flex-shrink-0">
                ✓
              </div>
              <p className="font-sans">Pago procesado por Hotmart (plataforma segura)</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mr-3 flex-shrink-0">
                ✓
              </div>
              <p className="font-sans">Garantía de 7 días: si no te gusta, devolvemos tu dinero</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mr-3 flex-shrink-0">
                ✓
              </div>
              <p className="font-sans">Acceso de por vida a todas las actualizaciones</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} className="w-full bg-highlight-gold hover:bg-yellow-600 text-dark-bg">
            Quero comprar com segurança
          </CtaButton>
        </div>
      </section>
      
      {/* Fechamento emocional */}
      <section className="bg-cta-primary py-12 px-6">
        <div className="max-w-md mx-auto text-center text-white">
          <h2 className="font-sans text-xl font-bold mb-4">
            No lo pienses demasiado
          </h2>
          <p className="font-sans mb-4">
            Es menos que una comida rápida. Más que un cambio en tu cocina.
          </p>
          <p className="font-sans mb-6">
            Si no te gusta, pides reembolso. Sin preguntas.
          </p>
          
          <CtaButton href={CHECKOUT_LINK} variant="final" className="w-full text-lg py-4">
            Acceder ahora por USD 6,90
          </CtaButton>
          
          <p className="text-xs mt-4 opacity-80">
            *Oferta válida solo por 24 horas
          </p>
        </div>
      </section>
      
      {/* Rodapé */}
      <footer className="bg-dark-bg text-white py-8 px-6 text-center">
        <p className="font-sans text-sm text-gray-400">
          © 2024 Expreso al Sabor. Todos los derechos reservados.
        </p>
        <p className="font-sans text-xs text-gray-500 mt-2">
          Producto digital. No se envía físico.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;