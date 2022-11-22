const { Graph } = require('data-structures-again')
const { isConnected, getEulerCycle } = require('.')

test('case 1: should return []', () => {
    const graph = new Graph()

    /*
        0---2
        |
        |
        1

    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)

    graph.addEdge(1, 0)
    graph.addEdge(2, 0)

    expect(getEulerCycle(graph)).toEqual([])
})

test('case 2: should return cycle', () => {
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

    expect(getEulerCycle(graph)).toEqual([0, 1, 3, 2, 0])
})

test('case 3: should return cycle', () => {
    const graph = new Graph()
    /*
        0--1--2
        | / \ |
        |/   \|
        3     4
    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 3)
    graph.addEdge(3, 1)
    graph.addEdge(1, 2)
    graph.addEdge(1, 4)
    graph.addEdge(4, 2)

    graph.addEdge(1, 0)
    graph.addEdge(3, 0)
    graph.addEdge(1, 3)
    graph.addEdge(2, 1)
    graph.addEdge(4, 1)
    graph.addEdge(2, 4)

    expect(getEulerCycle(graph)).toEqual([0, 1, 2, 4, 1, 3, 0])
})

test('case 4: should return cycle', () => {
    const graph = new Graph()
    /*
        check graph4.jpg
    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(0, 5)
    graph.addEdge(0, 6)

    graph.addEdge(1, 0)
    graph.addEdge(1, 2)

    graph.addEdge(2, 0)
    graph.addEdge(2, 1)
    graph.addEdge(2, 3)
    graph.addEdge(2, 4)

    graph.addEdge(3, 2)
    graph.addEdge(3, 4)

    graph.addEdge(4, 2)
    graph.addEdge(4, 3)
    graph.addEdge(4, 5)
    graph.addEdge(4, 6)

    graph.addEdge(5, 0)
    graph.addEdge(5, 4)

    graph.addEdge(6, 0)
    graph.addEdge(6, 4)

    expect(getEulerCycle(graph)).toEqual([0, 1, 2, 0, 5, 4, 2, 3, 4, 6, 0])
})

test('isConnected: should return true', () => {
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

    expect(isConnected(graph)).toEqual(true)
})

test('isConnected: should return false', () => {
    const graph = new Graph()
    /*
        0-----1
        |
        |
        2     3
    */

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(3)

    expect(isConnected(graph)).toEqual(false)
})
