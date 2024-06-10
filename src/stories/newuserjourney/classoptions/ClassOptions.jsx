import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

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

function ClassOptions({ selectedOption, onSelect, onNext, formData, setFormData, errors }) {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-4">
      <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Class Options</h1>
      <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
      <h1 className="font-khula font-bold mb-4 text-center">Select Which Classes You Would Like to Attend</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`m-2 p-4 border-2 ${selectedOption === option.id ? 'border-black' : 'border-gray-300'} rounded-lg cursor-pointer flex-grow max-w-xs`}
            onClick={() => onSelect(option.id)}
          >
            <h2 className="font-bold">{option.header}</h2>
            <p>{option.description}</p>
            <p className="font-bold">{option.price}</p>
          </div>
        ))}
      </div>
      <div className="w-full text-center p-4">
        <button
          onClick={onNext}
          className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
        >
          NEXT
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
};

export default ClassOptions;
