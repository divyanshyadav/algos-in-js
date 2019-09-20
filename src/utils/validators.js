const checkEmptyArrayArg = (fn, argIndex) => (...args) => {
    const arg = args[argIndex]

    if (!Array.isArray(arg) || arg.length === 0) {
        return undefined
    }

    return fn(arg)
}

module.exports = {
    checkEmptyArrayArg
}
