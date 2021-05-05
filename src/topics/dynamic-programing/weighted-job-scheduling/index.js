function weightedJobScheduling (activities, weights) {
    const jobs = []
    activities.forEach((activity, index) => {
        jobs.push(new Activity(activity[0], activity[1], weights[index]))
    })

    jobs.sort((a, b) => a.endTime - b.endTime)

    const dp = jobs.map(job => job.weight)
    const parent = new Array(jobs.length).fill().map((_, i) => i)

    for (let i = 0; i < jobs.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (jobs[j].endTime <= jobs[i].startTime) {
                dp[i] = Math.max(dp[i], dp[j] + jobs[i].weight)
                parent[i] = j
            }
        }
    }

    let maxIndex = 0
    let maxWeight = -Infinity

    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > maxWeight) {
            maxWeight = dp[i]
            maxIndex = i
        }
    }

    return createSolution(parent, maxIndex, jobs)
}

function createSolution (parent, startIndex, jobs) {
    const sol = []
    let cur = startIndex
    while (parent[cur] !== cur) {
        sol.push([jobs[cur].startTime, jobs[cur].endTime])
        cur = parent[cur]
    }

    sol.push([jobs[cur].startTime, jobs[cur].endTime])
    return sol.reverse()
}

class Activity {
    constructor (startTime, endTime, weight) {
        this.startTime = startTime
        this.endTime = endTime
        this.weight = weight
    }
}

module.exports = { weightedJobScheduling }
