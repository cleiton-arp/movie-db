import { api } from './axiosConfig';

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    if (import.meta.env.DEV) {
      console.info(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn('Sessão expirada.');
    }

    if (import.meta.env.DEV) {
      console.error('[Axios Error]', error);
    }

    return Promise.reject(error);
  }
);
