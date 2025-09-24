export const API_BASE_URL = import.meta.env.VITE_BASE_URL || 'https://asset-sphere-backend-s.vercel.app';

// Helper function for API calls with credentials
export const apiCall = async (url, options = {}) => {
  return fetch(url, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};
