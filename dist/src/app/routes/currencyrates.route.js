"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const mongo_1 = require("../../infrastructure/mongo");
const CurrencyRateService_1 = require("../service/CurrencyRateService");
const CurrencyRateDAO_1 = require("../dao/CurrencyRateDAO");
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
    const currencyRateDAO = new CurrencyRateDAO_1.CurrencyRateDAO();
    const currencyRateService = new CurrencyRateService_1.CurrencyRateService(mongoClient, currencyRateDAO);
    router.get()
        .path("/rates")
        .handler(ctx => {
        const date = ctx.queryParam("date")[0];
        console.log("date", date);
        currencyRateService.findByDate(date, res => {
            if (res.succeeded()) {
                const currencyRate = res.result();
                console.log("rates array:", currencyRate);
                ctx.response()
                    .putHeader("Content-type", "application/json")
                    .end(currencyRate.toJSONString());
            }
            else {
                ctx.response()
                    .setStatusCode(500)
                    .write(JSON.stringify('{"message":"an error occurred. "}'))
                    .end();
            }
        });
        /*
        
              const options=new DeliveryOptions().setSendTimeout(5)
        
              vertx.eventBus().request("com.interseguro.currency.rates.on.search",{},options,res => {
        
                if (res.succeeded()){
        
                  console.log("rates array:", rates)
        
                  ctx.response()
                    .putHeader("Content-type", "application/json")
                    .end(JSON.stringify(rates))
        
                }else{
                  ctx.response()
                    .setStatusCode(500)
                    .write(JSON.stringify('{"message":"an error occurred. "}'))
                    .end()
                }
        
              })*/
    })
        .failureHandler(ctx => {
        var _a;
        console.log("error", (_a = ctx.failure()) === null || _a === void 0 ? void 0 : _a.getMessage());
        ctx.response()
            .setStatusCode(500)
            .end("Error in Get Currency Rates");
    });
};
