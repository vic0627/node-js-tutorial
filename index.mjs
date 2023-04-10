import request from "request";

// const url = "http://211.72.231.157/Kcg_Wrb_SP/api/v1/getDis";

// request.get(url, (err, res, body) => {
//   let json = JSON.parse(body);
//   console.log(json);
// });
import { serv } from "./http_sever.js";
//serv();
import { expressServer } from "./express_server.js";
//expressServer();
import app from "./express_router.js";
app();
