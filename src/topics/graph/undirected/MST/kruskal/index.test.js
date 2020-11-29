const { Graph } = require('data-structures-again')
const getMST = require('.')

test('case 1', () => {
    const graph = new Graph()

    /*
            a
       20 /   \  30
        b ----- c
            10
    */

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')
    graph.addEdge('a', 'b', 20)
    graph.addEdge('a', 'c', 30)
    graph.addEdge('b', 'c', 10)

    const edges = []
    for (const [vertex, value] of graph.adjList) {
        const neighbors = value.getAdjVertices()
        neighbors.forEach(n => {
            edges.push([vertex, n, graph.getEdgeValue(vertex, n)])
        })
    };

    expect(getMST(edges)).toEqual([['b', 'c', 10], ['a', 'b', 20]])
})
