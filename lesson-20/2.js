// # Задача 2

// Улучшите класс `Customers` добавив функцию генератор.

// **Обратите внимание**:

// 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

// Пример использования:

// ```javascript
// const customers = new Customers();
// customers.add({name: 'Alex'});
// customers.add({name: 'Victor'});
// customers.add({name: 'Marcus'});
// customers.add({name: 'Andrii', verified: true});
// customers.add({name: 'Marco', verified: true});
// customers.add({name: 'Oliver'});
// customers.add({name: 'Lisa', verified: true});
// customers.add({name: 'John'});
// customers.add({name: 'Ivan', verified: true});

// for (const customer of customers) {
//     console.log(customer);
// }

// // В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
// ```

class Customers {
    constructor() {
        this.customersList = [];
    }

    add(customer) {
        if (typeof customer !== 'object') {
            throw new Error('Customer should be an Object type!');
        } else if (customer && !customer.name) {
            throw new Error(`${customer} should have required prop 'name'!`);
        }

        this.customersList.push(customer);
    }

    *[Symbol.iterator]() {
        for (const customer of this.customersList) {
            if (customer.verified) {
                yield customer;
            }
        }
    }
}