function stringLength (string) {
    const length = string.length;
    if (length > 0 && length <= 10) {
        return 'Ok';
    }
    return 'Error';
}


test('checks if string length is ok', () => {
    expect(stringLength('martin')).toBe('Ok');
    expect(stringLength('')).toBe('Error');
})

function reverseString(string) {
    return string.split('').reverse().join('');
}

test ('checks if string is reversed', () => {
    expect(reverseString('martin')).toBe('nitram');    
    expect(reverseString('andrea')).toBe('aerdna');    
})

class Calculator {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    sum (x, y) {
        return x + y;
    }
    substract (x, y) {
        return x - y;
    }
    multiply (x, y) {
        return x * y;
    }
    divide (x, y) {
        return x / y;
    }
}

let check = new Calculator ()

describe ('calculator functions', () => {
    test ('check sum functionality', () => {
        expect(check.sum(1, 1)).toBe(2)
        expect(check.sum(2, 1)).toBe(3)
        expect(check.sum(4, 2)).toBe(6)
        expect(check.sum(10000, 1)).toBe(10001)
    }),
    test ('check substract functionality', () => {
        expect(check.substract(1, 1)).toBe(0)
        expect(check.substract(2, 1)).toBe(1)
        expect(check.substract(4, 2)).toBe(2)
        expect(check.substract(10000, 1)).toBe(9999)
    }),
    test ('check multiply functionality', () => {
        expect(check.multiply(1, 1)).toBe(1)
        expect(check.multiply(2, 1)).toBe(2)
        expect(check.multiply(4, 2)).toBe(8)
        expect(check.multiply(10000, 1)).toBe(10000)
    }),
    test ('check divide functionality', () => {
        expect(check.divide(1, 1)).toBe(1)
        expect(check.divide(2, 1)).toBe(2)
        expect(check.divide(4, 2)).toBe(2)
        expect(check.divide(10000, 1)).toBe(10000)
    })
})

test ('first letter must be in CAPS', () => {
    expect(capitalize('martin')).toBe('Martin');
})

function capitalize(string) {
    let firstLetter = string.charAt(0).toUpperCase() + string.slice(1);
    return firstLetter;
}