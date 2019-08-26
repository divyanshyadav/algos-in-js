const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]]
}

module.exports = {
    swap
}
