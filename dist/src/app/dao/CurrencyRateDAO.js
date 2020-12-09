"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRateDAO = void 0;
const CurrencyRate_1 = require("../entity/CurrencyRate");
const core_1 = require("@vertx/core");
class CurrencyRateDAO {
    findByDate(date, mongoClient, resultHandler) {
        const query = { "date": date };
        mongoClient.find("currency_rates", query, (res) => {
            if (res.succeeded()) {
                console.log("succeeded query ");
                const currencyRates = [];
                for (let json of res.result()) {
                    console.log("result", json);
                    currencyRates.push(new CurrencyRate_1.CurrencyRate(json.date, json.rate));
                }
                resultHandler(core_1.Future.succeededFuture(currencyRates));
            }
            else {
                resultHandler(core_1.Future.failedFuture(res.cause()));
            }
        });
    }
}
exports.CurrencyRateDAO = CurrencyRateDAO;
