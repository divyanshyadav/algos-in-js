/*
    How many characters to be removed to make two string anagram.
    
    Anagram: Two strings are said to be anagram 
        if they have same characters(In any order).
*/

const getCharCountsMap = (string) => {
    const map = new Map()

    string.split('').forEach(c => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1)
        } else {
            map.set(c, 1)
        }
    })

    return map
}

const getLargerAndSmallerMap = (first, second) => {
    const larger = first.size > second.size ? first : second
    const smaller = first.size > second.size ? second : first
    
    return { smaller, larger }
}


const findDiff = (first, second) => {
    const { larger, smaller } = getLargerAndSmallerMap(
                                    getCharCountsMap(first), 
                                    getCharCountsMap(second)
                                )

    let diff = 0
    larger.forEach((value, key) => diff += Math.abs(value - (smaller.get(key) || 0)))

    return diff
}

module.exports = findDiff