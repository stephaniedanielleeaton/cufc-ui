import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EmailSender({ onSend, recipientLists = [] }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendResult, setSendResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Get additional emails as array
      const extraEmails = additionalEmails
        .split(',')
        .map(email => email.trim())
        .filter(email => email !== '');

      // If a list is selected, add its emails to the additional emails
      const selectedListEmails = selectedList 
        ? recipientLists.find(list => list.id === selectedList)?.emails || []
        : [];

      // Combine both sets of emails and remove duplicates
      const recipientEmails = [...new Set([...extraEmails, ...selectedListEmails])];

      const result = await onSend({
        subject,
        message,
        recipientEmails
      });
      
      setIsSent(true);
      setSendResult(result);
      
      // Reset form
      setSubject('');
      setMessage('');
      setSelectedList('');
      setAdditionalEmails('');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-xl bg-white shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold text-Navy">Send Email</h2>
        <a 
          href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-MediumPink hover:text-DeepRed underline"
        >
          FTC CAN-SPAM Act Compliance Guide
        </a>
      </div>
      
      {isSent ? (
        <div className="space-y-4">
          {sendResult && (
            <div className="space-y-4">
              <div className="bg-green-50 text-green-700 p-4 rounded-lg flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Email Processing Complete</span>
                </div>
                
                <div className="mt-2 text-sm">
                  <p>Total Recipients: {sendResult.summary.totalEmails}</p>
                  <p>Successfully Sent: {sendResult.summary.emailsSent}</p>
                  {sendResult.summary.emailsFailed > 0 && (
                    <p className="text-red-600">Failed to Send: {sendResult.summary.emailsFailed}</p>
                  )}
                  {sendResult.summary.emailsBlocked > 0 && (
                    <div className="mt-2">
                      <p className="text-amber-700">Blocked Recipients: {sendResult.summary.emailsBlocked}</p>
                      <p className="text-sm text-gray-600 mt-1">The following recipients are on the do-not-contact list:</p>
                      <ul className="list-disc list-inside ml-2 text-gray-600">
                        {sendResult.blockedEmails.map((email, index) => (
                          <li key={index}>{email}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {sendResult.failedEmails.length > 0 && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                  <p className="font-medium">Failed to send to:</p>
                  <ul className="list-disc list-inside ml-2">
                    {sendResult.failedEmails.map((email, index) => (
                      <li key={index}>{email}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                setIsSent(false);
                setSendResult(null);
              }}
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
          {/* Recipients Section */}
          <div>
            <label className="block text-sm font-medium text-Navy mb-2">
              Recipients
            </label>
            <div className="space-y-4">
              {/* Email List Selection */}
              <div>
                <label htmlFor="recipientList" className="block text-sm font-medium text-gray-700 mb-1">
                  Choose a recipient list (optional)
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
                >
                  <option value="">No predefined list</option>
                  {recipientLists.map((list) => (
                    <option key={list.id} value={list.id}>
                      {list.name} ({list.count} recipients)
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Emails Input */}
              <div>
                <label htmlFor="additionalEmails" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional email addresses
                  {!selectedList && <span className="text-red-500 ml-1">*</span>}
                </label>
                <textarea
                  id="additionalEmails"
                  value={additionalEmails}
                  onChange={(e) => setAdditionalEmails(e.target.value)}
                  placeholder="Enter email addresses separated by commas"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy h-24"
                  required={!selectedList}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Separate multiple email addresses with commas
                </p>
              </div>
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-Navy mb-2">
              Subject
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-Navy mb-2">
              Message
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-Navy focus:border-Navy h-48"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 shadow-md flex items-center gap-2
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-Navy text-white hover:bg-Navy/90 hover:scale-105'
                }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
      emails: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default EmailSender;
