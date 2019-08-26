/*
    How many characters to be removed to make two string anagram.

    Anagram: Two strings are said to be anagram
        if they have same characters(In any order).
*/

const getCharFrequency = (word) => {
    const map = new Map()

    word.split('').forEach(c => {
        if (!map.has(c)) {
            map.set(c, 0)
        }
        map.set(c, map.get(c) + 1)
    })

    return map
}

const getMaxAndMinMap = (first, second) => {
    const max = first.size > second.size ? first : second
    const min = first.size > second.size ? second : first

    return { max, min }
}

const findDiff = (first, second) => {
    const { max, min } = getMaxAndMinMap(
        getCharFrequency(first),
        getCharFrequency(second))

    let diff = 0
    max.forEach((value, key) => {
        if (min.get(key)) {
            diff += Math.abs(value - min.get(key))
            min.set(key, 0)
        } else {
            diff += value
        }
    })

    // Add remaining values
    min.forEach((value) => {
        diff += value
    })

    return diff
}

module.exports = findDiff
