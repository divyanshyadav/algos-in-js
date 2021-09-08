function isExists (a, b) {
    let start = 0
    let end = 0
    const set = new Set(b.split(''))
    let count = 0

    while ((end - start) < b.length) {
        if (set.has(a[end++])) count++
    }

    while (end <= a.length) {
        if (count === b.length) return true
        if (set.has(a[start++])) count--
        if (set.has(a[end++])) count++
    }

    return false
}

module.exports = isExists
