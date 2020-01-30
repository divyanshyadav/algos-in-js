/*
    String decoder
    '0'  -> 'a'
    '11' -> 'aa' or 'j'
*/

const dict = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z'
}

const decode = (string) => {
    const result = []

    const helper = (string, index, buffer) => {
        if (index > string.length) {
            return
        }

        if (string[index] === '0') {
            return
        }

        if (index === string.length) {
            result.push(buffer)
            return
        }

        helper(string, index + 1,
            buffer + dict[parseInt(string[index])])

        const next = dict[parseInt(string[index] + string[index + 1])]
        if (next) {
            helper(string, index + 2, buffer + next)
        }
    }

    helper(string, 0, '')
    return result
}

decode('10')

module.exports = decode
