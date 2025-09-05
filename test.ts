// Basic TypeScript test file

// Simple test functions
function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
}

function assertEquals<T>(actual: T, expected: T, message?: string): void {
    if (actual !== expected) {
        throw new Error(`Assertion failed: ${message || `Expected ${expected}, but got ${actual}`}`);
    }
}

// Example functions to test
function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Test cases
function testAdd(): void {
    console.log('Testing add function...');
    assertEquals(add(2, 3), 5, 'add(2, 3) should equal 5');
    assertEquals(add(-1, 1), 0, 'add(-1, 1) should equal 0');
    assertEquals(add(0, 0), 0, 'add(0, 0) should equal 0');
    console.log('✓ All add tests passed');
}

function testMultiply(): void {
    console.log('Testing multiply function...');
    assertEquals(multiply(2, 3), 6, 'multiply(2, 3) should equal 6');
    assertEquals(multiply(-2, 3), -6, 'multiply(-2, 3) should equal -6');
    assertEquals(multiply(0, 5), 0, 'multiply(0, 5) should equal 0');
    console.log('✓ All multiply tests passed');
}

function testIsEven(): void {
    console.log('Testing isEven function...');
    assert(isEven(2), 'isEven(2) should return true');
    assert(!isEven(3), 'isEven(3) should return false');
    assert(isEven(0), 'isEven(0) should return true');
    console.log('✓ All isEven tests passed');
}

// Test runner
function runAllTests(): void {
    console.log('Starting test execution...\n');
    
    try {
        testAdd();
        testMultiply();
        testIsEven();
        
        console.log('\n🎉 All tests passed successfully!');
    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        process.exit(1);
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runAllTests();
}

// Export functions for external use
export { add, multiply, isEven, assert, assertEquals, runAllTests };