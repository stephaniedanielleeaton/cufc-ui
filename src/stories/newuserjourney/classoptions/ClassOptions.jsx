import React from 'react';
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

function ClassOptions({ selectedOption, onSelect }) {
  return (
    <div className="space-y-4 px-5">
      <h2 className="text-3xl font-bold mb-2">Class Options</h2>
      <p className="mb-5 text-gray-700 text-sm">
        Please choose from the following membership options that best suits your needs:
      </p>
      {options.map((option) => (
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              name="events"
              value="Open Sword and Buckler"
              checked={selectedOption === option.id}
              onChange={() => onSelect(option.id)}
              className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
            />
            {option.header}
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
