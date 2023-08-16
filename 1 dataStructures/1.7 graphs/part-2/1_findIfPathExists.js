/** Find if Path Exists in Graph */


var validPath = function(n, edges, source, destination) {
    //STEP 1 CONSTRUCT GRAPH adjacency list
    function buildGraph(edges){
        const graph = {};
        for(let edge of edges){
            const [a, b] = edge;
            if(!(a in graph)){graph[a] = []};
            if(!(b in graph)){graph[b] = []};
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }
    const graph = buildGraph(edges);
    
    //STEP 2 DO DFS  + IMPLEMENT A VISITED node 

    function dfs(graph, source , destination, visited){
        if(visited.has(source)){
            return false;
        }
        if(source == destination){
            return true;
        }
        visited.add(source); //avoiding visiting same node again by set

        for(let neighbour of graph[source]){
            if( dfs(graph, neighbour, destination, visited)){
                return true;
            }
        }
        return false;
    }

    return dfs(graph, source, destination, new Set());
};