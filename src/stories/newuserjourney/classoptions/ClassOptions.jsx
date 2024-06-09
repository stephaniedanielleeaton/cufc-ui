import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const options = [
  {
    id: 'nugget',
    header: 'Sign Up For The Beginner Course',
    description: "Sign up to take our beginner's course to learn the basics of historical fencing! Recommended if you have never done HEMA before.",
    price: '$110 for full course',
  },
  {
    id: 'fullMembership',
    header: 'Full Class Access',
    description: 'Access to all regular weekly classes. Social events included. Recommended if you have done HEMA before and would like to join classes.',
    price: '$110/month',
  },
  {
    id: 'socialMembership',
    header: 'Saturday Classes',
    description: 'Access to the classes and coaches for Saturdays only. Social events included. Recommended if you have done HEMA before.',
    price: '$65/month',
  },
  {
    id: 'familyPlan',
    header: 'Family Plan',
    description: 'Sign up for the Family Plan and add additional family members. Prices are for full class access for everyone.',
    price: '$110 + $65/month for each additional family member',
  },
];

const beginnerCourses = [
  { id: 'aug7', date: 'August 7th' },
  { id: 'oct2', date: 'October 2nd' },
];

function ClassOptions({ selectedOption, onSelect, onNext, formData, setFormData, errors, handleAddFamilyMember, handleRemoveFamilyMember, handleFamilyMemberChange }) {
  const courseStartDateRef = useRef(null);

  useEffect(() => {
    if (selectedOption === 'nugget' && courseStartDateRef.current) {
      courseStartDateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedOption]);

  const handleCourseSelect = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      beginnerCourseStartDate: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Class Options</h1>
      <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
      <div className="flex flex-wrap justify-center mb-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`m-2 p-4 border-2 ${selectedOption === option.id ? 'border-black' : 'border-gray-300'} rounded-lg cursor-pointer`}
            onClick={() => onSelect(option.id)}
          >
            <h2 className="font-bold">{option.header}</h2>
            <p>{option.description}</p>
            <p className="font-bold">{option.price}</p>
          </div>
        ))}
      </div>
      {selectedOption === 'nugget' && (
        <div ref={courseStartDateRef}>
          <h1 className="font-khula font-bold mb-4 text-center mt-2">Select Course Start Date</h1>
          <div className="flex flex-wrap justify-center mb-4">
            {beginnerCourses.map((course) => (
              <div key={course.id} className="m-2 p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  id={course.id}
                  name="beginnerCourseStartDate"
                  value={course.date}
                  checked={formData.beginnerCourseStartDate === course.date}
                  onChange={handleCourseSelect}
                />
                <label htmlFor={course.id} className="ml-2">{course.date}</label>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedOption === 'familyPlan' && (
        <div>
          <h1 className="font-khula font-bold mb-4 text-center mt-2">Add Family Members</h1>
          {formData.additionalFamilyMembers.map((member, index) => (
            <div key={index} className="mb-4">
              <BaseTextInput
                name={`familyMemberFirstName${index}`}
                placeholder="First Name"
                value={member.firstName}
                onChange={(e) => handleFamilyMemberChange(index, 'firstName', e.target.value)}
              />
              <BaseTextInput
                name={`familyMemberLastName${index}`}
                placeholder="Last Name"
                value={member.lastName}
                onChange={(e) => handleFamilyMemberChange(index, 'lastName', e.target.value)}
              />
              <BaseTextInput
                faIcon="faCalendar"
                name={`familyMemberDateOfBirth${index}`}
                type="date"
                onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                placeholder="Date of Birth"
                value={member.dateOfBirth}
                error={errors[`familyMember${index}`]}
              />
              <button type="button" onClick={() => handleRemoveFamilyMember(index)}>
                <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-outerSpace inline" /> Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddFamilyMember} className="text-green-500">
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-outerSpace inline" /> Add Family Member
          </button>
        </div>
      )}
      <div className="w-full text-center p-4">
        <button
          onClick={onNext}
          className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

ClassOptions.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  handleAddFamilyMember: PropTypes.func.isRequired,
  handleRemoveFamilyMember: PropTypes.func.isRequired,
  handleFamilyMemberChange: PropTypes.func.isRequired,
};

export default ClassOptions;
