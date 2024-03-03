import React, { useState } from 'react';
import cellphone from '../../assets/cellphone.svg';
import addresspin from '../../assets/addresspin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

function Contact({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    message: ''
  });
  const [shouldRender, setShouldRender] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldRender(true)
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col md:flex-row font-khula text-sm md:my-16 md:mx-16 my-4 mx-4">
      <div className="md:w-1/2 md:mr-4 md:mb-0 mx-16">
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-2xl text-Navy">Contact Us</span>
          <span className="font-light">
            Have a question? <b>Send us a message.</b>
          </span>
          <div className="flex items-center">
            {/*<div className="mr-4">*/}
            {/*  <img src={cellphone} alt="Phone Icon" className="w-8 h-8" />*/}
            {/*</div>*/}
            {/*<div className="block w-full">*/}
            {/*  <span className="w-full block font-bold">Give Us A Call</span>*/}
            {/*  <span className="w-full block">513-633-0140</span>*/}
            {/*</div>*/}
          </div>
          <div className="flex items-center">
            {/*<div className="mr-4">*/}
            {/*  <img src={addresspin} alt="Address Icon" className="w-8 h-8" />*/}
            {/*</div>*/}
            {/*<div className="block w-full">*/}
            {/*  <span className="w-full block font-bold">Address</span>*/}
            {/*  <span className="w-full block">4601 Nickerson Rd, Columbus, OH 43228</span>*/}
            {/*</div>*/}
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
      <div className="md:w-1/2 flex items-center mx-16 my-4">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
          >
            SUBMIT
          </button>
          {shouldRender && <span className="p-4">Email Sent!</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
