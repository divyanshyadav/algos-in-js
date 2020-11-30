const { DisjointSet } = require('data-structures-again')

/*
    E - No. of edges
    V - No. of vertices
    Time complexity: O(ElogE + VlogE + VlogE)
*/
function getMST (edges) {
    edges.sort((a, b) => a[2] - b[2])

    const ds = new DisjointSet()
    const mstEdges = []
    for (let i = 0; i < edges.length; i++) {
        const [v1, v2] = edges[i]

        if (!ds.isConnected(v1, v2)) {
            mstEdges.push(edges[i])
            ds.union(v1, v2)
        }
    }

    return mstEdges
}

module.exports = getMST
