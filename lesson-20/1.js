// Задача 1
// Создайте класс Customers который умеет работать с механизмом for of.

// Класс Customers содержит метод add который принимает объект в качестве параметра.
// У этого объекта есть обязательное поле name и необязательное поле verified.

// Класс Customers при переборе с помощью for of должен учитывать только объекты у которых был установлен флаг verified: true.

// Обратите внимание:

// Использование генераторов запрещено.
// Использование посторонних библиотек запрещено
// У класса Customers должен быть метод Symbol.iterator

// Пример использования:

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

    [Symbol.iterator]() {
        const filteredCustomersList = this.customersList.filter(v => v.verified);
        let counter = 0;


        return {
            next: () => ({
                value: filteredCustomersList[counter],
                done:  counter++ === filteredCustomersList.length,
            })
        };
        // history of debugging iterators below, if this practice* can be improved - I would be glad to know it
        // return {
        //     next: () => {
        //         console.log('counter', counter);
        //         return {
        //             value: filteredCustomersList[counter],
        //             done: (() => {
        //                 console.log('counter', counter);
        //                 console.log('filteredCustomersList.length', filteredCustomersList.length);

        //                 return counter++ === filteredCustomersList.length;
        //             })()
        //         }
        //     }
        // };

        // * by practice - I mean the way to debugg "value" and "done"
    }
}