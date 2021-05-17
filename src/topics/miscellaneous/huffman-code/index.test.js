const {
    getCharFreqMap,
    getMinHeap,
    getHuffmanTree,
    getCharEncodingValues
} = require('./index')

test('character frequency function', () => {
    const input = 'abbcd'
    const expectedOutput = {
        a: 1,
        b: 2,
        c: 1,
        d: 1
    }

    getCharFreqMap(input).forEach((value, key) => {
        expect(expectedOutput[key]).toEqual(value)
    })
})

test('create heap array from character frequency map', () => {
    const input = getCharFreqMap('abbcd')
    const output = getMinHeap(input)
    expect(output).not.toBe(null)
})

test('creating huffman tree', () => {
    const input = getMinHeap(getCharFreqMap('abbcd'))
    const output = getHuffmanTree(input)
    expect(output).not.toBe(null)
})

test('getCharEncodingValues', () => {
    const input = getMinHeap(getCharFreqMap('abbcd'))
    const tree = getHuffmanTree(input)
    const map = getCharEncodingValues(tree)
    const expectedOutput = {
        b: '1',
        c: '01',
        a: '001',
        d: '000'
    }
    map.forEach((value, key) => {
        expect(value).toEqual(expectedOutput[key])
    })
})

test('getCharEncodingValues case 2', () => {
    const copy = (char, times) => {
        return Array.from(Array(times).keys()).reduce((acc, value) => {
            acc = acc + char
            return acc
        }, '')
    }
    const string = `${copy('a', 44)}${copy('b', 40)}${copy('c', 11)}${copy('d', 3)}${copy('e', 2)}${copy('f', 1)}`
    const charFreqMap = getCharFreqMap(string)
    const heap = getMinHeap(charFreqMap)
    const tree = getHuffmanTree(heap)
    const map = getCharEncodingValues(tree)
    const expectedOutput = {
        a: '1',
        b: '00',
        c: '010',
        d: '0111',
        e: '01100',
        f: '01101'
    }

    map.forEach((value, key) => {
        expect(value).toEqual(expectedOutput[key])
    })
})
