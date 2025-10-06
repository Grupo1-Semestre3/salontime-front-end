import axios from 'axios';
import { User, Service, RegisterForm, LoginForm } from '../types';

const API_BASE_URL = 'http://localhost:3000';
const AUTH_API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const authApiInstance = axios.create({
  baseURL: AUTH_API_BASE_URL,
});

// Services API
export const servicesApi = {
  getAll: (): Promise<Service[]> => 
    api.get('/servicos').then(response => response.data),
};

// Auth API
export const authApi = {
  login: (credentials: LoginForm) =>
    authApiInstance.post('/usuarios/login', credentials).then(response => response.data),
  
  register: (userData: RegisterForm) =>
    authApiInstance.post('/usuarios', userData).then(response => response.data),
  
  logout: (userId: number) =>
    authApiInstance.patch(`/usuarios/logoff/${userId}`).then(response => response.data),
};

// Users API
export const usersApi = {
  getProfile: (userId: number): Promise<User> =>
    authApiInstance.get(`/usuarios/${userId}`).then(response => response.data),
  
  updateProfile: (userId: number, userData: Partial<User>) =>
    authApiInstance.put(`/usuarios/${userId}`, userData).then(response => response.data),
};

export default api;