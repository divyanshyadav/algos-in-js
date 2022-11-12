const { Graph } = require('data-structures-again')
const isBipartite = require('.')

test.only('case 1: should return true', () => {
    // check graph-case-1.jpg
    const graph = new Graph()

    graph.addEdge(0, 5)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(0, 6)
    graph.addEdge(1, 3)
    graph.addEdge(2, 3)
    graph.addEdge(2, 4)
    graph.addEdge(4, 5)
    graph.addEdge(4, 6)

    graph.addEdge(5, 0)
    graph.addEdge(1, 0)
    graph.addEdge(2, 0)
    graph.addEdge(6, 0)
    graph.addEdge(3, 1)
    graph.addEdge(3, 2)
    graph.addEdge(4, 2)
    graph.addEdge(5, 4)
    graph.addEdge(6, 4)

    expect(isBipartite(graph)).toBe(true)
})

test.only('case 2: should return false', () => {
    const graph = new Graph()

    /*
        0---2
        |  /
        | /
        1

    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 2)

    graph.addEdge(1, 0)
    graph.addEdge(2, 0)
    graph.addEdge(2, 1)

    expect(isBipartite(graph)).toBe(false)
})

test.only('case 3: should return true', () => {
    const graph = new Graph()
    /*
        0-----1
        |     |
        |     |
        2-----3
    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(2, 3)

    graph.addEdge(1, 0)
    graph.addEdge(2, 0)
    graph.addEdge(3, 1)
    graph.addEdge(3, 2)

    expect(isBipartite(graph)).toBe(true)
})
