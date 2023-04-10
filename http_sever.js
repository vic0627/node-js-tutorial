// 引入 http 套件;
import http from "http";
const port = 45001;

// 建立 sever 監聽路徑
export function serv() {
  const sever = http.createServer((req, res) => {
    console.log(req.method);
    // 判斷 request 的 method type
    if (req.url == "/") {
      // 依據不同狀況回傳 response
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("mainPage");
    } else if (req.url == "/user" && req.method == "GET") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end('{"name": "John", "age": "12"}');
    } else if (req.url == "/user" && req.method == "POST") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end("got user data");
    }
  });
  sever.listen(port);
}
