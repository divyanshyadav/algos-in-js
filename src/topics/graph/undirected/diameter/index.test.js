const { Graph } = require('data-structures-again')
const diameter = require('.')

test.only('case 1', () => {
    const graph = new Graph()

    /*
        undirected graph

        a---------b
                  |
}                 |
                  c
                  |
                  |
    e---r---------g--------d
                   \
                    n
    */

    graph.addEdge('a', 'b')
    graph.addEdge('b', 'c')
    graph.addEdge('c', 'g')
    graph.addEdge('e', 'r')
    graph.addEdge('r', 'g')
    graph.addEdge('g', 'd')
    graph.addEdge('g', 'n')

    graph.addEdge('b', 'a')
    graph.addEdge('c', 'b')
    graph.addEdge('g', 'c')
    graph.addEdge('r', 'e')
    graph.addEdge('g', 'r')
    graph.addEdge('d', 'g')
    graph.addEdge('n', 'g')

    expect(diameter(graph, 'a')).toEqual(['a', 'b', 'c', 'g', 'r', 'e'])
})
