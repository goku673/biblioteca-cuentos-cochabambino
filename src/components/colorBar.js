import React from 'react';

const ColorPalette = ({ colors, className = "" }) => {
  if (!colors || colors.length === 0) {
    return null;
  }

  const gradient = colors.join(', ');

  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className="rounded-md shadow-sm border transition-all duration-200 hover:shadow-md"
        style={{
          background: `linear-gradient(90deg, ${gradient})`
        }}
        title={`Colores: ${colors.join(', ')}`}
      />
    </div>
  );
};

export default ColorPalette;
