"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const CurrencyRateFinder_1 = require("../../../Contexts/CurrencyRates/Rates/application/Find/CurrencyRateFinder");
const CurrencyRatesGetController_1 = require("../controllers/CurrencyRatesGetController");
const CurrencyRateMongoRepository_1 = require("../../../Contexts/CurrencyRates/Rates/infrastructure/persistence/mongo/CurrencyRateMongoRepository");
const mongo_1 = require("../../../Shared/infrastructure/mongo");
exports.register = (router) => {
    const mongoConfig = {
        "host": "34.86.208.231",
        "port": 27017,
        "db_name": "payments-db-dev",
        "username": "payments-admin-dev",
        "password": "4$.d3vP4.i8K83.ads9$.",
        "authSource": "payments-db-dev",
        "authMechanism": "SCRAM-SHA-1",
    };
    const mongoClient = mongo_1.MongoClient.create(vertx, mongoConfig);
    console.log("mongoClient", mongoClient);
    //const currencyRateRepository=new InMemoryCurrencyRateRepository()
    const currencyRateRepository = new CurrencyRateMongoRepository_1.CurrencyRateMongoRepository(mongoClient);
    const currencyRateFinder = new CurrencyRateFinder_1.CurrencyRateFinder(currencyRateRepository);
    const currencyRateGetController = new CurrencyRatesGetController_1.CurrencyRatesGetController(currencyRateFinder);
    router.get()
        .path("/rates")
        .handler(ctx => currencyRateGetController.handle(ctx))
        .failureHandler(ctx => currencyRateGetController.handleFailure(ctx));
};
