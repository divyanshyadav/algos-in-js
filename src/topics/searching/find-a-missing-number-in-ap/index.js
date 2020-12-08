const find = (ap) => {
    if (ap.length < 2) {
        return undefined
    }

    const first = ap[0]
    const last = ap[ap.length - 1]
    const diff = (last - first) / ap.length

    return binarySearch(ap, diff)
}

function binarySearch (ap, diff) {
    let low = 0
    let high = ap.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        // check previous
        if (mid > 0 && ap[mid] - ap[mid - 1] !== diff) {
            return ap[mid] - diff
        }

        // check next
        if (ap[mid + 1] - ap[mid] !== diff) {
            return ap[mid] + diff
        }

        // check numbers before mid
        if (ap[0] + mid * diff === ap[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
}

module.exports = find
