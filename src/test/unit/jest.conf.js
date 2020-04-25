const path = require('path');

module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: path.resolve(__dirname, '../../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  testMatch: [ // 匹配测试用例的文件
    '<rootDir>/src/test/unit/specs/*.spec.js',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transformIgnorePatterns: ['/node_modules/'],
  mapCoverage: true,
  collectCoverage: false,
  coverageReporters: ['json', 'html'],
  coverageDirectory: '<rootDir>/src/test/unit/coverage', // 覆盖率报告的目录
  collectCoverageFrom: [ // 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
    'src/components/**/*.(js|vue)',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};


// 语句覆盖率（statement coverage）
// 分支覆盖率（branch coverage）
// 函数覆盖率（function coverage）
// 行覆盖率（line coverage
