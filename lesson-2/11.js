/*
# Задача 11

С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.

Использовать встроенные методы массивов — нельзя.

```javascript
const array = [2, 5, 9, 15, 0, 4];
```
*/

function rangeFrom3To10(arr) {
    const length = array.length;
    let i = 0;

    for (; i < length; i++) {
        if (arr[i] > 3 && arr[i] < 10) {
            console.log(arr[i]);
        }
    }
}

const array = [2, 5, 9, 15, 0, 4];
rangeFrom3To10(array);