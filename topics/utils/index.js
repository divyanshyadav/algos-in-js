const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]]
}

const clone = (array) =>
    JSON.parse(JSON.stringify(array))

module.exports = {
    swap,
    clone
}
