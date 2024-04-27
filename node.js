/* Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница. */

const http = require("http");

let homeCount = 0;
let aboutCount = 0;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    homeCount++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<h1>Добро пожаловать</h1><p>Просмотров страницы ${homeCount}<p> <a href="/about">Перейти на страницу 'О нас'</a>`);
  } else if (req.url === "/about") {
    aboutCount++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<h1>About</h1><p>Просмотров страницы ${aboutCount}<p> <a href="/">Перейти на главную страницу</a>`);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<h1>Страница не найдена </h1>`);
  }
});

const port = 3000;
count = 0;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
