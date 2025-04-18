import NotificationSignup from './NotificationSignup';

export default {
  title: 'Components/NotificationSignup',
  component: NotificationSignup,
};

export const Default = {
  args: {
    onSubmit: async (email) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Email submitted:', email);
    },
  },
};
