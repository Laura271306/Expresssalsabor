import React from 'react';
import { cn } from '@/lib/utils';
import { Users, MessageCircle, Award, Star, Heart, Share2 } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const CommunitySection: React.FC = () => {
  const communityStats = [
    { icon: <Users className="w-6 h-6" />, value: "2,340+", label: "Miembros Activos" },
    { icon: <MessageCircle className="w-6 h-6" />, value: "15,000+", label: "Intercambios de Recetas" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfacción" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Calificación" }
  ];

  const benefits = [
    {
      title: "Grupo Exclusivo VIP",
      description: "Acceso a comunidad privada con chefs y expertos",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Sesiones en Vivo",
      description: "Clases semanales con chefs profesionales",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Recetas Exclusivas",
      description: "Contenido que no está disponible públicamente",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Soporte 24/7",
      description: "Ayuda instantánea de la comunidad y equipo",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sofía Martínez",
      avatar: "/images/community/sofia.jpg",
      text: "La comunidad es increíble. Siempre alguien que ayuda con dudas y compide recetas nuevas.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      avatar: "/images/community/carlos.jpg",
      text: "He aprendido más en el grupo que en años cocinando solo. ¡Recomiendo 100%!",
      rating: 5
    },
    {
      name: "Laura Gómez",
      avatar: "/images/community/laura.jpg",
      text: "Las sesiones en vivo son lo mejor. Pregunto directamente a los chefs.",
      rating: 5
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight-gold mb-4">
            COMUNIDAD EXCLUSIVA
          </h2>
          <p className="font-sans text-xl text-gray-300">
            Únete a miles de entusiastas de la Air Fryer que transforman sus cocinas
          </p>
        </div>

        {/* Estadísticas de la comunidad */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-[#282425] p-6 rounded-xl text-center border border-gray-700">
              <div className="text-3xl font-bold text-highlight-gold mb-2">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                {stat.icon}
                <span className="font-sans text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios de la comunidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="font-sans text-gray-400">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios de la comunidad */}
        <div className="mb-12">
          <h3 className="font-sans text-2xl font-bold text-white text-center mb-8">
            Lo que dicen nuestros miembros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#282425] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-white">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-highlight-gold text-highlight-gold' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-serif text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA para unirse */}
        <div className="bg-gradient-to-r from-cta-primary/20 to-highlight-gold/20 rounded-2xl p-8 border border-highlight-gold/30 text-center">
          <h3 className="font-sans text-3xl font-bold text-white mb-4">
            ¡Únete a la Comunidad Airfryer Mágica!
          </h3>
          <p className="font-sans text-xl text-gray-300 mb-6">
            Acceso inmediato a la comunidad VIP + todos los beneficios del Airfryer Mágica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-cta-primary" />
                <span className="font-sans font-bold text-white">Comunidad VIP</span>
              </div>
              <p className="font-sans text-sm text-gray-300">Grupo exclusivo de miembros</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-highlight-gold" />
                <span className="font-sans font-bold text-white">Recetas Exclusivas</span>
              </div>
              <p className="font-sans text-sm text-gray-300">Contenido no disponible públicamente</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-mint-green" />
                <span className="font-sans font-bold text-white">Certificado de Miembro</span>
              </div>
              <p className="font-sans text-sm text-gray-300">Reconocimiento especial</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} variant="final" className="text-2xl px-12 py-6">
            ¡QUIERO UNIRME A LA COMUNIDAD!
          </CtaButton>
          
          <p className="font-sans text-sm text-gray-400 mt-4">
            💡 Incluye acceso de por vida a la comunidad + todo el contenido del Airfryer Mágica
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;