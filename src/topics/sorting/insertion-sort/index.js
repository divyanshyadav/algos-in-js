function sortDesc (array) {
    for (let i = 1; i < array.length; i++) {
        const num = array[i]
        let j = i - 1

        while (j >= 0 && num > array[j]) {
            array[j + 1] = array[j]
            j--
        }

        array[j + 1] = num
    }

    return array
}

module.exports = sortDesc
