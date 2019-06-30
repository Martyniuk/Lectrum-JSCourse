/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение

Object.defineProperty(person, 'salary', {
    get () {
        const daysInCurrentMonth = daysInMonth();
        const currentDayOfMonth = new Date().getDate();
        const daysLeft = daysInCurrentMonth - currentDayOfMonth;
        const cache = {};

        if (cache[daysLeft]) return cache[daysLeft];

        if (daysInCurrentMonth - currentDayOfMonth > 20) {
            return cache[daysLeft] = `good salary`;
        } else {
            return cache[daysLeft] = `bad salary`;
        }
    }
})

// https://habr.com/ru/post/177059/
function daysInMonth() {
    return 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate();
}

person.salary; // good salary

exports.person = person;
