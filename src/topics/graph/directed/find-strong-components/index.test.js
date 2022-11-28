const { Graph } = require('data-structures-again')
const getStronglyConnectedComponents = require('.')
const testCase2InputFile = require('./test-case-2')

test('case 1', () => {
    // check graph1.jpg
    const graph = new Graph()

    graph.addEdge(4, 2)
    graph.addEdge(2, 3)
    graph.addEdge(3, 2)
    graph.addEdge(6, 0)
    graph.addEdge(0, 1)
    graph.addEdge(2, 0)
    graph.addEdge(11, 12)
    graph.addEdge(12, 9)
    graph.addEdge(9, 10)
    graph.addEdge(9, 11)
    graph.addEdge(7, 9)
    graph.addEdge(10, 12)
    graph.addEdge(11, 4)
    graph.addEdge(4, 3)
    graph.addEdge(3, 5)
    graph.addEdge(6, 8)
    graph.addEdge(8, 6)
    graph.addEdge(5, 4)
    graph.addEdge(0, 5)
    graph.addEdge(6, 4)
    graph.addEdge(6, 9)
    graph.addEdge(7, 6)

    expect(getStronglyConnectedComponents(graph)).toEqual([
        [1],
        [2, 3, 5, 4, 0],
        [11, 12, 9, 10],
        [6, 8],
        [7]
    ])
})

test('case 2', () => {
    const graph = new Graph()

    testCase2InputFile
        .split('\n')
        .filter(v => v)
        .map(v => v.trim())
        .map(v => v.split(/[\s]+/))
        .forEach(([v, w]) => graph.addEdge(v, w))

    expect(getStronglyConnectedComponents(graph).length).toEqual(10)
})
