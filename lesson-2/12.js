/*
# Задача 12

Найдите сумму положительных элементов массива. В результате вы должны получить число `7`.

Использовать встроенные методы массивов — нельзя.

```javascript
const array = [2, -1, -3, 15, 0, 4];
```
*/

function sumOfPositiveNumbers(array) {
    let sum = 0;
    const length = array.length;
    let i = 0;

    for (; i < length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }

    return sum;
}

const array = [2, -1, -3, 15, 0, 4];
const result = sumOfPositiveNumbers(array);

console.log(result);