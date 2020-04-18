
const flattenObject = require('.')

test('case 1', () => {
    const obj = {
        a: 1,
        b: 2
    }

    const expected = {
        a: 1,
        b: 2
    }

    const actual = flattenObject(obj)

    expect(actual).toEqual(expected)
})

test('case 2', () => {
    const obj = {
        a: 1,
        b: {
            c: {
                d: 2
            }
        }
    }

    const expected = {
        a: 1,
        b_c_d: 2
    }

    const actual = flattenObject(obj)

    expect(actual).toEqual(expected)
})

test('case 3', () => {
    const obj = {
        a: 1,
        b: {
            c: {
                d: {
                    e: 2
                }
            }
        }
    }

    const expected = {
        a: 1,
        b_c_d_e: 2
    }

    const actual = flattenObject(obj)

    expect(actual).toEqual(expected)
})
