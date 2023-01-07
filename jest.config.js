const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // moduleNameMapper: {
  //   // Handle module aliases (this will be automatically configured for you soon)
  //   '^@/Consts/(.*)$': '<rootDir>/Consts/$1',
  //   '^@/components/(.*)$': '<rootDir>/components/$1',
  //   '^@/PagesComponents/(.*)$': '<rootDir>/PagesComponents/$1',
  //   '^@/pages/(.*)$': '<rootDir>/pages/$1',
  // },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
