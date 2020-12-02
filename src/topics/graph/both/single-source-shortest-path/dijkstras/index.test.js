const getShortestPath = require('.')
const { Graph } = require('data-structures-again')

test('case 1', () => {
    const graph = new Graph()

    /*
            a
        1 /   \  2
        b ----- c
            5
    */

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')
    graph.addUndirectedEdge('a', 'b', 1)
    graph.addUndirectedEdge('a', 'c', 2)
    graph.addUndirectedEdge('b', 'c', 5)

    expect(getShortestPath(graph, 'b', 'c')).toEqual(['b', 'a', 'c'])
})

test('case 2', () => {
    const graph = new Graph()

    graph.addVertex('0')
    graph.addVertex('1')
    graph.addVertex('2')
    graph.addVertex('3')
    graph.addVertex('4')
    graph.addVertex('5')

    graph.addUndirectedEdge('0', '1', 4)
    graph.addUndirectedEdge('0', '2', 6)
    graph.addUndirectedEdge('1', '2', 6)
    graph.addUndirectedEdge('1', '3', 3)
    graph.addUndirectedEdge('1', '4', 4)
    graph.addUndirectedEdge('2', '3', 1)
    graph.addUndirectedEdge('3', '4', 2)
    graph.addUndirectedEdge('3', '5', 3)
    graph.addUndirectedEdge('4', '5', 7)

    expect(getShortestPath(graph, '0', '5')).toEqual(['0', '1', '3', '5'])
})
