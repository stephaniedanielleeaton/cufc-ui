import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EmailSender({ onSend, recipientLists = [] }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const [customEmails, setCustomEmails] = useState('');
  const [useCustomList, setUseCustomList] = useState(false);
  const [isPromotional, setIsPromotional] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPromotional === null) {
      return; // Prevent submission if email type isn't selected
    }
    setIsLoading(true);
    try {
      await onSend({
        subject,
        message,
        recipientList: useCustomList ? null : selectedList,
        customEmails: useCustomList ? customEmails.split(',').map(email => email.trim()) : null,
        isPromotional
      });
      setIsSent(true);
      // Reset form
      setSubject('');
      setMessage('');
      setSelectedList('');
      setCustomEmails('');
      setUseCustomList(false);
      setIsPromotional(null);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-xl bg-white shadow-md p-6">
      <h2 className="text-xl font-bold text-Navy mb-6">Send Email</h2>
      
      {isSent ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Email sent successfully!</span>
        </div>  
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipient Selection */}
          <div>
            <label className="block text-sm font-medium text-Navy mb-2">
              Select Recipients
            </label>
            <div className="space-y-4">
              {/* Predefined Lists Radio */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="use-predefined"
                  name="listType"
                  checked={!useCustomList}
                  onChange={() => setUseCustomList(false)}
                  className="w-4 h-4 text-Navy border-gray-300 focus:ring-Navy"
                  required
                />
                <label htmlFor="use-predefined" className="text-sm text-gray-700">
                  Use predefined list
                </label>
              </div>

              {/* Predefined List Dropdown */}
              {!useCustomList && (
                <select
                  id="recipientList"
                  value={selectedList}
                  onChange={(e) => setSelectedList(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                  required
                >
                  <option value="">Choose a recipient list...</option>
                  {recipientLists.map((list) => (
                    <option key={list.id} value={list.id}>
                      {list.name} ({list.count} recipients)
                    </option>
                  ))}
                </select>
              )}

              {/* Custom List Radio */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="use-custom"
                  name="listType"
                  checked={useCustomList}
                  onChange={() => setUseCustomList(true)}
                  className="w-4 h-4 text-Navy border-gray-300 focus:ring-Navy"
                  required
                />
                <label htmlFor="use-custom" className="text-sm text-gray-700">
                  Enter custom email list
                </label>
              </div>

              {/* Custom Email List Input */}
              {useCustomList && (
                <div>
                  <textarea
                    id="customEmails"
                    value={customEmails}
                    onChange={(e) => setCustomEmails(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                    rows={3}
                    placeholder="Enter email addresses separated by commas"
                    required={useCustomList}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter email addresses separated by commas (e.g., email1@example.com, email2@example.com)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Subject Line */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-Navy mb-2">
              Subject Line
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
              placeholder="Enter email subject"
              required
            />
          </div>

          {/* Message Content */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-Navy mb-2">
              Message Content
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
              placeholder="Enter your message here..."
              required
            />
          </div>

          {/* Promotional Email Selection */}
          <div>
            <label className="block text-sm font-medium text-Navy mb-2">
              Email Type
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="promotional-yes"
                  name="isPromotional"
                  checked={isPromotional === true}
                  onChange={() => setIsPromotional(true)}
                  className="w-4 h-4 text-Navy border-gray-300 focus:ring-Navy"
                  required
                />
                <label htmlFor="promotional-yes" className="text-sm text-gray-700">
                  This is a promotional email
                  <span className="ml-1 text-xs text-gray-500"> (Will include unsubscribe option)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="promotional-no"
                  name="isPromotional"
                  checked={isPromotional === false}
                  onChange={() => setIsPromotional(false)}
                  className="w-4 h-4 text-Navy border-gray-300 focus:ring-Navy"
                  required
                />
                <label htmlFor="promotional-no" className="text-sm text-gray-700">
                  This is a transactional/informational email
                  <span className="ml-1 text-xs text-gray-500"> (e.g., class cancellations, updates)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 shadow-md flex items-center gap-2
                bg-Navy text-white hover:bg-Navy/90
                ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

EmailSender.propTypes = {
  onSend: PropTypes.func.isRequired,
  recipientLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};

export default EmailSender;
