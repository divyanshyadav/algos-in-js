const { DisjointSet } = require('data-structures-again')

/*
    m = No. of edges
    n = No. of vertices

    Time complexity: O(mlogm + mlogn + n)
    Space complexity: O(n + m)
*/
function MSTKruskal (edges) {
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

module.exports = MSTKruskal
