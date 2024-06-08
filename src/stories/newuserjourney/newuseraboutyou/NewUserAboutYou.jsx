import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../formsection/FormSection.jsx';
import ClassOptions from '../classoptions/ClassOptions.jsx';

function NewUserAboutYou({ onSubmit, emailStatusMessage }) {
  const [formType, setFormType] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
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
  });

  const [errors, setErrors] = useState({});

  const handleFormTypeSelection = (type) => {
    setFormType(type);
  };

  const validateFormSection = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'displayFirstName' && key !== 'displayLastName' && key !== 'additionalFamilyMembers' && key !== 'requestedMembershipType' && key !== 'guardianFirstName' && key !== 'guardianLastName') {
        valid = false;
        newErrors[key] = 'This field is required';
      }
    });

    if (formType === 'minor') {
      if (!formData.guardianFirstName) {
        valid = false;
        newErrors.guardianFirstName = 'This field is required';
      }
      if (!formData.guardianLastName) {
        valid = false;
        newErrors.guardianLastName = 'This field is required';
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const validateClassOptions = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.requestedMembershipType) {
      valid = false;
      newErrors.requestedMembershipType = 'This field is required';
    }

    formData.additionalFamilyMembers.forEach((member, index) => {
      if (!member.firstName || !member.lastName || !member.dateOfBirth) {
        valid = false;
        newErrors[`familyMember${index}`] = 'First Name, Last Name, and Date of Birth are required for all family members';
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateFormSection()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateClassOptions()) {
      await onSubmit({ ...formData });
    }
  };

  const handleAddFamilyMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: [...prevData.additionalFamilyMembers, { firstName: '', lastName: '', dateOfBirth: '' }],
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

  if (formType === null) {
    return (
      <div className="max-w-screen-md mx-auto bg-white p-8 text-center">
        <h1 className="text-xl text-wine font-khula font-bold mb-4">Who are you signing up?</h1>
        <button
          onClick={() => handleFormTypeSelection('adult')}
          className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black m-2"
        >
          I am above 18 and signing up for myself or my family
        </button>
        <button
          onClick={() => handleFormTypeSelection('minor')}
          className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black m-2"
        >
          I am a legal guardian signing up on behalf of a minor
        </button>
      </div>
    );
  }

  if (currentStep === 1) {
    return <FormSection formType={formType} formData={formData} setFormData={setFormData} errors={errors} onNext={handleNext} />;
  }

  return (
    <div>
      <ClassOptions
        selectedOption={formData.requestedMembershipType}
        onSelect={(id) => setFormData((prevData) => ({ ...prevData, requestedMembershipType: id }))}
        onNext={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleAddFamilyMember={handleAddFamilyMember}
        handleRemoveFamilyMember={handleRemoveFamilyMember}
        handleFamilyMemberChange={handleFamilyMemberChange}
      />
      {emailStatusMessage && (
        <div className="w-full text-center p-4">
          <span className={`p-4 text-${emailStatusMessage.includes('Error') ? 'red-500' : 'black'} `}>
            {emailStatusMessage}
          </span>
        </div>
      )}
    </div>
  );
}

NewUserAboutYou.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailStatusMessage: PropTypes.string,
};

export default NewUserAboutYou;
