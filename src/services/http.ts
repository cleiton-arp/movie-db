import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
  },
  params: {
    language: 'pt-BR',
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(`[HTTP] ${config.method?.toUpperCase()} → ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[HTTP Request Error]', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error(`[HTTP ${status}]`, data);

      if (status === 401) {
        console.warn('Unauthorized – verifique sua API Key TMDB.');
      } else if (status === 404) {
        console.warn('Recurso não encontrado.');
      } else if (status >= 500) {
        console.warn('Erro no servidor da API.');
      }
    } else {
      console.error('Erro de rede ou requisição cancelada.', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
