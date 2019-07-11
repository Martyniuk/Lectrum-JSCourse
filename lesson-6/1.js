/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение

function forEach(array, callback) {
    if (arguments.length !== 2) {
        throw new Error(`Incorrect number of arguments! \n Number of args should be 2! \n 1st argument should be an array and 2d argument should be a function!`);
    } else if (!Array.isArray(array)) {
        throw new Error(`${array} should be an Array type`);
    } else if (typeof callback !== 'function') {
        throw new Error(`${callback} should be a function`);
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
