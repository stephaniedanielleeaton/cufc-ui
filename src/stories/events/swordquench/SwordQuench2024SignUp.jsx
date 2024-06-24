import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SwordQuench2024SignUp({ onSubmit }) {
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
      events: checked
        ? [...formData.events, value]
        : formData.events.filter((event) => event !== value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 font-poppins">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Sword Quench 2024</h2>
        <p className="text-xl mb-4">${totalPrice.toFixed(2)}</p>
        <p className="text-sm mb-2">Saturday, August 17, 2024 at 8:00 AM - 8:00 PM PDT</p>
        <p className="text-sm">
          6475 E Main St. #111<br />
          Reynoldsburg, OH 43068
        </p>
      </div>
      <hr className="border-gray-300 my-8" />
      <p className="mb-5 text-gray-700 px-5 text-sm">
        It's going to be wet, it's going to be hot, it's going to be Sword Quench 2024!
        Come join us at Columbus United Fencing Club to compete in Open Longsword,
        Open Sword and Buckler, and Open Team Longsword.
        <br /><br />
        Base admission for competitors is $30.
        Additional event fee for <b>Longsword</b> and <b>Sword and Buckler</b> is $20 each.
        <br /><br />
        <b>Team Longsword</b> consists of Teams of 3 competitors. The Team Registration fee of $60 needs to be
        paid once by any member on the team*. Please provide team name and names of team members during registration.
        <br /><br />
        <span className="text-gray-500 text-xs block">* All team members competing in Team Longsword need to pay their individual base fee.</span>
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
            className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
          />
        </div>
        <div className="space-y-2">
          <input
            type="text"
            name="legalLastName"
            value={formData.legalLastName}
            onChange={handleChange}
            placeholder="Legal Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
          />
        </div>
        <div className="space-y-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
          />
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
          <label className="block mb-1 text-sm">I am a guardian signing up on behalf of a minor that is at least 14 years of age</label>
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
          <div className="flex flex-col space-y-1">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="events"
                value="Open Longsword"
                checked={formData.events.includes('Open Longsword')}
                onChange={handleEventChange}
                className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
              />
              Open Longsword (+ $20.00)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="events"
                value="Open Sword and Buckler"
                checked={formData.events.includes('Open Sword and Buckler')}
                onChange={handleEventChange}
                className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
              />
              Open Sword and Buckler (+ $20.00)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="events"
                value="Team Longsword"
                checked={formData.events.includes('Team Longsword')}
                onChange={handleEventChange}
                className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
              />
              Team Longsword (+ $60.00)
            </label>
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
                className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
              />
            </div>
            <div className="space-y-2">
              <textarea
                name="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                placeholder="Names of Team Members"
                className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
              />
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
            className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
          >
            CHECKOUT
          </button>
        </div>
      </form>
    </div>
  );
}

SwordQuench2024SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
