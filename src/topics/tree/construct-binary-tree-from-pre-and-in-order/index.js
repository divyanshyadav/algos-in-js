function Node (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
}

/*
    Time complexity: O(n^2)
    Space
*/
const construct = (preOrder, inOrder) => {
    const search = (string, target, start, end) => {
        for (let i = start; i <= end; i++) {
            if (string[i] === target) {
                return i
            }
        }

        return -1
    }

    let preOrderIndex = 0
    const helper = (start, end) => {
        if (start > end) {
            return null
        }

        const data = preOrder[preOrderIndex++]
        const node = new Node(data)
        const index = search(inOrder, data, start, end)

        node.left = helper(start, index - 1)
        node.right = helper(index + 1, end)

        return node
    }

    return helper(0, inOrder.length - 1)
}

module.exports = construct
