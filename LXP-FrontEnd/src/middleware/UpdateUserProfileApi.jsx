import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const updateUserData = async (userId, editInfo) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/post/${userId}`, editInfo);
    return response.data;
  } catch (error) {
    console.error('Error updating status: ', error);
  }
};