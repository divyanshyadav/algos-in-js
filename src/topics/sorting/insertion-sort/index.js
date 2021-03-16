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

function sortAcc (array) {
    insertionSortRec(array, 0)
    return array
}

function insertionSortRec (array, index) {
    if (index >= array.length) {
        return
    }

    insert(array, index)
    insertionSortRec(array, index + 1)
}

function insert (array, index) {
    const num = array[index]
    let j = index - 1

    while (array[j] > num) {
        array[j + 1] = array[j]
        j--
    }

    array[j + 1] = num
}

module.exports = {
    sortDesc,
    sortAcc
}
