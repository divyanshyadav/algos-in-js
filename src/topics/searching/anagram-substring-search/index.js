function isExists (a, b) {
    const setB = new Set(b.split(''))
    let window = new Set()

    for (let i = 0; i < a.length; i++) {
        if (setB.has(a[i]) && !window.has(a[i])) {
            window.add(a[i])
        } else if (setB.has(a[i])) {
            window = new Set([a[i]])
        } else {
            window = new Set()
        }

        if (window.size === b.length) return true
    }

    return false
}

module.exports = isExists
