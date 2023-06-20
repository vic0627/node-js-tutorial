import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.0";
const app = express();
const port = 3100;

app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"] }));

const client = await MongoClient.connect(url, function (err, client) {
    if (err) {
        console.error("连接到MongoDB失败:", err);
        return;
    }

    console.log("成功连接到MongoDB");

    return client;
});

const expressServer = () => {
    // 使用 body-parser 針對 request body 進行 parse，在不使用 parser 的情況下，express 無法對傳入的複雜參數進行轉換，再經過轉換後才能取得資料，在這裡將 body 視為單純文字，再將文字以 JSON parse 轉為 json 物件。
    app.use(bodyParser.json());
    // 基本 routing
    app.get("/", (req, res) => {
        const db = client.db("test");
        res.send(db.databaseName);
    });
    // methods
    // get
    app.get("/user", (req, res) => {
        const user = JSON.parse(req.body);
        res.send("User Info Is " + JSON.stringify(user));
    });
    // post
    app.post("/user", (req, res) => {
        const { body } = req;
        console.log(req.body.name);
        if (body.name !== "") res.send({ name: body.name });
        else
            res.send({
                status: 404,
                message: "找不到name",
            });
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

expressServer();
