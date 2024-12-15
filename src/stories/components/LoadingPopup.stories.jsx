import LoadingPopup from './LoadingPopup';

export default {
  title: 'Components/LoadingPopup',
  component: LoadingPopup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isOpen: true,
    message: 'Please wait...',
  },
};

export const CustomMessage = {
  args: {
    isOpen: true,
    message: 'Saving your changes...',
  },
};

export const Closed = {
  args: {
    isOpen: false,
    message: 'Please wait...',
  },
};
