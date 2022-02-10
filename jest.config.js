module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ['./jest.setup.js']
  }