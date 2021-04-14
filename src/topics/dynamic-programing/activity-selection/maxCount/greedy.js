function activitySelection (activities) {
    activities.unshift([0, 0])
    return helper(activities, 0)
}

function helper (activities, index) {
    let m = index + 1
    while (m < activities.length && activities[m][0] < activities[index][1]) {
        m++
    }

    if (m < activities.length) {
        return 1 + helper(activities, m)
    }

    return 0
}

module.exports = {
    activitySelection
}
