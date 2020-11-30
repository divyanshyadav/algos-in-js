/*
    n = No. of vertices
    m = No. of edges

    Time complexity: O(n^2)
    Space complexity: O(n + m)
*/

function MSTPrim (graph) {
    const dist = graph.getVertices().reduce((acc, v) => {
        acc.set(v.name, Infinity)
        return acc
    }, new Map())
    const parent = new Map()
    const mstSet = new Set()

    let firstVertex
    for (const [key] of dist) {
        firstVertex = key
        break
    }

    dist.set(firstVertex, 0)

    for (let i = 0; i < dist.size; i++) {
        const vertex = getMinNode(dist, mstSet)

        graph.getVertex(vertex).getAdjVertices().map(v => {
            if (!mstSet.has(v.name) && v.weight < dist.get(v.name)) {
                dist.set(v.name, v.weight)
                parent.set(v.name, { vertex, weight: v.weight })
            }
        })

        mstSet.add(vertex)
    }

    const edges = []
    for (const [key, value] of parent) {
        edges.push([key, value.vertex, value.weight])
    }

    return edges
}

function getMinNode (dist, mstSet) {
    let minNode = null
    let min = Infinity

    for (const [key, value] of dist) {
        if (!mstSet.has(key) && value < min) {
            minNode = key
            min = value
        }
    }

    return minNode
}

module.exports = MSTPrim
