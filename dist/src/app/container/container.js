"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const mongo_1 = require("../../infrastructure/mongo");
const CurrencyRateDAO_1 = require("../dao/CurrencyRateDAO");
const CurrencyRateService_1 = require("../service/CurrencyRateService");
class Container {
    static currencyRateDAO() {
        return new CurrencyRateDAO_1.CurrencyRateDAO();
    }
    static currencyRateService() {
        return new CurrencyRateService_1.CurrencyRateService(this.mongoClient(), this.currencyRateDAO());
    }
    static mongoClient() {
        const mongoConfig = {
            "host": "mongo-demo-vertx",
            "port": 27017,
            "db_name": "demo-vertx",
            "username": "vertx",
            "password": "mongo",
            "authSource": "demo-vertx",
            "authMechanism": "SCRAM-SHA-1",
        };
        return mongo_1.MongoClient.create(vertx, mongoConfig);
    }
}
exports.Container = Container;
