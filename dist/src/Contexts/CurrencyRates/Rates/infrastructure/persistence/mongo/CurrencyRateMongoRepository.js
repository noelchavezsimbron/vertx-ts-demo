"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRateMongoRepository = void 0;
const CurrencyRate_1 = require("../../../domain/CurrencyRate");
class CurrencyRateMongoRepository {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }
    search() {
        return new Promise((resolve, reject) => {
            const query = {};
            this.mongoClient.find("providers", query, (res) => {
                var _a, _b;
                if (res.succeeded()) {
                    console.log("succeeded query ");
                    let json;
                    for (json of res.result()) {
                        console.log("result", json);
                    }
                    resolve([new CurrencyRate_1.CurrencyRate(40.20), new CurrencyRate_1.CurrencyRate(40.21)]);
                }
                else {
                    (_a = res.cause()) === null || _a === void 0 ? void 0 : _a.printStackTrace();
                    reject((_b = res.cause()) === null || _b === void 0 ? void 0 : _b.getMessage());
                }
            });
        });
    }
}
exports.CurrencyRateMongoRepository = CurrencyRateMongoRepository;
