import api from './api'; 

export const addUserToRoles = async (email, roles) => {
  try {
    const response = await api.post('/Auth/AddUserToRoles', {
      email,
      roles,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding user to roles:', error);
    throw error;
  }
};
