"use client";

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DiscoverYourProfileQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});

  const questions = [
    {
      id: 'challenge',
      question: 'Qual seu maior desafio na cozinha?',
      options: [
        { value: 'tempo', label: 'Falta de tempo' },
        { value: 'ideias', label: 'Falta de ideias' },
        { value: 'saude', label: 'Preocupação com saúde' }
      ]
    },
    {
      id: 'level',
      question: 'Qual seu nível com Air Fryer?',
      options: [
        { value: 'iniciante', label: 'Iniciante' },
        { value: 'intermediario', label: 'Já uso mas não domino' },
        { value: 'experiente', label: 'Sou experiente' }
      ]
    }
  ];

  const profiles = {
    tempo: {
      title: 'Você é o "Corredor do Tempo"',
      description: 'Nosso método é perfeito para você! Receitas rápidas que economizam tempo sem sacrificar sabor.',
      icon: '⏱️'
    },
    ideias: {
      title: 'Você é o "Criativo na Cozinha"',
      description: '600+ receetas para nunca mais ficar sem o que cozinhar. Variedade e sabor garantidos.',
      icon: '🎨'
    },
    saude: {
      title: 'Você é o "Cuidador da Família"',
      description: 'Receitas saudáveis e nutritivas que toda a família vai adorar. Sabor e saúde na medida certa.',
      icon: '❤️'
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getProfile = () => {
    if (answers.challenge) {
      return profiles[answers.challenge as keyof typeof profiles];
    }
    return null;
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  if (currentStep >= questions.length && Object.keys(answers).length === questions.length) {
    const profile = getProfile();
    return (
      <SectionWrapper className="bg-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">{profile?.icon}</div>
          <h2 className="text-3xl font-bold mb-6 text-purple-800">
            {profile?.title}
          </h2>
          <p className="text-xl text-purple-600 mb-8 leading-relaxed">
            {profile?.description}
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-semibold mb-4 text-purple-700">Como o método resolve seu desafio:</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li>• Receitas prontas em 10-15 minutos</li>
              <li>• Lista de compras inteligente</li>
              <li>• Tempos e temperaturas exatos</li>
              <li>• Suporte personalizado</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Veja como o método resolve meu desafio específico
            </Button>
            <Button variant="outline" onClick={restartQuiz} className="px-8 py-3">
              Fazer o quiz novamente
            </Button>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <SectionWrapper className="bg-purple-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">
          Descubra Seu Perfil de Chef
        </h2>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-purple-600">
                Pergunta {currentStep + 1} de {questions.length}
              </span>
            </div>
            <CardTitle className="text-xl text-purple-800">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};