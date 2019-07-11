/*
# Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
const value = 'c';

switch (value) {
    case 'a':
        console.log('a');
        break;

    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('others');
        break;

    default:
        console.log('unknown');
}
```
*/
function switchToIf(value) {
    if (value === 'a') {
        console.log('a');
    } else if (value === 'e' || value === 'b' || value === 'c' || value === 'd') {
        console.log('others');
    } else {
        console.log('unknown');
    }
}

// delete left hand side arguments one by one starting from 'Pitter' to view all possible options
const param = 'a' || 'e' || 'b' || 'c' || 'd' || 435;
switchToIf(param);

