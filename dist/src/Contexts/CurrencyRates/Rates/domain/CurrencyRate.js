"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRate = void 0;
class CurrencyRate {
    constructor(rate) {
        this._rate = rate;
    }
    get rate() {
        return this._rate;
    }
}
exports.CurrencyRate = CurrencyRate;
