const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Test 1: Empty graph
let graph1 = {};
assert.strictEqual(hasCycle(graph1), false, "Test 1 Failed");

// Test 2: Graph with no cycles
let graph2 = {
    0: [1],
    1: [2],
    2: [3],
    3: []
};
assert.strictEqual(hasCycle(graph2), false, "Test 2 Failed");

// Test 3: Graph with a single cycle
let graph3 = {
    0: [1, 2],
    1: [2],
    2: [0],
    3: [2]
};
assert.strictEqual(hasCycle(graph3), true, "Test 3 Failed:");

// Test 4: Graph with multiple cycles
let graph4 = {
    0: [1, 3],
    1: [0, 2],
    2: [1, 3],
    3: [0, 2, 4],
    4: [3]
};
assert.strictEqual(hasCycle(graph4), true, "Test 4 Failed");

// Test 5: Disconnected graph with no cycles
let graph5 = {
    0: [],
    1: [],
    2: [],
    3: []
};
assert.strictEqual(hasCycle(graph5), false, "Test 5 Failed");

console.log("All tests passed");
