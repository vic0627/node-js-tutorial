import express from "express";
import bodyParser from "body-parser";

// module routing
const app = express.Router();
const port = 3310;

// 使用 body-parser 針對 request body 進行 parse，在不使用 parser 的情況下，express 無法對傳入的複雜參數進行轉換，再經過轉換後才能取得資料，在這裡將 body 視為單純文字，再將文字以 JSON parse 轉為 json 物件。
app.use(bodyParser.text({ type: "*/*" }));

// methods
// get
app.get("/", (req, res) => {
  const user = JSON.parse(req.body);
  res.send("User Info Is " + JSON.stringify(user));
});
// post
app.post("/", (req, res) => {
  const user = JSON.parse(req.body);
  res.send("Get user data, user name is " + user.name);
});
// put
app.put("/", (req, res) => {
  const user = JSON.parse(req.body);
  user.age += 1;
  res.send("Return user info is " + JSON.stringify(user));
});
// delete
app.delete("/", (req, res) => {
  const user = JSON.parse(req.body);
  res.send(`User ${user.name} has been deleted!`);
});

