module.exports = {
  // Transform files with our own Babel config
  transform: { '^.+\\.[tj]sx?$': '<rootDir>/test/jest-preprocess.js' },
  // Add manual mocks and aliases support
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|webp|woff|woff2|mp4|webm|mp3|css|pdf)$': '<rootDir>/__mocks__/file.js',

  },
  // Ignore Gatsby tests directory in cache
  testPathIgnorePatterns: ['node_modules', '.cache'],
  // Transform Gatsby because it includes un-transpiled ES6 code
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  // Add some globals overrides for Gatsby
  setupFiles: ['<rootDir>/test/loadershim.js', 'jest-canvas-mock', 'jest-localstorage-mock'],
  // Add custom matchers
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-env.js'],
  // Extend Jest watch mode possibilities
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  // Improve snapshots for CSS in JS
  snapshotSerializers: ['@emotion/jest'],
  // We use Jest to test components and utils
  collectCoverageFrom: ['<rootDir>/src/**/*.{tsx,ts,js}'],
  testMatch: ['<rootDir>/src/**/tests/*.{tsx,ts,js}'],
  // coveragePathIgnorePatterns: ['./src/dashboard/components/Predial/Initial.tsx'],
  coverageThreshold: {
    // Temporary low coverage for pipeline purpose, will increase to 85%
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
    // Temporary disable coverage for pages and not tested comps...
    './src/dashboard/': {
      branches: 40,
      functions: 40,
      lines: 50,
      statements: 50
    },
    './src/broker/': {
      branches: 30,
      functions: 40,
      lines: 50,
      statements: 50
    },
    './src/prequal/': {
      branches: 30,
      functions: 40,
      lines: 40,
      statements: 40
    }
  }
}
