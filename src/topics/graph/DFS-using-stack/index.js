function dfs (root, visit = (node) => console.log(node)) {
    let cur = root
    const stack = []

    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }

        const node = stack.pop()
        visit(node)
        cur = node.right
    }
}

module.exports = dfs
