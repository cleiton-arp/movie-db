interface ImportMetaEnv {
  readonly VITE_TMDB_API_BASE_URL: string;
  readonly VITE_TMDB_API_API_KEY: string;
  readonly VITE_TMDB_API_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}