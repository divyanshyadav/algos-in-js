function has4Sum(arr) {
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j]
            if (!map.has(sum)) {
                map.set(sum, new Set())
            }

            map.get(sum).add(i)
            map.get(sum).add(j)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j]

            if (map.has(sum) && map.get(sum).size >= 4) {
                return true
            }
        }
    }

    return false
}

module.exports = has4Sum
