const { Graph } = require('data-structures-again')
const getShortestDirectedCycle = require('.')

test('case 1', () => {
    // check graph1.jpg
    const graph = new Graph()

    graph.addEdge('s', '1')
    graph.addEdge('s', '2')

    graph.addEdge('1', '4')

    graph.addEdge('2', '3')

    graph.addEdge('3', 's')

    graph.addEdge('4', '2')

    expect(getShortestDirectedCycle(graph)).toEqual(['2', '3', 's', '2'])
})
