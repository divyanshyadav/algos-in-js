function activitySelection (activities) {
    activities.unshift([0, 0])
    activities.push([Infinity, Infinity])
    return helper(activities, 0, activities.length - 1)
}

function helper (activities, low, high) {
    if (low > high) {
        return 0
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

    return maxCount
}

module.exports = {
    activitySelection
}
