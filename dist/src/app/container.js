"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const mongo_1 = require("../infrastructure/mongo");
const CurrencyRateDAO_1 = require("./dao/CurrencyRateDAO");
const CurrencyRateService_1 = require("./service/CurrencyRateService");
class Container {
    static currencyRateDAO() {
        return new CurrencyRateDAO_1.CurrencyRateDAO();
    }
    static currencyRateService() {
        return new CurrencyRateService_1.CurrencyRateService(this.mongoClient(), this.currencyRateDAO());
    }
    static mongoClient() {
        const mongoConfig = {
            "host": "34.86.208.231",
            "port": 27017,
            "db_name": "payments-db-dev",
            "username": "payments-admin-dev",
            "password": "4$.d3vP4.i8K83.ads9$.",
            "authSource": "payments-db-dev",
            "authMechanism": "SCRAM-SHA-1",
        };
        return mongo_1.MongoClient.create(vertx, mongoConfig);
    }
}
exports.Container = Container;
