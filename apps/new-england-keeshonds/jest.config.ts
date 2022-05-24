module.exports = {
  displayName: 'new-england-keeshonds',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/new-england-keeshonds',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
