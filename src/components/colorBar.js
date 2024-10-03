import React from 'react';

const ColorPalette = ({ colors }) => {
  const gradient = colors.join(', '); // une los colores con una coma

  return (
    <div className="flex items-center">
      <div className="h-1 py-0.5 px-0.5 w-16 mr-2 rounded overflow-hidden" style={{
        background: `linear-gradient(90deg, ${gradient})` // aplica el gradiente
      }}>
                             
      </div>
    </div>
  );
};

export default ColorPalette;
