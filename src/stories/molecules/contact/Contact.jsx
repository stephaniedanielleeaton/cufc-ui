import React from 'react';
import cellphone from '../../assets/cellphone.svg';
import addresspin from '../../assets/addresspin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

function Contact() {
  return (
    <div className="flex flex-col md:flex-row font-khula text-sm">
      <div className="md:w-1/2 md:mr-4 md:mb-0 mx-16">
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-2xl text-Navy">Contact Us</span>
          <span className="font-light">
            Have a question? <b>Send us a message.</b>
          </span>
          <div className="flex items-center">
            <div className="mr-4">
              <img src={cellphone} alt="Phone Icon" className="w-8 h-8" />
            </div>
            <div className="block w-full">
              <span className="w-full block font-bold">Give Us A Call</span>
              <span className="w-full block">123-456-7890</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <img src={addresspin} alt="Address Icon" className="w-8 h-8" />
            </div>
            <div className="block w-full">
              <span className="w-full block font-bold">Address</span>
              <span className="w-full block">4601 Nickerson Rd, Columbus, OH 43228</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <img src={facebook} alt="Facebook Logo" className="w-8 h-8" />
            </div>
            <div className="mr-4">
              <img src={instagram} alt="Instagram Logo" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center mx-16">
        <form className="w-full">
          <input type="text" placeholder="Full Name" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="email" placeholder="Email Address" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="tel" placeholder="Contact Number" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <textarea placeholder="Message" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"></textarea>
          <button
            className="w-full bg-black text-white text-sm font-bold px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border-black border border-black">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;