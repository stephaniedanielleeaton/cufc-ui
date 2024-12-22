import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addresspin from '../../assets/addresspin.svg';
import instagramSvg from '../../assets/instagram.svg';
import facebookSvg from '../../assets/facebook.svg';

function ContactUs({ onSubmit, instagramLink, facebookLink }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    message: '',
  });
  const [emailStatusMessage, setEmailStatusMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitted(true);
      setEmailStatusMessage('');
    } catch (error) {
      setEmailStatusMessage('Error sending email');
      console.error('Error sending email:', error);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      emailAddress: '',
      contactNumber: '',
      message: '',
    });
    setEmailStatusMessage('');
  };

  return (
    <div className="bg-gray-50 font-khula">
      <div className="container mx-auto py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-Navy">Contact Us</h2>
                <p className="text-lg text-gray-600">
                  Have a question? <span className="font-bold">Send us a message.</span>
                </p>
                <p className="text-gray-600">
                  Feel free to schedule a time to visit us and see what we do!
                </p>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img src={addresspin} alt="Address Icon" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-Navy mb-1">Address</h3>
                    <p className="text-gray-600">6475 E Main St. #111, Reynoldsburg, OH 43068</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href={facebookLink}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <img src={facebookSvg} alt="Facebook Logo" className="w-8 h-8" />
                </a>
                <a 
                  href={instagramLink}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <img src={instagramSvg} alt="Instagram Logo" className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="bg-MediumPink p-8 rounded-lg text-white mb-6">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/90">Thank you for contacting us. We'll get back to you soon!</p>
                  </div>
                  <button
                    onClick={handleSendAnother}
                    className="bg-Navy hover:bg-Navy/90 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-MediumPink/20 focus:border-MediumPink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-MediumPink/20 focus:border-MediumPink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-MediumPink/20 focus:border-MediumPink transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea
                      placeholder="How can we help you?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-MediumPink/20 focus:border-MediumPink transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-MediumPink text-white text-lg font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-MediumPink/90 hover:scale-105 shadow-lg"
                    >
                      SUBMIT
                    </button>
                    {emailStatusMessage && (
                      <p className={`mt-4 text-center ${emailStatusMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {emailStatusMessage}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  instagramLink: PropTypes.string,
  facebookLink: PropTypes.string,
};

export default ContactUs;
