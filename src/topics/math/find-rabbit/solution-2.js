/**
    Time complexity: O(size)
    Space complexity: O(1)
*/
function findRabbit (size, rabbitIndex) {
    // start search from even index
    const res = search(0, rabbitIndex, size)
    if (res !== -1) return res

    // start search from odd index
    return search(1, rabbitIndex, size)
}

function search (startIndex, rabbitIndex, size) {
    for (let i = startIndex; i < size; i++) {
        if (i === rabbitIndex) {
            return i
        }

        rabbitIndex = step(rabbitIndex, size)
    }

    return -1
}

function step (rabbitIndex, size) {
    // take left
    if (Math.random() > 0.5) {
        if (rabbitIndex - 1 >= 0) {
            return rabbitIndex - 1
        }

        return rabbitIndex + 1
    // take right
    } else {
        if (rabbitIndex + 1 < size) {
            return rabbitIndex + 1
        }

        return rabbitIndex - 1
    }
}

module.exports = findRabbit
