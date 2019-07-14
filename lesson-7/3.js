/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(value, quantity) {
    if (arguments.length !== 2) {
        throw new Error('Number of arguments should be 2! No more, no less!')
    } else if (!correctType(value)) {
        throw new Error(`${value} should be one of a type: Number, String, Object, Array!`)
    } else if (typeCheck(quantity) !== 'Number') {
        throw new Error(`${quantity} should be a 'Number' type`);
    }

    return new Array(quantity).fill(value);
}

function correctType(value) {
    return typeCheck(value) === 'Number' || typeCheck(value) === 'String' || typeCheck(value) === 'Array' || typeCheck(value) === 'Object';
}

function typeCheck(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}


const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
