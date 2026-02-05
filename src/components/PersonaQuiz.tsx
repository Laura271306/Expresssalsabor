import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock, Heart, ChefHat, DollarSign, Utensils, Calendar, Zap } from 'lucide-react';

interface Persona {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const personas: Persona[] = [
  {
    id: 'corredor-tiempo',
    name: 'El Corredor del Tiempo',
    description: 'Siempre apurado, necesita soluciones rápidas y eficientes',
    icon: <Clock className="w-6 h-6" />,
    benefits: ['Comidas en 10-15 minutos', 'Sem preparação complexa', 'Resultados rápidos'],
    color: 'text-blue-600'
  },
  {
    id: 'cuidador-familia',
    name: 'El Cuidador de la Familia',
    description: 'Preocupado com saúde e bem-estar da família',
    icon: <Heart className="w-6 h-6" />,
    benefits: ['Receitas saudáveis', 'Menos óleo e gordura', 'Nutrição balanceada'],
    color: 'text-green-600'
  },
  {
    id: 'principiante',
    name: 'El Principiante Cocinero',
    description: 'Iniciante na cozinha, precisa de instruções claras',
    icon: <ChefHat className="w-6 h-6" />,
    benefits: ['Passo a passo visual', 'Instruções simples', 'Sem conhecimento técnico necessário'],
    color: 'text-purple-600'
  },
  {
    id: 'economizador',
    name: 'El Economizador Inteligente',
    description: 'Quer economizar dinheiro e evitar desperdício',
    icon: <DollarSign className="w-6 h-6" />,
    benefits: ['Lista de compras inteligente', 'Menos desperdício', 'Economia real mensal'],
    color: 'text-yellow-600'
  },
  {
    id: 'amante-sabor',
    name: 'El Amante del Sabor',
    description: 'Ama comida deliciosa mas com saúde',
    icon: <Utensils className="w-6 h-6" />,
    benefits: ['Sabor profissional', 'Textura perfeita', 'Saúde sem sacrificar o sabor'],
    color: 'text-red-600'
  },
  {
    id: 'organizado',
    name: 'El Organizado Estratégico',
    description: 'Planeja refeições com antecedência',
    icon: <Calendar className="w-6 h-6" />,
    benefits: ['Planejamento mensal', 'Sem improvisação', 'Rotina organizada'],
    color: 'text-indigo-600'
  },
  {
    id: 'especialista',
    name: 'El Especialista en Air Fryer',
    description: 'Já usa mas quer dominar técnicas avançadas',
    icon: <Zap className="w-6 h-6" />,
    benefits: ['Técnicas profissionais', 'Resultados consistentes', 'Domínio total do aparelho'],
    color: 'text-orange-600'
  }
];

const PersonaQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const questions = [
    {
      question: "Qual seu maior desafio na cozinha?",
      options: [
        "Tempo limitado e pressa",
        "Fazer refeições saudáveis para a família",
        "Falta de experiência culinária",
        "Economizar dinheiro e evitar desperdício",
        "Conciliar sabor e saúde",
        "Organizar o planejamento das refeições",
        "Dominar técnicas avançadas da Air Fryer"
      ]
    },
    {
      question: "Como você se sente ao usar sua Air Fryer?",
      options: [
        "Estou sempre com pressa para terminar rápido",
        "Preocupado em fazer o melhor para minha família",
        "Inseguro sobre como usar corretamente",
        "Quero extrair o máximo do meu investimento",
        "Quero resultados deliciosos e saudáveis",
        "Quero ter tudo planejado com antecedência",
        "Quero aprender truques profissionais"
      ]
    },
    {
      question: "O que mais te atrai no Expreso al Sabor?",
      options: [
        "A rapidez e praticidade",
        "As receitas saudáveis e balanceadas",
        "A simplicidade das instruções",
        "A economia e redução de desperdício",
        "O sabor profissional com saúde",
        "O planejamento organizado",
        "As técnicas avançadas de chefs"
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate persona based on answers
      const personaIndex = newAnswers.reduce((sum, answer) => sum + answer, 0) % personas.length;
      setSelectedPersona(personas[personaIndex]);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedPersona(null);
  };

  if (showResult && selectedPersona) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-2xl border-4 border-highlight-gold/50 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-highlight-gold/10 flex items-center justify-center ${selectedPersona.color}`}>
            {selectedPersona.icon}
          </div>
          <h3 className="font-serif text-3xl font-bold text-dark-bg mb-2">
            Você é: {selectedPersona.name}
          </h3>
          <p className="font-sans text-lg text-gray-700 mb-6">
            {selectedPersona.description}
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xl font-bold text-dark-bg mb-4 text-center">
            Como o Expreso al Sabor resolve seu desafio:
          </h4>
          <ul className="space-y-3">
            {selectedPersona.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-highlight-gold rounded-full mr-3"></div>
                <span className="font-sans text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-4">
          <button 
            onClick={resetQuiz}
            className="font-sans font-bold text-gray-600 hover:text-gray-800 underline"
          >
            Fazer o quiz novamente
          </button>
          <div className="pt-4">
            <button className="bg-cta-primary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-cta-primary/50">
              Quero transformar minha cozinha
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl font-bold text-dark-bg mb-4">
          Descubra Seu Perfil na Cozinha
        </h3>
        <p className="font-sans text-lg text-gray-700">
          Responda 3 perguntas rápidas e descubra como o Expreso al Sabor pode transformar sua experiência culinária
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="font-sans text-sm text-gray-600">
            Perg<dyad-write path="src/components/PersonaQuiz.tsx" description="Quiz interativo para identificar personas de cozinha">
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock, Heart, ChefHat, DollarSign, Utensils, Calendar, Zap } from 'lucide-react';

interface Persona {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const personas: Persona[] = [
  {
    id: 'corredor-tiempo',
    name: 'El Corredor del Tiempo',
    description: 'Siempre apurado, necesita soluciones rápidas y eficientes',
    icon: <Clock className="w-6 h-6" />,
    benefits: ['Comidas em 10-15 minutos', 'Sem preparação complexa', 'Resultados rápidos'],
    color: 'text-blue-600'
  },
  {
    id: 'cuidador-familia',
    name: 'El Cuidador de la Familia',
    description: 'Preocupado com saúde e bem-estar da família',
    icon: <Heart className="w-6 h-6" />,
    benefits: ['Receitas saudáveis', 'Menos óleo e gordura', 'Nutrição balanceada'],
    color: 'text-green-600'
  },
  {
    id: 'principiante',
    name: 'El Principiante Cocinero',
    description: 'Iniciante na cozinha, precisa de instruções claras',
    icon: <ChefHat className="w-6 h-6" />,
    benefits: ['Passo a passo visual', 'Instruções simples', 'Sem conhecimento técnico necessário'],
    color: 'text-purple-600'
  },
  {
    id: 'economizador',
    name: 'El Economizador Inteligente',
    description: 'Quer economizar dinheiro e evitar desperdício',
    icon: <DollarSign className="w-6 h-6" />,
    benefits: ['Lista de compras inteligente', 'Menos desperdício', 'Economia real mensal'],
    color: 'text-yellow-600'
  },
  {
    id: 'amante-sabor',
    name: 'El Amante del Sabor',
    description: 'Ama comida deliciosa mas com saúde',
    icon: <Utensils className="w-6 h-6" />,
    benefits: ['Sabor profissional', 'Textura perfeita', 'Saúde sem sacrificar o sabor'],
    color: 'text-red-600'
  },
  {
    id: 'organizado',
    name: 'El Organizado Estratégico',
    description: 'Planeja refeições com antecedência',
    icon: <Calendar className="w-6 h-6" />,
    benefits: ['Planejamento mensal', 'Sem improvisação', 'Rotina organizada'],
    color: 'text-indigo-600'
  },
  {
    id: 'especialista',
    name: 'El Especialista en Air Fryer',
    description: 'Já usa mas quer dominar técnicas avançadas',
    icon: <Zap className="w-6 h-6" />,
    benefits: ['Técnicas profissionais', 'Resultados consistentes', 'Domínio total do aparelho'],
    color: 'text-orange-600'
  }
];

const PersonaQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const questions = [
    {
      question: "Qual seu maior desafio na cozinha?",
      options: [
        "Tempo limitado e pressa",
        "Fazer refeições saudáveis para a família",
        "Falta de experiência culinária",
        "Economizar dinheiro e evitar desperdício",
        "Conciliar sabor e saúde",
        "Organizar o planejamento das refeições",
        "Dominar técnicas avançadas da Air Fryer"
      ]
    },
    {
      question: "Como você se sente ao usar sua Air Fryer?",
      options: [
        "Estou sempre com pressa para terminar rápido",
        "Preocupado em fazer o melhor para minha família",
        "Inseguro sobre como usar corretamente",
        "Quero extrair o máximo do meu investimento",
        "Quero resultados deliciosos e saudáveis",
        "Quero ter tudo planejado com antecedência",
        "Quero aprender truques profissionais"
      ]
    },
    {
      question: "O que mais te atrai no Expreso al Sabor?",
      options: [
        "A rapidez e praticidade",
        "As receitas saudáveis e balanceadas",
        "A simplicidade das instruções",
        "A economia e redução de desperdício",
        "O sabor profissional com saúde",
        "O planejamento organizado",
        "As técnicas avançadas de chefs"
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate persona based on answers
      const personaIndex = newAnswers.reduce((sum, answer) => sum + answer, 0) % personas.length;
      setSelectedPersona(personas[personaIndex]);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedPersona(null);
  };

  if (showResult && selectedPersona) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-2xl border-4 border-highlight-gold/50 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-highlight-gold/10 flex items-center justify-center ${selectedPersona.color}`}>
            {selectedPersona.icon}
          </div>
          <h3 className="font-serif text-3xl font-bold text-dark-bg mb-2">
            Você é: {selectedPersona.name}
          </h3>
          <p className="font-sans text-lg text-gray-700 mb-6">
            {selectedPersona.description}
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-sans text-xl font-bold text-dark-bg mb-4 text-center">
            Como o Expreso al Sabor resolve seu desafio:
          </h4>
          <ul className="space-y-3">
            {selectedPersona.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-highlight-gold rounded-full mr-3"></div>
                <span className="font-sans text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-4">
          <button 
            onClick={resetQuiz}
            className="font-sans font-bold text-gray-600 hover:text-gray-800 underline"
          >
            Fazer o quiz novamente
          </button>
          <div className="pt-4">
            <button className="bg-cta-primary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-cta-primary/50">
              Quero transformar minha cozinha
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl font-bold text-dark-bg mb-4">
          Descubra Seu Perfil na Cozinha
        </h3>
        <p className="font-sans text-lg text-gray-700">
          Responda 3 perguntas rápidas e descubra como o Expreso al Sabor pode transformar sua experiência culinária
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="font-sans text-sm text-gray-600">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <div className="flex space-x-1">
            {[...Array(questions.length)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentQuestion ? 'bg-highlight-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <h4 className="font-sans text-xl font-bold text-dark-bg mb-6">
          {questions[currentQuestion].question}
        </h4>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-highlight-gold hover:bg-highlight-gold/5 transition-colors font-sans text-gray-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
          disabled={currentQuestion === 0}
          className="font-sans text-gray-600 hover:text-gray-800 mr-4 disabled:opacity-50"
        >
          Anterior
        </button>
      </div>
    </div>
  );
};

export default PersonaQuiz;