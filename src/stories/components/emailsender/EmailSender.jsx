import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EmailSender({ onSend, recipientLists = [] }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const [additionalEmails, setAdditionalEmails] = useState('');
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
      // Get additional emails as array
      const extraEmails = additionalEmails
        .split(',')
        .map(email => email.trim())
        .filter(email => email !== '');

      await onSend({
        subject,
        message,
        selectedList,
        additionalEmails: extraEmails,
        isPromotional
      });
      setIsSent(true);
      // Reset form
      setSubject('');
      setMessage('');
      setSelectedList('');
      setAdditionalEmails('');
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
        <div className="space-y-4">
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Email sent successfully!</span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setIsSent(false)}
              className="px-6 py-3 font-bold rounded-lg transition-all duration-300 shadow-md flex items-center gap-2
                bg-Navy text-white hover:bg-Navy/90 hover:scale-105"
            >
              <span>Send Another Email</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Type Selection */}
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

          {/* Recipients Section */}
          <div>
            <label className="block text-sm font-medium text-Navy mb-2">
              Recipients
            </label>
            <div className="space-y-4">
              {/* Predefined List Selection */}
              <div>
                <label htmlFor="recipientList" className="block text-sm font-medium text-gray-700 mb-1">
                  {isPromotional ? 'Promotional Email Recipients' : 'Choose a recipient list (optional)'}
                  {isPromotional && <span className="text-red-500 ml-1">*</span>}
                </label>
                <select
                  id="recipientList"
                  value={selectedList}
                  onChange={(e) => {
                    const newSelectedList = e.target.value;
                    setSelectedList(newSelectedList);
                    if (newSelectedList) {
                      const selectedListData = recipientLists.find(list => list.id === newSelectedList);
                      console.log('Selected List:', {
                        id: selectedListData.id,
                        name: selectedListData.name,
                        count: selectedListData.count,
                        emails: selectedListData.emails
                      });
                    }
                  }}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy ${
                    isPromotional && !selectedList ? 'border-red-500' : ''
                  }`}
                  required={isPromotional}
                >
                  {isPromotional ? (
                    <>
                      <option value="">Select promotional subscribers list</option>
                      {recipientLists
                        .filter(list => list.id === 'promotional')
                        .map((list) => (
                          <option key={list.id} value={list.id}>
                            {list.name} ({list.count} recipients)
                          </option>
                        ))}
                    </>
                  ) : (
                    <>
                      <option value="">No predefined list</option>
                      {recipientLists
                        .filter(list => list.id !== 'promotional')
                        .map((list) => (
                          <option key={list.id} value={list.id}>
                            {list.name} ({list.count} recipients)
                          </option>
                        ))}
                    </>
                  )}
                </select>
                {isPromotional && !selectedList && (
                  <p className="mt-1 text-sm text-red-500">
                    Promotional emails can only be sent to subscribed members
                  </p>
                )}
              </div>

              {/* Additional Emails Input */}
              {!isPromotional && (
                <div>
                  <label htmlFor="additionalEmails" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional email addresses
                    {!selectedList && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <textarea
                    id="additionalEmails"
                    value={additionalEmails}
                    onChange={(e) => setAdditionalEmails(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                    rows={3}
                    placeholder="Enter additional email addresses separated by commas"
                    required={!selectedList}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter email addresses separated by commas (e.g., email1@example.com, email2@example.com)
                  </p>
                  {additionalEmails && (
                    <p className="mt-1 text-xs text-gray-600">
                      Additional recipients: {additionalEmails.split(',').filter(email => email.trim()).length}
                    </p>
                  )}
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
      emails: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

export default EmailSender;
