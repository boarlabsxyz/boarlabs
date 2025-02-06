const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      branches: process.env.MIN_BRANCHES_COVERAGE,
      functions: process.env.MIN_FUNCTIONS_COVERAGE,
      lines: process.env.MIN_LINES_COVERAGE,
      statements: process.env.MIN_STATEMENTS_COVERAGE,
    },
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.{js,js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
