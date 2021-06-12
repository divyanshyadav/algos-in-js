const { Graph } = require('data-structures-again')
const { bfs } = require('.')

test('case 1', () => {
    const graph = new Graph()

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')
    graph.addVertex('d')

    graph.addEdge('a', 'c')
    graph.addEdge('a', 'd')

    graph.addEdge('c', 'b')

    const result = bfs(graph, 'a')
    expect(result).toEqual(['a', 'c', 'd', 'b'])
})
