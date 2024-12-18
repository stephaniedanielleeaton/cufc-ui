import EmailSender from './EmailSender';

export default {
  title: 'Components/EmailSender',
  component: EmailSender,
};

const mockRecipientLists = [
  { id: 'all', name: 'All Members', count: 150 },
  { id: 'active', name: 'Active Members', count: 75 },
  { id: 'newsletter', name: 'Newsletter Subscribers', count: 200 },
  { id: 'new', name: 'New Members (Last 30 Days)', count: 25 },
];

export const Default = {
  args: {
    recipientLists: mockRecipientLists,
    onSend: async (emailData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Email data:', emailData);
    },
  },
};
