/* eslint-disable */
module.exports = {
  displayName: 'material-ui',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/material-ui',
  preset: '../../jest.preset.js',
};
