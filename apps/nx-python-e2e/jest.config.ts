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
    '#(.*)': '<rootDir>/node_modules/$1',
  },
  coverageDirectory: '../../coverage/apps/nx-python-e2e',
};
