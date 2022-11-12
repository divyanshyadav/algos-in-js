const { Graph } = require('data-structures-again')

/**
 * @param {Graph} graph
 */
function isBipartite(graph) {
    const visited = new Map()

    function dfs(vertex, prevColor) {
        if (visited.has(vertex)) {
            if (visited.get(vertex) === prevColor) return false
            return true
        }

        const curColor = !prevColor
        visited.set(vertex, curColor)
        return graph.adjTo(vertex).every(v => dfs(v, curColor))
    }

    return dfs(graph.getVertices().next().value, false)
}

module.exports = isBipartite
