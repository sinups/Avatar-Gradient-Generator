export default {
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
    transform: {
      '^.+\\.tsx?$': ['ts-jest', { /* ts-jest config goes here */ }],
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  