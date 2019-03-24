module.exports = {
  roots: ["/home/ganesh/Desktop/OS/editor/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile:
    "/home/ganesh/Desktop/OS/editor/src/setupEnzyme.ts",
  moduleNameMapper: {
    "\\.(css|less)$": "/home/ganesh/Desktop/OS/editor/__mocks__/styleMock.ts"
  }
};
