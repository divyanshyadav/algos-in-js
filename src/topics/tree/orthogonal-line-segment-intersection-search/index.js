/*
    Nondegeneracy assumption: All x and y coordinates are distinct

    Time complexity: nlogn + r
    Space complexity: n

    n -> lines
    r -> intersections
*/

const { Heap, BST } = require('data-structures-again')

function sweepLine(lines) {
    const points = getPointsFromLines(lines)

    const minHeap = new Heap((pointA, pointB) => {
        if (pointA[0] === pointB[0]) {
            return pointA[1] - pointB[1]
        }

        return pointA[0] - pointB[0]
    })

    points.forEach(point => minHeap.push(point))

    const bst = new BST()
    let count = 0
    while (minHeap.length > 0) {
        const [x, y] = minHeap.pop()

        // vertical line
        if (minHeap.length > 0 && minHeap.peek()[0] === x) {
            const [, y2] = minHeap.pop()
            count += bst.rangeCount(y, y2)
            if (bst.search(y) !== null) count--
            if (bst.search(y2) !== null) count--
        }

        if (bst.search(y) === null) {
            bst.insert(y)
        } else {
            bst.delete(y)
        }
    }

    return count
}

function getPointsFromLines(lines) {
    return lines.reduce((acc, line) => {
        acc.push([line[0], line[1]])
        acc.push([line[2], line[3]])

        return acc
    }, [])
}

module.exports = sweepLine
