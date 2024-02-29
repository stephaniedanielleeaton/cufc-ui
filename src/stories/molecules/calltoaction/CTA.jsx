import React from 'react';

function CTA() {
  return (
    <div className="flex flex-col md:flex-row font-khula bg-DeepRed text-white py-12">
      <div className="md:w-2/3 md:mr-4 md:mb-0 mx-16 flex items-center justify-center"> {/* Updated this line */}
        <span className="font-bold text-2xl my-4 px-4 py-2">Ready to become a member?</span>
      </div>
      <div className="md:w-1/3 flex items-center justify-center md:justify-start mx-16"> {/* Updated this line */}
        <button
          className="tracking-wider border-2 border-white text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-white hover:text-black hover:border-black">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default CTA;
