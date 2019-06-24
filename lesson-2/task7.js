/*
# Задача 7

Напишите код, который посчитает сумму всех парных элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4];
```
*/

function sumOfEven(arr) {
    let res = 0;
    let length = arr.length;
    let i = 0;

    for (; i < length; i++) {

        if (isEven(arr[i])) {

            res += arr[i];
        }
    }

    return res;
}

function isEven(number) {
    return number % 2 === 0;
}

const array = [1, 2, 3, 4];
const result = sumOfEven(array);

console.log(result);
