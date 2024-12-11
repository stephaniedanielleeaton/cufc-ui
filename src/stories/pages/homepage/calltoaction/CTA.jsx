import React from 'react';

function CTA({onNavigationClick}) {
  return (
    <div className="bg-DeepRed relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-MediumPink/10 -skew-y-3"></div>
      
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-white/80 text-lg">Join our community of passionate HEMA practitioners</p>
        </div>
        <div className="md:w-auto">
          <button
            className="bg-MediumPink/90 backdrop-blur-sm text-white text-lg font-bold px-8 py-4 rounded-xl 
                     transition-all duration-300 hover:bg-MediumPink hover:scale-105 shadow-lg
                     border border-LightPink/20"
            onClick={() => onNavigationClick('joinNow')}
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
