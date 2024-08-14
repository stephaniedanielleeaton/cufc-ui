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
];

function ClassOptions({ selectedOption, onSelect }) {
  return (
    <div className="space-y-4 px-5">
      <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs text-center">
        CLASS OPTIONS
      </h3>
      <p className="mb-5 text-gray-700 text-sm">
        Click HERE for more options about options and pricing.
      </p>
      {options.map((option) => (
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              name="events"
              checked={selectedOption === option.id}
              onChange={() => onSelect(option.id)}
              className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
            />
            <span className="text-sm">{option.header}</span>
          </label>
          <span className="text-xs pl-8 font-bold block">
                  {option.price}
                </span>
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
