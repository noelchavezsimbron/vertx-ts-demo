"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const web_1 = require("@vertx/web");
const currencyrates_route_1 = require("./currencyrates.route");
const hello_route_1 = require("./hello.route");
const routes = [
    hello_route_1.register,
    currencyrates_route_1.register,
];
const router = web_1.Router.router(vertx);
exports.router = router;
router.route()
    .handler(web_1.BodyHandler.create());
registerRoutes(router, routes);
function registerRoutes(router, routes) {
    routes.forEach(register => register(router));
}
