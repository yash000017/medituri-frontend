import axios from 'axios';

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Set your base URL here
  timeout: 10000, // Set timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors for requests or responses here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from the cookies
    const token = getCookie('token'); // Replace 'token' with the actual cookie name

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle specific HTTP errors (e.g., 404, 500)
      console.error(`Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      // Handle network errors
      console.error('Network error:', error.request);
    } else {
      console.error('Unexpected error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
