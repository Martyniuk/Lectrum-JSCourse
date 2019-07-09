/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error(`${str} should be a string!`)
    } else if (str.length === 0) {
        return '';
    }

    return str[0].toUpperCase() + str.slice(1);
}



upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
