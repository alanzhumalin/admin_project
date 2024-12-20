import React from 'react';

const UserTable = ({ users, setSelectedUser, setUpdatedProfile }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-4 text-left font-medium">User ID</th>
            <th className="p-4 text-left font-medium">Name</th>
            <th className="p-4 text-left font-medium">Email</th>
            <th className="p-4 text-left font-medium">Roles</th>
            <th className="p-4 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId} className="hover:bg-gray-100 transition">
              <td className="p-4 border-b">{user.userId}</td>
              <td className="p-4 border-b">{`${user.firstName} ${user.lastName}`}</td>
              <td className="p-4 border-b">{user.email}</td>
              <td className="p-4 border-b">{user.roles.join(', ')}</td>
              <td className="p-4 border-b">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setUpdatedProfile({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      profilePictureUrl: user.profilePictureUrl,
                      email: user.email,
                    });
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
