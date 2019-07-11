/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function reduce(array, callback, init_accumulator) {
    let accumulator = init_accumulator;

    if (arguments.length !== 3) {
        throw new Error(`Incorrect number of arguments! \n Number of args should be 3! \n 1 - 1st argument should be an array and 2 - 2d argument should be a function, 3 - 3d argument should be an initial_accumulator!`);
    } else if (!Array.isArray(array)) {
        throw new Error(`${array} should be an Array type`);
    } else if (typeof callback !== 'function') {
        throw new Error(`${callback} should be a function`);
    } else if (typeof init_accumulator !== 'number') {
        throw new Error(`${init_accumulator} is not a number`);
    }

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
