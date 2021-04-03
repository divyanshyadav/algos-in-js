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

module.exports = {
    findIntersection
}
