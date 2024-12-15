import React from 'react';
import PropTypes from 'prop-types';
import './LoadingPopup.css';

export default function LoadingPopup({ isOpen, message = 'Please wait...' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="z-50 bg-white p-8 rounded-lg shadow-xl text-center">
        <div className="spinner mb-4 mx-auto"></div>
        <p className="text-lg font-semibold text-gray-800">Please wait...</p>
        <p className="text-gray-600 mt-2">{message}</p>
      </div>
    </div>
  );
}

LoadingPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
};
