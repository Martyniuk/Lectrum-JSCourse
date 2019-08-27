// # Задача 2

// Улучшить класс `DB` из предыдущей задачи.

// -   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
// -   Генерировать ошибку, если query не валидный
// -   Поля `name` и `country` ищут 100% совпадение
// -   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
// -   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

// ```javascript
// const query = {
//     country: 'ua',
//     age: {
//         min: 21
//     },
//     salary: {
//         min: 300,
//         max: 600
//     }
// };

// const customers = db.find(query); // массив пользователей
// ```

class DB {
    constructor() {
        this.db = new Map();
    }

    generateRandomNumber() {
        return Math.random().toString(36).substr(2, 5);
    }

    validateUser(user) {
        const stringified = JSON.stringify(user, null, 2);

        if (typeof user !== 'object') {
            throw new TypeError(`${stringified} <-- should be an Object!`);
        } else if (!user.name && typeof user.name !== 'string') {
            throw new TypeError(`${stringified} <-- should contain required Property 'name' that should be a string type!`);
        } else if (!user.age && typeof user.age !== 'number') {
            throw new TypeError(`${stringified} <-- should contain required Property 'age' that should be a number type!`);
        } else if (!user.country && typeof user.country !== 'string') {
            throw new TypeError(`${stringified} <-- should contain required Property 'country' that should be a string type!`);
        } else if (!user.salary && typeof user.salary !== 'number') {
            throw new TypeError(`${stringified} <-- should contain required Property 'salary' that should be a number type!`);
        }
    }

    validateData(data) {
        const stringified = JSON.stringify(data, null, 2);

        if (typeof data !== 'object') {
            throw new TypeError(`${data} <-- should be an Object!`);
        }

        if (data.name || data.age || data.country || data.salary) {
            /* < -- question to Teacher
                // what is the best way to validate such cases? 
            */
        } else {
            throw new Error(`${stringified} should contain one of properties - name, age, country, salary`);
        }
    }

    validateQuery(query) {
        const stringifiedAge = JSON.stringify(query.age, null, 2);
        const stringifiedSalary = JSON.stringify(query.salary, null, 2);
    
        if (typeof query !== 'object') {
            throw new TypeError(`${query} should be an object!`);
        }
        if (query.country && typeof query.country !== 'string') {
            throw new TypeError(`${query.country} should be a string type!`);
        }
        if (query.age && typeof query.age !== 'object') {
            throw new TypeError(`${query.age} should be an object!`);
        }
        if (query.age && (!query.age.min && !query.age.max)) {
            throw new TypeError(`${stringifiedAge} should have min or max parameter!`);
        }
        if (query.salary && typeof query.salary !== 'object') {
            throw new TypeError(`${query.salary} should be an object!`);
        }
        if (query.salary && (!query.salary.min && !query.salary.max)) {
            throw new TypeError(`${stringifiedSalary} should have min or max parameter!`);
        }
    }

    create(user) {
        try {
            this.validateUser(user);
            const id = this.generateRandomNumber();

            this.db.set(id, user);

            return id;
        
        } catch ({ name, message }) {
            console.error(`${name} info 😬: \n ${message}`);
        }
    }

    read(...rest) {
        const [id] = rest;
        if (rest.length !== 1) {
            throw new Error(`Method 'read' expects 'id' as required argument of string type!`)
        } else if (typeof id !== 'string') {
            throw new Error(`${id} should be a string type only!`);
        } else if (!this.db.has(id)) {
            return null;
        }
        
        const userWithoutId = this.db.get(id);

        return { ...userWithoutId, id };
    }

    readAll() {
        const arrayOfUsers = [];

        if (arguments.length !== 0) {
            throw new Error('ReadAll method doesnt expect any arguments!');
        }

        this.db.forEach((user, id) => arrayOfUsers.push({ ...user, id }));

        return arrayOfUsers;
    }

    update(id, data) {
        try {
            if (arguments.length !== 2) {
                throw new Error('Method update expects 2 arguments!')
            }
            if (typeof id !== 'string') {
                throw new Error(`Type of ${id} should be a string`);
            }
            if (!this.db.has(id)) {
                throw new Error(`There is no user with given Id - ${id}`);
            }

            this.validateData(data);

            const user = this.db.get(id);
            const updatedUser = { ...user, ...data };
    
            this.db.set(id, updatedUser);

            return id;
        } catch ({ name, message }) {
            console.error(`${name} info 😬: \n ${message}`);
        }
    }

    delete(id) {
        if (typeof id !== 'string') {
            throw new Error(`Invalid type of ${id}`);
        }

        if (!this.db.has(id)) {
            throw new Error(`There is no User with ${id} id`)
        }

        return this.db.delete(id);
    }

    find(query) {
        try {
            this.validateQuery(query);
            const dbEntries = this.db.entries();
            let resultArray = [];

            // find persons by name and country
            for (const [id, value] of dbEntries) {
                const person = { ...value, id };
                
                if (query.name && !query.country) {
                    if (query.name === person.name) {
                        resultArray.push(person);
                    }
                } else if (!query.name && query.country) {
                    if (query.country === person.country) {
                        resultArray.push(person);
                    }
                } else if (query.name && query.country) {
                    if (query.name === person.name && query.country === person.country) {
                        resultArray.push(person);
                    }
                }
            }

            // filter resultArray by age
            if (query.age.min && !query.age.max) {
                resultArray = resultArray.filter(p => p.age >= query.age.min);
            } else if (!query.age.min && query.age.max) {
                resultArray = resultArray.filter(p => p.age <= query.age.max);
            } else if (query.age.min && query.age.max) {
                resultArray = resultArray.filter(p => p.age >= query.age.min && p.age <= query.age.max);
            }

            // filter resultArray by salary
            if (query.salary.min && !query.salary.max) {
                resultArray = resultArray.filter(p => p.salary >= query.salary.min);
            } else if (!query.salary.min && query.salary.max) {
                resultArray = resultArray.filter(p => p.salary <= query.salary.max);
            } else if (query.salary.min && query.salary.max) {
                resultArray = resultArray.filter(p => p.salary >= query.salary.min && p.salary <= query.salary.max);
            }

            return resultArray;
        } catch ({ name, message }) {
            console.error(`${name} info 🛠:\n ${message}`)
        }
    }
}
