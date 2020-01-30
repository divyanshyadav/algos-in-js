const { Graph } = require('data-structures-again')
const isACyclic = require('.')

test('case 1: cyclic graph', () => {
    const graph = new Graph()

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')
    graph.addVertex('d')
    graph.addVertex('e')
    graph.addVertex('f')

    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('b', 'd')
    graph.addEdge('b', 'c')
    graph.addEdge('d', 'a') // forming cycle
    graph.addEdge('c', 'e')
    graph.addEdge('e', 'd')
    graph.addEdge('f', 'a')
    graph.addEdge('f', 'c')

    expect(isACyclic(graph, 'a')).toBeFalsy()
})

test('case 2: acyclic graph', () => {
    const graph = new Graph()

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')
    graph.addVertex('d')
    graph.addVertex('e')
    graph.addVertex('f')

    graph.addEdge('a', 'b')
    graph.addEdge('a', 'c')
    graph.addEdge('b', 'd')
    graph.addEdge('b', 'c')
    graph.addEdge('c', 'e')
    graph.addEdge('e', 'd')
    graph.addEdge('f', 'a')
    graph.addEdge('f', 'c')

    expect(isACyclic(graph, 'a')).toBeTruthy()
})

test('case 3: cyclic graph 2', () => {
    const graph = new Graph()

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')

    graph.addEdge('a', 'b')
    graph.addEdge('b', 'c')
    graph.addEdge('c', 'a')

    expect(isACyclic(graph, 'a')).toBeFalsy()
})

test('case 4: acyclic graph 2', () => {
    const graph = new Graph()

    graph.addVertex('a')
    graph.addVertex('b')
    graph.addVertex('c')

    graph.addEdge('a', 'b')
    graph.addEdge('b', 'c')
    graph.addEdge('a', 'c')

    expect(isACyclic(graph, 'a')).toBeTruthy()
})
