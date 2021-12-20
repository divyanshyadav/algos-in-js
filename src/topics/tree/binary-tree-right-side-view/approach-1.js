/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []

    let queue = [root]
    const result = []
    while (queue.length > 0) {
        result.push(queue[queue.length - 1].val)

        const nextLevel = []
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i]
            if (node.left) nextLevel.push(node.left)
            if (node.right) nextLevel.push(node.right)
        }

        queue = nextLevel
    }

    return result
}

module.exports = rightSideView
