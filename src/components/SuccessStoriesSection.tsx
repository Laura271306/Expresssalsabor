import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Clock, Users, Award, Star, Zap } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

interface SuccessStory {
  name: string;
  age: string;
  location: string;
  before: string;
  after: string;
  timeSaved: string;
  emotionalImpact: string;
  avatar: string;
}

const SuccessStoriesSection: React.FC = () => {
  const stories: SuccessStory[] = [
    {
      name: "María González",
      age: "32 años",
      location: "Madrid",
      before: "Llegaba cansada del trabajo y no tenía energía para cocinar. Terminaba pidiendo delivery caro y poco saludable.",
      after: "Ahora preparo cenas deliciosas en 15 minutos. Mi familia está más sana y yo tengo tiempo para jugar con mis hijos.",
      timeSaved: "12 horas por semana",
      emotionalImpact: "Recuperé mi tiempo libre y mi sonrisa",
      avatar: "/images/success/maria.jpg"
    },
    {
      name: "Carlos Rodríguez",
      age: "45 años",
      location: "Barcelona",
      before: "Odía cocinar porque siempre me salía mal. Mi esposa se quejaba de que nunca comíamos bien en casa.",
      after: "Mis recetas ahora son el orgullo de la familia. Mi esposa me dice que soy un 'chef secreto'.",
      timeSaved: "8 horas por semana",
      emotionalImpact: "Recuperé la confianza en mí mismo",
      avatar: "/images/success/carlos.jpg"
    },
    {
      name: "Ana López",
      age: "28 años",
      location: "Valencia",
      before: "Era soltera y comía comida basura porque no sabía cocinar para una persona. Me sentía sola y triste.",
      after: "Ahora cocino para mí misma con amor. Me siento más sana, más feliz y hasta invito amigos a cenar.",
      timeSaved: "10 horas por semana",
      emotionalImpact: "Me volví más independiente y feliz",
      avatar: "/images/success/ana.jpg"
    },
    {
      name: "José Martínez",
      age: "38 años",
      location: "Sevilla",
      before: "Tenía sobrepeso y no tenía tiempo para hacer ejercicio. La comida rápida era mi enemigo.",
      after: "Bajé 8 kilos en 2 meses. Tengo más energía para mi familia y me siento más joven y vital.",
      timeSaved: "14 horas por semana",
      emotionalImpact: "Recuperé mi salud y mi vitalidad",
      avatar: "/images/success/jose.jpg"
    }
  ];

  const impactStats = [
    { icon: <Clock className="w-6 h-6" />, value: "2,500+", label: "Horas recuperadas esta semana" },
    { icon: <Heart className="w-6 h-6" />, value: "1,800+", label: "Familias más felices" },
    { icon: <Users className="w-6 h-6" />, value: "95%", label: "Mejora en la calidad de vida" },
    { icon: <Award className="w-6 h-6" />, value: "4.9/5", label: "Satisfacción emocional" }
  ];

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            HISTORIAS QUE CAMBIAN VIDAS
          </h2>
          <p className="font-sans text-xl text-gray-700">
            No son solo números, son personas reales que recuperaron su tiempo, su salud y su felicidad
          </p>
        </div>

        {/* Estadísticas emocionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-cta-primary mb-2">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                {stat.icon}
                <span className="font-sans text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Histórias de sucesso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={story.avatar} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-sans text-xl font-bold text-dark-bg">{story.name}</h3>
                  <p className="font-sans text-sm text-gray-600">{story.age} • {story.location}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-urgency-red">
                  <h4 className="font-sans font-bold text-urgency-red mb-2">ANTES:</h4>
                  <p className="font-sans text-gray-700 italic">"{story.before}"</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-cta-primary">
                  <h4 className="font-sans font-bold text-cta-primary mb-2">DESPUÉS:</h4>
                  <p className="font-sans text-gray-700 italic">"{story.after}"</p>
                </div>

                <div className="flex items-center justify-between bg-highlight-gold/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-highlight-gold" />
                    <span className="font-sans font-bold text-highlight-gold">{story.timeSaved}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-cta-primary" />
                    <span className="font-sans font-bold text-cta-primary">{story.emotionalImpact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem emocional */}
        <div className="bg-gradient-to-r from-cta-primary/10 to-highlight-gold/10 rounded-2xl p-8 border border-highlight-gold/30 text-center">
          <h3 className="font-serif text-3xl font-bold text-dark-bg mb-4">
            🌟 ¿Cuál será tu historia?
          </h3>
          <p className="font-sans text-xl text-gray-700 mb-6">
            Miles de personas como tú han transformado su relación con la comida. 
            ¿Estás lista para escribir tu propia historia de éxito?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-cta-primary mb-2">⏰ Más Tiempo</h4>
              <p className="font-sans text-sm text-gray-700">Para lo que realmente importa</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">💪 Más Salud</h4>
              <p className="font-sans text-sm text-gray-700">Cuerpo y mente en equilibrio</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-mint-green mb-2">❤️ Más Felicidad</h4>
              <p className="font-sans text-sm text-gray-700">Compartiendo momentos especiales</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} variant="primary" className="text-2xl px-12 py-6">
            ¡QUIERO ESCRIBIR MI HISTORIA!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;