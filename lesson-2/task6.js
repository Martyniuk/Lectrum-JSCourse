/*
# Задача 6

Написать код который посчитает сумму всех элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4];
```
*/

function sum(arr) {
    let res = 0;
    let length = arr.length;
    let i = 0;

    for (; i < length; i++) {
        res += arr[i];
    }

    return res;
}

const array = [1, 2, 3, 4];
const result = sum(array)

console.log(result);