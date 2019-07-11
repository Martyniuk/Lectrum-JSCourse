/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение

function f(day) {
    if (!isNumber(day)) {
        throw new Error('parameter type is not a Number');
    } else if (!isValidRange(day)) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    return getDayInRussian(day);
}

function isValidRange(number) {
    return number >= 1 && number <= 7;
}

function isNumber(number) {
    return typeof number === 'number';
}

function getDayInRussian(day) {
    switch (day) {
        case 1:
            return 'Воскресенье';
        case 2:
            return 'Понедельник';
        case 3:
            return 'Вторник';
        case 4:
            return 'Среда';
        case 5:
            return 'Четверг';
        case 6:
            return 'Пятница';
        case 7:
            return 'Суббота';
    }
}
/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */