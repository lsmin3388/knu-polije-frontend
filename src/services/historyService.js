import axios from 'axios';

export const fetchHistoryData = async () => {
  try {
    const response = await axios.get('/history');
    const data = response.data;

    if (data.status !== 200 || !data.response) {
      throw new Error('Failed to fetch history data');
    }

    return data.response;
  } catch (error) {
    console.error('Error fetching history data:', error);
    throw error;
  }
};