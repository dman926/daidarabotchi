module.exports = {
  displayName: 'material-ui',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/material-ui',
  preset: '../../jest.preset.ts',
};
