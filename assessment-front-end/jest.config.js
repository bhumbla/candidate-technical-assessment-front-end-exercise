/** @type {import('@jest/types').Config.InitialOptions}  */
module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
};
