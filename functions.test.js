const { returnTwo, greeting, add } = require('./functions')

describe('returnTwo Function', () => {          // this string is what will show up as the header for your test
    test('returnTwo should be defined', () => {
        expect(returnTwo).toBeDefined()
    });
    test('returnTwo should return 2', () => {
        expect(returnTwo()).toBe(2)
    });

});

describe('greeting Function', () => {
    test('greeting should be defined', () => {
        expect(greeting).toBeDefined()
    });
    test('greeting should return passed in name', () => {
        expect(greeting('James')).toBe('Hello, James.')
        expect(greeting('Jill')).toBe('Hello, Jill.')
        expect(greeting('Justin')).toBe('Hello, Justin.')
    })
})

describe('add Function', () => {
    test('add should be defined', () => {
        expect(add).toBeDefined()
    })
    test('add should return the sum of num1 and num2', () => {
        expect(add(2, 2)).toBe(4)
        expect(add(1, 5)).toBe(6)
        expect(add(-2, 2)).toBe(0)
        expect(add(0.2, 0.1)).toBe(0.3)
    })
})