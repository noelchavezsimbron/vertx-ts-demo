"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const container_1 = require("../container/container");
exports.register = (router) => {
    const currencyRateService = container_1.Container.currencyRateService();
    router.get()
        .path("/rates")
        .handler(ctx => {
        const date = ctx.queryParam("date")[0];
        console.log("date", date);
        currencyRateService.findByDate(date, res => {
            if (res.succeeded()) {
                const currencyRate = res.result();
                ctx.response()
                    .putHeader("Content-type", "application/json")
                    .end(currencyRate.toJSONString());
            }
            else {
                ctx.response()
                    .setStatusCode(500)
                    .write(JSON.stringify('{"message":"an error occurred. "}'))
                    .end();
            }
        });
    })
        .failureHandler(ctx => {
        var _a;
        (_a = ctx.failure()) === null || _a === void 0 ? void 0 : _a.printStackTrace();
        ctx.response()
            .setStatusCode(500)
            .end("Error in Get Currency Rates");
    });
};
