// MemberDetails.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MemberDetails = ({ member, onUpdate }) => {
  const [memberData, setMemberData] = useState({ ...member });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(memberData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="display_first_name"
          value={memberData.display_first_name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="display_last_name"
          value={memberData.display_last_name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="personal_info.email"
          value={memberData.personal_info.email}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="personal_info.phone"
          value={memberData.personal_info.phone}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Update</button>
    </form>
  );
};

MemberDetails.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    display_first_name: PropTypes.string.isRequired,
    display_last_name: PropTypes.string.isRequired,
    personal_info: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberDetails;
