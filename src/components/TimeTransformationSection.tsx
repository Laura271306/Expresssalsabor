import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, Heart, Users, Award, Star, Zap, Calendar, Coffee, Book } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const TimeTransformationSection: React.FC = () => {
  const timeTransformations = [
    {
      icon: <Coffee className="w-8 h-8 text-cta-primary" />,
      title: "Mañanas Más Tranquilas",
      description: "Desayunos rápidos y saludables sin estrés",
      timeSaved: "30 minutos por día",
      activities: ["Desayuno en familia", "Tiempo para el café", "Preparación del almuerzo"],
      color: "text-cta-primary",
      bgColor: "bg-cta-primary/10"
    },
    {
      icon: <Clock className="w-8 h-8 text-highlight-gold" />,
      title: "Cenas Sin Estrés",
      description: "Cenas deliciosas en menos tiempo que pedir delivery",
      timeSaved: "45 minutos por día",
      activities: ["Cena en familia", "Tiempo para jugar", "Preparación del día siguiente"],
      color: "text-highlight-gold",
      bgColor: "bg-highlight-gold/10"
    },
    {
      icon: <Book className="w-8 h-8 text-mint-green" />,
      title: "Fin de Semanas Libres",
      description: "Más tiempo para hobbies y actividades familiares",
      timeSaved: "6 horas por semana",
      activities: ["Paseos en familia", "Juegos con niños", "Tiempo para ti"],
      color: "text-mint-green",
      bgColor: "bg-mint-green/10"
    },
    {
      icon: <Calendar className="w-8 h-8 text-urgency-red" />,
      title: "Semanas Más Productivas",
      description: "Más energía y enfoque para tus metas",
      timeSaved: "10 horas por semana",
      activities: ["Ejercicio", "Proyectos personales", "Desarrollo profesional"],
      color: "text-urgency-red",
      bgColor: "bg-urgency-red/10"
    }
  ];

  const weeklyImpact = [
    { day: "Lunes", hours: 2.5, activities: ["Desayuno", "Cena"] },
    { day: "Martes", hours: 2.0, activities: ["Desayuno", "Cena"] },
    { day: "Miércoles", hours: 2.5, activities: ["Desayuno", "Cena"] },
    { day: "Jueves", hours: 2.0, activities: ["Desayuno", "Cena"] },
    { day: "Viernes", hours: 3.0, activities: ["Desayuno", "Cena", "Brunch"] },
    { day: "Sábado", hours: 4.0, activities: ["Desayuno", "Almuerzo", "Cena"] },
    { day: "Domingo", hours: 3.5, activities: ["Desayuno", "Almuerzo", "Cena"] }
  ];

  const totalWeeklyHours = weeklyImpact.reduce((total, day) => total + day.hours, 0);

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            TRANSFORMA TU TIEMPO, TRANSFORMA TU VIDA
          </h2>
          <p className="font-sans text-xl text-gray-700">
            Cada hora recuperada es una oportunidad para vivir mejor
          </p>
        </div>

        {/* Impacto semanal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <h3 className="font-sans text-2xl font-bold text-dark-bg mb-6 text-center">
            ⏰ Tiempo Recuperado Esta Semana: <span className="text-3xl font-bold text-cta-primary">{totalWeeklyHours} horas</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {weeklyImpact.map((day, index) => (
              <div key={index} className="text-center">
                <div className="font-sans font-bold text-gray-700 mb-2">{day.day}</div>
                <div className="bg-cta-primary/20 rounded-lg p-4 mb-2">
                  <div className="text-2xl font-bold text-cta-primary">{day.hours}h</div>
                </div>
                <div className="space-y-1">
                  {day.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformações de tempo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {timeTransformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", transformation.bgColor)}>
                  {transformation.icon}
                </div>
                <div>
                  <h3 className={cn("font-sans text-2xl font-bold mb-2", transformation.color)}>
                    {transformation.title}
                  </h3>
                  <p className="font-sans text-gray-700 mb-3">{transformation.description}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-highlight-gold" />
                    <span className="font-sans font-bold text-highlight-gold">{transformation.timeSaved}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-sans font-bold text-gray-700 mb-3">¿Qué puedes hacer con ese tiempo?</h4>
                <div className="grid grid-cols-1 gap-2">
                  {transformation.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cta-primary rounded-full"></div>
                      <span className="font-sans text-sm text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem final */}
        <div className="bg-gradient-to-r from-cta-primary/10 to-highlight-gold/10 rounded-2xl p-8 border border-highlight-gold/30 text-center">
          <h3 className="font-serif text-3xl font-bold text-dark-bg mb-4">
            🌟 ¿Qué harás con tu tiempo recuperado?
          </h3>
          <p className="font-sans text-xl text-gray-700 mb-6">
            Cada semana recuperarás {totalWeeklyHours} horas para vivir la vida que siempre has querido.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-cta-primary mb-2">👨‍👩‍👧‍👦 Familia</h4>
              <p className="font-sans text-sm text-gray-700">Más tiempo juntos</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">🎯 Metas</h4>
              <p className="font-sans text-sm text-gray-700">Logra tus sueños</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-mint-green mb-2">💆‍♀️ Cuidado</h4>
              <p className="font-sans text-sm text-gray-700">Tiempo para ti</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} variant="primary" className="text-2xl px-12 py-6">
            ¡QUIERO MI TIEMPO DE VUELTA!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default TimeTransformationSection;