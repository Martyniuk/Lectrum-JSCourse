/**
 * Задача 1.
 *
 * Реализуйте класс Worker, который будет иметь следующие свойства:
 *
 * - firstName — имя;
 * - lastName — фамилия;
 * - rate — ставка за день работы;
 * - days — количество отработанных дней.
 *
 * Класс должен иметь метод getSalary(), который будет возвращать зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 */

// Решение

class Worker {
    constructor(firstName, lastName, rate, days) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.firstName); // Walter
console.log(worker.lastName); // White
console.log(worker.rate); // 10
console.log(worker.days); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

exports.Worker = Worker;