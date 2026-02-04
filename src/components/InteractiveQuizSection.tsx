import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, ChefHat, Clock, Heart, Users, Zap, Award } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const InteractiveQuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "¿Cuál es tu mayor desafío en la cocina?",
      options: [
        { text: "No tengo tiempo", icon: <Clock className="w-5 h-5" />, value: 1 },
        { text: "No sé qué cocinar", icon: <ChefHat className="w-5 h-5" />, value: 2 },
        { text: "Quiero opciones saludables", icon: <Heart className="w-5 h-5" />, value: 3 },
        { text: "Cocino para toda la familia", icon: <Users className="w-5 h-5" />, value: 4 }
      ]
    },
    {
      question: "¿Qué tipo de recetas prefieres?",
      options: [
        { text: "Rápidas (menos de 20 min)", icon: <Zap className="w-5 h-5" />, value: 1 },
        { text: "Tradicionales y familiares", icon: <Award className="w-5 h-5" />, value: 2 },
        { text: "Innovadoras y creativas", icon: <ChefHat className="w-5 h-5" />, value: 3 },
        { text: "Simples y fáciles", icon: <CheckCircle className="w-5 h-5" />, value: 4 }
      ]
    },
    {
      question: "¿Cuántas veces cocinas al día?",
      options: [
        { text: "1-2 veces", icon: <Clock className="w-5 h-5" />, value: 1 },
        { text: "3-4 veces", icon: <Users className="w-5 h-5" />, value: 2 },
        { text: "5+ veces", icon: <Zap className="w-5 h-5" />, value: 3 },
        { text: "Solo ocasionalmente", icon: <Heart className="w-5 h-5" />, value: 4 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const score = answers.reduce((sum, answer) => sum + answer, 0);
    if (score <= 4) return "perfect_match";
    if (score <= 7) return "great_match";
    if (score <= 10) return "good_match";
    return "excellent_match";
  };

  const getResult = () => {
    const result = calculateResult();
    switch (result) {
      case "perfect_match":
        return {
          title: "¡Match Perfecto! 🎯",
          description: "El Airfryer Mágica es ideal para ti. Resolverá todos tus problemas de tiempo y creatividad en la cocina.",
          color: "text-cta-primary",
          bgColor: "bg-cta-primary/10",
          icon: <CheckCircle className="w-8 h-8 text-cta-primary" />
        };
      case "great_match":
        return {
          title: "¡Excelente Elección! ⭐",
          description: "El Airfryer Mágica transformará tu experiencia culinaria y te ahorrará mucho tiempo.",
          color: "text-highlight-gold",
          bgColor: "bg-highlight-gold/10",
          icon: <Award className="w-8 h-8 text-highlight-gold" />
        };
      case "good_match":
        return {
          title: "¡Gran Potencial! 💪",
          description: "El Airfryer Mágica te dará las herramientas para mejorar tus habilidades culinarias significativamente.",
          color: "text-mint-green",
          bgColor: "bg-mint-green/10",
          icon: <Zap className="w-8 h-8 text-mint-green" />
        };
      default:
        return {
          title: "¡Transformación Total! 🚀",
          description: "El Airfryer Mágica cambiará por completo tu forma de cocinar y disfrutar de la comida.",
          color: "text-urgency-red",
          bgColor: "bg-urgency-red/10",
          icon: <ChefHat className="w-8 h-8 text-urgency-red" />
        };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    
    return (
      <section className="bg-dark-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn("inline-flex items-center justify-center w-20 h-20 rounded-full mb-6", result.bgColor)}>
            {result.icon}
          </div>
          
          <h2 className={cn("font-serif text-4xl md:text-5xl font-bold mb-6", result.color)}>
            {result.title}
          </h2>
          
          <p className="font-sans text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {result.description}
          </p>
          
          <div className="bg-[#282425] rounded-2xl p-8 mb-8 border border-gray-700">
            <h3 className="font-sans text-2xl font-bold text-white mb-6">
              Personalización Basada en tus Respuestas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-white">Recetas Rápidas</h4>
                  <p className="font-sans text-sm text-gray-400">Ideales para tu estilo de vida activo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-white">Planificación Semanal</h4>
                  <p className="font-sans text-sm text-gray-400">Sin estrés al decidir qué cocinar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-white">Opciones Saludables</h4>
                  <p className="font-sans text-sm text-gray-400">Cumple tus objetivos de bienestar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cta-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans font-bold text-white">Recetas para Familia</h4>
                  <p className="font-sans text-sm text-gray-400">Todos disfrutarán de tus creaciones</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href={CHECKOUT_LINK} variant="final" className="text-xl px-8 py-4">
              ¡QUIERO MI EXPERIENCIA PERSONALIZADA!
            </CtaButton>
            <button 
              onClick={resetQuiz}
              className="font-sans font-bold text-gray-400 hover:text-white px-8 py-4 rounded-full border border-gray-600 transition-colors"
            >
              Volver a Hacer el Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            Descubre si el Airfryer Mágica es para ti
          </h2>
          <p className="font-sans text-xl text-gray-700">
            Responde estas 3 preguntas y obtén una recomendación personalizada
          </p>
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${index <= currentQuestion ? 'bg-cta-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-highlight-gold/50">
          <div className="mb-8">
            <h3 className="font-sans text-2xl font-bold text-dark-bg mb-2">
              Pregunta {currentQuestion + 1} de 3
            </h3>
            <p className="font-serif text-xl text-gray-700">
              {question.question}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="flex items-center gap-4 p-6 bg-gray-50 hover:bg-highlight-gold/10 rounded-xl border-2 border-transparent hover:border-highlight-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 group-hover:text-highlight-gold transition-colors">
                  {option.icon}
                </div>
                <span className="font-sans text-lg font-medium text-gray-700 group-hover:text-dark-bg">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveQuizSection;