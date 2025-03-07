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

const mockResponses = {
  success: {
    success: true,
    message: "Completed: 150 successful, 0 failed",
    successCount: 150,
    failureCount: 0,
    failures: [],
    blockedEmails: [],
    summary: {
      totalEmails: 150,
      emailsSent: 150,
      emailsFailed: 0,
      emailsBlocked: 0
    },
    failedEmails: []
  },
  partial: {
    success: true,
    message: "Completed: 48 successful, 2 failed, 1 blocked",
    successCount: 48,
    failureCount: 2,
    failures: [
      { email: "error1@example.com", error: "SMTP error" },
      { email: "error2@example.com", error: "Connection timeout" }
    ],
    blockedEmails: ["blocked@example.com"],
    summary: {
      totalEmails: 51,
      emailsSent: 48,
      emailsFailed: 2,
      emailsBlocked: 1
    },
    failedEmails: ["error1@example.com", "error2@example.com"]
  },
  blocked: {
    success: true,
    message: "Completed: 0 successful, 0 failed",
    successCount: 0,
    failureCount: 0,
    failures: [],
    blockedEmails: ["donotcontact@example.com", "optout@example.com"],
    summary: {
      totalEmails: 2,
      emailsSent: 0,
      emailsFailed: 0,
      emailsBlocked: 2
    },
    failedEmails: []
  }
};

export default {
  title: 'Admin/EmailSender',
  component: EmailSender,
};

export const AllSuccessful = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate longer delay for more recipients
      const totalRecipients = emailData.recipientEmails.length;
      const baseDelay = 2000; // Base delay of 2 seconds
      const perRecipientDelay = 50; // Additional 50ms per recipient
      const totalDelay = baseDelay + (totalRecipients * perRecipientDelay);
      
      await new Promise((resolve) => setTimeout(resolve, totalDelay));
      console.log('Email data:', emailData);
      return mockResponses.success;
    },
  },
  render: (args) => {
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Scenario: All Emails Sent Successfully</h3>
          <p className="text-sm text-gray-600">
            Select any list or add emails - all will be sent successfully.
          </p>
        </div>
        <EmailSender {...args} />
      </div>
    );
  }
};

export const PartialSuccess = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate a longer delay for partial success
      const totalRecipients = emailData.recipientEmails.length;
      const baseDelay = 3000; // Base delay of 3 seconds
      const perRecipientDelay = 75; // Additional 75ms per recipient
      const totalDelay = baseDelay + (totalRecipients * perRecipientDelay);
      
      await new Promise((resolve) => setTimeout(resolve, totalDelay));
      console.log('Email data:', emailData);
      return mockResponses.partial;
    },
  },
  render: (args) => {
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Scenario: Partial Success with Failures</h3>
          <p className="text-sm text-gray-600">
            Some emails will fail to send and one will be blocked (on do-not-contact list).
          </p>
        </div>
        <EmailSender {...args} />
      </div>
    );
  }
};

export const AllBlocked = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate quick response for blocked emails
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Email data:', emailData);
      return mockResponses.blocked;
    },
  },
  render: (args) => {
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Scenario: All Recipients Blocked</h3>
          <p className="text-sm text-gray-600">
            All recipients are on the do-not-contact list.
          </p>
        </div>
        <EmailSender {...args} />
      </div>
    );
  }
};

export const SlowProcessing = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate a very slow processing time
      const totalRecipients = emailData.recipientEmails.length;
      const baseDelay = 5000; // Base delay of 5 seconds
      const perRecipientDelay = 100; // Additional 100ms per recipient
      const totalDelay = baseDelay + (totalRecipients * perRecipientDelay);
      
      await new Promise((resolve) => setTimeout(resolve, totalDelay));
      console.log('Email data:', emailData);
      return {
        ...mockResponses.success,
        message: `Completed after ${Math.round(totalDelay/1000)} seconds: ${totalRecipients} successful`,
      };
    },
  },
  render: (args) => {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800">
            This story simulates a slow email sending process. The delay increases with the number of recipients selected.
          </p>
        </div>
        <EmailSender {...args} />
      </div>
    );
  },
};
