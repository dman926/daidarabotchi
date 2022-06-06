import { pathsToModuleNameMapper } from 'ts-jest';

/* eslint-disable */
export default {
  displayName: 'nx-python-e2e',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@daidarabotchi/nx-python': ['libs/nx-python/src/index.ts'],
    },
    { prefix: '<rootDir>/../../' }
  ),
  coverageDirectory: '../../coverage/apps/nx-python-e2e',
};
