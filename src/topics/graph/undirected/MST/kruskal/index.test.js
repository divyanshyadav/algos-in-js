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
    graph.addUndirectedEdge('a', 'b', 20)
    graph.addUndirectedEdge('a', 'c', 30)
    graph.addUndirectedEdge('b', 'c', 10)

    const edges = graph.getEdges(graph)
    expect(getMST(edges)).toEqual([['b', 'c', 10], ['a', 'b', 20]])
})

test('case 1', () => {
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

    const edges = graph.getEdges(graph)
    expect(getMST(edges)).toEqual([
        ['2', '3', 1],
        ['3', '4', 2],
        ['1', '3', 3],
        ['3', '5', 3],
        ['0', '1', 4]
    ])
})
