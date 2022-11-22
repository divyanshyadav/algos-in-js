const { Graph } = require('data-structures-again')
const isACyclic = require('../isAcyclic')

/**
 * @param {Graph} graph
 * @returns {Array} vertices in topological sort order
 */
function getTopologicalSortOrder(graph) {
    if (!isACyclic(graph)) return []

    const stack = []
    const visited = new Set()

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            dfs(graph, vertex, visited, vertex => stack.push(vertex))
        }
    }

    return stack
}

/**
 * @param {Graph} graph
 * @param {String | Number} startVertex
 * @param {Set<String | Number>} visited
 * @param {function} onPostProcess
 * @returns {Array} vertices in topological sort order
 */
function dfs(graph, startVertex, visited, onPostProcessFn) {
    visited.add(startVertex)
    graph.adjTo(startVertex).forEach(v => {
        if (!visited.has(v)) dfs(graph, v, visited, onPostProcessFn)
    })
    onPostProcessFn(startVertex)
}

module.exports = getTopologicalSortOrder
