// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  roots: ['<rootDir>/games'],
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
export default config;
