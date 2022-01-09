/*
    Reference: https://alumni.media.mit.edu/~dlanman/courses/cs157/HW3.pdf
*/

const { swap } = require('../../../../utils')

function findIntersection (intervals, start, end) {
    let [a, b] = intervals[end]

    for (let i = start; i < end; i++) {
        const [c, d] = intervals[i]

        if (a <= d && c <= b) {
            a = Math.max(a, c)
            b = Math.min(b, d)
        }
    }

    return [a, b]
}

function fuzzySort (intervals) {
    function helper (intervals, start, end) {
        if (start >= end) {
            return
        }

        const [a, b] = findIntersection(intervals, start, end)
        const midEnd = partitionRight(intervals, start, end, a)
        const midStart = partitionLeftMid(intervals, start, midEnd, b)
        helper(intervals, start, midStart - 1)
        helper(intervals, midEnd + 1, end)
    }

    helper(intervals, 0, intervals.length - 1)
}

function partitionRight (intervals, start, end, value) {
    let i = start - 1
    for (let j = 0; j < end; j++) {
        if (intervals[j][0] <= value) {
            swap(intervals, ++i, j)
        }
    }

    swap(intervals, ++i, end)

    return i
}

function partitionLeftMid (intervals, start, end, value) {
    let i = start - 1
    for (let j = 0; j < end; j++) {
        if (intervals[j][1] < value) {
            swap(intervals, ++i, j)
        }
    }

    swap(intervals, ++i, end)

    return i
}

module.exports = {
    findIntersection,
    partitionRight,
    partitionLeftMid,
    fuzzySort
}
