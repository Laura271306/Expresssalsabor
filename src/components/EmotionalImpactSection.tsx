import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Clock, Users, Award, Star, Zap, Smile, Users2, Home } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const EmotionalImpactSection: React.FC = () => {
  const emotionalBenefits = [
    {
      icon: <Heart className="w-8 h-8 text-cta-primary" />,
      title: "Recuperar Tu Tiempo Libre",
      description: "Deja de ser esclavo de la cocina y recupera horas para ti",
      quote: "Por fin tengo tiempo para leer un libro o ver una serie sin sentirme culpable",
      color: "text-cta-primary",
      bgColor: "bg-cta-primary/10"
    },
    {
      icon: <Users2 className="w-8 h-8 text-highlight-gold" />,
      title: "Fortalecer La Familia",
      description: "Cenas en familia que crean recuerdos inolvidables",
      quote: "Mis hijos ahora piden que cocine en lugar de pedir delivery",
      color: "text-highlight-gold",
      bgColor: "bg-highlight-gold/10"
    },
    {
      icon: <Smile className="w-8 h-8 text-mint-green" />,
      title: "Recuperar Tu Confianza",
      description: "Sé el héroe de tu cocina y sorprende a tu familia",
      quote: "Por fin me siento orgulloso de lo que preparo en casa",
      color: "text-mint-green",
      bgColor: "bg-mint-green/10"
    },
    {
      icon: <Home className="w-8 h-8 text-urgency-red" />,
      title: "Transformar Tu Hogar",
      description: "Tu casa se convierte en el lugar más feliz",
      quote: "Mi cocina ahora es el centro de la casa, no el lugar que evito",
      color: "text-urgency-red",
      bgColor: "bg-urgency-red/10"
    }
  ];

  const emotionalStats = [
    { icon: <Clock className="w-6 h-6" />, value: "2,500+", label: "Horas recuperadas esta semana" },
    { icon: <Heart className="w-6 h-6" />, value: "1,800+", label: "Sonrisas recuperadas" },
    { icon: <Users className="w-6 h-6" />, value: "95%", label: "Mejora en relaciones familiares" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Satisfacción emocional" }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight-gold mb-4">
            EL IMPACTO QUE REALMENTE IMPORTA
          </h2>
          <p className="font-sans text-xl text-gray-300">
            No se trata solo de comida, se trata de transformar tu vida y la de tu familia
          </p>
        </div>

        {/* Estadísticas emocionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {emotionalStats.map((stat, index) => (
            <div key={index} className="bg-[#282425] p-6 rounded-xl text-center border border-gray-700">
              <div className="text-3xl font-bold text-highlight-gold mb-2">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                {stat.icon}
                <span className="font-sans text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios emocionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {emotionalBenefits.map((benefit, index) => (
            <div key={index} className="bg-[#282425] rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", benefit.bgColor)}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className={cn("font-sans text-2xl font-bold mb-2", benefit.color)}>
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-gray-300">{benefit.description}</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-gray-600">
                <p className="font-serif text-gray-300 italic leading-relaxed">
                  "{benefit.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* História emocional central */}
        <div className="bg-gradient-to-r from-cta-primary/20 to-highlight-gold/20 rounded-2xl p-12 border border-highlight-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white mb-6">
                🌟 La Transformación que Esperabas
              </h3>
              <p className="font-sans text-xl text-gray-300 mb-6 leading-relaxed">
                Imagina volver a casa después de un día largo y en lugar de estresarte pensando qué cocinar, 
                simplemente eliges una receta del Airfryer Mágica y en 15 minutos tienes una cena deliciosa 
                que tu familia amará.
              </p>
              <p className="font-sans text-xl text-gray-300 mb-6 leading-relaxed">
                Imagina tener tiempo extra para jugar con tus hijos, ver una película con tu pareja, 
                o simplemente relajarte con un buen libro. Todo esto es posible cuando dejas de luchar 
                con la cocina y empiezas a disfrutar de ella.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-cta-primary" />
                  <span className="font-sans text-lg text-white">Más tiempo para lo que realmente importa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users2 className="w-6 h-6 text-highlight-gold" />
                  <span className="font-sans text-lg text-white">Familia más unida y feliz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smile className="w-6 h-6 text-mint-green" />
                  <span className="font-sans text-lg text-white">Confianza renovada en ti mismo</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-8 rounded-xl">
                <h4 className="font-sans text-2xl font-bold text-white mb-4">
                  ¿Estás lista para esta transformación?
                </h4>
                <p className="font-sans text-gray-300 mb-6">
                  Miles de personas como tú ya han empezado su historia de éxito. 
                  ¿Será la próxima?
                </p>
                <CtaButton href={CHECKOUT_LINK} variant="final" className="text-xl px-8 py-4">
                  ¡QUIERO MI TRANSFORMACIÓN!
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalImpactSection;