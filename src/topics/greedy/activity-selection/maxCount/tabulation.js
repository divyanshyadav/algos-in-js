function activitySelection (activities) {
    activities.unshift([0, 0])
    activities.push([Infinity, Infinity])

    const memo = new Array(activities.length).fill()
        .map(_ => new Array(activities.length).fill(0))

    for (let gap = 2; gap < activities.length; gap++) {
        for (let start = 0; start < activities.length - gap; start++) {
            const end = start + gap
            let k = end - 1
            while (activities[start][1] < activities[k][1]) {
                if (activities[start][1] <= activities[k][0] &&
                    activities[k][1] <= activities[end][0] &&
                    memo[start][k] + memo[k][end] + 1 > memo[start][end]) {
                    memo[start][end] = memo[start][k] + memo[k][end] + 1
                }

                k--
            }
        }
    }

    return memo[0][activities.length - 1]
}

module.exports = {
    activitySelection
}
