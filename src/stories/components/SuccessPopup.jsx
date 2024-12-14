import React from 'react';
import PropTypes from 'prop-types';

export default function SuccessPopup({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="z-50 bg-white p-8 rounded-lg shadow-xl text-center max-w-md">
        <div className="text-DeepRed text-5xl mb-4">✓</div>
        <p className="text-lg font-semibold text-gray-800 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-DeepRed text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

SuccessPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
