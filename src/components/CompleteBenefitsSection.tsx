import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, ShoppingBag, Clock, Calendar, Utensils, Heart, Zap, Award, CheckCircle } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const CompleteBenefitsSection: React.FC = () => {
  const benefits = [
    {
      category: "Ebooks Principales",
      items: [
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "Libro Principal Airfryer Mágica",
          description: "+600 recetas probadas paso a paso",
          value: "$47",
          bonus: true
        },
        {
          icon: <ShoppingBag className="w-6 h-6" />,
          title: "Guía de Compras Inteligente",
          description: "Lista organizada por categorías y porciones",
          value: "$25",
          bonus: true
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "Recetas Sin Aceite",
          description: "50+ opciones saludables y deliciosas",
          value: "$18",
          bonus: true
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Recetas Sin Gluten",
          description: "40+ alternativas seguras para celíacos",
          value: "$22",
          bonus: true
        },
        {
          icon: <Utensils className="w-6 h-6" />,
          title: "Libro de Postres Express",
          description: "30+ recetas en 10-15 minutos",
          value: "$15",
          bonus: true
        }
      ]
    },
    {
      category: "Herramientas Prácticas",
      items: [
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Tabla de Tiempos Exactos",
          description: "Por tipo de alimento y modelo de Air Fryer",
          value: "$20",
          bonus: true
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Plan Mensual Completo",
          description: "30 días de menús planificados y balanceados",
          value: "$30",
          bonus: true
        },
        {
          icon: <ShoppingBag className="w-6 h-6" />,
          title: "Lista de Compras Inteligente",
          description: "Calcula exactamente lo que necesitas por semana",
          value: "$12",
          bonus: true
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Guía de Técnicas Avanzadas",
          description: "Secretos de chefs profesionales para resultados perfectos",
          value: "$35",
          bonus: true
        }
      ]
    },
    {
      category: "Beneficios Exclusivos",
      items: [
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "Acceso de Por Vida",
          description: "Actualizaciones gratuitas para siempre",
          value: "ILIMITADO",
          bonus: false
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Compatibilidad Total",
          description: "Funciona con cualquier modelo y marca",
          value: "GARANTIZADO",
          bonus: false
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Entrega Inmediata",
          description: "Recibe todo el contenido hoy mismo",
          value: "INSTANTÁNEO",
          bonus: false
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Garantía de 7 Días",
          description: "Devolución sin preguntas ni complicaciones",
          value: "SEGURO",
          bonus: false
        }
      ]
    }
  ];

  const totalValue = benefits.reduce((total, category) => {
    return total + category.items.reduce((categoryTotal, item) => {
      return categoryTotal + (item.bonus ? parseInt(item.value.replace('$', '')) || 0 : 0);
    }, 0);
  }, 0);

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-highlight-gold mb-6">
            TODO LO QUE RECIBIRÁS HOY
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-4">
            Un valor total de <span className="text-3xl font-bold text-highlight-gold">${totalValue}</span> 
            por solo <span className="text-4xl font-bold text-urgency-red">$6.90</span>
          </p>
          <p className="font-sans text-gray-400">
            Todo incluido en un pago único. Acceso inmediato de por vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[#282425] rounded-2xl p-6 shadow-xl border border-gray-700">
              <h3 className="font-sans text-2xl font-bold text-highlight-gold mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-gray-600/50">
                    <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans font-bold text-white mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-gray-400 mb-2">{item.description}</p>
                      {item.bonus && (
                        <span className="inline-block bg-cta-primary/20 text-cta-primary px-2 py-1 rounded text-xs font-bold">
                          Valor: {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cta-primary/20 to-highlight-gold/20 rounded-2xl p-8 text-center border border-highlight-gold/30">
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            🎁 ¡BONUS EXCLUSIVOS POR TIEMPO LIMITADO!
          </h3>
          <p className="font-sans text-xl text-gray-300 mb-6">
            Además de todo lo anterior, recibirás estos bonuses especiales:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">📱 Acceso Móvil</h4>
              <p className="font-sans text-sm text-gray-300">Usa desde tu teléfono mientras cocinas</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">🔄 Actualizaciones</h4>
              <p className="font-sans text-sm text-gray-300">Nuevo contenido cada mes gratis</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">🎯 Soporte VIP</h4>
              <p className="font-sans text-sm text-gray-300">Acceso directo a nuestro equipo</p>
            </div>
          </div>
          <CtaButton href={CHECKOUT_LINK} variant="final" className="text-2xl px-12 py-6">
            ¡QUIERO TODO AHORA!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CompleteBenefitsSection;