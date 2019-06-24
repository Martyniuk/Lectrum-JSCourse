/* 
# Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
const a = 2;
const b = 1;
let result = null;

if (a + b < 4) {
    result = true;
} else {
    result = false;
}

console.log(result);
```
*/

function ternary(a, b) {
    return a + b < 4 ? true : false;
}

// delete functions staring from first in a row to view all possible options
const result = ternary(2, 1) || ternary(2, 2) || ternary(2, 5);

console.log(result);