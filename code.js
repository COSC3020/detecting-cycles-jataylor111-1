function hasCycle(graph) {
    // console.log(graph.length);
    // Get the number of nodes for use in loops
    let verts = Object.keys(graph);
    // console.log(verts.length);

    // Empty graph
    if(verts.length == 0) {
        return false;
    }

    // console.log("after empty");

    let visited = []
    let cycles = false;

    // Fill visited full of falses for seeing if a node has been seen or not
    for (let i = 0; i < verts.length; i++) { // Length of nodes, complexity V
        // console.log("first hasCycle for");
        visited[i] = false;
    }

    for(let j = 0; j < verts.length; j++) { // Length of nodes, complexity V
        // console.log("hasCycle for loop");
        if(!visited[j] && findCycle(graph, j, visited)) {
            // console.log("cycles = true");
            cycles = true;
            break;
        }
    }

    return cycles;
}

// Helper for finding cycles in the graph
function findCycle(graph, start, visited) {
    let nodes = [];
    nodes.push(start);

    // Keep searching while we have a list of nodes to check
    while(nodes.length > 0) { // Iterates down the nodes, complexity V
        // console.log("findCycle while");
        let node = nodes.shift();

        // Check if node has already been visited
        if(visited[node]) {
            // console.log("findCycle = true");
            // Return true to satisfy the && above
            return true;
        }

        visited[node] = true;

        for(let node2 of graph[node]) { // Going along the edges, complexity E
            if(!visited[node2]) {
                // console.log("findCycle for loop node2");
                nodes.push(node2);
            }
        }
    }

    // Return false otherwise
    return false;
}

// let graph = {
//     0: [1, 2],
//     1: [2],
//     2: [0],
//     3: [2]
// };
// console.log(hasCycle(graph));
