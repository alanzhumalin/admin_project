import api from './api';

export const getAllUsers = async () => {
    try {
        const response = await api.get('/ApplicationUser/GetAllUsers');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching catalog types:', error);
        throw error;
    }
}

export const getUserDetailsByUserName = async (userName) => {
    try {
        const response = await api.get(`/ApplicationUser/GetUserDetailsByUserName/${userName}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching catalog types:', error);
        throw error;
    }
}

export const getUserDetailsByEmail = async (email) => {
    try {
        const response = await api.get(`/ApplicationUser/GetUserDetailsByEmail/${email}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching catalog types:', error);
        throw error;
    }
}

export const getUserDetailsByUserId = async (userId) => {
    try {
        const response = await api.get(`/ApplicationUser/GetUserDetailsByUserId/${userId}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching catalog types:', error);
        throw error;
    }

}

export const updateProfileInformation = async (userId, updatedData) => {
    try {
        const response = await api.put(`/ApplicationUser/UpdateProfileInformation/${userId}`, updatedData);
        return response.data;
    }
    catch (error) {
        console.error('Error updating the user:', error);
        throw error;
    }
}