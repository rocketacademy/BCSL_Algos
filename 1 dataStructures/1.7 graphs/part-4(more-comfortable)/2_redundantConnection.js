/** Redundant Connection */

var findRedundantConnection = function(edges) {
    // Build the graph
    const graph = new Map();
    for (const [node1, node2] of edges) {
        if (!graph.has(node1)) graph.set(node1, []);
        graph.get(node1).push(node2);

        if (!graph.has(node2)) graph.set(node2, []);
        graph.get(node2).push(node1);
    }

    // Iterate over connections, from last to first
    // Simulate dropping a connection and see if you are able to still reach all the nodes in the graph
    for (let i = edges.length - 1; i >= 0; i--) {
        const startNode = edges[i][0];
        const skipNode = edges[i][1];
        const seen = new Set([startNode]);
        let count = 0;

        let queue = [startNode];
        while (queue.length) {
            const nextQueue = [];

            for (let i = 0; i < queue.length; i++) {
                const node = queue[i];
                count++;

                for (const nextNode of graph.get(node)) {
                    // Ignore startNode - skipNode connection
                    if (node === startNode && nextNode === skipNode) continue;

                    if (!seen.has(nextNode)) {
                        seen.add(nextNode);
                        nextQueue.push(nextNode);
                    }
                }
            }

            queue = nextQueue;
        }

        // If we've managed to visit all the nodes, despite the dropped connection,
        // the connection is redundant
        if (count === edges.length) return edges[i];
    }
};
