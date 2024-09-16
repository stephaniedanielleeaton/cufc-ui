import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../../assets/SSQ_promoArt.png';

export default function SciotoOpen2024SignUp({ onSubmit, slotsFilled }) {
  const [formData, setFormData] = useState({
    preferredFirstName: '',
    preferredLastName: '',
    legalFirstName: '',
    legalLastName: '',
    email: '',
    isGuardian: false,
    guardianFirstName: '',
    guardianLastName: '',
    events: [],
    teamName: '',
    teamMembers: '',
    clubAffiliation: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let price = 40;
    if (formData.events.includes('Open Longsword')) {
      price += 20;
    }
    if (formData.events.includes('Open Saber')) {
      price += 20;
    }
    if (formData.events.includes('Marginalised Genders Longsword')) {
      price += 0;
    }
    setTotalPrice(price);
  }, [formData.events]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      events: checked ? [...formData.events, value] : formData.events.filter((event) => event !== value),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.legalFirstName) {
      newErrors.legalFirstName = 'Legal First Name is required';
    }
    if (!formData.legalLastName) {
      newErrors.legalLastName = 'Legal Last Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      if (onSubmit) {
        onSubmit(formData);
      }
      console.log(formData);
    }
  };

  const getRemainingSlots = (totalSlots, filledSlots) => totalSlots - filledSlots;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg p-6 font-poppins">
        <div className="relative mb-8">
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Scioto Open 2024</h2>
          <p className="text-xl mb-4">${totalPrice.toFixed(2)}</p>
          <p className="text-sm mb-2">November 16th to 17th, 2024</p>
          <p className="text-sm">
            6475 E Main St. #111
            <br />
            Reynoldsburg, OH 43068
          </p>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="mb-5 text-gray-700 px-5 text-sm">
          Welcome to Scioto Open 2024! Come join us at Columbus
          United Fencing Club to compete in Longsword Divisions A and B, Open Saber, and Open Marginalised Genders Longsword.
          <br />
          <br />
          Base admission for competitors is $40.
          <br />
          <br />
          <b>Longsword Divisions A and B.</b> Event fee: $20. Registration and Check In cut off: November 16th, 9am. Fencers are being
          asked to sign up for Longsword, through which they will be sorted in A and B based on the HEMA Ratings
          of the fencers present.
          <br />
          <br />
          <b>Saber.</b> Event fee: $20. Registration and Check In cut off: November 17th, 12pm.
          <br />
          <br />
          <b>Marginalised Genders Longsword.</b> This event is open to trans and cis women, trans men, non-binary people,
          intersex people, and any other gender expansive people who are often underrepresented in HEMA. There is no additional
          event fee.
          Registration and Check In cut off: November 17th, 9am.
          <br />
          <br />
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <hr className="border-gray-300 my-8" />
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs">ABOUT YOU</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="preferredFirstName"
              value={formData.preferredFirstName}
              onChange={handleChange}
              placeholder="Preferred First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="preferredLastName"
              value={formData.preferredLastName}
              onChange={handleChange}
              placeholder="Preferred Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="legalFirstName"
              value={formData.legalFirstName}
              onChange={handleChange}
              placeholder="Legal First Name"
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
              placeholder="Legal Last Name"
              className={`w-full px-3 py-2 border ${errors.legalLastName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.legalLastName && <p className="text-red-500 text-xs">{errors.legalLastName}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="email"
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
              name="clubAffiliation"
              value={formData.clubAffiliation}
              onChange={handleChange}
              placeholder="Club Affiliation"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="flex items-center space-y-2">
            <input
              type="checkbox"
              name="isGuardian"
              checked={formData.isGuardian}
              onChange={handleChange}
              className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
            />
            <label className="block mb-1 text-sm">
              I am a guardian signing up on behalf of a minor that is at least 14 years of age
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
          <hr className="border-gray-300 my-8" />
          <div className="space-y-2">
            <label className="block mb-5 font-extrabold text-sm tracking-wider text-xs">SELECT EVENTS</label>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Open Longsword"
                    checked={formData.events.includes('Open Longsword')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(72, slotsFilled.longsword) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Longsword (+ $20)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(72, slotsFilled.longsword)} slots out of 72 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Open Saber"
                    checked={formData.events.includes('Open Saber')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(36, slotsFilled.saber) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Saber (+ $20)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(36, slotsFilled.saber)} slots out of 36 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Marginalised Genders Longsword"
                    checked={formData.events.includes('Marginalised Genders Longsword')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(36, slotsFilled.mgLongsword) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Marginalised Genders Longsword
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(7, slotsFilled.mgLongsword)} slots out of 28 remaining
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 my-16" />
          <div className="flex justify-between font-bold mt-2">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-white text-black text-sm font-bold mx-4 px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
            >
              CHECKOUT
            </button>
            {isLoading && <p className="text-DeepRed mt-2">Loading...</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

SciotoOpen2024SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  slotsFilled: PropTypes.shape({
    longsword: PropTypes.number.isRequired,
    saber: PropTypes.number.isRequired,
    mgLongsword: PropTypes.number.isRequired,
  }).isRequired,
};
