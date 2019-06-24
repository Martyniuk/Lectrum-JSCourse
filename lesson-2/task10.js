/*
# Задача 10

Отсортируйте массив по возрастанию.

Использовать встроенные методы массивов — нельзя.

```javascript
const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]
```
*/

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

const array = [6, 4, 75, 5, 4, 86, 3, 2, 1];
var result = sortArray(array);

console.log(result);