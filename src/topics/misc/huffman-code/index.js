const { Heap } = require('data-structures-again')

const getCharFreqMap = string =>
    string
        .split('')
        .reduce((acc, value) => {
            if (!acc.has(value)) {
                acc.set(value, 0)
            }
            acc.set(value, acc.get(value) + 1)
            return acc
        }, new Map())

const createNode = (char, count) => {
    return {
        char,
        count,
        children: []
    }
}

const getMinHeap = map => {
    const minHeap = new Heap((a, b) => {
        return a.count - b.count
    })
    map.forEach((value, key) => {
        minHeap.push(createNode(key, value))
    })

    return minHeap
}

const getHuffmanTree = minHeap => {
    while (minHeap.length > 1) {
        const first = minHeap.pop()
        const second = minHeap.pop()

        const combined = {
            left: first,
            right: second,
            count: first.count + second.count
        }
        minHeap.push(combined)
    }

    return minHeap.pop()
}

const getCharEncodingValues = (tree) => {
    const charMap = new Map()
    const helper = (tree, values) => {
        if (!tree) {
            return
        }

        if (!tree.left && !tree.right) {
            charMap.set(tree.char, values)
            return
        }

        helper(tree.right, values + '0')
        helper(tree.left, values + '1')
    }

    helper(tree, '')
    return charMap
}

module.exports = {
    getCharFreqMap,
    getMinHeap,
    getHuffmanTree,
    getCharEncodingValues
}
