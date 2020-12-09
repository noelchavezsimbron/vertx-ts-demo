"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="es4x" />
// @ts-check
const routes_1 = require("./routes");
vertx.createHttpServer()
    .requestHandler(routes_1.router)
    .listen(8080);
console.log('Server listening at: http://localhost:8080/');
