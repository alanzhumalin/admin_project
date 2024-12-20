import React, { useEffect, useState } from 'react';
import {
  getAllUsers,
  updateProfileInformation,
  getUserDetailsByUserName,
  getUserDetailsByEmail,
  getUserDetailsByUserId,
} from '../services/userService';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import EditUserForm from '../components/EditUserForm';
import Loader from '../components/Loader';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('username');
  const [updatedProfile, setUpdatedProfile] = useState({
    firstName: '',
    lastName: '',
    profilePictureUrl: '',
  });

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSearch = async () => {
    try {
      let userData = null;
      if (searchType === 'username') {
        userData = await getUserDetailsByUserName(searchQuery);
      } else if (searchType === 'email') {
        userData = await getUserDetailsByEmail(searchQuery);
      } else if (searchType === 'userId') {
        userData = await getUserDetailsByUserId(searchQuery);
      }
      setSelectedUser(userData);
      setUpdatedProfile({
        firstName: userData.firstName,
        lastName: userData.lastName,
        profilePictureUrl: userData.profilePictureUrl,
      });
    } catch (error) {
      console.error('Error searching user:', error);
      alert('User not found.');
    }
  };

  const handleUpdateProfile = async () => {
    if (!selectedUser) return;
    try {
      await updateProfileInformation(selectedUser.userId, updatedProfile);
      alert('Profile updated successfully!');
      loadUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        handleSearch={handleSearch}
      />

      {loading ? (
        <Loader />
      ) : (
        <UserTable
          users={users}
          setSelectedUser={setSelectedUser}
          setUpdatedProfile={setUpdatedProfile}
        />
      )}

      {selectedUser && (
        <div className="mt-8">
          <EditUserForm
            updatedProfile={updatedProfile}
            setUpdatedProfile={setUpdatedProfile}
            handleUpdateProfile={handleUpdateProfile}
            setSelectedUser={setSelectedUser}
            loadUsers={loadUsers}
          />
        </div>
      )}
    </div>
  );
};

export default UserManagement;
