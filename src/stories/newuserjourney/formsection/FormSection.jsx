import React from 'react';
import PropTypes from 'prop-types';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';

function FormSection({ formType, formData, setFormData, errors, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-white p-8">
      <form className="flex flex-wrap">
        <div className="p-4 font-khula flex-grow w-full">
          <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">
            {formType === 'minor' ? "About the Fencer" : "About You"}
          </h1>
          <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
          <BaseTextInput
            name="displayFirstName"
            onChange={handleChange}
            placeholder={formType === 'minor' ? "Fencer's Preferred First Name" : "Preferred First Name"}
            value={formData.displayFirstName}
            error={errors.displayFirstName}
          />
          <BaseTextInput
            name="displayLastName"
            onChange={handleChange}
            placeholder={formType === 'minor' ? "Fencer's Preferred Last Name" : "Preferred Last Name"}
            value={formData.displayLastName}
            error={errors.displayLastName}
          />
          <BaseTextInput
            name="legalFirstName"
            onChange={handleChange}
            placeholder={formType === 'minor' ? "Fencer's Legal First Name" : "Legal First Name"}
            value={formData.legalFirstName}
            error={errors.legalFirstName}
          />
          <BaseTextInput
            name="legalLastName"
            onChange={handleChange}
            placeholder={formType === 'minor' ? "Fencer's Legal Last Name" : "Legal Last Name"}
            value={formData.legalLastName}
            error={errors.legalLastName}
          />
          <h1 className="font-khula text-sm text-gray-500 pl-10">{formType === 'minor' ? "Fencer's Date of Birth" : "Date of Birth"}</h1>
          <BaseTextInput
            faIcon="faCalendar"
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            placeholder="Date Of Birth"
            value={formData.dateOfBirth}
            error={errors.dateOfBirth}
          />
        </div>
        {formType === 'minor' && (
          <div className="p-4 font-khula flex-grow w-full">
            <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Guardian's Information</h1>
            <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
            <BaseTextInput
              name="guardianFirstName"
              onChange={handleChange}
              placeholder="Guardian's Legal First Name"
              value={formData.guardianFirstName}
              error={errors.guardianFirstName}
            />
            <BaseTextInput
              name="guardianLastName"
              onChange={handleChange}
              placeholder="Guardian's Legal Last Name"
              value={formData.guardianLastName}
              error={errors.guardianLastName}
            />
          </div>
        )}
        <div className="p-4 font-khula flex-grow w-full">
          <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Contact Info</h1>
          <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
          <BaseTextInput
            faIcon="faEnvelope"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
            error={errors.email}
          />
          <BaseTextInput
            faIcon="faMobilePhone"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            error={errors.phoneNumber}
          />
        </div>
        <div className="p-4 font-khula flex-grow w-full">
          <h1 className="font-khula font-bold mb-2 text-center">Address</h1>
          <BaseTextInput
            faIcon="faStreetView"
            name="streetAddress"
            onChange={handleChange}
            placeholder="Street Address"
            value={formData.streetAddress}
            error={errors.streetAddress}
          />
          <BaseTextInput
            faIcon="faCity"
            name="city"
            onChange={handleChange}
            placeholder="City"
            value={formData.city}
            error={errors.city}
          />
          <BaseSelect
            faIcon="faMapPin"
            name="state"
            onChange={handleChange}
            options={usStateAbbreviations}
            placeholder="State"
            value={formData.state}
            error={errors.state}
          />
          <BaseTextInput
            faIcon="faMapPin"
            name="zipcode"
            onChange={handleChange}
            placeholder="Zipcode"
            value={formData.zipcode}
            error={errors.zipcode}
          />
          <BaseSelect
            faIcon="faMapPin"
            name="country"
            onChange={handleChange}
            options={commonCountries}
            placeholder="Country"
            value={formData.country}
            error={errors.country}
          />
        </div>
        <div className="w-full text-center p-4">
          <button
            type="button"
            onClick={onNext}
            className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}

FormSection.propTypes = {
  formType: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default FormSection;
