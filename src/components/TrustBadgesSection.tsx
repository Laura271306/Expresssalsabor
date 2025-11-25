import React from 'react';
import { cn } from '@/lib/utils';
import { Lock, ShieldCheck, Zap } from 'lucide-react';

const TrustBadgesSection: React.FC = () => {
  const Badge: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4 bg-[#282425] rounded-lg border border-gray-700 shadow-lg">
      <div className="text-highlight-gold mb-2">{icon}</div>
      <h4 className="font-sans text-sm font-bold text-white uppercase tracking-wider">{title}</h4>
      <p className="font-sans text-xs text-gray-400">{description}</p>
    </div>
  );

  return (
    <section className="bg-dark-bg py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-sans text-lg font-bold text-gray-400 text-center mb-8 uppercase">
          Compra Segura e Garantida
        </h3>
        
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          
          {/* Hotmart Logo Placeholder */}
          <div className="flex flex-col items-center justify-center p-4 bg-[#282425] rounded-lg border border-gray-700 shadow-lg">
            <Zap className="w-8 h-8 text-orange-500 mb-2" />
            <p className="font-sans text-sm font-bold text-white">HOTMART</p>
            <p className="font-sans text-xs text-gray-400">Plataforma Segura</p>
          </div>

          {/* SSL/HTTPS Certificate */}
          <Badge 
            icon={<Lock className="w-8 h-8" />}
            title="CERTIFICADO SSL"
            description="Conexión 100% Segura"
          />

          {/* Verified Product Badge */}
          <Badge 
            icon={<ShieldCheck className="w-8 h-8" />}
            title="PRODUCTO VERIFICADO"
            description="Garantía de Calidad"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;