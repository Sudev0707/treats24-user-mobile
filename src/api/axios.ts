import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔹 Change this based on your environment
// const BASE_URL = __DEV__
//   ? 'http://10.0.2.2:8080'
//   : 'https://api.yourdomain.com';


const BASE_URL = 'http://10.0.2.2:8080'; // Android Emulator
// const BASE_URL = 'http://localhost:8080'; // iOS Simulator
// const BASE_URL = 'http://192.168.1.50:8080'; // Real device (same WiFi)

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Request Interceptor (JWT)
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// ❌ Response Interceptor (Global Error Handling)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        `API Error ${error.response.status}:`,
        error.response.data
      );
    } else {
      console.error('Network Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
