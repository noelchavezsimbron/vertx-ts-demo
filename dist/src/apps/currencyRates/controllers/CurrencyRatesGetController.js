"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRatesGetController = void 0;
const options_1 = require("@vertx/core/options");
class CurrencyRatesGetController {
    constructor(currencyRateFinder) {
        this.currencyRateFinder = currencyRateFinder;
        this.currencyRateFinder = currencyRateFinder;
    }
    handle(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const rates = yield this.currencyRateFinder.find();
            const options = new options_1.DeliveryOptions().setSendTimeout(5);
            vertx.eventBus().request("com.interseguro.currency.rates.on.search", {}, options, res => {
                if (res.succeeded()) {
                    console.log("rates array:", rates);
                    ctx.response()
                        .putHeader("Content-type", "application/json")
                        .end(JSON.stringify(rates));
                }
                else {
                    ctx.response()
                        .setStatusCode(500)
                        .write(JSON.stringify('{"message":"an error occurred. "}'))
                        .end();
                }
            });
        });
    }
    handleFailure(ctx) {
        var _a;
        console.log("error", (_a = ctx.failure()) === null || _a === void 0 ? void 0 : _a.getMessage());
        ctx.response()
            .setStatusCode(500)
            .end("Error in Get Currency Rates");
    }
}
exports.CurrencyRatesGetController = CurrencyRatesGetController;
