import React from 'react';

const HowItWorksInPractice: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 border-y border-gray-100">
      <div className="max-w-2xl mx-auto text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark-bg mb-8">
          Cómo se usa en la práctica:
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-highlight-gold text-dark-bg font-bold rounded-full flex-shrink-0">1</span>
            <span className="font-sans text-xl text-gray-700">Abres el material</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-highlight-gold text-dark-bg font-bold rounded-full flex-shrink-0">2</span>
            <span className="font-sans text-xl text-gray-700">Eliges lo que tienes en casa</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 flex items-center justify-center bg-highlight-gold text-dark-bg font-bold rounded-full flex-shrink-0">3</span>
            <span className="font-sans text-xl text-gray-700">Sigues el tiempo y listo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksInPractice;