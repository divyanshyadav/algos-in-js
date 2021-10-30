const merge = require('.')

test('case 1', () => {
    const objA = {
        a: 1
    }

    const objB = {
        a: 2
    }

    const expected = {
        a: 2
    }

    expect(merge(objA, objB)).toEqual(expected)
})

test('case 2', () => {
    const objA = {
        a: 1,
        b: 2
    }

    const objB = {
        a: 2
    }

    const expected = {
        a: 2,
        b: 2
    }

    expect(merge(objA, objB)).toEqual(expected)
})

test('case 3', () => {
    const objA = {
        a: 1
    }

    const objB = {
        a: 2,
        b: 2
    }

    const expected = {
        a: 2,
        b: 2
    }

    expect(merge(objA, objB)).toEqual(expected)
})

test('case 4', () => {
    const objA = {
        a: 1
    }

    const objB = {
        a: 2,
        b: 2
    }

    const expected = {
        a: 2,
        b: 2
    }

    expect(merge(objA, objB)).toEqual(expected)
})

test('case 5', () => {
    const objA = {
        a: 1,
        b: {
            c: {
                d: 1
            },
            e: 1
        }
    }

    const objB = {
        a: 2,
        b: {
            c: {
                d: 2
            }
        }
    }

    const expected = {
        a: 2,
        b: {
            c: {
                d: 2
            },
            e: 1
        }
    }

    expect(merge(objA, objB)).toEqual(expected)
})

test('case 6', () => {
    const objA = {
        a: 1,
        b: {
            c: {
                d: 1,
                f: 1
            },
            e: 1
        }
    }

    const objB = {
        a: 2,
        b: {
            c: {
                d: 2,
                g: {
                    h: 1
                }
            }
        }
    }

    const expected = {
        a: 2,
        b: {
            c: {
                d: 2,
                f: 1,
                g: {
                    h: 1
                }
            },
            e: 1
        }
    }

    expect(merge(objA, objB)).toEqual(expected)
})
