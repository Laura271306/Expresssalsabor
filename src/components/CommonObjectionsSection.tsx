import React from 'react';
import { cn } from '@/lib/utils';
import { XCircle, CheckCircle, AlertTriangle, HelpCircle, DollarSign, Clock, Users, Zap } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const CommonObjectionsSection: React.FC = () => {
  const objections = [
    {
      icon: <DollarSign className="w-6 h-6 text-urgency-red" />,
      question: "¿Vale la pena $6.90? ¿No es muy caro para un ebook?",
      answer: "Piensa en esto: una sola cena en delivery cuesta entre $15-25. Con este método, ahorrarás más de $100 mensuales en comida. Además, recibes valor total de $149 por solo $6.90. Es la mejor inversión en tu cocina que harás este año.",
      color: "text-urgency-red",
      bgColor: "bg-urgency-red/10"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-highlight-gold" />,
      question: "¿Y si no me gusta la comida? ¿Las recetas son complicadas?",
      answer: "Entiendo tu preocupación. Por eso ofrecemos garantía de 7 días. Si no te gustan las recetas, devolvemos tu dinero sin preguntas. Además, todas las recetas están diseñadas para ser simples: ingredientes comunes, pasos claros y tiempos exactos. No necesitas ser chef para usar este método.",
      color: "text-highlight-gold",
      bgColor: "bg-highlight-gold/10"
    },
    {
      icon: <Users className="w-6 h-6 text-cta-primary" />,
      question: "¿Y si vivo solo/a? ¿Sirve para una persona?",
      answer: "¡Perfecto para personas solteras! Las recetas están diseñadas para porciones individuales o para 2 personas. Ahorrarás tiempo y dinero cocinando para ti mismo/a. Muchos de nuestros clientes solteros nos dicen que ahora disfrutan cocinar y se sienten más sanos y felices.",
      color: "text-cta-primary",
      bgColor: "bg-cta-primary/10"
    },
    {
      icon: <Zap className="w-6 h-6 text-mint-green" />,
      question: "¿Y si mi Air Fryer es muy viejo o una marca desconocida?",
      answer: "El método C.R.I.S.P. funciona con cualquier Air Fryer, sin importar la edad o marca. Hemos probado estas técnicas en freidoras de 5 a 15 años, incluyendo marcas menos conocidas. La clave está en la técnica, no en el aparato. Si tu Air Fryer calienta aire, este método funcionará.",
      color: "text-mint-green",
      bgColor: "bg-mint-green/10"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      question: "¿Tengo que dedicar mucho tiempo para aprender el método?",
      answer: "Para nada. El sistema está diseñado para que empieces desde el primer día. La mayoría de nuestros usuarios preparan su primera receta exitosa en menos de 30 minutos después de recibir el material. Las instrucciones son paso a paso con fotos y tiempos exactos.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      question: "¿Y si tengo alergias o dietas especiales?",
      answer: "Incluimos secciones completas para diferentes necesidades: recetas sin gluten, sin lactosa, vegetarianas, bajas en carbohidratos, etc. Además, el método te enseña a adaptar cualquier receta a tus necesidades específicas. Es flexible y se adapta a ti.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight-gold mb-4">
            DUDAS COMUNES Y OBJECIONES
          </h2>
          <p className="font-sans text-xl text-gray-300">
            Respondemos a las preguntas que realmente te importan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {objections.map((objection, index) => (
            <div key={index} className="bg-[#282425] rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", objection.bgColor)}>
                  {objection.icon}
                </div>
                <div>
                  <h3 className={cn("font-sans text-xl font-bold mb-3", objection.color)}>
                    {objection.question}
                  </h3>
                  <p className="font-sans text-gray-300 leading-relaxed">
                    {objection.answer}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-sans text-sm">Resuelto y garantizado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="bg-gradient-to-r from-cta-primary/20 to-highlight-gold/20 rounded-2xl p-8 border border-highlight-gold/30 text-center">
          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            🤔 ¿Tienes otra duda?
          </h3>
          <p className="font-sans text-xl text-gray-300 mb-6">
            Hemos escuchado todas las preocupaciones posibles y las hemos resuelto en este método. 
            Si hay algo que no hemos cubierto, nuestro equipo de soporte está disponible para ayudarte.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-cta-primary mb-2">🛡️ Garantía Real</h4>
              <p className="font-sans text-sm text-gray-300">7 días para probar sin riesgo</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-highlight-gold mb-2">💬 Soporte Humano</h4>
              <p className="font-sans text-sm text-gray-300">Respuesta en menos de 24h</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-sans font-bold text-mint-green mb-2">📱 Acceso Inmediato</h4>
              <p className="font-sans text-sm text-gray-300">Empieza hoy mismo</p>
            </div>
          </div>
          
          <CtaButton href={CHECKOUT_LINK} variant="final" className="text-2xl px-12 py-6">
            ¡QUIERO RESOLVER MIS DUDAS COMPRANDO!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CommonObjectionsSection;