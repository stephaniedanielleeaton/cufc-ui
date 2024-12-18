import UnsubscribeForm from './UnsubscribeForm';

export default {
  title: 'Components/UnsubscribeForm',
  component: UnsubscribeForm,
};

export const Default = {
  args: {
    onSubmit: async (email) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Unsubscribe request for:', email);
    },
  },
};
