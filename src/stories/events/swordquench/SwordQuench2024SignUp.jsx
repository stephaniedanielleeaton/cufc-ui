import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SwordQuench2024SignUp({ onSubmit }) {
  const [formData, setFormData] = useState({
    preferredFirstName: '',
    preferredLastName: '',
    legalFirstName: '',
    legalLastName: '',
    email: '',
    phone: '',
    over18: false,
    events: [],
    teamName: '',
    teamMembers: '',
  });

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
      <h2 className="text-2xl font-bold mb-5 font-khula">Sword Quench 2024 Sign-Up</h2>
      <p className="mb-5 text-gray-700">
        It's going to be wet, it's going to be hot, it's going to be Sword Quench 2024!
        Come join us at Columbus United Fencing Club to compete in Open Longsword,
        Open Sword and Buckler, and Open Team Longsword. Base admission for competitors is $30.
        Additional event fee for <b>Longsword</b> and <b>Sword and Buckler</b> is $20 each.
        <br /><br />
        <b>Team Longsword</b> consists of Teams of 3 competitors. The Team Registration fee of $60 needs to be
        paid once by any member on the team. All team members competing in Team Longsword need to pay
        their individual base fee. Please provide team name and names of team members ahead of time.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Preferred First Name</label>
          <input
            type="text"
            name="preferredFirstName"
            value={formData.preferredFirstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Preferred Last Name</label>
          <input
            type="text"
            name="preferredLastName"
            value={formData.preferredLastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Legal First Name</label>
          <input
            type="text"
            name="legalFirstName"
            value={formData.legalFirstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Legal Last Name</label>
          <input
            type="text"
            name="legalLastName"
            value={formData.legalLastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Are you over 18?</label>
          <input
            type="checkbox"
            name="over18"
            checked={formData.over18}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </div>
        <div>
          <label className="block mb-2">Select Events</label>
          <div className="flex flex-col space-y-2">
            <label>
              <input
                type="checkbox"
                name="events"
                value="Team Longsword"
                checked={formData.events.includes('Team Longsword')}
                onChange={handleEventChange}
                className="mr-2"
              />
              Team Longsword
            </label>
            <label>
              <input
                type="checkbox"
                name="events"
                value="Open Longsword"
                checked={formData.events.includes('Open Longsword')}
                onChange={handleEventChange}
                className="mr-2"
              />
              Open Longsword
            </label>
            <label>
              <input
                type="checkbox"
                name="events"
                value="Open Sword and Buckler"
                checked={formData.events.includes('Open Sword and Buckler')}
                onChange={handleEventChange}
                className="mr-2"
              />
              Open Sword and Buckler
            </label>
          </div>
        </div>
        {formData.events.includes('Team Longsword') && (
          <>
            <div>
              <label className="block mb-2">Team Name</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Names of Team Members</label>
              <textarea
                name="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

SwordQuench2024SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
