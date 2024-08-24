import React from 'react';
import PropTypes from 'prop-types';

const options = [
  {
    id: 'nugget',
    header: 'Introduction to HEMA Fundamentals Course',
    price: '$110  (Select date at checkout)',
  },
  {
    id: 'fullMembership',
    header: 'Full Class Access',
    price: '$110/month',
  },
  {
    id: 'socialMembership',
    header: 'Saturday Classes',
    price: '$65/month',
  },
  {
    id: 'familyPlan',
    header: 'Family Plan',
    price: '$110 + $65/month for each additional family member',
  },
  {
    id: 'dropIn',
    header: 'I just want to drop in',
    price: '$20 per class, use drop in button before class',
  },
];

function ClassOptions({ selectedOption, onSelect }) {
  return (
    <div className="space-y-4 px-5">
      <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
        CLASS OPTIONS
      </h3>
      <p className="mb-5 text-gray-700 text-sm">
        Please see our About page for options and pricing.
      </p>
      {options.map((option) => (
        <div key={option.id} className="flex items-start mb-4">
          <input
            type="radio"
            name="events"
            checked={selectedOption === option.id}
            onChange={() => onSelect(option.id)}
            className="mr-3 h-5 w-5 text-DeepRed border-DeepRed focus:ring-DeepRed mt-1"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{option.header}</span>
            <span className="text-xs font-bold text-gray-500">{option.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

ClassOptions.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ClassOptions;
