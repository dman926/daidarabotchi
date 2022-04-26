module.exports = {
  displayName: 'portfolio-lib',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/portfolio-lib',
  preset: '../../jest.preset.ts',
};
