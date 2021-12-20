/**
 * Time complexity: O(n)
 * Space complexity: O(n) (recursion stack)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    function helper (root, level, levels) {
        if (!root) return

        if (levels.length < level) {
            levels.push(root.val)
        }

        helper(root.right, level + 1, levels)
        helper(root.left, level + 1, levels)
    }

    const levels = []
    helper(root, 1, levels)
    return levels
}

module.exports = rightSideView
