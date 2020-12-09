import {MongoClient} from "../../infrastructure/mongo";
import {CurrencyRateDAO} from "../dao/CurrencyRateDAO";
import {CurrencyRateService} from "../service/CurrencyRateService";

export class Container{


  public static currencyRateDAO():CurrencyRateDAO{
    return new CurrencyRateDAO()
  }

  public static  currencyRateService():CurrencyRateService{
   return  new CurrencyRateService(this.mongoClient(),this.currencyRateDAO())
  }

  public static  mongoClient():MongoClient {

    const mongoConfig={
    "host" : "localhost",
    "port" : 27017,
    "db_name":"demo-vertx",
    "username"   : "vertx",
    "password"   : "mongo.",
    "authSource" : "demo-vertx",
    "authMechanism": "SCRAM-SHA-1",
  }


  return MongoClient.create(vertx,mongoConfig)
}

}
