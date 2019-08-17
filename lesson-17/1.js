/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    if (postpone.length !== 3) {
        throw new Error('3 parameters should be passed, no more, no less');
    }

    if (typeof start !== 'number' || typeof end !== 'number' || typeof delay !== 'number') {
        throw new Error(`${start}, ${end}, ${delay} - should be number type!`);
    }

    if (start < end) {
        for(let i = start; i <= end; i++) {
            let res = delay * index; // 1000 2000 3000 <-- for debugging purpose

            setTimeout(() => console.log(i), res);
        }
    } else {
        for (let i = start; i >= end; i--) {
            let res = 1000 * (start - i) + delay; // 1000 2000 3000 <-- for debugging purpose

            setTimeout(() => console.log(i), res);
        }
    }
}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;