"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const HelloGetController_1 = require("../controllers/HelloGetController");
exports.register = (router) => {
    const helloGetController = new HelloGetController_1.HelloGetController();
    router.get()
        .path("/")
        .handler(ctx => helloGetController.handle(ctx))
        .failureHandler(ctx => helloGetController.handleFailure(ctx));
};
