// songApi.js
import {get} from './apiProxy';

export const fetchSongs = async () => {
  try {
    const response = await get('/song');
    return response;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const fetchSongById = async songId => {
  try {
    const response = await get(`/song/${songId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching song with ID ${songId}:`, error);
    throw error;
  }
};