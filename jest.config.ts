// export default {
//   testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
//   moduleNameMapper: {
//     "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
//     "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
//     "^.+\\.css$": "identity-obj-proxy", // Mock CSS imports
//   },
//   // transform: {
//   //   "^.+\\.tsx?$": "ts-jest",
//   // },
//   transform: {
//     "^.+\\.[t|j]sx?$": "babel-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.app.json",
//     },
//   },
// };



export default {
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
    "^.+\\.css$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals

  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json",
    },  
  },
};