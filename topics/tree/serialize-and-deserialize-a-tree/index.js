/*
    Serialize/deserialize
        Time Complexity: O(n)
        Space Complexity: O(logn)
*/

const { Queue } = require('data-structures-again')

const NULL = 'X'
const DELIMITER = ','

const createTreeNode = (data, left = null, right = null) => {
    return { data, left, right }
}

const serialize = (node) => {
    const helper = (node) => {
        if (!node) {
            return NULL + DELIMITER
        }

        return node.data +
            DELIMITER +
            helper(node.left) +
            helper(node.right)
    }

    return helper(node).slice(0, -1)
}

const deserialize = (string) => {
    const helper = (nodes) => {
        if (!nodes.length) {
            return null
        }

        const node = nodes.dequeue()

        if (node === NULL) {
            return null
        }

        const leftSubTree = helper(nodes)
        const rightSubTree = helper(nodes)

        return createTreeNode(node, leftSubTree, rightSubTree)
    }

    const nodes = new Queue(...string.split(DELIMITER))
    return helper(nodes)
}

module.exports = {
    serialize,
    deserialize
}
