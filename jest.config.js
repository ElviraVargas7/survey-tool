/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.test.js' }],
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/babel.config.*.js',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.ts', // ignore type declarations
    '!src/**/index.{ts,tsx}', // ignore index files
    '!src/**/*.stories.{ts,tsx}', // ignore Storybook files
    '!src/**/__tests__/**', // ignore test utilities
    '!src/**/__mocks__/**', // ignore mocks
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
