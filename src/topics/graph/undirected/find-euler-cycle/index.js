const { Graph } = require('data-structures-again')

/**
 * @param {Graph} graph
 * @returns {Array} vertices in the cycle
 */
function getEulerCycle(graph) {
    if (!hasEulerCycle(graph)) return []

    const visitedEdges = new Set()
    const eulerCycle = []

    function dfs(vertex) {
        graph.adjTo(vertex).forEach(v => {
            const edge = `${vertex},${v}`

            if (visitedEdges.has(edge)) return

            visitedEdges.add(edge)
            visitedEdges.add(edge.split('').reverse().join(''))

            dfs(v)
        })

        eulerCycle.push(vertex)
    }

    dfs(graph.getVertices().next().value)
    return eulerCycle.reverse()
}

/**
 * @param {Graph} graph
 * @returns {Boolean}
 */
function hasEulerCycle(graph) {
    if (!isConnected(graph)) {
        return false
    }

    for (const vertex of graph.getVertices()) {
        if (!hasEvenDegree(graph, vertex)) {
            return false
        }
    }

    return true
}

/**
 * @param {Graph} graph
 * @param {String | number} vertex
 * @returns {Boolean}
 */
function hasEvenDegree(graph, vertex) {
    return graph.adjTo(vertex).length % 2 === 0
}

/**
 * @param {Graph} graph
 * @returns {Boolean}
 */
function isConnected(graph) {
    const visited = new Set()

    function dfs(vertex) {
        if (visited.has(vertex)) return
        visited.add(vertex)
        graph.adjTo(vertex).forEach(v => {
            dfs(v)
        })
    }

    dfs(graph.getVertices().next().value)

    return visited.size === size(graph.getVertices())
}

/**
 * @param {Iterable} x
 */
function size(x) {
    let len = 0
    for (const i of x) {
        len++
    }

    return len
}

module.exports = {
    getEulerCycle,
    isConnected
}
