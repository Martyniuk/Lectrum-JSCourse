/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение
function collect(array) {
    if (arguments.length !== 1) {
        throw new Error('Number of argument should be 1! No more, no less!')
    } else if (!Array.isArray(array)) {
        throw new Error(`${array} should be an Array type!`)
    }
    
   return array.reduce((acc, curValue) => {
        // if value is an Array we call this method again
        if (Array.isArray(curValue)) {
            acc += collect(curValue);
        } else {
        // if value is Not an Array we do calculation and valueCheck before that
            valueCheck(curValue);

            acc += curValue;
        }

        return acc;
   }, 0);
}

function valueCheck(value) {
    if (typeof value !== 'number') {
        throw new Error(`All values should be type Nubmber, including ${value}`);
    }
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
