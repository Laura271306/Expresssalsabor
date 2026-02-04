import React from 'react';
import { cn } from '@/lib/utils';
import BeforeAfterCard from './BeforeAfterCard';

const ResultsGallerySection: React.FC = () => {
  const results = [
    {
      title: "Pollo Crujiente",
      before: "Pollo seco y sin sabor",
      after: "Pollo jugoso y dorado",
      imageBefore: "/images/results/pollo-before.jpg",
      imageAfter: "/images/results/pollo-after.jpg"
    },
    {
      title: "Papas Fritas",
      before: "Papas blandas y grasosas",
      after: "Papas crujientes y saludables",
      imageBefore: "/images/results/papas-before.jpg",
      imageAfter: "/images/results/papas-after.jpg"
    },
    {
      title: "Pizza Casera",
      before: "Masa dura y queso derretido",
      after: "Pizza crujiente con queso derretido perfecto",
      imageBefore: "/images/results/pizza-before.jpg",
      imageAfter: "/images/results/pizza-after.jpg"
    },
    {
      title: "Postres",
      before: "Postres tradicionales pesados",
      after: "Postres ligeros y deliciosos",
      imageBefore: "/images/results/postre-before.jpg",
      imageAfter: "/images/results/postre-after.jpg"
    }
  ];

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            TRANSFORMACIONES REALES
          </h2>
          <p className="font-sans text-xl text-gray-700">
            Mira los resultados que nuestros clientes están obteniendo cada día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <BeforeAfterCard key={index} {...result} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-highlight-gold/10 p-6 rounded-xl border border-highlight-gold/30">
            <h3 className="font-sans text-2xl font-bold text-dark-bg mb-4">
              📸 ¡Envía tu transformación!
            </h3>
            <p className="font-sans text-gray-700 mb-4">
              Comparte tus resultados y podría aparecer aquí. ¡Recibe un bonus especial por tu testimonio!
            </p>
            <button className="bg-cta-primary hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
              Enviar Mi Transformación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsGallerySection;