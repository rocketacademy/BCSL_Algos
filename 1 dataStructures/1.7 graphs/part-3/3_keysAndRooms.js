/** Keys and Rooms */

var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    // Keep track of which rooms we visit -
    // to avoid visiting the same room more than once.
    function dfs(room) {
        // if current room not in visited
        if (!visited.has(room)) {
            // add room to visited
            visited.add(room);
            for (i of rooms[room]) {
                dfs(i);
            }
        }
    }
    // start from room 0
    dfs(0);
    // if both of them have the same size -
    // that means that we reached all the rooms (true)
    // otherwise (false)
    return visited.size == rooms.length;
};