function merge (objA, objB) {
    const obj = {}

    Object.entries(objA).forEach(([key, value]) => {
        if (key in objB) {
            if (typeof value === 'object') {
                obj[key] = merge(value, objB[key])
            } else {
                obj[key] = objB[key]
            }
        } else {
            obj[key] = value
        }
    })

    Object.entries(objB).forEach(([key, value]) => {
        if (key in objA) {

        } else {
            obj[key] = value
        }
    })

    return obj
}

module.exports = merge
