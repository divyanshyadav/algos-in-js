// const { Graph } = require('data-structures-again')

/**
 * @param {Graph} graph
 * @returns {Boolean}
 */
function isACyclic(graph) {
    const visited = new Set()
    const inRecStack = new Set()

    const hasCycle = vertex => {
        visited.add(vertex)
        inRecStack.add(vertex)

        for (const neighbor of graph.adjTo(vertex)) {
            if (!visited.has(neighbor)) {
                if (hasCycle(neighbor)) {
                    return true
                }
            } else if (inRecStack.has(neighbor)) {
                return true
            }
        }

        inRecStack.delete(vertex)
        return false
    }

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            if (hasCycle(vertex)) {
                return false
            }
        }
    }

    return true
}

module.exports = isACyclic
