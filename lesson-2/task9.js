/*
# Задача 9

Отсортируйте массив по убыванию.

Использовать встроенные методы массивов — нельзя.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]
```
*/

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j + 1]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

var array = [1, 3, 3, 8, 5, 1, 6];
var result = sortArray(array);

console.log(result);