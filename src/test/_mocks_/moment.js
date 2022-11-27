const moment = require.requireActual("moment");
// [important:] we can't import moment directly by using `import from `
// This's going to look for the marked version
// so ESSENTIALLY we have a funtion that calls itself and that's going to create a stack trace error
// you're going to run down all the memory and EVENTUALLY the process is going to FAIL(see: https://facebook.github.io/jest/docks/en/manual-mocks.thml)
// We want to do is grab the original version of moment and `jest` does it give us `require.requireActual`

export default (timestamp = 0) => {
  return moment(0);
};
