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

const beginnerCourses = [
  { id: 'aug7', date: 'August 7th' },
  { id: 'oct2', date: 'October 2nd' },
];

function ClassOptions({ selectedOption, onSelect, onNext, formData, setFormData, errors }) {
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
      <h1 className="font-khula font-bold mb-4 text-center">Select Which Classes You Would Like to Attend</h1>
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
