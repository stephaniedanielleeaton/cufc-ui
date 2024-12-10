import React from 'react';
import PropTypes from 'prop-types';
import ClassOptions from '../classoptions/ClassOptions.jsx'; // Import ClassOptions component
import BaseSelect from '../../reusablecomponents/select/BaseSelect.jsx';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';

function FormSection({
  formType,
  formData,
  setFormData,
  errors,
  onNext,
  handleAddFamilyMember,
  handleRemoveFamilyMember,
  handleFamilyMemberChange,
  emailStatusMessage,
  buttonText,
  buttonDisabled,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({ ...prevData, isGuardian: e.target.checked }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto md:p-6">
        {/* Hero Section */}
        <div className="bg-Navy text-white p-6 md:rounded-lg md:mb-8">
          <h1 className="text-3xl font-bold text-center">Join Our HEMA Community</h1>
          <p className="text-center mt-2 text-gray-200">Begin your journey in Historical European Martial Arts</p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white p-4 md:p-6 md:rounded-lg md:shadow-lg">
          <ClassOptions
            selectedOption={formData.requestedMembershipType}
            onSelect={(id) => setFormData((prevData) => ({ ...prevData, requestedMembershipType: id }))}
          />

          <form onSubmit={onNext} className="mt-8">
            {/* Guardian Checkbox */}
            <div className="bg-gray-50 p-4 mb-8 md:rounded-lg">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="isGuardian"
                  checked={formData.isGuardian}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-Navy border-gray-300 rounded focus:ring-Navy"
                />
                <label className="text-sm text-gray-700">
                  I am a guardian signing up on behalf of a minor that is at least 16 years of age
                </label>
              </div>
            </div>

            {/* Form Sections */}
            <div className="space-y-8">
              {/* Personal Information */}
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2">
                  {formType === 'minor' ? 'About the Fencer' : 'Personal Information'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {formType === 'minor' ? "Fencer's Preferred First Name" : 'Preferred First Name'}
                    </label>
                    <input
                      type="text"
                      name="displayFirstName"
                      value={formData.displayFirstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 transition-colors"
                      placeholder="Enter preferred first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {formType === 'minor' ? "Fencer's Preferred Last Name" : 'Preferred Last Name'}
                    </label>
                    <input
                      type="text"
                      name="displayLastName"
                      value={formData.displayLastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 transition-colors"
                      placeholder="Enter preferred last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {formType === 'minor' ? "Fencer's Legal First Name" : 'Legal First Name'}
                    </label>
                    <input
                      type="text"
                      name="legalFirstName"
                      value={formData.legalFirstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.legalFirstName ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter legal first name"
                    />
                    {errors.legalFirstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.legalFirstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {formType === 'minor' ? "Fencer's Legal Last Name" : 'Legal Last Name'}
                    </label>
                    <input
                      type="text"
                      name="legalLastName"
                      value={formData.legalLastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.legalLastName ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter legal last name"
                    />
                    {errors.legalLastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.legalLastName}</p>
                    )}
                  </div>
                </div>
              </section>

              {/* Date of Birth */}
              <section>
                <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                  Date of Birth
                </h3>
                <div className="max-w-xs">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>
                  )}
                </div>
              </section>

              {/* Guardian Information */}
              {formData.isGuardian && (
                <section>
                  <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                    Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian First Name
                      </label>
                      <input
                        type="text"
                        name="guardianFirstName"
                        value={formData.guardianFirstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 transition-colors"
                        placeholder="Enter guardian's first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guardian Last Name
                      </label>
                      <input
                        type="text"
                        name="guardianLastName"
                        value={formData.guardianLastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 transition-colors"
                        placeholder="Enter guardian's last name"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* Contact Information */}
              <section>
                <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>
              </section>

              {/* Address */}
              <section>
                <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                  Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.streetAddress ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter street address"
                    />
                    {errors.streetAddress && (
                      <p className="mt-1 text-sm text-red-500">{errors.streetAddress}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.city ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter city"
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <BaseSelect
                      name="state"
                      onChange={handleChange}
                      options={usStateAbbreviations}
                      placeholder="Select state"
                      value={formData.state}
                      className="w-full border-b border-gray-300 focus:border-Navy"
                      error={errors.state}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border-b focus:ring-0 transition-colors ${
                        errors.zipcode ? 'border-red-500' : 'border-gray-300 focus:border-Navy'
                      }`}
                      placeholder="Enter ZIP code"
                    />
                    {errors.zipcode && <p className="mt-1 text-sm text-red-500">{errors.zipcode}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <BaseSelect
                      name="country"
                      onChange={handleChange}
                      options={commonCountries}
                      placeholder="Select country"
                      value={formData.country}
                      className="w-full border-b border-gray-300 focus:border-Navy"
                      error={errors.country}
                    />
                  </div>
                </div>
              </section>

              {/* Family Members */}
              {formData.requestedMembershipType === 'familyPlan' && (
                <section>
                  <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                    Family Members
                  </h3>
                  <div className="space-y-4">
                    {formData.additionalFamilyMembers.map((member, index) => (
                      <div key={index} className="bg-gray-50 p-4 md:rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium text-gray-900">Family Member {index + 1}</h4>
                          <button
                            type="button"
                            onClick={() => handleRemoveFamilyMember(index)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <input
                              type="text"
                              placeholder="First Name"
                              value={member.firstName}
                              onChange={(e) => handleFamilyMemberChange(index, 'firstName', e.target.value)}
                              className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 bg-transparent"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Last Name"
                              value={member.lastName}
                              onChange={(e) => handleFamilyMemberChange(index, 'lastName', e.target.value)}
                              className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 bg-transparent"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Preferred First Name"
                              value={member.displayFirstName}
                              onChange={(e) => handleFamilyMemberChange(index, 'displayFirstName', e.target.value)}
                              className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 bg-transparent"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Preferred Last Name"
                              value={member.displayLastName}
                              onChange={(e) => handleFamilyMemberChange(index, 'displayLastName', e.target.value)}
                              className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 bg-transparent"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <input
                              type="date"
                              onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                              value={member.dateOfBirth}
                              className={`w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0 bg-transparent ${
                                errors[`familyMember${index}`] ? 'border-red-500' : ''
                              }`}
                            />
                            {errors[`familyMember${index}`] && (
                              <p className="mt-1 text-sm text-red-500">{errors[`familyMember${index}`]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddFamilyMember}
                      className="w-full py-3 border-2 border-dashed border-gray-300 md:rounded-lg text-gray-600 hover:border-Navy hover:text-Navy transition-colors"
                    >
                      + Add Family Member
                    </button>
                  </div>
                </section>
              )}

              {/* How did you hear about us */}
              <section>
                <h3 className="text-lg font-semibold text-Navy border-b border-gray-200 pb-2 mb-4">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:border-Navy focus:ring-0"
                    placeholder="Please let us know how you found us"
                  />
                </div>
              </section>
            </div>

            {/* Submit Button */}
            <div className="mt-8 sticky bottom-0 -mx-4 p-4 bg-white border-t border-gray-200 md:relative md:mx-0 md:p-0 md:bg-transparent md:border-0">
              <button
                type="submit"
                disabled={buttonDisabled}
                className={`w-full py-3 px-6 md:rounded-lg text-center font-semibold transition-all ${
                  buttonDisabled
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-Navy text-white hover:bg-MediumPink'
                }`}
              >
                {buttonText || 'Continue'}
              </button>
            </div>

            {/* Status Message */}
            {emailStatusMessage && (
              <div className="mt-4 text-center">
                <p
                  className={`text-sm ${
                    emailStatusMessage.includes('Error') ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  {emailStatusMessage}
                </p>
              </div>
            )}
          </form>
        </div>
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
  buttonText: PropTypes.string,
  buttonDisabled: PropTypes.bool,
};

export default FormSection;
