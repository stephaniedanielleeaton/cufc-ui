import React from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';

function NewUserAboutYou() {
  return (
    <div className="p-4">
      <BaseTextInput
        onChange={() => {}}
        placeholder="Enter text..."
      />
      <BaseTextInput
        onChange={() => {}}
        placeholder="Enter text..."
      />
    </div>
  );
}

export default NewUserAboutYou;
