"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const Thread = Java.type('java.lang.Thread');
const LinkedHashMap = Java.type('java.util.LinkedHashMap');
const TimeUnit = Java.type('java.util.concurrent.TimeUnit');
exports.register = (router) => {
    router.get()
        .path("/")
        .handler(ctx => {
        let shapes = new LinkedHashMap();
        shapes.put("1", "square");
        shapes.put("2", "circle");
        shapes.put("3", "triangle");
        Thread.sleep(TimeUnit.SECONDS.toMillis(3));
        console.log("shapes", shapes);
        let response = ctx.response();
        response.putHeader("Content-type", "application/json");
        response.end("Hello World Es4x Vertx");
    })
        .failureHandler(ctx => {
        var _a;
        (_a = ctx.failure()) === null || _a === void 0 ? void 0 : _a.printStackTrace();
        ctx.response()
            .setStatusCode(500)
            .end("GET / Sorry! Not today");
    });
};
