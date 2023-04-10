import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3310;

export const expressServer = () => {
  // 使用 body-parser 針對 request body 進行 parse，在不使用 parser 的情況下，express 無法對傳入的複雜參數進行轉換，再經過轉換後才能取得資料，在這裡將 body 視為單純文字，再將文字以 JSON parse 轉為 json 物件。
  app.use(bodyParser.text({ type: "*/*" }));
  // 基本 routing
  app.get("/", (req, res) => {
    res.send("Hey bitch!");
  });
  // methods
  // get
  app.get("/user", (req, res) => {
    const user = JSON.parse(req.body);
    res.send("User Info Is " + JSON.stringify(user));
  });
  // post
  app.post("/user", (req, res) => {
    const user = JSON.parse(req.body);
    res.send("Get user data, user name is " + user.name);
  });
  // put
  app.put("/user", (req, res) => {
    const user = JSON.parse(req.body);
    user.age += 1;
    res.send("Return user info is " + JSON.stringify(user));
  });
  // delete
  app.delete("/user", (req, res) => {
    const user = JSON.parse(req.body);
    res.send(`User ${user.name} has been deleted!`);
  });
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
};
