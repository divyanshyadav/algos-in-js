const flattenObject = (object) => {
    const result = {}

    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'object') {
            const output = flattenObject(object[key])

            Object.keys(output).forEach(k => {
                result[`${key}_${k}`] = output[k]
            })
        } else {
            result[key] = object[key]
        }
    })

    return result
}

module.exports = flattenObject
