/* eslint-disable */
export default {
  displayName: 'firebase-react',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/firebase-react',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
