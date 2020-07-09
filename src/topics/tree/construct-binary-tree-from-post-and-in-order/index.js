function Node (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
}

/*
    Time complexity: O(n^2)
    Space
*/
const construct = (postOrder, inOrder) => {
    const search = (string, target, start, end) => {
        for (let i = start; i <= end; i++) {
            if (string[i] === target) {
                return i
            }
        }

        return -1
    }

    let postOrderIndex = postOrder.length - 1
    const helper = (start, end) => {
        if (start > end) {
            return null
        }

        const data = postOrder[postOrderIndex--]
        const node = new Node(data)
        const index = search(inOrder, data, start, end)

        node.right = helper(index + 1, end)
        node.left = helper(start, index - 1)

        return node
    }

    return helper(0, inOrder.length - 1)
}

const postOrder = '42531'
const inOrder = '42153'
const tree = construct(postOrder, inOrder)

module.exports = construct
