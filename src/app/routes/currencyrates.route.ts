import {Router} from '@vertx/web';
import {MongoClient} from "../../infrastructure/mongo";
import {CurrencyRateService} from "../service/CurrencyRateService";
import {CurrencyRateDAO} from "../dao/CurrencyRateDAO";

export const register=(router:Router)=>{



  const mongoConfig={
    "host" : "34.86.208.231",
    "port" : 27017,
    "db_name":"payments-db-dev",
    "username"   : "payments-admin-dev",
    "password"   : "4$.d3vP4.i8K83.ads9$.",
    "authSource" : "payments-db-dev",
    "authMechanism"     : "SCRAM-SHA-1",
  }


  const mongoClient=MongoClient.create(vertx,mongoConfig)

  console.log("mongoClient",mongoClient)

  const currencyRateDAO=new CurrencyRateDAO()
  const currencyRateService=new CurrencyRateService(mongoClient,currencyRateDAO)


  router.get()
    .path("/rates")
    .handler( ctx=>{

      const date = ctx.queryParam("date")[0]

      console.log("date",date)

      currencyRateService.findByDate(date,res=>{

        if (res.succeeded()){

          const currencyRate = res.result();

          ctx.response()
            .putHeader("Content-type", "application/json")
            .end(currencyRate!.toJSONString())

        }else{
          ctx.response()
            .setStatusCode(500)
            .write(JSON.stringify('{"message":"an error occurred. "}'))
            .end()
        }
      })

    })
    .failureHandler( ctx=>{

      ctx.failure()?.printStackTrace()

      ctx.response()
        .setStatusCode(500)
        .end("Error in Get Currency Rates");
    });



}

