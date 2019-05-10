module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^~/(.*)$": "<rootDir>/app/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.nuxt/",
    "<rootDir>/coverage/"
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue"
  ]
}
