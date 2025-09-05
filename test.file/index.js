/**
 * Main entry point for test.file folder
 */

const { test, testWithParams, asyncTest } = require('./test');

// Re-export all test functions
module.exports = {
    test,
    testWithParams,
    asyncTest
};

console.log("test.file module loaded successfully!");