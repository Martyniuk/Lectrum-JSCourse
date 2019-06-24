/*
# Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`. 

Для читаемости — оформляйте код в несколько строк.

```js
var message;

if (login == 'Pitter') {
  message = 'Hi';
} else if (login == 'Owner') {
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}
```
*/

function loginValidation(login) {
    let message;

    message = login == 'Pitter' ? 'Hi'
        : login == 'Owner' ? 'Hello'
            : login == '' ? 'unknown' : '';

    return message;
}

// delete left hand side params one by one starting from 'Pitter' to view all possible options
const param = 'Pitter' || 'Owner' || '' || 12;
const result = loginValidation(param);

console.log(result);
