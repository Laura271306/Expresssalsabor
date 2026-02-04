import React from 'react';
import { cn } from '@/lib/utils';
import { Play, Smartphone, Monitor, Tablet, Clock, CheckCircle } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const LiveDemoSection: React.FC = () => {
  const features = [
    {
      title: "Interfaz Intuitiva",
      description: "Diseñada para usar mientras cocinas",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Acceso Multiplataforma",
      description: "Usa en cualquier dispositivo",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Búsqueda Inteligente",
      description: "Encuentra recetas en segundos",
      icon: <Tablet className="w-6 h-6" />
    },
    {
      title: "Actualizaciones en Vivo",
      description: "Nuevo contenido constantemente",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight-gold mb-4">
            DEMOSTRACIÓN EN VIVO
          </h2>
          <p className="font-sans text-xl text-gray-300">
            Mira cómo funciona el Airfryer Mágica en acción
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <div className="relative group">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-highlight-gold/50">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cta-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cta-primary/30 transition-colors cursor-pointer">
                    <Play className="w-10 h-10 text-cta-primary" />
                  </div>
                  <p className="font-sans text-white font-bold">Ver Demo Completa</p>
                  <p className="font-sans text-gray-400 text-sm">3:45 minutos</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cta-primary text-white p-4 rounded-xl shadow-2xl rotate-[-3deg] font-bold">
              <p className="text-xs uppercase">Demostración Real</p>
              <p className="text-lg">Mira en Acción</p>
            </div>
          </div>

          {/* Características */}
          <div>
            <h3 className="font-sans text-3xl font-bold text-white mb-6">
              ¿Por qué funciona tan bien?
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-[#282425] p-4 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white mb-1">{feature.title}</h4>
                    <p className="font-sans text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cta-primary/10 p-6 rounded-xl border border-cta-primary/30 mb-8">
              <h4 className="font-sans font-bold text-cta-primary mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Prueba Gratuita
              </h4>
              <p className="font-sans text-gray-300">
                Accede a 5 recetas completamente gratis. Sin tarjeta de crédito requerida.
              </p>
            </div>

            <CtaButton href={CHECKOUT_LINK} variant="final" className="text-xl w-full">
              ¡QUIERO ACCESO COMPLETO!
            </CtaButton>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-16">
          <h3 className="font-sans text-2xl font-bold text-white text-center mb-8">
            Interfaces Disponibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#282425] p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-16 h-16 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="font-sans font-bold text-white mb-2">Móvil</h4>
              <p className="font-sans text-gray-400 text-sm">Ideal para usar mientras cocinas</p>
            </div>
            <div className="bg-[#282425] p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-16 h-16 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mx-auto mb-4">
                <Tablet className="w-8 h-8" />
              </div>
              <h4 className="font-sans font-bold text-white mb-2">Tablet</h4>
              <p className="font-sans text-gray-400 text-sm">Pantalla grande para fácil lectura</p>
            </div>
            <div className="bg-[#282425] p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-16 h-16 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mx-auto mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h4 className="font-sans font-bold text-white mb-2">Computadora</h4>
              <p className="font-sans text-gray-400 text-sm">Para planificación detallada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;