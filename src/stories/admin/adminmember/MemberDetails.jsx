import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MemberDetails = ({ member, onUpdate }) => {
  const [memberData, setMemberData] = useState({ ...member });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
      setMemberData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setMemberData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(memberData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Square Customer ID</label>
        <input
          type="text"
          name="square_customer_id"
          value={memberData.square_customer_id || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Display First Name</label>
        <input
          type="text"
          name="display_first_name"
          value={memberData.display_first_name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Display Last Name</label>
        <input
          type="text"
          name="display_last_name"
          value={memberData.display_last_name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Legal First Name</label>
        <input
          type="text"
          name="personal_info.legal_first_name"
          value={memberData.personal_info?.legal_first_name || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Legal Last Name</label>
        <input
          type="text"
          name="personal_info.legal_last_name"
          value={memberData.personal_info?.legal_last_name || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="personal_info.email"
          value={memberData.personal_info?.email || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="personal_info.phone"
          value={memberData.personal_info?.phone || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="personal_info.date_of_birth"
          value={memberData.personal_info?.date_of_birth ? new Date(memberData.personal_info.date_of_birth).toISOString().split('T')[0] : ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Street</label>
        <input
          type="text"
          name="personal_info.address.street"
          value={memberData.personal_info?.address?.street || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">City</label>
        <input
          type="text"
          name="personal_info.address.city"
          value={memberData.personal_info?.address?.city || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">State</label>
        <input
          type="text"
          name="personal_info.address.state"
          value={memberData.personal_info?.address?.state || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Zip</label>
        <input
          type="text"
          name="personal_info.address.zip"
          value={memberData.personal_info?.address?.zip || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Country</label>
        <input
          type="text"
          name="personal_info.address.country"
          value={memberData.personal_info?.address?.country || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Role</label>
        <select
          name="role"
          value={memberData.role}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="coach">Coach</option>
          <option value="member">Member</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Family Members</label>
        <textarea
          name="family_members"
          value={JSON.stringify(memberData.family_members || [])}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Guardian First Name</label>
        <input
          type="text"
          name="guardian_first_name"
          value={memberData.guardian_first_name || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Guardian Last Name</label>
        <input
          type="text"
          name="guardian_last_name"
          value={memberData.guardian_last_name || ''}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="bg-white text-black text-sm font-bold mx-4 px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black">UPDATE</button>
    </form>
  );
};

MemberDetails.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    square_customer_id: PropTypes.string,
    display_first_name: PropTypes.string.isRequired,
    display_last_name: PropTypes.string.isRequired,
    personal_info: PropTypes.shape({
      legal_first_name: PropTypes.string,
      legal_last_name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      date_of_birth: PropTypes.instanceOf(Date),
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    subscription_status: PropTypes.string,
    subscription_start_date: PropTypes.string,
    last_invoice_status: PropTypes.string,
    last_invoice_date: PropTypes.string,
    role: PropTypes.string,
    family_members: PropTypes.arrayOf(PropTypes.object),
    guardian_first_name: PropTypes.string,
    guardian_last_name: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberDetails;
