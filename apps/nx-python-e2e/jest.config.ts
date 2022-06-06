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
  moduleNameMapper: {
    '@daidarabotchi/nx-python': '<rootDir>/../../dist/libs/nx-python',
  },
  coverageDirectory: '../../coverage/apps/nx-python-e2e',
  setupFilesAfterEnv: ['<rootDir>/jset.setup.ts'],
};
