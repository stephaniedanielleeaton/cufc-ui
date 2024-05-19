import React, { useState } from 'react';

function FencingExperiencePrompt() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const options = [
    {
      value: 'nugget',
      label: '... the 4 Week Beginner Course',
    },
    {
      value: 'full',
      label: '... Full Class Membership',
    },
    {
      value: 'social',
      label: '... Social Membership',
    },
    {
      value: 'idk',
      label: '... Help me decide',
    },
  ];

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Select Your Membership Option</h1>
          <div className="w-full md:w-1/2 px-4">
            <div className="font-bold mb-2">I want to sign up for...</div>
            <div className="space-y-4">
              {options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                        type="radio"
                        id={option.value}
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={() => handleOptionChange(option.value)}
                        className="mr-3 h-6 w-6"
                    />
                    <label htmlFor={option.value} className="ml-2">{option.label}</label>
                  </div>
              ))}
            </div>
          </div>
      </div>
  );
}

export default FencingExperiencePrompt;
