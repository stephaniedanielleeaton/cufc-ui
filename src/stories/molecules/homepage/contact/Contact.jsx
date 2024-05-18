import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact({ onSubmit, recaptchaSiteKey }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    message: '',
    captchaToken: null, // New state to hold the CAPTCHA token
  });
  const recaptchaRef = useRef();
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

  // Handle CAPTCHA token change
  const handleCaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      captchaToken: token,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row font-khula text-sm md:my-16 md:mx-16 my-4 mx-4">
      <div className="md:w-1/2 md:mr-4 md:mb-0 mx-16">
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-2xl text-Navy">Contact Us</span>
          <span className="font-light">
            Have a question? <b>Send us a message.</b>
          </span>
          {/* Add your contact information here */}
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
          {/* Add reCAPTCHA component */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={handleCaptchaChange}
          />
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
  recaptchaSiteKey: PropTypes.string.isRequired,
};

export default Contact;
