/**
 * Test function for demonstration purposes
 */
function test() {
    console.log("Test function is running successfully!");
    return true;
}

/**
 * Additional test function with parameters
 */
function testWithParams(name, value) {
    console.log(`Testing with name: ${name}, value: ${value}`);
    return { name, value, success: true };
}

/**
 * Async test function
 */
async function asyncTest() {
    console.log("Starting async test...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async test completed!");
    return "async_success";
}

// Export functions for use in other modules
module.exports = {
    test,
    testWithParams,
    asyncTest
};

// If running directly, execute the test function
if (require.main === module) {
    test();
    testWithParams("example", 42);
    asyncTest();
}