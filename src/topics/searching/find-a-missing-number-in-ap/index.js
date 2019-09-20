const find = (ap) => {
    if (ap.length < 2) {
        return undefined
    }

    const a = ap[0]
    const d = diff(a, ap[ap.length - 1], ap.length)

    const missingIndex = binarySearch(ap, (mid) => {
        const actual = nth(a, mid, d)
        const current = ap[mid]
        return current - actual
    })

    return nth(a, missingIndex, d)
}

const diff = (firstTerm, lastTerm, totalTerms) => {
    return (lastTerm - firstTerm) / totalTerms
}

const nth = (a, n, diff) => {
    return a + (n) * diff
}

const binarySearch = (array, comparator) => {
    const helper = (array, start, end) => {
        if (start > end) {
            return start
        }

        const mid = Math.floor(start + (end - start) / 2)

        if (comparator(mid) === 0) {
            return helper(array, mid + 1, end)
        } else {
            return helper(array, start, mid - 1)
        }
    }

    return helper(array, 0, array.length - 1)
}

module.exports = find
