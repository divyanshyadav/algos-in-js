function dfs (root, visit = (node) => console.log(node)) {
    if (!root) return

    const stack = [{ node: root, next: 0 }]
    while (stack.length > 0) {
        // Do as deep as possible from current child
        let cur = stack[stack.length - 1]
        while (cur) {
            if (cur.next < cur.node.children.length) {
                stack.push({
                    node: cur.node.children[cur.next],
                    next: 0
                })
                cur.next++
                cur = stack[stack.length - 1]
            } else {
                cur = null
            }
        }

        // visit the node if no more children left to explore
        const top = stack[stack.length - 1]
        if (top.next === top.node.children.length) {
            visit(top.node)
            stack.pop()
        }
    }
}

module.exports = dfs
