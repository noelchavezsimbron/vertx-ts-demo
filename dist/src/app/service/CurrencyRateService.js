"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRateService = void 0;
const core_1 = require("@vertx/core");
const CurrencyRate_1 = require("../entity/CurrencyRate");
class CurrencyRateService {
    constructor(mongoClient, currencyDao) {
        this.mongoClient = mongoClient;
        this.currencyDao = currencyDao;
    }
    findByDate(date, resultHandler) {
        this.currencyDao.findByDate(date, this.mongoClient, res => {
            if (res.succeeded()) {
                let currencyRate = res.result().length > 0 ? res.result()[0] : CurrencyRate_1.CurrencyRate.default();
                resultHandler(core_1.Future.succeededFuture(currencyRate));
            }
            else {
                let throwable = res.cause();
                resultHandler(core_1.Future.failedFuture(throwable));
            }
        });
    }
}
exports.CurrencyRateService = CurrencyRateService;
