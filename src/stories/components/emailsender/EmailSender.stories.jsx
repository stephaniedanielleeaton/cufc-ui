import React from 'react';
import EmailSender from './EmailSender';

const mockRecipientLists = [
  {
    id: 'promotional',
    name: 'Promotional Subscribers',
    count: 50,
    emails: Array(50).fill().map((_, i) => `promo${i + 1}@example.com`)
  },
  {
    id: 'all',
    name: 'All Members',
    count: 150,
    emails: Array(150).fill().map((_, i) => `member${i + 1}@example.com`)
  },
  {
    id: 'active',
    name: 'Active Members',
    count: 75,
    emails: Array(75).fill().map((_, i) => `active${i + 1}@example.com`)
  },
  {
    id: 'coaches',
    name: 'Coaches',
    count: 10,
    emails: Array(10).fill().map((_, i) => `coach${i + 1}@example.com`)
  }
];

export default {
  title: 'Components/EmailSender',
  component: EmailSender,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Email data:', emailData);
      return Promise.resolve();
    },
  },
  render: (args) => {
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Try these scenarios:</h3>
          <ol className="list-decimal ml-5 space-y-2 text-sm text-gray-600">
            <li>Select "Promotional Email" - notice only promotional subscribers are available</li>
            <li>Select "Transactional Email" - notice all lists except promotional are available</li>
            <li>For transactional emails, try selecting a list AND adding additional emails</li>
            <li>Try submitting without selecting an email type - notice the validation</li>
          </ol>
        </div>
        <EmailSender {...args} />
      </div>
    );
  }
};
