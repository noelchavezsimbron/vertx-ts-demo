"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../routes");
const port = 8080;
console.log("##### deploying Verticle Server #####");
vertx.createHttpServer()
    .requestHandler(routes_1.router)
    .listen(port, res => {
    if (res.succeeded()) {
        console.log(`Server listening at: http://localhost:${port}/`);
    }
    else {
        console.error('Error on start server');
    }
});
