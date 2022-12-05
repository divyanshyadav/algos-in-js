const { Graph } = require('data-structures-again')
const { BreathFirstSearch } = require('data-structures-again/src/graph')
const isACyclic = require('../isAcyclic')

/**
 * @param {Graph} graph
 * @returns {Array<String>} vertices
 */
function getShortestDirectedCycle(graph) {
    if (isACyclic(graph)) {
        return []
    }

    let shortestCycle = []
    let length = Infinity

    // reverse the graph
    const revGraph = graph.reverse()

    for (const vertex of graph.getVertices()) {
        const BFS = new BreathFirstSearch(revGraph, vertex)
        for (const neighbor of graph.adjTo(vertex)) {
            if (
                BFS.hasPathTo(neighbor) &&
                BFS.distanceTo(neighbor) + 1 < length
            ) {
                const cycle = BFS.pathTo(neighbor).reverse()
                cycle.push(neighbor)
                shortestCycle = cycle
                length = BFS.distanceTo(neighbor) + 1
            }
        }
    }

    return shortestCycle
}

module.exports = getShortestDirectedCycle
