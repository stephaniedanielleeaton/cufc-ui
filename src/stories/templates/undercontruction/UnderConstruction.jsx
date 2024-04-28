import React from 'react';
import logoFullColourNavySvg from '../../assets/MascotFullColourNavy.svg';

const UnderConstruction = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <span className="font-khula text-lg font-bold text-center">This Page is Currently Under Construction :) </span>
      </div>
      <div>
        <img src={logoFullColourNavySvg} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    </div>
  );
};

export default UnderConstruction;
