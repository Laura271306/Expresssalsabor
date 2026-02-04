import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Clock, Users, Zap, AlertTriangle } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const UrgencyCounterSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30
  });
  const [spotsLeft, setSpotsLeft] = useState(17);
  const [salesToday, setSalesToday] = useState(89);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });

      // Simular redução de vagas
      if (Math.random() < 0.1 && spotsLeft > 0) {
        setSpotsLeft(prev => prev - 1);
      }

      // Simular aumento de vendas
      if (Math.random() < 0.2) {
        setSalesToday(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [spotsLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="bg-urgency-red text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <h2 className="font-sans text-2xl md:text-3xl font-bold uppercase">
              OFERTA POR TIEMPO LIMITADO
            </h2>
          </div>
          <p className="font-sans text-lg">
            ¡Últimas oportunidades para obtener el 95% de descuento!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contador */}
          <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="font-sans font-bold text-lg">Oferta Termina En:</h3>
            </div>
            <div className="flex justify-center gap-2">
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="font-serif text-3xl font-bold">{formatTime(timeLeft.hours)}</div>
                <div className="font-sans text-xs uppercase">Horas</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="font-serif text-3xl font-bold">{formatTime(timeLeft.minutes)}</div>
                <div className="font-sans text-xs uppercase">Minutos</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                <div className="font-serif text-3xl font-bold">{formatTime(timeLeft.seconds)}</div>
                <div className="font-sans text-xs uppercase">Segundos</div>
              </div>
            </div>
          </div>

          {/* Vagas restantes */}
          <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6" />
              <h3 className="font-sans font-bold text-lg">Vagas Restantes:</h3>
            </div>
            <div className="text-5xl font-bold text-yellow-300 mb-2">{spotsLeft}</div>
            <p className="font-sans text-sm">
              {spotsLeft <= 5 ? '¡Corre, se están agotando!' : 'Aún hay disponibles'}
            </p>
          </div>

          {/* Vendas hoje */}
          <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6" />
              <h3 className="font-sans font-bold text-lg">Vendas Hoje:</h3>
            </div>
            <div className="text-5xl font-bold text-green-300 mb-2">{salesToday}</div>
            <p className="font-sans text-sm">
              {salesToday >= 100 ? '¡Incrível!' : 'Pessoas transformando suas cozinhas'}
            </p>
          </div>
        </div>

        <div className="text-center">
          <CtaButton href={CHECKOUT_LINK} variant="final" className="text-2xl px-12 py-6 animate-pulse">
            ¡RESERVA MI AHORRA AHORA!
          </CtaButton>
          <p className="font-sans text-sm mt-4 text-yellow-200">
            ⚠️ Las ofertas se agotan rápido. No esperes a que sea tarde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCounterSection;