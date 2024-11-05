import { axiosInstance } from './index'; // Import the axios instance

export const login = async (userData) => {

  try {
    const response = await axiosInstance.post('/login', userData);
    return response.data; // Return user data if login is successful
  } catch (error) {
    throw new Error('Failed to login');
  }
};
