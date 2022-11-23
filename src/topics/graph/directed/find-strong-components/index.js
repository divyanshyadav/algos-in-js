const { Graph } = require('data-structures-again')

/**
 * @param {Graph} graph
 * @returns {String[][] | Number[][]} strongly connected components
 */
function getStronglyConnectedComponents(graph) {
    const revGraph = reverse(graph)
    const revPostOrder = getReversePostOrder(revGraph)

    const visited = new Set()
    const scMap = new Map()

    function dfs(vertex, id) {
        visited.add(vertex)

        if (!scMap.has(id)) {
            scMap.set(id, [])
        }

        scMap.get(id).push(vertex)

        graph.adjTo(vertex).forEach(v => {
            if (visited.has(v)) return
            dfs(v, id)
        })
    }

    let strongComponentId = 0
    revPostOrder.forEach(v => {
        if (visited.has(v)) return
        dfs(v, strongComponentId++)
    })

    return [...scMap.values()]
}

/**
 * @param {Graph} graph
 * @returns {Number[] | String[]}
 */
function getReversePostOrder(graph) {
    const postOrder = []
    const visited = new Set()

    function dfs(vertex) {
        visited.add(vertex)
        graph.adjTo(vertex).forEach(v => {
            if (visited.has(v)) return
            dfs(v)
        })
        postOrder.push(vertex)
    }

    for (const vertex of graph.getVertices()) {
        if (!visited.has(vertex)) {
            dfs(vertex)
        }
    }

    return postOrder.reverse()
}

/**
 * @param {Graph} graph
 * @return {Graph} reversed graph(edges direction reversed)
 */
function reverse(graph) {
    const revGraph = new Graph()

    for (const vertex of graph.getVertices()) {
        graph.adjTo(vertex).forEach(v => {
            revGraph.addEdge(v, vertex)
        })
    }

    return revGraph
}

module.exports = getStronglyConnectedComponents
