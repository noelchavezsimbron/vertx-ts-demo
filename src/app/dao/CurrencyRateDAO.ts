import {MongoClient} from "../../infrastructure/mongo";
import {CurrencyRate} from "../entity/CurrencyRate";
import {AsyncResult, Future} from "@vertx/core";


export class CurrencyRateDAO{


  findByDate(date:string,mongoClient:MongoClient,resultHandler:((asyncRes: AsyncResult<CurrencyRate[]>) => void)){

    const query={"date":date}

    mongoClient.find("currency_rates", query,(res:any) => {

      if (res.succeeded()) {

        console.log("succeeded query ")

        const currencyRates:CurrencyRate[]=[]

        for (let json of res.result()!) {

          console.log("result",json);

          currencyRates.push( new CurrencyRate(json.date,json.rate))
        }

        resultHandler(Future.succeededFuture(currencyRates))

      } else {

        resultHandler(Future.failedFuture(res.cause()))
      }

    })

  }

}
