"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRate = void 0;
class CurrencyRate {
    constructor(date, rate) {
        this._date = date;
        this._rate = rate;
    }
    get date() {
        return this._date;
    }
    get rate() {
        return this._rate;
    }
    static default() {
        return new CurrencyRate("", 3.339);
    }
    toJSONString() {
        return JSON.stringify({
            "rate": this === null || this === void 0 ? void 0 : this.rate
        });
    }
}
exports.CurrencyRate = CurrencyRate;
