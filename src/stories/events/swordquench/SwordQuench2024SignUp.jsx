import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../../assets/sweatysteppy.png'; // Ensure this path is correct

export default function SwordQuench2024SignUp({ onSubmit, slotsFilled }) {
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

  const [totalPrice, setTotalPrice] = useState(30);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let price = 30;
    if (formData.events.includes('Open Longsword')) {
      price += 20;
    }
    if (formData.events.includes('Open Sword and Buckler')) {
      price += 20;
    }
    if (formData.events.includes('Team Longsword')) {
      price += 60;
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
    if (formData.events.includes('Team Longsword')) {
      if (!formData.teamName) {
        newErrors.teamName = 'Team Name is required for Team Longsword';
      }
      if (!formData.teamMembers) {
        newErrors.teamMembers = 'Team Members are required for Team Longsword';
      }
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
      <div className="absolute inset-0 z-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${bannerImage})`, opacity: 0.1 }}></div>
      <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg p-6 font-poppins">
        <div className="relative mb-8">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Sword Quench 2024</h2>
          <p className="text-xl mb-4">${totalPrice.toFixed(2)}</p>
          <p className="text-sm mb-2">Saturday, August 17, 2024 at 8:00 AM - 8:00 PM EST</p>
          <p className="text-sm">
            6475 E Main St. #111
            <br />
            Reynoldsburg, OH 43068
          </p>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="mb-5 text-gray-700 px-5 text-sm">
          It's going to be wet, it's going to be hot, it's going to be Sword Quench 2024! Come join us at Columbus
          United Fencing Club to compete in Open Longsword, Open Sword and Buckler, and Open Team Longsword.
          <br />
          <br />
          Base admission for competitors is $30.
          <br />
          <br />
          <b>Sword and Buckler.</b> Event fee: $20. Registration and Check In cut off: 12pm.
          <br />
          <br />
          <b>Longsword.</b> Event fee: $20. Registration and Check In cut off: 9am.
          <br />
          <br />
          <b>Team Longsword</b> consists of Teams of 3 competitors. The Team Registration fee of $60 needs to be paid
          once by any member on the team*. Please provide team name and names of team members during registration.
          Registration and Check In cut off: 4pm
          <br />
          <br />
          <span className="text-gray-500 text-xs block">
            * All team members competing in Team Longsword need to pay their individual base fee.
          </span>
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
                    disabled={getRemainingSlots(36, slotsFilled.longsword) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Longsword (+ $20.00)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(36, slotsFilled.longsword)} slots out of 36 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Open Sword and Buckler"
                    checked={formData.events.includes('Open Sword and Buckler')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(21, slotsFilled.swordAndBuckler) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Sword and Buckler (+ $20.00)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(21, slotsFilled.swordAndBuckler)} slots out of 21 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Team Longsword"
                    checked={formData.events.includes('Team Longsword')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(7, slotsFilled.teams) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Team Longsword (+ $60.00)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(7, slotsFilled.teams)} slots out of 7 remaining
                </span>
              </div>
            </div>
          </div>
          {formData.events.includes('Team Longsword') && (
            <>
              <div className="space-y-2">
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Team Name"
                  className={`w-full px-3 py-2 border ${errors.teamName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
                />
                {errors.teamName && <p className="text-red-500 text-xs">{errors.teamName}</p>}
              </div>
              <div className="space-y-2">
                <textarea
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  placeholder="Names of Team Members"
                  className={`w-full px-3 py-2 border ${errors.teamMembers ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
                />
                {errors.teamMembers && <p className="text-red-500 text-xs">{errors.teamMembers}</p>}
              </div>
            </>
          )}
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

SwordQuench2024SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  slotsFilled: PropTypes.shape({
    longsword: PropTypes.number.isRequired,
    swordAndBuckler: PropTypes.number.isRequired,
    teams: PropTypes.number.isRequired,
  }).isRequired,
};
