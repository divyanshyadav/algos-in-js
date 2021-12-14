/**
    Time complexity: O(2^size)
    Space complexity: O(size)
*/
function findRabbit (size, rabbitIndex) {
    function find (rabbitIndex, index) {
        if (index >= size) {
            return -1
        }

        if (index === rabbitIndex) {
            return index
        }

        const res = find(moveRabbitLeft(rabbitIndex), index + 1)
        if (res !== -1) return res
        return find(moveRabbitRight(rabbitIndex, size), index + 1)
    }

    const res = find(rabbitIndex, 0)
    if (res !== -1) {
        return res
    }

    return find(rabbitIndex, 1)
}

function moveRabbitLeft (rabbitIndex) {
    if (rabbitIndex - 1 >= 0) {
        return rabbitIndex - 1
    }

    return rabbitIndex + 1
}

function moveRabbitRight (rabbitIndex, size) {
    if (rabbitIndex + 1 < size) {
        return rabbitIndex + 1
    }

    return rabbitIndex - 1
}

module.exports = findRabbit
