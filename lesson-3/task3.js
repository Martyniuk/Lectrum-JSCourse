/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f(first, second, divider) {
    if (!isNumber(first) || !isNumber(second) || !isNumber(divider)) {
        throw new Error('all parameters type should be a Number');
    }

    return (first - second) / divider;
}

function isNumber(number) {
    return typeof number === 'number';
}

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

export { f };
/* не удалять */