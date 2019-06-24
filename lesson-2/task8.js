/*
# Задача 8

Напишите код, который посчитает сумму всех парных элементов в массиве.
В суммировании участвуют только элементы больше 3.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4, 5, 6];
```
*/

function sumOfEven(arr) {
    let res = 0;
    let length = arr.length;
    let i = 0;

    for (; i < length; i++) {

        if (arr[i] > 3 && isEven(arr[i])) {
            res += arr[i];
        }
    }

    return res;
}

function isEven(number) {
    return number % 2 === 0;
}

const array = [1, 2, 3, 4, 5, 6];
const result = sumOfEven(array);

console.log(result);