import PropTypes from 'prop-types';
import FormSection from '../formsection/FormSection.jsx';
import React, { useState } from 'react';

function NewPersonSignUp({ onSubmit, emailStatusMessage }) {
  const [formData, setFormData] = useState({
    displayFirstName: '',
    displayLastName: '',
    legalFirstName: '',
    legalLastName: '',
    guardianFirstName: '',
    guardianLastName: '',
    email: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phoneNumber: '',
    requestedMembershipType: '',
    additionalFamilyMembers: [],
    heardAboutUs: '',
    isGuardian: false,
  });

  const [errors, setErrors] = useState({});

  const validateFormSection = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (
        !formData[key] &&
        key !== 'displayFirstName' &&
        key !== 'displayLastName' &&
        key !== 'additionalFamilyMembers' &&
        key !== 'requestedMembershipType' &&
        key !== 'guardianFirstName' &&
        key !== 'guardianLastName' &&
        key !== 'heardAboutUs' &&
        key !== 'isGuardian'
      ) {
        valid = false;
        newErrors[key] = 'This field is required';
      }
    });

    if (formData.isGuardian) {
      if (!formData.guardianFirstName) {
        valid = false;
        newErrors.guardianFirstName = 'This field is required';
      }
      if (!formData.guardianLastName) {
        valid = false;
        newErrors.guardianLastName = 'This field is required';
      }
    }

    formData.additionalFamilyMembers.forEach((member, index) => {
      if (
        !member.firstName ||
        !member.lastName ||
        !member.dateOfBirth ||
        !member.displayFirstName ||
        !member.displayLastName
      ) {
        valid = false;
        newErrors[`familyMember${index}`] =
          'First Name, Last Name, Preferred First Name, and Preferred Last Name are required for all family members';
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFormSection()) {
      try {
        await onSubmit({ ...formData });
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          submission: 'Error Sending Email. :( Tell Steph.',
        }));
      }
    }
  };

  const handleAddFamilyMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: [
        ...prevData.additionalFamilyMembers,
        { firstName: '', lastName: '', dateOfBirth: '', displayFirstName: '', displayLastName: '' },
      ],
    }));
  };

  const handleRemoveFamilyMember = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: prevData.additionalFamilyMembers.filter((_, i) => i !== index),
    }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...formData.additionalFamilyMembers];
    updatedFamilyMembers[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: updatedFamilyMembers,
    }));
  };

  return (
    <div>
      <FormSection
        formType={formData.isGuardian ? 'minor' : 'adult'}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        onNext={handleSubmit}
        handleAddFamilyMember={handleAddFamilyMember}
        handleRemoveFamilyMember={handleRemoveFamilyMember}
        handleFamilyMemberChange={handleFamilyMemberChange}
        emailStatusMessage={emailStatusMessage}
      />
    </div>
  );
}

NewPersonSignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailStatusMessage: PropTypes.string,
};

export default NewPersonSignUp;
