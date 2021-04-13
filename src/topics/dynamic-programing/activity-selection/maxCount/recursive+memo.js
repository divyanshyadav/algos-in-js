function activitySelection (activities) {
    activities.unshift([0, 0])
    activities.push([Infinity, Infinity])
    const memo = new Array(activities.length).fill().map(_ => new Array(activities.length))
    return helper(activities, 0, activities.length - 1, memo)
}

function helper (activities, low, high, memo) {
    if (low > high) {
        return 0
    }

    if (memo[low][high] !== undefined) {
        return memo[low][high]
    }

    const startTime = activities[low][1]
    const endTime = activities[high][0]

    let maxCount = 0
    for (let i = low + 1; i < high; i++) {
        if (activities[i][0] >= startTime && activities[i][1] <= endTime) {
            maxCount = Math.max(maxCount,
                1 + helper(activities, low, i) + helper(activities, i, high))
        }
    }

    memo[low][high] = maxCount

    return maxCount
}

module.exports = {
    activitySelection
}
