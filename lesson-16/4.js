/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
    // constructor(string) {
    //     this.string = string;
    // }

    reverse(value) {
        return [...value].reverse().join('');
    }

    uppercaseFirst(value) {
        return value[0].toUpperCase() + value.slice(1);
    }

    uppercaseAll(value) {
        const array = value.split(' ');
        const arrayWithUpper = array.map(string => this.uppercaseFirst(string));


        return arrayWithUpper.join(' ');
    }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;