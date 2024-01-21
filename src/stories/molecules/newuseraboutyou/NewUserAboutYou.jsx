import React from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
function NewUserAboutYou() {
  return (
    <>
      <BaseTextInput
        onChange={() => {}}
        placeholder="Enter text..."
      />
      <BaseTextInput
        onChange={() => {}}
        placeholder="Enter text..."
      />
    </>
  );
}

export default NewUserAboutYou;
