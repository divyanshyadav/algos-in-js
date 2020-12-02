/*
    n = vertices
    m = edges
    Time complexity: O(n ^ 2)

*/

function getShortestPathDijkstra (graph, src, target) {
    const distances = graph.getVertices().reduce((map, v) => {
        map.set(v.name, Infinity)
        return map
    }, new Map())

    distances.set(src, 0)

    const processed = new Set()
    const parent = new Map()

    for (let i = 0; i < distances.size; i++) {
        const vertex = getMin(distances, processed)
        if (vertex === target) {
            break
        }

        graph.getVertex(vertex).getAdjVertices().map(neighbor => {
            if (!processed.has(neighbor.name) &&
                distances.get(vertex) + neighbor.weight < distances.get(neighbor.name)) {
                distances.set(neighbor.name, distances.get(vertex) + neighbor.weight)
                parent.set(neighbor.name, vertex)
            }
        })

        processed.add(vertex)
    }

    const path = []
    let node = target
    while (node) {
        path.push(node)
        node = parent.get(node)
    }

    return path.reverse()
}

function getMin (dist, processed) {
    let min = Infinity
    let name = null
    for (const [key, value] of dist) {
        if (!processed.has(key) && value < min) {
            min = value
            name = key
        }
    }

    return name
}

module.exports = getShortestPathDijkstra
