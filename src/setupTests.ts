/**
 * Configuração para Jest + React Testing Library + React Router + TypeScript
 */

import '@testing-library/jest-dom'; // Matchers do RTL

// ✅ NÃO precisa redefinir TextEncoder/TextDecoder em Node 18+

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
  };
});

class LocalStorageMock {
  private store: Record<string, string> = {};
  clear() { this.store = {}; }
  getItem(key: string) { return this.store[key] || null; }
  setItem(key: string, value: string) { this.store[key] = value.toString(); }
  removeItem(key: string) { delete this.store[key]; }
}
global.localStorage = new LocalStorageMock() as any;
