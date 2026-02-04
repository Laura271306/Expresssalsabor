import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Calculator, Clock, DollarSign, Utensils, Zap } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const SavingsCalculatorSection: React.FC = () => {
  const [cookingFrequency, setCookingFrequency] = useState(3);
  const [peopleFed, setPeopleFed] = useState(4);
  const [deliveryFrequency, setDeliveryFrequency] = useState(2);
  const [deliveryCost, setDeliveryCost] = useState(15);

  const calculateSavings = () => {
    const timePerMeal = 25; // minutos ahorrados por comida
    const timePerWeek = cookingFrequency * timePerMeal;
    const timePerMonth = timePerWeek * 4;
    const timePerYear = timePerMonth * 12;
    
    const deliveryCostPerWeek = deliveryFrequency * deliveryCost;
    const deliveryCostPerMonth = deliveryCostPerWeek * 4;
    const deliveryCostPerYear = deliveryCostPerMonth * 12;
    
    const totalTimeSaved = timePerYear;
    const totalMoneySaved = deliveryCostPerYear;
    
    return {
      timePerWeek,
      timePerMonth,
      timePerYear,
      deliveryCostPerWeek,
      deliveryCostPerMonth,
      deliveryCostPerYear,
      totalTimeSaved,
      totalMoneySaved
    };
  };

  const savings = calculateSavings();

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight-gold mb-4">
            CALCULA TU AHORRO
          </h2>
          <p className="font-sans text-xl text-gray-300">
            Descubre cuánto tiempo y dinero puedes ahorrar con el Airfryer Mágica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Calculadora */}
          <div className="bg-[#282425] rounded-2xl p-8 shadow-xl border border-gray-700">
            <h3 className="font-sans text-2xl font-bold text-white mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-highlight-gold" />
              Personaliza tu cálculo
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="font-sans text-gray-300 mb-2 block">
                  ¿Cuántas veces cocinas por semana?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={cookingFrequency}
                    onChange={(e) => setCookingFrequency(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-sans font-bold text-highlight-gold text-xl w-12 text-center">
                    {cookingFrequency}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-sans text-gray-300 mb-2 block">
                  ¿Cuántas personas alimentas?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={peopleFed}
                    onChange={(e) => setPeopleFed(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-sans font-bold text-highlight-gold text-xl w-12 text-center">
                    {peopleFed}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-sans text-gray-300 mb-2 block">
                  ¿Cuántas veces por semana pides delivery?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="7"
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-sans font-bold text-highlight-gold text-xl w-12 text-center">
                    {deliveryFrequency}
                  </span>
                </div>
              </div>

              <div>
                <label className="font-sans text-gray-300 mb-2 block">
                  Costo promedio por delivery ($)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={deliveryCost}
                    onChange={(e) => setDeliveryCost(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-sans font-bold text-highlight-gold text-xl w-12 text-center">
                    ${deliveryCost}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cta-primary/20 to-highlight-gold/20 rounded-2xl p-8 border border-highlight-gold/30">
              <h3 className="font-sans text-2xl font-bold text-white mb-6 text-center">
                Tus Resultados de Ahorro
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-cta-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-cta-primary" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-white mb-2">Tiempo Ahorrado</h4>
                  <p className="font-serif text-3xl font-bold text-cta-primary mb-1">
                    {formatTime(savings.timePerYear)}
                  </p>
                  <p className="font-sans text-sm text-gray-300">
                    al año
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-highlight-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-highlight-gold" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-white mb-2">Dinero Ahorrado</h4>
                  <p className="font-serif text-3xl font-bold text-highlight-gold mb-1">
                    ${savings.totalMoneySaved}
                  </p>
                  <p className="font-sans text-sm text-gray-300">
                    al año
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="font-sans text-gray-300 mb-4">
                  Con el Airfryer Mágica, recuperarás tiempo valioso y ahorrarás dinero cada mes.
                </p>
                <div className="bg-urgency-red/20 p-4 rounded-lg border border-urgency-red/50">
                  <p className="font-sans font-bold text-urgency-red">
                    💡 Inversión: Solo $6.90 | Retorno: ${savings.totalMoneySaved} al año
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#282425] rounded-2xl p-6 border border-gray-700">
              <h4 className="font-sans text-lg font-bold text-white mb-4 flex items-center">
                <Utensils className="w-5 h-5 mr-2 text-highlight-gold" />
                Beneficios Adicionales
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cta-primary" />
                  <span className="font-sans text-gray-300">Comida más saludable y nutritiva</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cta-primary" />
                  <span className="font-sans text-gray-300">Menos estrés y más tiempo libre</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cta-primary" />
                  <span className="font-sans text-gray-300">Familia feliz con comidas deliciosas</span>
                </li>
              </ul>
            </div>

            <CtaButton href={CHECKOUT_LINK} variant="final" className="w-full text-xl py-6">
              ¡QUIERO EMPEZAR AHORRA AHORA!
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculatorSection;