import PropTypes from 'prop-types';
import FormSection from '../formsection/FormSection.jsx';
import React, { useState } from 'react';
import LoadingPopup from '../../components/LoadingPopup';
import SuccessPopup from '../../components/SuccessPopup';

function NewMemberSignUp({ onSubmit, emailStatusMessage }) {
  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    errors: {},
  });

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

    return { valid, errors: newErrors };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { valid, errors } = validateFormSection();

    if (valid) {
      setStatus((prev) => ({ ...prev, loading: true, errors: {} }));

      try {
        if (formData.requestedMembershipType === 'dropIn') {
          setStatus((prev) => ({ ...prev, loading: false, success: true }));
        } else {
          await onSubmit({ ...formData });

          if (formData.requestedMembershipType === 'dropIn') {
            setStatus((prev) => ({ ...prev, loading: false, success: true }));
          }
        }
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          loading: false,
          errors: { submit: 'Failed to submit form. Please try again.' },
        }));
      }
    } else {
      setStatus((prev) => ({ ...prev, errors }));
    }
  };

  const handleCloseSuccess = () => {
    setStatus((prev) => ({ ...prev, success: false }));
    setFormData(initialFormData);
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
      <LoadingPopup isOpen={status.loading} message="Redirecting to Check Out" />
      <SuccessPopup
        isOpen={status.success}
        message="Thank you! Please use the Drop In Payment option to pay when you arrive for class."
        onClose={handleCloseSuccess}
      />
      <FormSection
        formType={formData.isGuardian ? 'minor' : 'adult'}
        formData={formData}
        setFormData={setFormData}
        errors={status.errors}
        onNext={handleSubmit}
        handleAddFamilyMember={handleAddFamilyMember}
        handleRemoveFamilyMember={handleRemoveFamilyMember}
        handleFamilyMemberChange={handleFamilyMemberChange}
        emailStatusMessage={emailStatusMessage}
        buttonText={status.loading ? 'LOADING...' : 'SUBMIT'}
        buttonDisabled={status.loading}
      />
    </div>
  );
}

NewMemberSignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  emailStatusMessage: PropTypes.string,
};

export default NewMemberSignUp;
