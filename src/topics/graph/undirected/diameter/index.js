const { Graph } = require('data-structures-again')

/**
 * @param {Graph} graph
 * @param {String} startVertex
 */
function diameter(graph, startVertex) {
    let maxPath = []
    const seen = new Set()

    function dfs(vertex) {
        let max = []
        let secondMax = []

        seen.add(vertex)

        graph.adjTo(vertex).forEach(v => {
            if (seen.has(v)) return

            const path = dfs(v)
            if (path.length > max.length) {
                secondMax = max
                max = path
            } else if (path.length > secondMax.length) {
                secondMax = path
            }
        })

        if (max.length + secondMax.length + 1 > maxPath.length) {
            maxPath = [...max, vertex, ...secondMax]
        }

        max.push(vertex)
        return max
    }

    dfs(startVertex)
    return maxPath.reverse()
}

module.exports = diameter
