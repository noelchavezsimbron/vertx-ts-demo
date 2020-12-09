import {CurrencyRateDAO} from "../dao/CurrencyRateDAO";
import {AsyncResult, Future} from "@vertx/core";
import {CurrencyRate} from "../entity/CurrencyRate";
import {MongoClient} from "../../infrastructure/mongo";

export class CurrencyRateService {

  private readonly mongoClient:MongoClient
  private readonly currencyDao:CurrencyRateDAO

  constructor(mongoClient: MongoClient, currencyDao: CurrencyRateDAO) {
    this.mongoClient = mongoClient;
    this.currencyDao = currencyDao;
  }

  findByDate(date:string,resultHandler:((asyncRes: AsyncResult<CurrencyRate>) => void)){


    this.currencyDao.findByDate(date,this.mongoClient, res=> {

        if (res.succeeded() ){

          let currencyRate = res.result()!.length>0 ? res.result()![0] : CurrencyRate.default();

          resultHandler(Future.succeededFuture(currencyRate))

        }else{

          let throwable = res.cause() as Throwable;
          resultHandler(Future.failedFuture(throwable))

        }

    })

  }

}
