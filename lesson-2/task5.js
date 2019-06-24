/*
# Задача 5

Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

```js
for (var i = 0; i < 3; i++) {
    console.log('номер ' + i + '!');
}
```
*/

function forToWhile() {

    var i = 0;
    while (i < 3) {
        console.log(`index ${i}!`);
        i++;
    }
}

forToWhile();