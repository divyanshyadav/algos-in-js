function activitySelection (activities) {
    activities.unshift([0, 0])
    activities.push([+Infinity, +Infinity])
    const maxCompatibilityActivities = new Array(activities.length).fill(0)
    helper(activities, 0, activities.length - 1, maxCompatibilityActivities)
    maxCompatibilityActivities.shift()
    maxCompatibilityActivities.pop()
    console.log(maxCompatibilityActivities)
    return maxCompatibilityActivities
}

function helper (activities, low, high, maxCompatibilityActivities) {
    if (low > high) {
        return 0
    }

    const startTime = activities[low][1]
    const finishTime = activities[high][0]
    let max = 0
    let compatibleActivity = -1
    let prevCompatibleActivity = -1
    for (let i = low + 1; i < high; i++) {
        let ans = 0
        if (activities[i][0] >= startTime && activities[i][1] <= finishTime) {
            ans = 1 + helper(activities, low, i, maxCompatibilityActivities) + helper(activities, i, high, maxCompatibilityActivities)
            prevCompatibleActivity = compatibleActivity
            compatibleActivity = i
        }

        if (ans > max) {
            max = Math.max(max, ans)
            if (prevCompatibleActivity !== -1) {
                maxCompatibilityActivities[prevCompatibleActivity] = 0
            }
            maxCompatibilityActivities[compatibleActivity] = 1
        }
    }

    return max
}

function activitySelectionUsingDP (activities) {
    activities.unshift([0, 0])
    activities.push([+Infinity, +Infinity])
    const dp = new Array(activities.length)
        .fill().map(_ => new Array(activities.length).fill(0))

    for (let k = 2
        ; k < activities.length; k++) {
        for (let low = 0, high = k; high < activities.length; low++, high++) {
            const startTime = activities[low][1]
            const finishTime = activities[high][0]

            let max = 0
            for (let i = low + 1; i < high; i++) {
                let ans = 0
                if (activities[i][0] >= startTime && activities[i][1] <= finishTime) {
                    ans = 1
                    if (low <= i - 1) {
                        ans += dp[low + 1][i - 1]
                    }

                    if (i + 1 <= high) {
                        ans += dp[i + 1][high - 1]
                    }
                }
                max = Math.max(max, ans)
            }

            dp[low][high] = max
        }
    }

    console.log(dp)
}

module.exports = {
    activitySelection,
    activitySelectionUsingDP
}
