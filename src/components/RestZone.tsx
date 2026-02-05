import React from 'react';

interface RestZoneProps {
  text: string;
}

const RestZone: React.FC<RestZoneProps> = ({ text }) => {
  return (
    <div className="bg-light-bg py-12 px-6 text-center border-y border-gray-200">
      <p className="font-serif italic text-2xl md:text-3xl text-dark-bg/70 max-w-3xl mx-auto leading-relaxed">
        "{text}"
      </p>
    </div>
  );
};

export default RestZone;