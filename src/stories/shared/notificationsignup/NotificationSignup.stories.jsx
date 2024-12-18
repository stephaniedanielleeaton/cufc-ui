import NotificationSignup from './NotificationSignup';

export default {
  title: 'Shared/NotificationSignup',
  component: NotificationSignup,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    onSubmit: async (email) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Email submitted:', email);
    },
  },
};

export const WithError = {
  args: {
    onSubmit: async () => {
      // Simulate API error
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Failed to submit email');
    },
  },
};
