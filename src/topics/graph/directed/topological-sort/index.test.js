const { Graph } = require('data-structures-again')
const getTopologicalSortOrder = require('.')

test('case 1', () => {
    // check img graph1.png
    const graph = new Graph()

    graph.addEdge(0, 5)
    graph.addEdge(0, 1)
    graph.addEdge(3, 5)
    graph.addEdge(5, 2)
    graph.addEdge(6, 0)
    graph.addEdge(1, 4)
    graph.addEdge(0, 2)
    graph.addEdge(3, 6)
    graph.addEdge(3, 4)
    graph.addEdge(6, 4)
    graph.addEdge(3, 2)

    expect(getTopologicalSortOrder(graph)).toEqual([3, 6, 0, 1, 4, 5, 2])
})

test('case 2: has cycle', () => {
    const graph = new Graph()

    graph.addEdge(0, 1)
    graph.addEdge(1, 2)
    graph.addEdge(2, 0)

    expect(getTopologicalSortOrder(graph)).toEqual([])
})
