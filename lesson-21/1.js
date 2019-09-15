// # Задача 1

// Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность.

// Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Функция `isCustomerVerified` должна возвращать промис;
// 2. Использование `async & await` **запрещено**;
// 3. Использование посторонних библиотек **запрещено**;
// 4. В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет `true`;
// 5. В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`.

// **Пример использования**:

// ```javascript
const personFirst = {
  name: "Oliver",
  verified: true
};

const personSecond = {
  name: "Alex"
};

// isCustomerVerified(personFirst)
//     .then(status => console.log(status)) // true
//     .catch(error => console.log(error))

// isCustomerVerified(personSecond)
//   .then(status => console.log(status))
//   .catch(error => console.log(error)); // Customer is not verified
// ```

// ------------------------------------------------------------------------------------------------

function isCustomerVerified(customer) {
  const result = new Promise(function(resolve, reject) {
    if (!customer.verified) {
      reject("Customer is not verified");
    }
    resolve(customer.verified);
  });

  return result;
}

isCustomerVerified(personFirst)
  .then(status => console.log(status)) // true
  .catch(error => console.log(error));

isCustomerVerified(personSecond)
  .then(status => console.log(status))
  .catch(error => console.log(error)); // Customer is not verified
