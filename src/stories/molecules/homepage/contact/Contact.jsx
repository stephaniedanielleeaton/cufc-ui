import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addresspin from '../../../assets/addresspin.svg';
import instagramSvg from '../../../assets/instagram.svg';

function Contact({ onSubmit, instagramLink }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    message: '',
  });
  const [emailStatusMessage, setEmailStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmailStatusMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress || !formData.message) {
      setEmailStatusMessage('Please fill in all fields');
      return;
    }
    try {
      await onSubmit({ ...formData });
      setEmailStatusMessage('Email sent!');
    } catch (error) {
      setEmailStatusMessage('Error sending email');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-khula text-sm md:py-16 md:px-16 py-4 px-4 bg-white">
      <div className="md:w-1/2 md:mr-4 md:mb-0 mx-16">
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-2xl text-Navy">Contact Us</span>
          <span className="font-light">
            Have a question? <b>Send us a message.</b>
          </span>
          <span className="font-light">Feel free to schedule a time to visit us and see what we do!</span>
          <div className="flex items-center"></div>
          <div className="flex items-center">
            <div className="mr-4">
              <img src={addresspin} alt="Address Icon" className="w-8 h-8" />
            </div>
            <div className="block w-full">
              <span className="w-full block font-bold">Address</span>
              <span className="w-full block">6475 E Main St. #111, Reynoldsburg, OH 43068</span>
            </div>
          </div>
          <div className="flex items-center">
            {/*  <div className="mr-4">*/}
            {/*    <img src={facebook} alt="Facebook Logo" className="w-8 h-8" />*/}
            {/*  </div>*/}
            <div className="mr-4">
              <a href={instagramLink}>
                <img src={instagramSvg} alt="Instagram Logo" className="w-8 h-8" />
              </a>
            </div>
            <div className="block w-full">
              <span className="w-full block">Follow Us On Instagram</span>
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
          <span className="p-4">{emailStatusMessage}</span>
        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  instagramLink: String,
};

export default Contact;
