function activitySelection (activities) {
    activities.unshift([0, 0])
    activities.push([Infinity, Infinity])
    return helper(activities, 0, activities.length - 1)
}

function helper (activities, low, high) {
    if (low > high) {
        return []
    }

    const startTime = activities[low][1]
    const endTime = activities[high][0]

    let maxSet = []
    for (let i = low + 1; i < high; i++) {
        if (activities[i][0] >= startTime && activities[i][1] <= endTime) {
            const setLeft = helper(activities, low, i)
            const setRight = helper(activities, i, high)
            if (setLeft.length + setRight.length + 1 > maxSet.length) {
                maxSet = [...setLeft, activities[i], ...setRight]
            }
        }
    }

    return maxSet
}

module.exports = {
    activitySelection
}
