function bfs (graph, source) {
    const sourceNode = graph.getVertex(source)
    const seen = new Set()
    const result = []

    let queue = [sourceNode]
    seen.add(sourceNode)

    while (queue.length > 0) {
        const newQueue = []

        queue.forEach(node => {
            result.push(node.name)

            node.getAdjVertices().forEach(neighbor => {
                const neighborNode = graph.getVertex(neighbor.name)
                if (!seen.has(neighborNode)) {
                    newQueue.push(neighborNode)
                    seen.add(neighborNode)
                }
            })
        })

        queue = newQueue
    }

    return result
}

module.exports = {
    bfs
}
