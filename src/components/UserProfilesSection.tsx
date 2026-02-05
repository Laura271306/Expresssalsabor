import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const UserProfilesSection: React.FC = () => {
  const profiles = [
    "Cocinas solo para ti",
    "Cocinas para tus hijos",
    "Llegas cansada del trabajo",
    "Odias seguir recetas largas"
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-xl mx-auto border-2 border-highlight-gold/30 rounded-2xl p-8 shadow-sm">
        <h3 className="font-sans text-2xl font-bold text-dark-bg mb-6 text-left">
          Esto es para ti si:
        </h3>
        <ul className="space-y-4">
          {profiles.map((profile, index) => (
            <li key={index} className="flex items-center gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-cta-primary flex-shrink-0" />
              <span className="font-sans text-lg text-gray-700 font-medium">{profile}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilesSection;