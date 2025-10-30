/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest", // permite usar TypeScript nos testes
  testEnvironment: "jsdom", // necessário para componentes React
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json", // aponta para seu tsconfig.app.json
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"], // arquivos de teste
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // transforma TS/TSX com ts-jest
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    // permite importar assets ou estilos sem erros
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  collectCoverage: true, // opcional, se quiser cobertura de testes
  coverageDirectory: "coverage",
};
