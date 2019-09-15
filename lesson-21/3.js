// # Задача 3

// Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

// **Обратите внимание**:

// 1. Функция `send` должна возвращать промис;
// 2. Использование `async & await` **запрещено**.
// 3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
// 4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
// 5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
// 6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${statusCode}`

// **До рефакторинга**:

// ```javascript
// const get = require('fetch').fetchUrl;

// const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
// get(url, (error, meta, body) => {
// 	const { data } = JSON.parse(body);
// 	console.log(data);
// });
// ```

// **После рефакторинга**

// ```javascript
// const get = require("fetch").fetchUrl;
// const url = "https://lab.lectrum.io/geo/api/countries?size=2";

// send(url)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// ```

// --------------------------------------- SOLUTION ---------------------------------------------------------

// 1. Below is Prod version that I would use for work, coz code is transparent and debuggable;

// function send(url) {
//   const result = get(url).then(response => {
//     if (response.status !== 200) {
//       throw new Error(`We have error, status code: ${response.status}`);
//     }

//     const data = response.json();

//     return data;
//   });

//   return result;
// }

// 2. Below solution has less lines of code, but less transparency, I prefer solution marked as 1
function send(url) {
  return get(url).then(response => {
    if (response.status !== 200) {
      throw new Error(`We have error, status code: ${response.status}`);
    }

    return response.json();
  });
}
