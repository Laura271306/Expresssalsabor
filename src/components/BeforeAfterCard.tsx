import React from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterCardProps {
  title: string;
  before: string;
  after: string;
  imageBefore: string;
  imageAfter: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ title, before, after, imageBefore, imageAfter }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-highlight-gold/50">
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-dark-bg mb-4 text-center">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="relative group">
              <img 
                src={imageBefore} 
                alt={`Antes: ${title}`} 
                className="w-full h-48 object-cover rounded-lg border-2 border-urgency-red"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-urgency-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">ANTES</span>
              </div>
            </div>
            <p className="font-sans text-sm text-urgency-red font-bold mt-2">{before}</p>
          </div>
          
          <div className="text-center">
            <div className="relative group">
              <img 
                src={imageAfter} 
                alt={`Después: ${title}`} 
                className="w-full h-48 object-cover rounded-lg border-2 border-cta-primary"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cta-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">DESPUÉS</span>
              </div>
            </div>
            <p className="font-sans text-sm text-cta-primary font-bold mt-2">{after}</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-highlight-gold/10 text-highlight-gold px-4 py-2 rounded-full text-sm font-bold">
            <span>⚡️ Transformación en 15 minutos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterCard;