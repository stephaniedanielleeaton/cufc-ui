import SuccessPopup from './SuccessPopup';

export default {
  title: 'Components/SuccessPopup',
  component: SuccessPopup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Open = {
  args: {
    isOpen: true,
    message: 'Operation completed successfully!',
    onClose: () => console.log('Close clicked'),
  },
};

export const Closed = {
  args: {
    isOpen: false,
    message: 'Operation completed successfully!',
    onClose: () => console.log('Close clicked'),
  },
};

export const CustomMessage = {
  args: {
    isOpen: true,
    message: 'Your custom success message here!',
    onClose: () => console.log('Close clicked'),
  },
};
