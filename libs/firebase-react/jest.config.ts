/* eslint-disable */
export default {
  displayName: 'firebase-react',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/firebase-react',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
