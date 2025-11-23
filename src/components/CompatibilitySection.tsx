import React from 'react';
import { cn } from '@/lib/utils';

const CompatibilitySection: React.FC = () => {
  const models = [
    "Modelos grandes y pequeños",
    "Analógicos y digitales",
    "Económicos o de gama alta"
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12">
          COMPATIBLE CON CUALQUIER MODELO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-2 border-yellow-500">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="font-sans text-xl font-bold">{model}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;