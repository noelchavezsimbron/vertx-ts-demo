"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCurrencyRateRepository = void 0;
const CurrencyRate_1 = require("../domain/CurrencyRate");
class InMemoryCurrencyRateRepository {
    search() {
        return Promise.resolve([
            new CurrencyRate_1.CurrencyRate(3.373),
            new CurrencyRate_1.CurrencyRate(3.50),
            new CurrencyRate_1.CurrencyRate(3.339),
            new CurrencyRate_1.CurrencyRate(3.38)
        ]);
    }
}
exports.InMemoryCurrencyRateRepository = InMemoryCurrencyRateRepository;
