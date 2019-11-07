function isACyclic (graph, start) {
    const startVertex = graph.getVertex(start)

    const helper = (vertex) => {
        vertex.visited = true
        vertex.inRecStack = true

        const adjVertices = vertex.getAdjVertices()
        let flag = true

        for (let i = 0; i < adjVertices.length; i++) {
            const neighbor = graph.getVertex(adjVertices[i])

            if (!neighbor.visited) {
                flag = helper(neighbor)
            } else {
                if (neighbor.inRecStack) {
                    flag = false
                }
            }

            if (flag === false) {
                break
            }
        }

        vertex.inRecStack = false
        return flag
    }

    return helper(startVertex)
}

module.exports = isACyclic
