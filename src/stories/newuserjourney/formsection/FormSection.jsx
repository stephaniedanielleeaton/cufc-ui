import React from 'react';
import PropTypes from 'prop-types';
import ClassOptions from '../classoptions/ClassOptions.jsx'; // Import ClassOptions component
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';

function FormSection({ formType, formData, setFormData, errors, onNext, handleAddFamilyMember, handleRemoveFamilyMember, handleFamilyMemberChange, emailStatusMessage }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      isGuardian: e.target.checked,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg p-6 font-poppins">

        {/* ClassOptions at the top */}
        <ClassOptions
          selectedOption={formData.requestedMembershipType}
          onSelect={(id) => setFormData((prevData) => ({ ...prevData, requestedMembershipType: id }))}
        />

        <form onSubmit={onNext} className="space-y-4 mt-8 px-5">
          <hr className="border-gray-300 my-8" />
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
            {formType === 'minor' ? 'ABOUT THE FENCER' : 'ABOUT YOU'}
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              name="displayFirstName"
              value={formData.displayFirstName}
              onChange={handleChange}
              placeholder={formType === 'minor' ? 'Fencer\'s Preferred First Name' : 'Preferred First Name'}
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="displayLastName"
              value={formData.displayLastName}
              onChange={handleChange}
              placeholder={formType === 'minor' ? 'Fencer\'s Preferred Last Name' : 'Preferred Last Name'}
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="legalFirstName"
              value={formData.legalFirstName}
              onChange={handleChange}
              placeholder={formType === 'minor' ? 'Fencer\'s Legal First Name' : 'Legal First Name'}
              className={`w-full px-3 py-2 border ${errors.legalFirstName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.legalFirstName && <p className="text-red-500 text-xs">{errors.legalFirstName}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="legalLastName"
              value={formData.legalLastName}
              onChange={handleChange}
              placeholder={formType === 'minor' ? 'Fencer\'s Legal Last Name' : 'Legal Last Name'}
              className={`w-full px-3 py-2 border ${errors.legalLastName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.legalLastName && <p className="text-red-500 text-xs">{errors.legalLastName}</p>}
          </div>
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
            DATE OF BIRTH
          </h3>
          <div className="space-y-2">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date Of Birth"
              className={`w-full px-3 py-2 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
          </div>
          <div className="flex items-center space-y-2">
            <input
              type="checkbox"
              name="isGuardian"
              checked={formData.isGuardian}
              onChange={handleCheckboxChange}
              className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
            />
            <label className="block mb-1 text-sm">
              I am a guardian signing up on behalf of a minor that is at least 16 years of age
            </label>
          </div>
          {formData.isGuardian && (
            <>
              <div className="space-y-2">
                <input
                  type="text"
                  name="guardianFirstName"
                  value={formData.guardianFirstName}
                  onChange={handleChange}
                  placeholder="Guardian First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="guardianLastName"
                  value={formData.guardianLastName}
                  onChange={handleChange}
                  placeholder="Guardian Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                />
              </div>
            </>
          )}
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
            CONTACT INFORMATION
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          </div>
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
            ADDRESS
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              placeholder="Street Address"
              className={`w-full px-3 py-2 border ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.streetAddress && <p className="text-red-500 text-xs">{errors.streetAddress}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
          </div>
          <div className="space-y-2">
            <BaseSelect
              faIcon="faMapPin"
              name="state"
              onChange={handleChange}
              options={usStateAbbreviations}
              placeholder="State"
              value={formData.state}
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
              error={errors.state}
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className={`w-full px-3 py-2 border ${errors.zipcode ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.zipcode && <p className="text-red-500 text-xs">{errors.zipcode}</p>}
          </div>
          <div className="space-y-2">
            <BaseSelect
              faIcon="faMapPin"
              name="country"
              onChange={handleChange}
              options={commonCountries}
              placeholder="Country"
              value={formData.country}
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
              error={errors.country}
            />
          </div>
          {formData.requestedMembershipType === 'familyPlan' && (
            <div className="space-y-2 mt-8">
              <h3 className="font-extrabold text-sm tracking-wider text-xs text-center">ADD FAMILY MEMBERS</h3>
              {formData.additionalFamilyMembers.map((member, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <input
                    type="text"
                    name={`familyMemberFirstName${index}`}
                    placeholder="First Name"
                    value={member.firstName}
                    onChange={(e) => handleFamilyMemberChange(index, 'firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                  />
                  <input
                    type="text"
                    name={`familyMemberLastName${index}`}
                    placeholder="Last Name"
                    value={member.lastName}
                    onChange={(e) => handleFamilyMemberChange(index, 'lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                  />
                  <input
                    type="text"
                    name={`familyMemberDisplayFirstName${index}`}
                    placeholder="Preferred First Name"
                    value={member.displayFirstName}
                    onChange={(e) => handleFamilyMemberChange(index, 'displayFirstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                  />
                  <input
                    type="text"
                    name={`familyMemberDisplayLastName${index}`}
                    placeholder="Preferred Last Name"
                    value={member.displayLastName}
                    onChange={(e) => handleFamilyMemberChange(index, 'displayLastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                  />
                  <input
                    type="date"
                    name={`familyMemberDateOfBirth${index}`}
                    onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                    placeholder="Date of Birth"
                    value={member.dateOfBirth}
                    className={`w-full px-3 py-2 border ${errors[`familyMember${index}`] ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
                  />
                  {errors[`familyMember${index}`] &&
                    <p className="text-red-500 text-xs">{errors[`familyMember${index}`]}</p>}
                  <button type="button" onClick={() => handleRemoveFamilyMember(index)}
                          className="text-red-500 text-xs">
                    Remove -
                  </button>
                  <hr className="border-gray-300 my-4 w-1/2 mx-auto" />
                </div>
              ))}
              <button type="button" onClick={handleAddFamilyMember} className="text-green-500 text-xs">
                Add Family Member +
              </button>
            </div>
          )}
          <div className="space-y-2 mt-8">
            <h3 className="font-extrabold text-sm tracking-wider text-xs text-center">HOW DID YOU HEAR ABOUT US?</h3>
            <input
              type="text"
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              placeholder="Please let us know how you heard about us"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
            >
              SUBMIT
            </button>
          </div>
          {emailStatusMessage && (
            <div className="text-center mt-4">
              <p className={`text-${emailStatusMessage.includes('Error') ? 'red-500' : 'black'} text-xs`}>
                {emailStatusMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

FormSection.propTypes = {
  formType: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  handleAddFamilyMember: PropTypes.func.isRequired,
  handleRemoveFamilyMember: PropTypes.func.isRequired,
  handleFamilyMemberChange: PropTypes.func.isRequired,
  emailStatusMessage: PropTypes.string,
};

export default FormSection;
