import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UnsubscribeForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error unsubscribing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-xl bg-gray-100/50 text-Navy py-8 md:py-10 px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-lg font-bold mb-2">
          Unsubscribe from Updates
        </h3>
        <p className="text-sm text-Navy/80 mb-4">
          Enter your email address below to unsubscribe from class notifications.
        </p>
        
        {isSubmitted ? (
          <div className="mt-4 p-3 rounded-lg bg-Navy/10 text-Navy text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">You have been successfully unsubscribed from our mailing list.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-3 font-bold rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2
                bg-Navy text-white hover:bg-Navy/90
                ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Unsubscribe</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

UnsubscribeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UnsubscribeForm;
