import React, { useState } from 'react';

const EditUserForm = ({
  updatedProfile,
  setUpdatedProfile,
  handleUpdateProfile,
  setSelectedUser,
  loadUsers,
}) => {
  const [selectedRole, setSelectedRole] = useState('BasicUser');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      await handleUpdateProfile();
      loadUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update role.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={updatedProfile.firstName}
        onChange={(e) =>
          setUpdatedProfile({ ...updatedProfile, firstName: e.target.value })
        }
        className="border p-3 mb-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={updatedProfile.lastName}
        onChange={(e) =>
          setUpdatedProfile({ ...updatedProfile, lastName: e.target.value })
        }
        className="border p-3 mb-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Profile Picture URL"
        value={updatedProfile.profilePictureUrl}
        onChange={(e) =>
          setUpdatedProfile({
            ...updatedProfile,
            profilePictureUrl: e.target.value,
          })
        }
        className="border p-3 mb-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
      />
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Select Role:</label>
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="BasicUser">Basic User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => setSelectedUser(null)}
          className="bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUserForm;
