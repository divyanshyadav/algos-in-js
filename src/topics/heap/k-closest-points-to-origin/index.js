const kthClosestPointFromOrigin = (points, k) => {
    const distance = (p1, p2 = [0, 0]) => {
        const x = p2[0] - p1[0]
        const y = p2[1] - p1[1]
        return Math.sqrt(x * x + y * y)
    }

    points.sort((p1, p2) => distance(p1) - distance(p2))

    return points.slice(0, k)
}

module.exports = kthClosestPointFromOrigin
